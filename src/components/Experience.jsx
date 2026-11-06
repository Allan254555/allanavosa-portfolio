import photo from '../assets/images/experience.jpg';
import { experience } from '../data/portfolio.js';
import { Areas, Dash, Pills } from './ui.jsx';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap exp">
        <div className="exp-img">
          <img className="notch-l" src={photo} alt="Hands typing on a laptop showing code" />
        </div>
        <div className="exp-card">
          <Dash />
          <h1 className="display">Experience</h1>
          {experience.map((job) => (
            <div className="exp-item" key={job.role + job.company}>
              <div>
                <h3 className="exp-role">{job.role}</h3>
                <p className="muted">{job.company}</p>
              </div>
              <span className="when">{job.period}</span>
              <p className="exp-text">{job.text}</p>
              <p className="exp-text">{job.work}</p>
              <span className="eyebrow">How the data moved</span>
              <div className="pipe" style={{ '--cols': job.flow.length }}>
                {job.flow.map((s) => (
                  <div key={s.n}><span className="n">{s.n}</span><b>{s.title}</b><span>{s.text}</span></div>
                ))}
              </div>
              <span className="eyebrow">What I did</span>
              <Areas areas={job.areas} />
              <span className="eyebrow">What it gave me</span>
              <p className="exp-text">{job.development}</p>
              <Pills items={job.tools} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
