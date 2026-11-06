// All site content lives here. Edit this file to update the portfolio;
// the components only handle layout.

export const profile = {
  name: 'Allan Avosa',
  title: ['Software Systems', 'Engineer'],
  degree: 'BSc Computer Science · Egerton University',
  location: 'Kenya',
  github: 'https://github.com/Allan254555',
  githubLabel: 'github.com/Allan254555',
  // Add these when ready; empty values are hidden on the page.
  email: 'allanavosa@gmail.com',
  phone: '+254725559050',          // used in the tel: link
  phoneLabel: '+254 725 559 050',  // shown on the page
  linkedin: 'https://www.linkedin.com/in/allan-avosa-ab1283349',
  linkedinLabel: 'linkedin.com/in/allan-avosa-ab1283349',
  resume: '',
  // Hero intro: keep it concrete (real projects, real tools).
  intro: 'I build backend services and dat a engineeringpipelines with Java, Spring Boot, PostgreSQL and Python. Right now I am the lead backend developer on Dispense, a Kenyan digital wallet that sets money aside by purpose. I have also build data engineering pipelines using different ochestrators including modern Mage AI. Therefore, my work mainly revolves designing data intesive applications and pipelines using APIs.',
  focus: ['Backend Engineering', 'Distributed Architecture', 'Data Engineering', 'Data Science', 'AI / LLM Systems'],
};

// `page` links go to their own page; `section` links scroll to a section on the home page.
export const navLinks = [
  { href: '/', label: 'About', section: 'home' },
  { href: '/projects/', label: 'Projects', page: 'projects' },
  { href: '/experience/', label: 'Experience & Skills', page: 'experience' },
  { href: '/system-design/', label: 'System Design', page: 'system-design' },
  { href: '/writing/', label: 'Writing', page: 'writing' },
  { href: '/#contact', label: 'Contact', section: 'contact' },
];

export const about = {
  lead: 'Backend and data engineer, focused on correctness: APIs, ledgers, schemas and the pipelines that feed them.',
  paragraphs: [
    'I am a software systems engineer who builds reliable backend platforms, data-intensive applications and AI-powered tools. My work brings together software engineering, database design, data engineering and applied machine learning, from designing APIs and financial ledgers to building analytics on large datasets.',
    'I like understanding how systems behave beyond the user interface: how services communicate, how data is stored and protected, how transactions stay consistent, and how information turns into useful decisions. I break real problems into clear requirements, design practical architectures, and build them incrementally.',
    'My current focus is backend engineering with Java and Spring Boot, data platforms with SQL and Python, and applying large language models to analytical workflows.',
  ],
  interests: [
    'Backend and distributed systems',
    'Financial infrastructure and transactions',
    'Database architecture and performance',
    'Data engineering at scale',
    'Machine learning and predictive analytics',
    'AI and LLM-powered applications',
    'Cloud infrastructure, automation and DevOps',
  ],
};

export const disciplines = [
  {
    icon: 'server',
    title: 'Backend Engineering & Distributed Systems',
    text: 'APIs, microservices, authentication, financial transaction processing, database architecture and reliable service-to-service communication.',
    stack: 'Java · Spring Boot · Python · FastAPI · REST · PostgreSQL · Redis',
  },
  {
    icon: 'database',
    title: 'Data Engineering',
    text: 'Data pipelines, data models, large-dataset processing, analytical storage, and making data usable for applications and decisions.',
    stack: 'Python · SQL · PostgreSQL · ClickHouse · Redis · Mage',
  },
  {
    icon: 'chart',
    title: 'Data Science & Machine Learning',
    text: 'Exploring datasets, finding patterns, building predictive models, statistical analysis and data-driven forecasting.',
    stack: 'Python · SQL · CatBoost · SHAP · Forecasting',
  },
  {
    icon: 'ai',
    title: 'AI & LLM Systems',
    text: 'Applications that connect large language models to backend infrastructure and real data: natural-language interfaces and AI-assisted analytics.',
    stack: 'LLMs · NLP · Gemini API · Ollama · NL-to-SQL · AI integration',
  },
];

