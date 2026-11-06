import { disciplines } from '../data/portfolio.js';
import { SectionHead } from './ui.jsx';

const icons = {
  server: (
    <><rect x="6" y="6" width="28" height="9" rx="1.5" /><rect x="6" y="25" width="28" height="9" rx="1.5" /><path d="M11 10.5h2M11 29.5h2M20 15v10" /></>
  ),
  database: (
    <><ellipse cx="20" cy="9" rx="12" ry="4" /><path d="M8 9v22c0 2.2 5.4 4 12 4s12-1.8 12-4V9M8 20c0 2.2 5.4 4 12 4s12-1.8 12-4" /></>
  ),
  chart: (
    <><path d="M6 34h28M6 34V6" /><path d="M10 28l7-9 6 5 9-13" /><circle cx="32" cy="11" r="2" /></>
  ),
  ai: (
    <><path d="M6 10h20a4 4 0 014 4v8a4 4 0 01-4 4H16l-6 5v-5H6z" /><path d="M12 16h12M12 21h7" /><path d="M33 6l1.2 2.8L37 10l-2.8 1.2L33 14l-1.2-2.8L29 10l2.8-1.2z" /></>
  ),
};

export default function Disciplines() {
  return (
    <section id="engineering">
      <div className="wrap">
        <SectionHead title="What I Build" note="The four areas I work in, and the tools I use for each." noteWidth="42ch" />
        <div className="disc">
          {disciplines.map((d) => (
            <article key={d.title}>
              <svg className="icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                {icons[d.icon]}
              </svg>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
              <div className="stack">{d.stack}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
