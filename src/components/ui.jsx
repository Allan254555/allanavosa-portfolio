// Small building blocks shared by several sections.

export function Dash() {
  return <span className="dash" />;
}

export function SectionHead({ title, note, noteWidth = '44ch', as: Heading = 'h2' }) {
  return (
    <div className="sec-head">
      <Dash />
      <div className="row">
        <Heading className="display">{title}</Heading>
        {note && <p className="muted" style={{ maxWidth: noteWidth }}>{note}</p>}
      </div>
    </div>
  );
}

export function ArrowIcon({ size = 18 }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 6h17M13 1l5 5-5 5" />
    </svg>
  );
}

export function Pills({ items }) {
  return (
    <div className="pills">
      {items.map((t) => <span className="pill" key={t}>{t}</span>)}
    </div>
  );
}

export function Chips({ items, className = 'chips' }) {
  return (
    <div className={className}>
      {items.map((t) => <span className="chip" key={t}>{t}</span>)}
    </div>
  );
}

export function Areas({ areas }) {
  return (
    <div className="areas">
      {areas.map((a) => (
        <div key={a.title} className={a.wide ? 'wide' : undefined}>
          <h4>{a.title}</h4>
          <ul>{a.items.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}

export function Status({ children }) {
  return <p className="status"><b>Status</b>{children}</p>;
}

export function Facts({ facts }) {
  return (
    <dl className="facts">
      {facts.map((f) => (
        <div key={f.k}><dt>{f.k}</dt><dd>{f.v}</dd></div>
      ))}
    </dl>
  );
}

export function ProjectHead({ project }) {
  return (
    <div className="p-head">
      <div className="meta">
        <span className="p-num">{project.label}</span>
        <h3 className="display p-title">{project.name}</h3>
        <p className="p-sub">{project.summary}</p>
      </div>
      <Facts facts={project.facts} />
    </div>
  );
}

export function StoryHeading({ children }) {
  return <h3><Dash />{children}</h3>;
}