export const dispense = {
  id: 'dispense',
  label: 'PROJECT 01 · FLAGSHIP · FINTECH',
  name: 'Dispense',
  summary: 'A digital wallet that helps people in Kenya manage money by purpose: split it into tabs like rent, fares and savings, set targets, and schedule automatic pay-ins and payouts.',
  facts: [
    { k: 'Role', v: 'Lead Backend Developer' },
    { k: 'Focus', v: 'Backend architecture, financial workflows, authentication, data integrity' },
    { k: 'Stack', v: 'Java · Spring Boot · PostgreSQL (Neon) · Flyway · Docker · Render' },
  ],
  problem: {
    title: 'One balance, many plans',
    intro: 'For many people, money meant for rent, school fees, fares and savings sits in the same balance as everyday spending. That causes three problems.',
    cards: [
      { title: 'Committed money gets spent', text: 'The balance looks bigger than the money that is actually free, so rent money gets spent on other things.' },
      { title: 'Regular payments rely on memory', text: 'Rent or a monthly contribution has to be sent by hand on the right day, every time.' },
      { title: 'Saving needs discipline', text: 'Nothing sets money aside automatically or shows progress towards a goal.' },
    ],
  },
  // "How Dispense solves it" table.
  features: [
    { title: 'Tabs', text: "Separate pots inside the wallet, one per purpose, each with its own balance. The wallet shows only the money that isn't in a tab." },
    { title: 'Targets', text: 'An optional target per tab. A tab can never be funded past it.' },
    { title: 'Schedules', text: 'Automatic pay-ins (such as on payday) and payouts to saved payees (such as the landlord on the 1st). Each schedule can be edited, paused or resumed, and every run is recorded.' },
    { title: 'Transfers', text: 'Wallet-to-wallet payments using an 8-digit Dispense ID, with fees set by a fee schedule.' },
    { title: 'M-Pesa & banks', text: "Money moves between Dispense, M-Pesa (through Safaricom's Daraja APIs) and bank accounts." },
    { title: 'Notifications', text: 'A dedicated notification service keeps users informed about their account and payments.' },
    { title: 'Clear records', text: 'History and receipts in Kenyan time. Deleting a tab returns its money to the wallet.' },
  ],
  solvesNote: "Because it holds real money, the backend has to make sure no shilling is created or lost and that accounts stay secure. That's why it's built the way the sections below describe.",
  tabs: [
    { name: 'Rent', rule: 'pays the landlord on the 1st' },
    { name: 'Fares', rule: 'funded every payday' },
    { name: 'Savings', rule: 'capped at its target' },
  ],
  why: 'Dispense holds real money, so the backend has to be correct and trustworthy. A double-entry ledger and row locking make sure no shilling is created or lost, even when two payments happen at once. Strict sessions, one device per user, PIN step-up for sensitive actions, device verification and encrypted personal data protect accounts.',
  // Planned features: shown under "What's next", labelled as not built yet.
  roadmap: [
    { title: 'Spending reports', text: 'Reports on how money was spent and used, broken down by day, week, month and year.' },
    { title: 'AI economic insights', text: "An AI feature that compares Kenya's current economic position with the global picture, to help users spend more wisely and plan for tough times." },
    { title: 'Savings tracker', text: 'Shows users how much they have saved by avoiding high transaction costs and impulse buying.' },
  ],
  // Request path for a wallet-to-wallet transfer.
  requestPath: [
    { n: '01 · GATEWAY', title: 'Verify token', text: 'JWT signature checked with the public key only; the private key never leaves the auth service' },
    { n: '02 · GATEWAY', title: 'Check session', text: 'Session must still be active (TTL cache, then Postgres). Ended sessions are refused even if the token is valid' },
    { n: '03 · GATEWAY', title: 'Forward', text: 'Request passed on with the shared gateway key and a trace id' },
    { n: '04 · CORE', title: 'Lock wallets', text: 'Both wallets locked with SELECT … FOR UPDATE, always in id order, so opposite transfers cannot deadlock' },
    { n: '05 · CORE', title: 'Post entries', text: 'Balance and daily limit checked, fee calculated, journal entries posted in one transaction; lock failures retry with backoff' },
  ],
  // Illustrative amounts, as labelled on the page.
  journal: {
    caption: 'Wallet-to-wallet transfer of KES 1,000.00 with a KES 15.00 fee (illustrative amounts)',
    rows: [
      { account: 'Sender wallet', debit: '1,015.00', credit: '' },
      { account: 'Recipient wallet', debit: '', credit: '1,000.00' },
      { account: 'Fee revenue', debit: '', credit: '15.00' },
    ],
    total: { debit: '1,015.00', credit: '1,015.00' },
  },
  areas: [
    { title: 'Microservices architecture', items: [
      'api-gateway, authentication-service and core-service, deployed separately',
      'Gateway is the only public entry point: routing, JWT and session checks',
      'core-service rejects requests that did not come through the gateway',
      'Wallet created by an after-commit event once sign-up is saved',
    ] },
    { title: 'Authentication & security', items: [
      'RS256 JWTs; refresh-token rotation with reuse detection',
      'Server-side sessions: idle timeout, absolute expiry, one device',
      'Email OTP for sign-up and new devices; peppered PIN hashes',
      'AES-GCM envelope encryption, key rotation and blind indexes',
      'PIN recovery and account unlock',
    ] },
    { title: 'Financial infrastructure', items: [
      'Double-entry ledger: an account per tab, fees to a revenue account',
      'Wallet row locks taken in id order to prevent deadlocks',
      'Idempotency and duplicate-request protection',
      'Reversals posted as new entries; deleting a tab refunds the wallet',
      'BigDecimal money type and a daily outgoing payment limit',
    ] },
    { title: 'Database engineering', items: [
      'PostgreSQL on Neon with Flyway migrations',
      'Unique index allowing one active session per user',
      'Indexing and query optimisation',
      'FOR UPDATE SKIP LOCKED so jobs can run on several instances',
      'Scheduled recurring payments and cleanup jobs',
    ] },
    { title: 'Payment gateway', items: [
      'M-Pesa integration through Safaricom Daraja APIs',
      'Bank integrations for moving money in and out',
    ] },
    { title: 'Notification service', items: [
      'Dedicated service for user notifications',
      'Account and payment alerts',
    ] },
    { title: 'Deployment & operations', wide: true, items: [
      'Docker images and Compose with health-gated startup, Render blueprints (render.yaml), Actuator health checks, trace IDs passed between services and returned in every error, and a clean 503 from the gateway when a service is down',
    ] },
  ],
  tech: ['Java', 'Spring Boot', 'Spring Cloud Gateway', 'M-Pesa Daraja API', 'PostgreSQL / Neon', 'Flyway', 'Redis', 'JWT (RS256)', 'Caffeine', 'HikariCP', 'Docker', 'Render'],
  status: 'An evolving project. The points above cover implemented work and active engineering direction. It is not yet a launched, production-scale financial service.',
};

