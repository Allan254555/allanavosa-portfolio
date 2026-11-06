import { skills } from '../data/portfolio.js';
import { SectionHead } from './ui.jsx';

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHead title="Technical Skills" note="A mix of hands-on project use, practical exposure and ongoing learning." />
        <div className="table-scroll">
          <table className="skills">
            <tbody>
              {skills.map(([area, tools]) => (
                <tr key={area}><th>{area}</th><td>{tools}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
