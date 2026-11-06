import { systemDesign } from '../data/portfolio.js';
import { SectionHead } from './ui.jsx';

export default function SystemDesign() {
  return (
    <section id="system-design">
      <div className="wrap">
        <SectionHead
          as="h1"
          title="System Design"
          note="The system design concepts I know, from high-level design down to storage, networking and reliability."
          noteWidth="46ch"
        />
        <div className="sd">
          {systemDesign.map((group) => (
            <article key={group.title} className={[group.highlight && 'principles', group.wide && 'wide'].filter(Boolean).join(' ') || undefined}>
              <h3>{group.title}</h3>
              <ul>{group.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