export const smartSales = {
  id: 'smart-sales',
  label: 'PROJECT 02 · FLAGSHIP · AI + DATA',
  name: 'Smart Sales Assistant',
  summary: 'AI-powered retail analytics: ask questions about sales data in plain language and get data-backed answers.',
  facts: [
    { k: 'Focus', v: 'Data engineering, natural-language analytics, machine learning, decision support' },
    { k: 'Stack', v: 'Python · FastAPI · Angular · PostgreSQL · ClickHouse · Gemini API · Ollama' },
  ],
  dataset: {
    text: 'The working dataset holds past retail sales records, with supporting tables for products, categories, customers, employees, cities and countries. A real workload for analytical processing and query-performance work.',
  },
  pipeline: [
    { n: '01', title: 'Question', text: 'A manager asks in everyday language' },
    { n: '02', title: 'Schema context', text: 'Relevant tables and columns are attached' },
    { n: '03', title: 'LLM → SQL', text: 'A candidate query is generated' },
    { n: '04 · GUARD', title: 'Validation', text: 'Read-only access, allowlists, timeouts, row limits', guard: true },
    { n: '05', title: 'Analytical DB', text: 'PostgreSQL / ClickHouse executes' },
    { n: '06', title: 'Insight', text: 'Tables, charts and a plain-language summary' },
  ],
  problem: 'Retail data holds millions of records, but getting answers out of it usually takes SQL skills and slow manual analysis. The assistant makes common sales questions easy to ask.',
  questions: [
    'Which products generated the highest revenue this month?',
    'Which categories are underperforming?',
    'How do sales compare across cities?',
    'What are the expected sales trends for the coming weeks?',
  ],
  responsibleAI: 'Generated SQL is never trusted automatically. The design uses restricted read-only credentials, allowlisted schemas, query validation, execution limits and careful handling of sensitive data. The assistant should state uncertainty rather than present unsupported conclusions as facts.',
  areas: [
    { title: 'Data engineering', items: ['Ingestion, cleaning and transformation', 'Schema design', 'Analytical query development', 'PostgreSQL vs ClickHouse exploration'] },
    { title: 'Artificial intelligence', items: ['LLM integration (Gemini API, Ollama, Mistral, local inference)', 'Natural-language-to-SQL architecture', 'Query generation and validation', 'AI-generated explanations'] },
    { title: 'Data science & ML', items: ['Sales trend and product performance analysis', 'CatBoost weekly city × product forecasting', 'SHAP model interpretation'] },
    { title: 'Backend engineering', items: ['Python and FastAPI services', 'Database integration', 'Query execution and validation', 'Angular frontend communication'] },
  ],
  levels: [
    { lv: 'LEVEL 1 · DESCRIPTIVE', q: 'What happened?', text: 'Understand sales, revenue, products, categories and trends.' },
    { lv: 'LEVEL 2 · DIAGNOSTIC + PREDICTIVE', q: 'Why, and what next?', text: 'Find patterns and anomalies, and forecast future sales.' },
    { lv: 'LEVEL 3 · DECISION INTELLIGENCE', q: 'What should we do?', text: 'Turn analytical findings into actionable business recommendations.' },
  ],
  tech: ['Python', 'FastAPI', 'Angular', 'TypeScript', 'SCSS', 'PostgreSQL', 'ClickHouse', 'Gemini API', 'Ollama / Mistral', 'CatBoost', 'SHAP'],
  status: 'Includes data exploration and implementation experiments. Forecasting, NL-to-SQL safeguards and decision-support features are experiments and roadmap items.',
};

