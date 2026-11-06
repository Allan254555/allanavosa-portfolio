import portrait from '../assets/images/allan-avosa.jpg';
import { about, profile } from '../data/portfolio.js';
import { Dash } from './ui.jsx';
import { contactLinks, linkProps } from './ContactLinks.jsx';

export default function About() {
  return (
    <section id="about">
      <div className="wrap about">
        <figure className="portrait" style={{ margin: 0 }}>
          <img className="notch" src={portrait} alt={`Portrait of ${profile.name}`} />
          <div className="tag"><b>{profile.name}</b><span>{profile.degree}</span></div>
        </figure>
        <div className="about-text">
          <Dash />
          <h2 className="display">About Me</h2>
          <p className="lead">{about.lead}</p>
          {about.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          <ul className="interests">
            {about.interests.map((i) => <li key={i}>{i}</li>)}
          </ul>
          <dl className="about-contact">
            {contactLinks().map((l) => (
              <div key={l.k}><dt>{l.k}</dt><dd><a {...linkProps(l.href)}>{l.label}</a></dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
