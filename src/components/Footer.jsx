import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© {new Date().getFullYear()} {profile.name} · Software Systems Engineer</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}