export const identityManagement = {
  id: 'identity-management',
  label: 'PROJECT 03 · BACKEND + SECURITY',
  name: 'Identity Management System',
  summary: 'An identity and access management service for the employees of a financial platform, fully separate from customer login, with instant revocation and two-person approval for pricing changes.',
  facts: [
    { k: 'Focus', v: 'Authentication, authorisation, audit, safe changes across services' },
    { k: 'Stack', v: 'Java 21 · Spring Boot 4 · Spring Security · PostgreSQL (Neon) · Flyway' },
  ],
  problem: {
    title: 'Staff access that cannot share the customer login',
    intro: 'The employees of a financial platform need powerful access: viewing customer data, reviewing payments and setting the fees every customer pays. The platform had no staff identity system, the daily limit was a config value, and the payments service had no way to save a new fee schedule.',
    cards: [
      { title: 'One leaked token', text: 'If staff and customers share a login system, a leaked token can reach real customers and real money.' },
      { title: 'One departing employee', text: 'Access has to end the moment someone leaves or changes role, not when their token runs out.' },
      { title: 'One unreviewed price change', text: 'No single employee should be able to change pricing alone, and every action needs a permanent record.' },
    ],
  },
  built: 'A standalone Spring Boot service with its own database and signing keys. It manages the full staff lifecycle, role-based permissions and revocable sessions, keeps a tamper-resistant audit log, and runs a propose-and-approve workflow that feeds approved fee and limit changes into the payments service.',
  stats: [
    { value: '29', label: 'REST endpoints' },
    { value: '35', label: 'integration tests against real Postgres' },
    { value: '14 / 7', label: 'permissions across seven roles' },
    { value: '10 min', label: 'token life, with instant revocation' },
  ],
  // Path of a fee or limit change, from proposal to the payments service.
  changeFlow: [
    { n: '01', title: 'Propose', text: 'A staff member with the right permission proposes a fee or limit change' },
    { n: '02 · GUARD', title: 'Approve', text: 'A second person must approve. The proposer cannot approve their own change', guard: true },
    { n: '03', title: 'Save', text: 'The approval is saved before anything is sent' },
    { n: '04', title: 'Send', text: 'The change goes to the payments service with a unique change ID' },
    { n: '05', title: 'Apply once', text: 'Retries save only once, so an outage never loses or doubles a change' },
  ],
  decisions: [
    { title: 'Isolation from customers', text: 'Separate database, RSA key pair, issuer and audience, so a customer token is refused on every staff endpoint.' },
    { title: 'Instant revocation', text: 'Each request checks the live session, account status and permissions in the database, so suspending someone or removing a role works on the next request.' },
    { title: 'Two-person rule in depth', text: "The proposer can't approve their own change, enforced in the service, by database constraints in both services, and again by the payments service." },
    { title: 'Safe across service failures', text: 'Approvals are saved before the change is sent, and a unique change ID makes retries save only once.' },
    { title: "Audit that can't be quietly edited", text: 'Database triggers block updates and deletes, and records commit in the same transaction as the action they describe.' },
    { title: 'Login that gives nothing away', text: 'Unknown, wrong, locked and suspended cases return the same response in similar time, using a decoy hash and account lockout.' },
    { title: 'Secure onboarding', text: 'Single-use invitations stored only as hashes, BCrypt passwords, and returning employees start with no roles.' },
  ],
  tech: ['Java 21', 'Spring Boot 4', 'Spring Security', 'Spring Data JPA', 'PostgreSQL / Neon', 'Flyway', 'JWT (RS256)', 'Maven'],
  status: 'Built and integration-tested, running in a local environment. Production deployment is the next step.',
};

