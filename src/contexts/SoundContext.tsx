import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { AmbientEngine } from '../audio/ambient';
import { profile } from '../data/profile';

interface SoundContextType {
  sound: boolean;
  playing: boolean;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

const readInitial = (): boolean => {
  try {
    return localStorage.getItem('sound') !== 'off';
  } catch {
    return true;
  }
};

const GESTURES: Array<keyof WindowEventMap> = ['pointerdown', 'keydown', 'touchstart', 'wheel'];

/**
 * Background music. Browsers only allow audio after a user gesture, so playback
 * starts on the visitor's first click, tap, key press or scroll, unless they switched sound off.
 */
export function SoundProvider({ children }: { children: ReactNode }) {
  const [sound, setSound] = useState<boolean>(readInitial);
  const [playing, setPlaying] = useState(false);
  const engine = useRef<AmbientEngine | null>(null);
  const audio = useRef<HTMLAudioElement | null>(null);

  const play = useCallback(async () => {
    try {
      if (profile.musicUrl) {
        if (!audio.current) {
          audio.current = new Audio(profile.musicUrl);
          audio.current.loop = true;
          audio.current.volume = 0.35;
        }
        await audio.current.play();
      } else {
        engine.current = engine.current ?? new AmbientEngine();
        await engine.current.start();
      }
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }, []);

  const pause = useCallback(async () => {
    if (audio.current) audio.current.pause();
    if (engine.current?.isRunning) await engine.current.stop();
    setPlaying(false);
  }, []);

  // Persist the preference and, while sound is on but not yet playing, wait for the first gesture.
  useEffect(() => {
    try {
      localStorage.setItem('sound', sound ? 'on' : 'off');
    } catch {
      /* storage unavailable */
    }
    if (!sound || playing) return;
    const onGesture = () => {
      GESTURES.forEach((e) => window.removeEventListener(e, onGesture));
      void play();
    };
    GESTURES.forEach((e) => window.addEventListener(e, onGesture, { passive: true }));
    return () => GESTURES.forEach((e) => window.removeEventListener(e, onGesture));
  }, [sound, playing, play]);

  // Pause in background tabs, resume when the visitor comes back.
  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) void pause();
      else if (sound) void play();
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [sound, play, pause]);

  const toggleSound = () => {
    const next = !sound;
    setSound(next);
    if (next) void play();
    else void pause();
  };

  return <SoundContext.Provider value={{ sound, playing, toggleSound }}>{children}</SoundContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error('useSound must be used within SoundProvider');
  return ctx;
}
