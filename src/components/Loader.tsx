import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const MIN_MS = 1500;
const MAX_MS = 3500;

/** Cinematic preloader: wordmark, counter and a red progress line, then the curtain lifts. */
export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const minMs = MIN_MS;
    let ready = false;
    let raf = 0;

    const readyPromise = Promise.race([
      Promise.all([
        document.fonts ? document.fonts.ready : Promise.resolve(),
        new Promise<void>((resolve) => {
          if (document.readyState === 'complete') resolve();
          else window.addEventListener('load', () => resolve(), { once: true });
        }),
      ]),
      new Promise<void>((resolve) => setTimeout(resolve, MAX_MS)),
    ]);
    void readyPromise.then(() => {
      ready = true;
    });

    const tick = (now: number) => {
      const elapsed = now - start;
      // Ease toward 90% on a timer, then jump to 100 once assets are ready and the minimum has elapsed.
      const timed = Math.min(90, (elapsed / minMs) * 90);
      const finished = ready && elapsed >= minMs;
      setProgress(finished ? 100 : Math.floor(timed));
      if (finished) {
        setTimeout(() => setDone(true), 350);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('is-loading', !done);
    return () => document.documentElement.classList.remove('is-loading');
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader"
          role="status"
          aria-live="polite"
          aria-label="Loading"
          initial={false}
          exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="loader-top">
            <span className="wordmark">
              MIRAS<span>.</span>
            </span>
            <span>Forward deployed engineer</span>
          </div>
          <div className="loader-middle">
            <span className="loader-count display">
              {String(progress).padStart(3, '0')}
              <span>%</span>
            </span>
            <span className="loader-tagline">Every deployment ships faster than the last.</span>
          </div>
          <div className="loader-bottom">
            <div className="loader-bar" aria-hidden>
              <div style={{ transform: `scaleX(${progress / 100})` }} />
            </div>
            <div className="loader-meta">
              <span>Portfolio / 2026</span>
              <span>{progress < 100 ? 'Loading' : 'Ready'}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
