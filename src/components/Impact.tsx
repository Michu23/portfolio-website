import { impact, profile } from '../data/profile';
import { ArrowUpRight, Laurel } from './Icons';
import Reveal from './Reveal';
import Parallax from './Parallax';

export default function Impact() {
  return (
    <section id="impact" className="recognition section-wrap" aria-labelledby="impact-title">
      <Reveal className="recognition-intro">
        <span className="eyebrow">Impact &amp; numbers</span>
        <h2 id="impact-title" className="display">
          The work.
          <span className="accent">The results.</span>
        </h2>
        <Parallax speed={0.35}>
          <div className="award-total" aria-label="500 plus automated tests">
            <Laurel />
            <span className="display">
              500<span>+</span>
            </span>
            <Laurel style={{ transform: 'scaleX(-1)' }} />
            <span className="award-total-label">Automated tests</span>
          </div>
        </Parallax>
        <p>
          Numbers from production, not a pitch deck.
          <br />
          Built solo, shipped to paying users.
        </p>
        <a className="text-link award-proof" href={profile.flagship.url} target="_blank" rel="noopener noreferrer">
          See it live
          <ArrowUpRight />
        </a>
      </Reveal>

      <Reveal className="recognition-list" delay={0.1}>
        <div className="recognition-list-head">
          <span>Selected metrics</span>
          <span>2023 – 2026</span>
        </div>
        <ol>
          {impact.map((item, i) => (
            <li className="recognition-row" key={item.title}>
              <span className="award-index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.sub}</p>
              </div>
              <span className="award-year display">
                {item.value}
                <small>{item.unit}</small>
              </span>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
