/**
 * Generative ambient soundtrack built with the Web Audio API.
 * No audio file: slow minor-key pads drift through a filtered, reverberant chord cycle.
 * If profile.musicUrl is set, SoundContext plays that file instead of this engine.
 */

type Ctx = AudioContext;

const CHORDS: number[][] = [
  // Frequencies in Hz. D minor territory, voiced low and wide.
  [73.42, 110.0, 146.83, 174.61, 220.0], // Dm
  [58.27, 87.31, 116.54, 174.61, 220.0], // Bbmaj7
  [87.31, 130.81, 174.61, 220.0, 261.63], // F
  [65.41, 98.0, 130.81, 196.0, 246.94], // Cmaj7
];

const CHORD_SECONDS = 14;
const CROSSFADE = 6;

function impulse(ctx: Ctx, seconds: number, decay: number): AudioBuffer {
  const rate = ctx.sampleRate;
  const length = Math.floor(rate * seconds);
  const buffer = ctx.createBuffer(2, length, rate);
  for (let c = 0; c < 2; c++) {
    const data = buffer.getChannelData(c);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
    }
  }
  return buffer;
}

export class AmbientEngine {
  private ctx: Ctx | null = null;
  private master: GainNode | null = null;
  private timer: number | null = null;
  private chordIndex = 0;
  private running = false;

  get isRunning() {
    return this.running;
  }

  async start() {
    if (this.running) return;
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    this.ctx = this.ctx ?? new AC();
    const ctx = this.ctx;
    if (ctx.state === 'suspended') await ctx.resume();

    this.master = ctx.createGain();
    this.master.gain.setValueAtTime(0.0001, ctx.currentTime);
    this.master.gain.exponentialRampToValueAtTime(0.16, ctx.currentTime + 4);

    // Soft reverb + gentle low-pass "room" on the master bus.
    const reverb = ctx.createConvolver();
    reverb.buffer = impulse(ctx, 5, 3);
    const reverbGain = ctx.createGain();
    reverbGain.gain.value = 0.55;
    const tone = ctx.createBiquadFilter();
    tone.type = 'lowpass';
    tone.frequency.value = 2200;

    this.master.connect(tone);
    tone.connect(ctx.destination);
    tone.connect(reverb);
    reverb.connect(reverbGain);
    reverbGain.connect(ctx.destination);

    // Faint filtered noise bed, like distant air.
    const noise = ctx.createBufferSource();
    noise.buffer = impulse(ctx, 4, 0);
    noise.loop = true;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 400;
    noiseFilter.Q.value = 0.6;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.015;
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.master);
    noise.start();

    this.running = true;
    this.playChord();
    this.timer = window.setInterval(() => this.playChord(), CHORD_SECONDS * 1000);
  }

  private playChord() {
    const ctx = this.ctx;
    const master = this.master;
    if (!ctx || !master) return;
    const chord = CHORDS[this.chordIndex % CHORDS.length];
    this.chordIndex += 1;
    const now = ctx.currentTime;
    const end = now + CHORD_SECONDS + CROSSFADE;

    const chordGain = ctx.createGain();
    chordGain.gain.setValueAtTime(0.0001, now);
    chordGain.gain.exponentialRampToValueAtTime(1, now + CROSSFADE);
    chordGain.gain.setValueAtTime(1, end - CROSSFADE);
    chordGain.gain.exponentialRampToValueAtTime(0.0001, end);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.Q.value = 0.8;
    filter.frequency.setValueAtTime(320, now);
    filter.frequency.linearRampToValueAtTime(900, now + CHORD_SECONDS / 2);
    filter.frequency.linearRampToValueAtTime(380, end);

    chordGain.connect(filter);
    filter.connect(master);

    chord.forEach((freq, i) => {
      // Two slightly detuned voices per note for width.
      for (const detune of [-6, 7]) {
        const osc = ctx.createOscillator();
        osc.type = i < 2 ? 'triangle' : 'sawtooth';
        osc.frequency.value = freq;
        osc.detune.value = detune;
        const voice = ctx.createGain();
        voice.gain.value = i < 2 ? 0.09 : 0.045;
        osc.connect(voice);
        voice.connect(chordGain);
        osc.start(now);
        osc.stop(end + 0.1);
      }
    });
  }

  async stop() {
    if (!this.running || !this.ctx || !this.master) return;
    const ctx = this.ctx;
    const master = this.master;
    this.running = false;
    if (this.timer) window.clearInterval(this.timer);
    this.timer = null;
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
    master.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.5);
    window.setTimeout(() => master.disconnect(), 1700);
    await ctx.suspend();
  }
}
