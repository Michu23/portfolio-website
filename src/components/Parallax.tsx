import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMotion } from '../contexts/MotionContext';

interface ParallaxProps {
  children: ReactNode;
  /** Positive values move slower than the page (drift down), negative move faster (drift up). */
  speed?: number;
  className?: string;
}

/** Wraps content in a scroll-linked vertical drift. Does nothing when motion is off. */
export default function Parallax({ children, speed = 0.2, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { motion: motionOn } = useMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 140, speed * -140]);

  return (
    <motion.div ref={ref} className={className} style={motionOn ? { y } : undefined}>
      {children}
    </motion.div>
  );
}
