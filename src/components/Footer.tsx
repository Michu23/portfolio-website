import { profile } from '../data/profile';
import { ArrowUpRight, Linkedin, Mail } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <a className="wordmark" href="#home" aria-label="Back to top">
        MIRAS<span>.</span>
      </a>
      <span>
        © {year} {profile.name}. Every deployment ships faster than the last.
      </span>
      <div>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <Mail />
        </a>
        <a href={profile.companyUrl} target="_blank" rel="noopener noreferrer" aria-label="Azolute AI">
          <ArrowUpRight />
        </a>
      </div>
    </footer>
  );
}
