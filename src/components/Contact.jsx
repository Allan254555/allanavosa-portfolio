import { profile } from '../data/portfolio.js';
import { ArrowIcon, Dash } from './ui.jsx';
import { contactLinks, linkProps } from './ContactLinks.jsx';

function LinkRow({ k, href, label }) {
  return (
    <a {...linkProps(href)}>
      <span className="k">{k}</span>
      <span className="v">{label}</span>
      <span className="arrow"><ArrowIcon size={20} /></span>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap contact-grid">
        <div className="contact-intro">
          <Dash />
          <h2 className="display">Contact</h2>
          <p className="lead">
            I'm looking for engineering roles and project collaborations in backend, data engineering and applied AI. My code is on GitHub.
          </p>
        </div>
        <div className="contact-list">
          {contactLinks().map((l) => <LinkRow key={l.k} {...l} />)}
          <div><span className="k">Location</span><span className="v">{profile.location}</span></div>
          <div><span className="k">Focus</span><span className="v">Backend · Data · AI Systems</span></div>
        </div>
      </div>
    </section>
  );
}
