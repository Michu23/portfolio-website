import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface MotionContextType {
  motion: boolean;
  toggleMotion: () => void;
}

const MotionContext = createContext<MotionContextType | undefined>(undefined);

// Motion is on by default. Visitors can switch it off with the header toggle; the choice is remembered.
const readInitial = (): boolean => {
  try {
    return localStorage.getItem('motion') !== 'off';
  } catch {
    return true;
  }
};

export function MotionProvider({ children }: { children: ReactNode }) {
  const [motion, setMotion] = useState<boolean>(readInitial);

  useEffect(() => {
    document.documentElement.dataset.motion = motion ? 'on' : 'off';
    try {
      localStorage.setItem('motion', motion ? 'on' : 'off');
    } catch {
      /* storage unavailable */
    }
  }, [motion]);

  const toggleMotion = () => setMotion((m) => !m);

  return <MotionContext.Provider value={{ motion, toggleMotion }}>{children}</MotionContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMotion() {
  const ctx = useContext(MotionContext);
  if (!ctx) throw new Error('useMotion must be used within MotionProvider');
  return ctx;
}
