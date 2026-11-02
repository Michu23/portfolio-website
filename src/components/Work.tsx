import { useState } from 'react';
import ProjectImage from './ProjectImage';
import { profile, projects, type ProjectCategory } from '../data/profile';
import { ArrowRight, ArrowUpRight } from './Icons';
import Reveal from './Reveal';

const filters: Array<'All' | ProjectCategory> = ['All', 'Products', 'Client Work', 'AI & Automation', 'Frontend'];

const partners = [
  { name: 'Azolute AI', role: 'Co-founder · 2025–now' },
  { name: 'ClashCWL', role: 'Founder · 2026–now' },
  { name: 'Dview', role: 'Founding team · 2023–25' },
  { name: 'Brototype', role: 'Reviewer · 2023–now' },
  { name: 'Fabits', role: 'UI/UX · 2022–23' },
  { name: 'Bask', role: 'Full stack · 2022' },
];

export default function Work() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="section-wrap" aria-labelledby="work-title">
      <Reveal>
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / Selected work</span>
            <h2 id="work-title">
              Systems that ship<span className="accent">.</span>
            </h2>
          </div>
          <a className="text-link" href={profile.flagship.url} target="_blank" rel="noopener noreferrer">
            Flagship product
            <ArrowRight />
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="portfolio-toolbar">
          <div className="filters" role="tablist" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                className={filter === f ? 'selected' : undefined}
                onClick={() => setFilter(f)}
              >
                {f}
                {filter === f && <span className="filter-line" aria-hidden />}
              </button>
            ))}
          </div>
          <span className="toolbar-count">
            {visible.length} / {projects.length} projects
          </span>
        </div>
      </Reveal>

      {visible.length === 0 ? (
        <div className="empty-state">
          <p>Nothing here yet.</p>
        </div>
      ) : (
        <div className="project-grid">
          {visible.map((project, i) => {
            const index = String(projects.indexOf(project) + 1).padStart(2, '0');
            const Open = project.link ? 'a' : 'div';
            const openProps = project.link
              ? { href: project.link, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `Open ${project.title}` }
              : {};
            return (
              <Reveal key={project.title} as="article" className="project-card" delay={(i % 3) * 0.08}>
                <Open className="project-open" {...openProps}>
                  <div className="project-picture">
                    <ProjectImage src={project.image} alt={`${project.title} screenshot`} stack={project.stack} />
                  </div>
                  <span className="project-type">{project.type}</span>
                  {project.link && (
                    <span className="project-hover" aria-hidden>
                      <ArrowUpRight />
                    </span>
                  )}
                  <span className="project-frame" aria-hidden />
                </Open>
                <div className="project-caption">
                  <span className="project-number display">{index}</span>
                  <span>
                    <h3>{project.title}</h3>
                    <span className="project-category">
                      {project.category} / {project.year}
                    </span>
                  </span>
                  {project.link && <ArrowUpRight />}
                </div>
                <p className="project-desc">{project.description}</p>
              </Reveal>
            );
          })}
        </div>
      )}

      <Reveal>
        <div className="brand-section">
          <div className="brand-heading">
            <p>
              Been part of
              <strong>the bigger picture.</strong>
            </p>
            <span>Teams and products / 2022–2026</span>
          </div>
          <div className="brand-rail">
            {partners.map((p) => (
              <div className="brand-logo" key={p.name}>
                <strong>{p.name}</strong>
                <span>{p.role}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