export const recommendationService = {
  id: 'recommendation-service',
  label: 'PROJECT 04 · DATA SCIENCE · RECOMMENDATIONS',
  name: 'Product Recommendation System',
  summary: 'A FastAPI microservice that turns a typed product or category name into ranked, explainable recommendations from past retail sales records.',
  facts: [
    { k: 'Role', v: 'Solo: design, data access, API and evaluation' },
    { k: 'Stack', v: 'Python · FastAPI · Pydantic · ClickHouse · Redis · Docker Compose' },
    { k: 'Part of', v: 'Smart Sales Assistant' },
  ],
  problem: {
    title: 'People search with words',
    intro: 'Sales staff and customers usually know products and categories by names something like "bread" and expect useful suggestions. The service has to work out what that text refers to, rank relevant products, and explain why each one appears, so a dashboard or an AI assistant can show the result without further interpretation.',
  },
  built: [
    { title: 'People search with words, not product IDs', text: 'A two-step resolver tries category names first, then product names, and returns alternatives so a client can ask the user to disambiguate.' },
    { title: 'A narrow search leaves few options', text: 'Each query returns two ranked lists: products that match the text, and the best sellers in the matched category.' },
    { title: '"Best" depends on the business goal', text: 'Callers rank by units sold or by revenue, which suit different business questions.' },
    { title: 'Unexplained suggestions are hard to trust', text: 'Every item carries a plain-language reason field, ready for a UI or an LLM to display.' },
    { title: 'Ranking has to scan a large volume of sales rows', text: 'ClickHouse aggregates sales at query time, with a Redis layer designed for repeat requests.' },
    { title: 'User text must not reach the database as SQL', text: 'Parameterised ClickHouse SQL, FastAPI input validation and a fixed allow-list for the ranking metric keep user text out of the SQL string.' },
    { title: 'It is easy to assume a recommender works', text: 'A time-based holdout test compares the rankings with three baselines to measure whether they predict future purchases.' },
  ],
  results: [
    { title: 'Nothing beat random', text: 'The service does what it was designed to do, but on held-out purchases every method landed at about 16%, including random selection.' },
    { title: 'The limit is the data', text: 'Product sales barely differ, rankings do not persist between periods, and every transaction holds one product, so there is no repeatable preference to learn. The data also looks synthetic.' },
    { title: 'The test prevented a false claim', text: 'Comparing against baselines stopped me from claiming a lift that does not exist, and the same test can run unchanged on real customer transactions.' },
  ],
  tech: ['Python', 'FastAPI', 'ClickHouse', 'Redis', 'Docker', 'Recommender systems', 'Offline evaluation'],
  status: 'The search and category endpoints are implemented. The Redis cache needs its key formats aligned, so requests currently run live ClickHouse queries. The item-to-item builder is written but not served, and the API gateway does not yet forward these routes.',
};

