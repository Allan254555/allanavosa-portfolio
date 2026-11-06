import { profile } from '../data/portfolio.js';
import { ArrowIcon, Chips } from './ui.jsx';

export default function Hero() {
  return (
    <div className="hero" id="home">
      <div className="wrap">
        <div className="name">{profile.name.toUpperCase()}</div>
        <h1 className="display">
          {profile.title.map((line) => <span key={line}>{line}</span>)}
        </h1>
        <p className="sub">{profile.intro}</p>
        <Chips items={profile.focus} />
        <div className="cta">
          <a className="btn" href="/projects/">View projects <ArrowIcon /></a>
          <a className="btn ghost" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {profile.resume && (
            <a className="btn ghost" href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a>
          )}
        </div>
      </div>
    </div>
  );
}
