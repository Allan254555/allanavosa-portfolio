import { education, openTo } from '../data/portfolio.js';
import { Chips } from './ui.jsx';

export default function Education() {
  return (
    <section id="education">
      <div className="wrap duo">
        <article>
          <span className="eyebrow">Education</span>
          <h3 className="card-title">{education.degree}</h3>
          <p className="muted">{education.school}</p>
          <Chips items={education.topics} className="tagcloud" />
        </article>
        <article>
          <span className="eyebrow">Open to</span>
          <h3 className="card-title">Opportunities &amp; collaborations</h3>
          <p className="muted">Engineering roles and technical projects in:</p>
          <Chips items={openTo} className="tagcloud" />
        </article>
      </div>
    </section>
  );
}