export const demandForecasting = {
  id: 'demand-forecasting',
  label: 'PROJECT 05 · RETAIL PLANNING · SALES INSIGHT',
  name: 'Demand Forecasting and Anomaly Detection',
  summary: 'A system that helps a retailer plan how much stock each city needs next week and understand why sales suddenly change.',
  facts: [
    { k: 'Role', v: 'Solo: from the business problem through to the data, models, dashboard service and testing' },
    { k: 'Data', v: 'Sample sales records, January to May 2018' },
    { k: 'Part of', v: 'Smart Sales Assistant' },
  ],
  problem: {
    title: 'Sales records do not make decisions',
    intro: 'A retailer can hold a huge volume of sales records and still not know what to do next. Someone has to decide how much stock each city needs next week: too little means empty shelves, too much ties up cash and ends as waste. Someone else has to decide whether a sudden rise or fall in sales deserves action. Raw records answer neither question, and the people deciding are rarely data specialists.',
  },
  // "From problem to solution": each problem, what was built, and how it was checked.
  solutions: [
    { problem: 'Planners do not know how much stock each city needs', did: 'Built a weekly forecast covering every product and city combination.', check: 'Tested it on four past weeks it had never seen. It missed by about 14%.' },
    { problem: 'Nobody can watch every product, hour and city', did: 'Built automatic alerts that learn what is normal for each series and flag large departures.', check: 'Ran the same alerts on scrambled data to measure how many are false alarms.' },
    { problem: 'Teams cannot tell why sales moved', did: 'Compared each alert with the discount at the time and labelled it as discount-linked or not.', check: 'Compared how often spikes follow a discount rise with how often an ordinary day does.' },
    { problem: 'Staffing and promotions need timing', did: 'Built reports on busy and quiet hours, weekdays and cities.', check: 'Measured the hourly and weekday patterns directly from the sales records.' },
    { problem: 'Managers should not need statistics to read results', did: 'Turned the results into plain-English sentences on a dashboard.', check: 'Connected the service through to the live dashboard pages.' },
    { problem: 'Good test scores can be misleading', did: 'Compared every result with a simple alternative, such as copying last week.', check: 'Found and corrected a test that made the forecast look 3.5 times worse.' },
  ],
  results: [
    { title: 'The forecast is useful, but not unique', text: 'It missed by about 14%, and its misses were 27% smaller than copying last week. A long-run average did equally well, because sales in this data stay steady from week to week.' },
    { title: 'A faulty test hid that', text: 'The first test reported a 49% miss. The data ends on a Wednesday, so the last week held only three days of sales but was scored as a full week. With incomplete weeks removed, the true miss is about 14%.' },
    { title: 'Most alerts were false', text: 'A start-up fault caused 77% of daily alerts, raised before a series had enough history to judge what is normal. The rest matched the rate on scrambled data, so alerts now have a measured false alarm rate.' },
  ],
  tech: ['Python', 'CatBoost', 'FastAPI', 'ClickHouse', 'Redis', 'Angular', 'Forecasting', 'Anomaly detection', 'Model testing'],
  status: "Busy and quiet time reports, alerts and discount labels are live on the dashboard, but the start-up fault is not yet fixed in the service. The forecast is tested but not on the dashboard yet. This ran on sample data, so it doesn't show savings in stock, waste or lost sales.",
};

