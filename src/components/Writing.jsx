import { articles } from '../data/portfolio.js';
import { SectionHead } from './ui.jsx';

export default function Writing() {
  return (
    <section id="writing">
      <div className="wrap">
        <SectionHead
          as="h1"
          title="Technical Writing"
          note="Articles I am writing about decisions made in these projects. Each title links once it is published."
          noteWidth="46ch"
        />
        <ul className="posts">
          {articles.map((a) => (
            <li key={a.title}>
              {a.url ? (
                <a href={a.url} target="_blank" rel="noopener noreferrer"><span>{a.title}</span></a>
              ) : (
                <span>{a.title}</span>
              )}
              {a.url ? <em className="published">Read</em> : <em>Planned</em>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
