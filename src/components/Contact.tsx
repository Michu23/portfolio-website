import { useState, type FormEvent } from 'react';
import { profile } from '../data/profile';
import { ArrowUpRight, Globe, Linkedin, Mail, Pin, Play, Plus } from './Icons';
import Reveal from './Reveal';
import Parallax from './Parallax';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: 'Automation & integrations', message: '' });

  const update = (field: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${form.type}: project brief from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact section-wrap" aria-labelledby="contact-title">
      <div className="contact-grid">
        <Reveal className="contact-intro">
          <span className="eyebrow">04 / Your next system</span>
          <h2 id="contact-title" className="display">
            Let’s build
            <br />
            together<span className="accent">.</span>
          </h2>
          <p>
            Have a workflow to automate, an integration to ship, or a team that needs a forward deployed engineer?
            Let’s make something that runs itself.
          </p>
          <a className="contact-cta" href={`mailto:${profile.email}`}>
            <span className="round-arrow">
              <ArrowUpRight width={14} height={14} />
            </span>
            Start a conversation
          </a>
        </Reveal>

        <Reveal className="contact-links" delay={0.1}>
          <a href={`mailto:${profile.email}`}>
            <Mail />
            <span>
              <small>Email</small>
              {profile.email}
            </span>
            <ArrowUpRight />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin />
            <span>
              <small>LinkedIn</small>
              {profile.linkedinLabel}
            </span>
            <ArrowUpRight />
          </a>
          <a href={profile.companyUrl} target="_blank" rel="noopener noreferrer">
            <Globe />
            <span>
              <small>Company</small>
              azolute.one
            </span>
            <ArrowUpRight />
          </a>
          <div>
            <Pin />
            <span>
              <small>Based in</small>
              {profile.location} · Open to remote worldwide and on-site in Germany
            </span>
          </div>
        </Reveal>

        <Reveal className="contact-reel" delay={0.2}>
          <Parallax speed={-0.3}>
          <a href={profile.flagship.url} target="_blank" rel="noopener noreferrer" aria-label="Visit ClashCWL">
            <span className="reel-screen">
              <span className="reel-screen-top">
                <span>Miras.</span>
                <span>Flagship / ClashCWL</span>
              </span>
              <span className="reel-mark display" aria-hidden>
                M.
              </span>
              <span className="reel-screen-title display">
                Make it
                <span>run itself.</span>
              </span>
              <span className="play-circle">
                <Play width={14} height={14} />
              </span>
            </span>
            <span className="reel-caption">Press play. See it in production.</span>
          </a>
          </Parallax>
        </Reveal>
      </div>

      <details className="project-brief">
        <summary>
          Tell me about your project
          <Plus style={{ transition: 'transform .3s' }} />
        </summary>
        <form onSubmit={submit}>
          <label>
            Name
            <input type="text" value={form.name} onChange={update('name')} placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" value={form.email} onChange={update('email')} placeholder="you@company.com" required />
          </label>
          <label>
            Type of work
            <select value={form.type} onChange={update('type')}>
              <option>Automation &amp; integrations</option>
              <option>Full-stack product</option>
              <option>AI agents &amp; tooling</option>
              <option>Forward deployed role</option>
              <option>Something else</option>
            </select>
          </label>
          <label className="brief-message">
            Message
            <textarea
              rows={4}
              value={form.message}
              onChange={update('message')}
              placeholder="What does the business do, and where does the manual work hide?"
              required
            />
          </label>
          <button type="submit" className="solid-button">
            Send brief
            <ArrowUpRight width={16} height={16} />
          </button>
          <span className="form-note">Opens your email client with the brief prefilled.</span>
        </form>
      </details>
    </section>
  );
}