export const experience = [
  {
    role: 'Data Engineering Internship',
    company: 'Statsspeak Group Ltd',
    period: 'JUN 2025 to AUG 2025',
    text: 'An end-to-end data engineering and analytics project on health data. I set up the cloud infrastructure myself, built and orchestrated Mage pipelines that extracted data from DHIS2, and produced reports and dashboards for stakeholders.',
    work: 'The goal was to make organisational data more accessible, structured and useful for reporting and decision-making.',
    // Conceptual flow: exact storage and data destinations are left out on purpose.
    flow: [
      { n: '01 · SOURCE', title: 'DHIS2', text: 'Source health information system' },
      { n: '02 · PIPELINES', title: 'Mage', text: 'Data extraction and processing workflows' },
      { n: '03 · CLOUD', title: 'Google Cloud VM', text: 'Cloud-hosted processing environment' },
      { n: '04 · OUTPUT', title: 'Reports & dashboards', text: 'Stakeholder-facing analytics' },
    ],
    areas: [
      { title: 'Data pipeline engineering', items: [
        'Developed data pipeline workflows using Mage',
        'Integrated data from DHIS2 into downstream processing workflows',
        'Handled data extraction and pipeline orchestration myself',
      ] },
      { title: 'Cloud infrastructure', items: [
        'Independently provisioned and configured a Google Cloud virtual machine',
        'Prepared the environment to support data engineering workloads',
        'Managed the setup needed to run data services and workflows',
      ] },
      { title: 'Data analytics and reporting', wide: true, items: [
        'Developed reports and dashboards for organisational stakeholders',
        'Turned available data into clear visual representations',
        'Presented information to support reporting and data-informed decisions',
      ] },
    ],
    development: 'This gave me practical experience across the data engineering lifecycle, from source data integration and cloud infrastructure to analytical reporting and information delivery.',
    tools: ['Mage', 'DHIS2', 'Google Cloud Platform', 'Reports & dashboards'],
  },
];

// Home page card only: this project is written up on the Experience page.
export const statsspeak = {
  id: 'statsspeak',
  href: '/experience/',
  more: 'Read about this project',
  label: 'PROJECT 06 · INTERNSHIP · DATA ENGINEERING',
  name: 'Health Data Pipelines',
  summary: 'End-to-end pipelines at Statsspeak Group Ltd: Mage workflows extracting data from DHIS2, running on a Google Cloud VM I set up myself, feeding reports and dashboards for stakeholders.',
  tech: experience[0].tools,
};

export const skills = [
  ['Languages', 'Java, Python, SQL, JavaScript, TypeScript, C, Rust'],
  ['Backend', 'Spring Boot, FastAPI, REST APIs, microservices, authentication, gRPC, graphQL, Databases'],
  ['System Design', 'UML, HLD and LLD, System architectural patterns, Scalability, Databases in designing systems, load balancing, API Design, message queues, rate limiting, cachin, CDNs and proxies, CAP theorem, high availability and fault tolerance'],
  ['Databases & Database Management', 'PostgreSQL, Neon, ClickHouse, Redis, relational modelling, migrations, SQL, Data Models, Sharding, Replication, Normalization, Partitioning'],
  ['Data Engineering', 'Pipelines, ETL, data modelling, data quality, Mage, DHIS2, SQL analytics, reports and dashboards'],
  ['Data Science', 'CatBoost, SHAP, forecasting, predictive analytics, recommender systems, anomaly detection, backtesting, pandas'],
  ['AI / LLM', 'LLM integration, NLP, NL-to-SQL, Gemini API, Ollama, Mistral'],
  ['Frontend', 'Angular, React Native, HTML, SCSS'],
  ['DevOps & Cloud', 'Docker, GitHub Actions, CI/CD, Google Cloud, Render'],
  ['Tools', 'Git, GitHub, Swagger / OpenAPI, Flyway'],
];

