import { demandForecasting, dispense, identityManagement, recommendationService, smartSales, statsspeak } from '../data/portfolio.js';
import { ArrowIcon, SectionHead } from './ui.jsx';

// Home page teaser: each card opens that project on the Projects page,
// unless the project sets its own `href`.
const projects = [dispense, smartSales, identityManagement, recommendationService, demandForecasting, statsspeak];

export default function ProjectCards() {
  return (
    <section id="projects-preview">
      <div className="wrap">
        <SectionHead title="Projects" note="Click a project to read the full case study." noteWidth="36ch" />
        <div className="project-cards">
          {projects.map((p) => (
            <a key={p.id} className="project-card" href={p.href ?? `/projects/#${p.id}`}>
              <span className="p-num">{p.label}</span>
              <h3 className="card-title">{p.name}</h3>
              <p>{p.summary}</p>
              <div className="pills">{p.tech.slice(0, 5).map((t) => <span className="pill" key={t}>{t}</span>)}</div>
              <span className="more">{p.more ?? 'Read the case study'} <ArrowIcon /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
