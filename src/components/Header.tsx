import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useSound } from '../contexts/SoundContext';
import { profile } from '../data/profile';
import { ArrowUpRight, Close, Menu, SoundIcon } from './Icons';

const navLinks = [
  { name: 'Work', href: '#work', id: 'work' },
  { name: 'Impact', href: '#impact', id: 'impact' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Journey', href: '#journey', id: 'journey' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Header() {
  const { sound, playing, toggleSound } = useSound();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#work">
        Skip to work
      </a>
      <motion.div className="reading-progress" style={{ scaleX: progress }} aria-hidden />
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={`${profile.name}, home`}>
          MIRAS<span>.</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href} className={active === link.id ? 'active' : undefined}>
              {link.name}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className={`motion-toggle sound-toggle${playing ? ' is-playing' : ''}`}
            onClick={toggleSound}
            aria-pressed={sound}
            title="Toggle background music"
          >
            <SoundIcon on={sound} />
            <span>{sound ? 'Sound on' : 'Sound off'}</span>
          </button>
          <a className="header-contact" href={`mailto:${profile.email}`}>
            Let’s talk
            <ArrowUpRight width={16} height={16} />
          </a>
          <button
            type="button"
            className="menu-toggle icon-button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>

        {open && (
          <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile">
            {navLinks.map((link, i) => (
              <a key={link.id} href={link.href} onClick={() => setOpen(false)}>
                <span>0{i + 1}</span>
                {link.name}
                <ArrowUpRight />
              </a>
            ))}
            <a href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
              <span>06</span>
              Let’s talk
              <ArrowUpRight />
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