// System design knowledge, by topic. `wide` cards span the full row and list items in columns.
export const systemDesign = [
  { title: 'HLD & LLD', items: [
    'High-level design (HLD)',
    'Low-level design (LLD)',
  ] },
  { title: 'Architectural styles', items: [
    'Monolithic architecture',
    'Microservices',
    'Event-driven architecture',
  ] },
  { title: 'Scalability', items: [
    'Horizontal scaling',
    'Vertical scaling',
    'Designing highly scalable systems',
  ] },
  { title: 'Databases in system design', wide: true, items: [
    'Types of databases',
    'Choosing a database: SQL or NoSQL',
    'File and database storage systems',
    'Database replication and its types',
    'Database sharding',
    'Data partitioning',
    'Block, object and file storage',
    'Normalisation',
    'Denormalisation',
    'SQL query optimisation',
    'Redis',
  ] },
  { title: 'Load balancing', items: [
    'Load balancers and where they sit',
    'Balancing algorithms: round robin, least connections, hashing',
    'Health checks and failover',
  ] },
  { title: 'API gateway, queues & rate limiting', items: [
    'API gateway',
    'Message queues',
    'Rate limiting',
  ] },
  { title: 'Security', items: [
    'Authentication and authorisation',
    'JWT access and refresh tokens',
    'Encryption and key management',
    'Role-based access control',
  ] },
  { title: 'Distributed systems', items: [
    'Service-to-service communication',
    'Partial failures, timeouts and retries',
    'Idempotency',
  ] },
  { title: 'Protocols, CDN, proxies & WebSockets', items: [
    'Network protocols: HTTP, TCP, UDP',
    'Content delivery networks (CDN)',
    'Forward and reverse proxies',
    'WebSockets',
  ] },
  { title: 'Consistency, availability, reliability & maintainability', items: [
    'Availability and achieving high availability',
    'Consistency and consistency patterns',
    'CAP theorem',
    'Reliability and fault tolerance',
    'Maintainability',
  ] },
  {
    title: 'How I work',
    highlight: true,
    wide: true,
    items: [
      'Start with the problem, users and constraints',
      'Design for correctness and data integrity',
      'Keep services and schemas understandable',
      'Treat security as a requirement',
      'Build incrementally: test, observe, improve',
      'Validate AI and model outputs; state their limits',
    ],
  },
];

// Set `url` on an article once it is published; the "Planned" tag becomes a "Read" link.
export const articles = [
  { title: 'Designing a financial ledger for a fintech application', url: '' },
  { title: 'Designing idempotent financial APIs', url: '' },
  { title: 'Building secure authentication with Spring Boot', url: '' },
  { title: 'Application-level encryption for sensitive financial data', url: '' },
  { title: 'Handling token expiry and long inactivity in mobile apps', url: '' },
  { title: 'Building safe natural-language-to-SQL systems with LLMs', url: '' },
  { title: 'PostgreSQL vs ClickHouse for analytical workloads', url: '' },
  { title: 'Designing event-driven microservices', url: '' },
];

export const education = {
  degree: 'BSc Computer Science',
  school: 'Egerton University',
  topics: ['Software engineering', 'Algorithms & data structures', 'Database systems', 'Artificial intelligence', 'Distributed systems', 'Computer systems'],
};

export const openTo = ['Backend & platform engineering', 'Fintech infrastructure', 'Data engineering', 'AI & LLM applications', 'ML engineering', 'Cloud & distributed systems'];
