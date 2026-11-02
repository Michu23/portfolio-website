import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { process, profile, skillGroups } from '../data/profile';
import Reveal from './Reveal';
import Parallax from './Parallax';

export default function About() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 80%', 'end 60%'] });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="about" className="about section-wrap" aria-labelledby="about-title">
      <Reveal>
        <div className="about-lead">
          <div>
            <span className="eyebrow">02 / Behind the code</span>
            <h2 id="about-title" className="display">
              Not just code.
              <br />
              A system that <span className="accent">runs itself.</span>
            </h2>
          </div>
          <p>
            I’m {profile.firstName}, a forward deployed software engineer from {profile.location}. I think like an
            engineer and a product manager: learn how a business works first, then build the workflows,
            integrations and automation that let it run and grow with minimal people and spend.
          </p>
        </div>
      </Reveal>

      <div className="studio-grid">
        <Reveal className="education-panel">
          <h3 className="panel-heading">Education &amp; skills</h3>
          <p className="eyebrow accent">Education</p>
          <div className="education-row">
            <strong>BSc Computer Science</strong>
            <span>2017 – 2020</span>
            <p>University of Calicut.</p>
          </div>
          <div className="education-row">
            <strong>Full Stack Bootcamp</strong>
            <span>2021 – 2022</span>
            <p>Brototype, Kochi. 10 months of Python, Django, REST APIs, React, SQL, DSA and cloud deployment.</p>
          </div>
          <div className="education-row">
            <strong>Languages</strong>
            <p>{profile.languages.join(' · ')}</p>
          </div>
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="eyebrow accent skills-heading">{group.label}</p>
              <div className="skill-tags">
                {group.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="process-panel" delay={0.1}>
          <div>
            <h3 className="panel-heading">From first call to production</h3>
          </div>
          <div className="process-list" ref={trackRef}>
            <div className="process-track" aria-hidden>
              <motion.div style={{ scaleY: fill }} />
            </div>
            {process.map((step, i) => (
              <div className="process-row" key={step.title}>
                <span className="process-num display">{String(i + 1).padStart(2, '0')}</span>
                <span className="process-node" aria-hidden />
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="quote-panel" delay={0.2}>
          <span className="quote-mark display" aria-hidden>
            “
          </span>
          <Parallax speed={0.25}>
          <blockquote>
            From client discovery
            <br />
            and scoping,
            <br />
            <em>
              to a system they
              <br />
              can run themselves.
            </em>
          </blockquote>
          <span className="handwriting">{profile.firstName}</span>
          </Parallax>
          <div className="quote-bottom">
            <span>
              Let’s remove
              <br />
              the manual work.
            </span>
            <span className="quote-symbol" aria-hidden>
              ✳
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
