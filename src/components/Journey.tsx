import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { jobs, milestones, profile } from '../data/profile';
import { ArrowUpRight, Download, Minus, Plus } from './Icons';
import Reveal from './Reveal';
import Parallax from './Parallax';

export default function Journey() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="journey" className="journey section-wrap" aria-labelledby="journey-title">
      <Reveal>
        <div className="section-heading">
          <div>
            <span className="eyebrow">03 / The journey</span>
            <h2 id="journey-title">
              Keep moving. Keep shipping<span className="accent">.</span>
            </h2>
          </div>
          <a className="text-link" href={profile.resumeUrl} download="Miras_Mujeeb_Resume.pdf">
            Resume
            <Download />
          </a>
        </div>
      </Reveal>

      <div className="journey-grid">
        <Reveal className="experience-list">
          {jobs.map((job, i) => {
            const isOpen = openIndex === i;
            const panelId = `job-${i}`;
            return (
              <div className={`experience-row${isOpen ? ' is-open' : ''}`} key={job.title}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="experience-date">{job.period}</span>
                  <span>
                    <h3>{job.title}</h3>
                    <span className="experience-place">{job.place}</span>
                  </span>
                  {isOpen ? <Minus /> : <Plus />}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="experience-body">
                        <p>{job.summary}</p>
                        {job.bullets.length > 0 && (
                          <ul>
                            {job.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>

        <Reveal className="awards-panel" delay={0.1}>
          <p className="eyebrow">A few milestones</p>
          <Parallax speed={0.3}>
            <h3 className="display">
              Small steps.
              <span className="accent">Big shifts.</span>
            </h3>
          </Parallax>
          <div className="award-list">
            {milestones.map((m, i) => {
              const Row = m.link ? 'a' : 'div';
              const props = m.link ? { href: m.link, target: '_blank', rel: 'noopener noreferrer' } : {};
              return (
                <Row key={m.title} {...props}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    {m.title}
                    <small>{m.year}</small>
                  </span>
                  {m.link && <ArrowUpRight />}
                </Row>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
