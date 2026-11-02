import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/profile';
import { ArrowDown, Download, Pin, Play } from './Icons';

const stats = [
  { value: '4', unit: '+', label: 'Years in\nsoftware' },
  { value: '18', unit: '+', label: 'Websites, apps\nand products' },
  { value: '500', unit: '+', label: 'Automated tests\non ClashCWL' },
];

export default function Hero() {
  const [portraitOk, setPortraitOk] = useState(true);
  const { scrollY } = useScroll();
  const titleScale = useTransform(scrollY, [0, 700], [1, 1.1]);
  const titleY = useTransform(scrollY, [0, 700], [0, -140]);
  const titleOpacity = useTransform(scrollY, [0, 600], [1, 0.25]);
  const portraitY = useTransform(scrollY, [0, 700], [0, 110]);
  const introY = useTransform(scrollY, [0, 700], [0, 50]);
  const sideY = useTransform(scrollY, [0, 700], [0, 30]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero-top">
        <span>
          Forward deployed engineer
          <span className="muted">Co-founder, Azolute AI</span>
        </span>
        <span className="availability">
          <i aria-hidden />
          Open to remote &amp; on-site in Germany
        </span>
      </div>

      <motion.div className="hero-title display" style={{ scale: titleScale, y: titleY, opacity: titleOpacity }} aria-hidden>
        PORTFOLIO
      </motion.div>

      {portraitOk && (
        <motion.div className="hero-portrait" style={{ y: portraitY }}>
          <img
            src={profile.portraitUrl}
            alt=""
            fetchPriority="high"
            onError={() => setPortraitOk(false)}
          />
        </motion.div>
      )}

      <motion.div className="hero-intro" style={{ y: introY }}>
        <motion.p className="handwriting" {...fadeUp(0.1)}>
          Hello, I’m
        </motion.p>
        <motion.h1 className="display" {...fadeUp(0.2)}>
          MIRAS<span>.</span>
        </motion.h1>
        <motion.p className="hero-role" {...fadeUp(0.3)}>
          Forward deployed &amp;
          <br />
          full-stack engineer
        </motion.p>
        <motion.p className="hero-description" {...fadeUp(0.4)}>
          I embed with clients, learn how their business works, then build, ship and maintain the workflows,
          integrations and automation they can run themselves.
        </motion.p>
        <motion.div {...fadeUp(0.5)}>
          <a className="primary-link" href="#work">
            See my work
            <ArrowDown width={16} height={16} />
          </a>
        </motion.div>
        <motion.span className="hero-location" {...fadeUp(0.6)}>
          <Pin width={13} height={13} />
          {profile.location}
        </motion.span>
      </motion.div>

      <motion.div className="hero-side" style={{ y: sideY }} {...fadeUp(0.5)}>
        <div className="hero-manifesto">
          <span className="crosshair" aria-hidden>
            ✳
          </span>
          <p>
            Every deployment.
            <br />
            Faster than the last.
          </p>
        </div>
        <div className="hero-stats">
          {stats.map((s) => (
            <div key={s.label}>
              <span className="display">
                {s.value}
                <span>{s.unit}</span>
              </span>
              <p>
                {s.label.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
          <a href={profile.resumeUrl} download="Miras_Mujeeb_Resume.pdf">
            <Download width={16} height={16} />
            <span>Download CV</span>
          </a>
        </div>
      </motion.div>

      <div className="hero-bottom">
        <a className="reel-button" href={profile.flagship.url} target="_blank" rel="noopener noreferrer">
          <span className="play-circle">
            <Play width={12} height={12} />
          </span>
          Visit ClashCWL
          <span className="muted">Flagship product</span>
        </a>
        <span className="hero-scroll">
          Scroll to discover
          <ArrowDown width={14} height={14} />
        </span>
        <span className="edition">Selected work / 2022–2026</span>
      </div>
    </section>
  );
}
