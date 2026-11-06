import { demandForecasting, dispense, identityManagement, recommendationService, smartSales } from '../data/portfolio.js';
import { Areas, Pills, ProjectHead, SectionHead, Status, StoryHeading } from './ui.jsx';

function ServiceDiagram() {
  return (
    <div className="arch" role="img" aria-label="Mobile app calls api-gateway over HTTPS. The gateway routes /auth requests to authentication-service and other requests, with the gateway key, to core-service. The two services talk over an internal API key for wallet provisioning, and both use PostgreSQL on Neon over TLS.">
      <div className="arch-row"><div className="node client"><b>Mobile app</b></div></div>
      <div className="link"><span>HTTPS</span></div>
      <div className="arch-row">
        <div className="node public">
          <span className="tag">Only public service</span>
          <b>api-gateway</b>
          <small>RS256 JWT verify · session check with TTL cache · trace id · 503 fallback</small>
        </div>
      </div>
      <div className="arch-split">
        <div className="link"><span>/auth/**</span></div>
        <div className="link"><span>X-Gateway-Key</span></div>
      </div>
      <div className="link narrow-only"><span>/auth/** · X-Gateway-Key</span></div>
      <div className="arch-row two">
        <div className="node">
          <b>authentication-service</b>
          <small>PIN, OTP, devices · sessions, token rotation · envelope encryption</small>
        </div>
        <div className="side-link"><span>internal API key<br />wallet provisioning</span></div>
        <div className="node">
          <b>core-service</b>
          <small>wallets, tabs, payments · double-entry ledger · payment scheduler</small>
        </div>
      </div>
      <div className="link"><span>TLS</span></div>
      <div className="arch-row"><div className="node db"><b>PostgreSQL</b><small>Neon · core-service reads user_sessions (read only)</small></div></div>
    </div>
  );
}

function Journal({ journal }) {
  return (
    <div className="table-scroll journal-wrap">
      <table className="journal">
        <caption>{journal.caption}</caption>
        <thead><tr><th scope="col">Account</th><th scope="col">Debit</th><th scope="col">Credit</th></tr></thead>
        <tbody>
          {journal.rows.map((r) => (
            <tr key={r.account}><th scope="row">{r.account}</th><td>{r.debit}</td><td>{r.credit}</td></tr>
          ))}
        </tbody>
        <tfoot><tr><th scope="row">Total</th><td>{journal.total.debit}</td><td>{journal.total.credit}</td></tr></tfoot>
      </table>
    </div>
  );
}

function Dispense() {
  const p = dispense;
  return (
    <article className="project" id={p.id}>
      <ProjectHead project={p} />
      <div className="problem">
        <span className="eyebrow">The problem</span>
        <h4 className="problem-title">{p.problem.title}</h4>
        <p className="problem-intro">{p.problem.intro}</p>
        <div className="problem-cards">
          {p.problem.cards.map((c) => (
            <div key={c.title}><b>{c.title}</b><p>{c.text}</p></div>
          ))}
        </div>
      </div>

      <div className="solves">
        <div className="stack-block">
          <h4 className="solves-title">How Dispense solves it</h4>
          <dl className="solves-table">
            {p.features.map((f) => <div key={f.title}><dt>{f.title}</dt><dd>{f.text}</dd></div>)}
          </dl>
          <p className="solves-note">{p.solvesNote}</p>
        </div>
        <div className="concept" aria-label="Main wallet and tabs example">
          <span className="lbl">Example tabs</span>
          <div className="wallet">
            <div className="main"><span>MAIN WALLET</span><span>free money only</span></div>
            <div className="tabs">
              {p.tabs.map((t) => <div key={t.name}><b>{t.name}</b>{t.rule}</div>)}
            </div>
          </div>
        </div>
      </div>

      <div className="areas-wide"><Areas areas={p.areas} /></div>

      <div className="stack-block">
        <span className="eyebrow">Backend architecture</span>
        <p className="why">{p.why}</p>
        <ServiceDiagram />
      </div>

      <div className="stack-block">
        <span className="eyebrow">Sending money: the request path</span>
        <div className="pipe" style={{ '--cols': p.requestPath.length }}>
          {p.requestPath.map((s) => (
            <div key={s.title}><span className="n">{s.n}</span><b>{s.title}</b><span>{s.text}</span></div>
          ))}
        </div>
      </div>

      <div className="stack-block">
        <span className="eyebrow">Every payment is a balanced journal entry</span>
        <p className="why">Balances are never edited directly. A transfer posts debits and credits that must balance, and the fee goes to its own revenue account.</p>
        <Journal journal={p.journal} />
      </div>

      <div className="stack-block">
        <span className="eyebrow">What's next</span>
        <p className="why">Planned features, not built yet.</p>
        <div className="problem-cards roadmap">
          {p.roadmap.map((r) => (
            <div key={r.title}><span className="planned">Planned</span><b>{r.title}</b><p>{r.text}</p></div>
          ))}
        </div>
      </div>

      <Pills items={p.tech} />
      <Status>{p.status}</Status>
    </article>
  );
}

function SmartSales() {
  const p = smartSales;
  return (
    <article className="project" id={p.id}>
      <ProjectHead project={p} />

      <p className="dataset muted">{p.dataset.text}</p>

      <div className="stack-block">
        <span className="eyebrow">How a question becomes an answer</span>
        <div className="pipe">
          {p.pipeline.map((s) => (
            <div key={s.n} className={s.guard ? 'guard' : undefined}>
              <span className="n">{s.n}</span><b>{s.title}</b><span>{s.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-body">
        <div className="p-story">
          <StoryHeading>The problem</StoryHeading>
          <p>{p.problem}</p>
          <div className="example-q">
            {p.questions.map((q) => <div key={q}>{q}</div>)}
          </div>
          <StoryHeading>Responsible AI</StoryHeading>
          <p>{p.responsibleAI}</p>
        </div>
        <Areas areas={p.areas} />
      </div>

      <div className="stack-block">
        <span className="eyebrow">Long-term vision</span>
        <div className="levels">
          {p.levels.map((l) => (
            <article key={l.lv}>
              <span className="lv">{l.lv}</span>
              <q>{l.q}</q>
              <p>{l.text}</p>
            </article>
          ))}
        </div>
      </div>

      <Pills items={p.tech} />
      <Status>{p.status}</Status>
    </article>
  );
}

function IdentityManagement() {
  const p = identityManagement;
  return (
    <article className="project" id={p.id}>
      <ProjectHead project={p} />

      <div className="problem">
        <span className="eyebrow">The problem</span>
        <h4 className="problem-title">{p.problem.title}</h4>
        <p className="problem-intro">{p.problem.intro}</p>
        <div className="problem-cards">
          {p.problem.cards.map((c) => (
            <div key={c.title}><b>{c.title}</b><p>{c.text}</p></div>
          ))}
        </div>
      </div>

      <div className="stack-block">
        <span className="eyebrow">What I built</span>
        <p className="why">{p.built}</p>
        <dl className="stats">
          {p.stats.map((s) => <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>)}
        </dl>
      </div>

      <div className="stack-block">
        <span className="eyebrow">Changing a fee: the approval path</span>
        <div className="pipe" style={{ '--cols': p.changeFlow.length }}>
          {p.changeFlow.map((s) => (
            <div key={s.n} className={s.guard ? 'guard' : undefined}>
              <span className="n">{s.n}</span><b>{s.title}</b><span>{s.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="stack-block">
        <h4 className="solves-title">Key engineering decisions</h4>
        <dl className="solves-table">
          {p.decisions.map((d) => <div key={d.title}><dt>{d.title}</dt><dd>{d.text}</dd></div>)}
        </dl>
      </div>

      <Pills items={p.tech} />
      <Status>{p.status}</Status>
    </article>
  );
}

function Rows({ rows }) {
  return (
    <dl className="solves-table">
      {rows.map((r) => <div key={r.title}><dt>{r.title}</dt><dd>{r.text}</dd></div>)}
    </dl>
  );
}

function RecommendationSystem() {
  const p = recommendationService;
  return (
    <article className="project" id={p.id}>
      <ProjectHead project={p} />

      <div className="problem">
        <span className="eyebrow">The problem</span>
        <h4 className="problem-title">{p.problem.title}</h4>
        <p className="problem-intro">{p.problem.intro}</p>
      </div>

      <div className="stack-block">
        <h4 className="solves-title">Problems it solves</h4>
        <Rows rows={p.built} />
      </div>

      <div className="stack-block">
        <h4 className="solves-title">What the testing showed</h4>
        <Rows rows={p.results} />
      </div>

      <Pills items={p.tech} />
      <Status>{p.status}</Status>
    </article>
  );
}

function DemandForecasting() {
  const p = demandForecasting;
  return (
    <article className="project" id={p.id}>
      <ProjectHead project={p} />

      <div className="problem">
        <span className="eyebrow">The problem</span>
        <h4 className="problem-title">{p.problem.title}</h4>
        <p className="problem-intro">{p.problem.intro}</p>
      </div>

      <div className="stack-block">
        <span className="eyebrow">From problem to solution</span>
        <table className="solutions">
          <thead>
            <tr><th scope="col">Problem</th><th scope="col">What I did</th><th scope="col">How I checked it</th></tr>
          </thead>
          <tbody>
            {p.solutions.map((c) => (
              <tr key={c.problem}>
                <th scope="row">{c.problem}</th>
                <td data-label="What I did">{c.did}</td>
                <td data-label="How I checked it">{c.check}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="stack-block">
        <h4 className="solves-title">What the testing showed</h4>
        <Rows rows={p.results} />
      </div>

      <Pills items={p.tech} />
      <Status>{p.status}</Status>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionHead
          as="h1"
          title="Featured Projects"
          note="The central projects behind my engineering interests, with an honest note on what is built and what is still in progress."
          noteWidth="42ch"
        />
        <Dispense />
        <SmartSales />
        <IdentityManagement />
        <RecommendationSystem />
        <DemandForecasting />
      </div>
    </section>
  );
}
