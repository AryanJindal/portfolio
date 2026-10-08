// ─────────────────────────────────────────────────────────────
// All site content lives here. Edit this file to update the site.
//
// `lenses` tags decide what lights up for each kind of visitor:
//   'fde'     → Forward Deployed / customer-facing engineering
//   'backend' → Backend / full-stack
//   'genai'   → GenAI / LLM engineering
// Wrap words in **double asterisks** to highlight them.
// ─────────────────────────────────────────────────────────────

export const LENSES = [
  { id: 'all', label: 'Everything', short: 'All', color: '#14B8A6', ink: '#04302B' },
  { id: 'fde', label: 'Forward Deployed', short: 'FDE', color: '#F5A524', ink: '#3A2500' },
  { id: 'backend', label: 'Backend', short: 'Backend', color: '#2F5BEA', ink: '#FFFFFF' },
  { id: 'genai', label: 'GenAI', short: 'GenAI', color: '#8B5CF6', ink: '#FFFFFF' },
]

export const PROFILE = {
  name: 'Aryan Jindal',
  role: 'Software Engineer, R&D at Pathlock',
  email: 'jindalaryan070707@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/AryanJindal' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/aryan-jindal-81b23a21b' },
    { label: 'LeetCode', href: 'https://leetcode.com/Aryan_Jindal/' },
    { label: 'GeeksforGeeks', href: 'https://auth.geeksforgeeks.org/user/jindalaryan070707/' },
  ],
  // Put compiled PDFs in /public/resumes/ and set the paths, e.g. '/resumes/aryan-jindal-genai.pdf'.
  // A "Download resume" button appears only when a path is set for the current lens.
  resumes: {
    all: null,
    fde: null,
    backend: null,
    genai: null,
  },
}

export const HERO = {
  all: {
    headline: 'I connect enterprise systems — and teach them new tricks with AI.',
    sub: 'I build the connectors that pull users, roles and entitlements out of SAP, Salesforce and Oracle — plus the pipelines, tooling and LLM workflows around them.',
  },
  fde: {
    headline: "I turn a customer's tangle of systems into integrations that work.",
    sub: 'At Pathlock I sit between SAP consultants, sales and customer teams: mapping requirements, shipping connectors and debugging production issues inside customer environments.',
  },
  backend: {
    headline: 'I build APIs and data pipelines that hold up at enterprise scale.',
    sub: 'Connectors over REST, OData, SOAP, SCIM and ODBC; delta sync on a five-minute cycle; a JavaScript migration that cut run times by up to 97%; and a multi-tenant SaaS API with RBAC and audit logs.',
  },
  genai: {
    headline: 'I put LLMs to work on real, permissioned enterprise data.',
    sub: 'From GPT-4 prompt engineering that cut costs 80% to LLM-driven test tooling and Copilot-powered debugging — now building RAG, multi-agent and deep-agent systems with LangChain and LangGraph.',
  },
}

export const FACTS = [
  { value: '20+', label: 'SAP S/4HANA APIs integrated', lenses: ['fde', 'backend'] },
  { value: '12+', label: 'enterprise systems connected', lenses: ['fde'] },
  { value: 'up to 97%', label: 'faster pipelines after my JS migration', lenses: ['backend', 'fde'] },
  { value: '80%', label: 'cost cut with GPT-4 prompt engineering', lenses: ['genai'] },
  { value: '100k+', label: 'records from my LLM-assisted test proxy', lenses: ['genai', 'backend'] },
  { value: 'Star Employee', label: '2026, plus 2× Engineering Excellence', lenses: ['fde', 'backend', 'genai'] },
  { value: 'Knight', label: 'on LeetCode — 1850+ rating, 1000+ problems', lenses: ['backend'] },
]

// Nodes in the hero diagram — the systems Aryan connects.
export const SYSTEMS = [
  { label: 'SAP S/4HANA', lenses: ['fde', 'backend'] },
  { label: 'Salesforce', lenses: ['fde'] },
  { label: 'LangGraph', lenses: ['genai'] },
  { label: 'Snowflake', lenses: ['backend'] },
  { label: 'Oracle EPM', lenses: ['fde'] },
  { label: 'LLM APIs', lenses: ['genai'] },
  { label: 'PostgreSQL', lenses: ['backend'] },
  { label: 'AWS Identity', lenses: ['fde', 'backend'] },
  { label: 'FAISS', lenses: ['genai'] },
  { label: 'GitHub Actions', lenses: ['backend'] },
  { label: 'SFTP / CSV', lenses: ['fde'] },
  { label: 'Copilot', lenses: ['genai', 'backend'] },
]

export const EXPERIENCE = [
  {
    company: 'Pathlock',
    role: 'Software Engineer, R&D — Cloud Engineering',
    period: 'Jun 2024 – Present',
    summary:
      'Connectors team for Pathlock Cloud, an access-governance platform (SoD, provisioning, access reviews). I build the read and write flows between it and the systems customers run.',
    groups: [
      {
        title: 'Enterprise connectors',
        items: [
          {
            text: 'Own read and write connectors for **SAP S/4HANA, IBP, BTP, HANA DB and IDP (SCIM)**, Salesforce, Oracle EPM/HCM, AWS Identity Center, E2open and SFTP systems.',
            lenses: ['fde', 'backend'],
          },
          {
            text: 'Integrated **20+ SAP S/4HANA APIs** across REST, OData, SOAP and CDS/EDMX — pagination, transformation and entity generation for users, roles and entitlements.',
            lenses: ['fde', 'backend'],
          },
          {
            text: 'Developed **SAP HANA DB, Snowflake and relational database connectors** over ODBC with properly configured DSNs, for secure, high-performance data extraction.',
            lenses: ['backend'],
          },
          {
            text: 'Designed **delta synchronization** so each ~5-minute polling cycle fetches only changed records instead of the full dataset.',
            lenses: ['backend', 'fde'],
          },
          {
            text: 'Turned requirements from **SAP consultants, functional, sales and customer teams** into connector mappings, and debugged production issues in customer environments end to end.',
            lenses: ['fde'],
          },
          {
            text: 'Reached on-premise SAP through **SAP BTP Integration Suite** and standard BAPIs; built SFTP/CSV ingestion for systems with no API at all.',
            lenses: ['fde', 'backend'],
          },
          {
            text: 'Implemented **OAuth 2.0, JWT, X.509**, API-key and Basic auth for secure system-to-system access.',
            lenses: ['backend', 'fde'],
          },
        ],
      },
      {
        title: 'Speed, AI tooling and delivery',
        items: [
          {
            text: 'Led a POC migrating legacy in-house framework connectors to **JavaScript**, cutting execution times by **30% to 97%** across enterprise data pipelines.',
            lenses: ['backend', 'fde'],
          },
          {
            text: 'Pioneered **AI-augmented engineering**: enabled **GitHub Copilot** on a proprietary in-house framework, built custom CLI tools so workflows run without a full product setup, and configured **MITM proxies** that let Copilot debug network calls and pinpoint the exact failing API.',
            lenses: ['genai', 'backend', 'fde'],
          },
          {
            text: 'Built an API replay proxy that uses an **LLM to identify semantic fields** before amplifying JSON to **100k+ records** for connector load testing.',
            lenses: ['genai', 'backend'],
          },
          {
            text: 'Automated QA with a **GitHub Actions CI/CD** pipeline that runs nightly Postman validation suites end to end and emails failure reports before regressions ship.',
            lenses: ['backend'],
          },
        ],
      },
    ],
  },
  {
    company: 'Coding Ninjas',
    role: 'Software Developer Intern',
    period: 'Jan 2023 – Jun 2023',
    summary: 'Prompt engineering and AI tooling for an ed-tech platform, working with the content and product teams.',
    groups: [
      {
        title: 'AI products and tooling',
        items: [
          {
            text: 'Worked as a **prompt engineer**, semi-automating doubt-chat analysis and interview practice with **GPT-4**, Python and pandas — an **80% cost reduction**.',
            lenses: ['genai', 'fde'],
          },
          {
            text: 'Built **InterviewSaarthi**, an AI mock-interview platform (React, Redux, Firebase, **Gemini API**) with role-specific questions, answer bucketing and feedback, cutting interview anxiety by 68%.',
            lenses: ['genai', 'backend'],
            link: { label: 'Try InterviewSaarthi', href: 'https://interviewsaarthi.web.app/' },
          },
          {
            text: 'Built a **Doubt-Chat Analyzer** that uses an LLM to surface the topics learners struggle with most.',
            lenses: ['genai'],
          },
          {
            text: 'Built a **Django** question-answering platform that generates hints, solution explanations and summaries — **90% less time** spent solving problems.',
            lenses: ['backend', 'genai'],
          },
          {
            text: 'Worked with the product team on learner features like split-screen, and improved the content and NPS of the C++ and Java courses.',
            lenses: ['fde'],
          },
        ],
      },
    ],
  },
]

// status: 'live' | 'building'. Order = default order; each lens moves its matches to the front.
export const PROJECTS = [
  {
    title: 'API Replay & Payload Amplification',
    status: 'live',
    stack: ['Python', 'MITM proxy', 'LLM', 'Nginx'],
    blurb:
      'A programmable proxy that records and replays API traffic. An LLM identifies semantic fields, then responses are amplified to 100k+ records — so connectors can be load-tested without a large real backend.',
    lenses: ['backend', 'genai', 'fde'],
    links: [],
  },
  {
    title: 'Multi-Tenant SaaS API',
    status: 'live',
    stack: ['Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'JWT'],
    blurb:
      'A SaaS backend where every customer’s data stays scoped to their organization.',
    points: [
      'JWT authentication with tenant-level data isolation.',
      'Reusable RBAC middleware for fine-grained, server-side authorization across protected REST APIs.',
      'Centralized audit logging of user actions, tenant context, timestamps and metadata for compliance and traceability.',
      'PostgreSQL + Prisma models with routing, middleware, business logic and persistence in separate layers.',
    ],
    lenses: ['backend', 'fde'],
    links: [],
  },
  {
    title: 'TrailerGPT',
    status: 'live',
    stack: ['React', 'Redux', 'Tailwind', 'Firebase', 'Gemini', 'TMDB'],
    blurb:
      'A movie-discovery app (built as NetflixGPT) with Firebase auth, now-playing trailers from TMDB and Gemini-powered natural-language search.',
    lenses: ['genai', 'backend'],
    links: [{ label: 'Open TrailerGPT', href: 'https://trailergpt.web.app' }],
  },
  {
    title: 'MeetMate',
    status: 'live',
    award: '1st of 23 teams · PEC ACM Ideathon',
    stack: ['JavaScript', 'WebGazer.js', 'Plotly.js', 'Web Speech API', 'Heroku'],
    blurb:
      'A meeting tool that tracks attentiveness through eye gaze, records the screen, converts speech to text and generates PDF reports with charts.',
    lenses: ['fde'],
    links: [],
  },
  {
    title: 'Hybrid RAG retrieval lab',
    status: 'building',
    stack: ['Python', 'BM25', 'FAISS', 'Sentence embeddings', 'LangChain'],
    blurb:
      'A basic RAG pipeline with three retrievers side by side — a BM25 keyword index, a FAISS vector index and plain cosine similarity — to see which one surfaces the right context for each question.',
    lenses: ['genai'],
    links: [],
  },
  {
    title: 'Multi-agent research assistant',
    status: 'building',
    stack: ['LangGraph', 'LangChain', 'Tool calling', 'Web search'],
    blurb:
      'A LangGraph supervisor that routes work between planner, search, reader and writer agents, each with its own tools, to turn a question into a cited research brief.',
    lenses: ['genai'],
    links: [],
  },
  {
    title: 'Deep agent platform',
    status: 'building',
    stack: ['LangGraph', 'Python backend', 'Checkpointing', 'MCP tools'],
    blurb:
      'A long-running agent with planning, sub-agents and a proper backend: persisted state, context management, tool registry and streaming responses.',
    lenses: ['genai', 'backend'],
    links: [],
  },
  {
    title: 'ClonedTube',
    status: 'live',
    stack: ['React', 'Redux'],
    blurb: 'A YouTube clone with nested comments and debounced search suggestions.',
    lenses: ['backend'],
    links: [{ label: 'Open ClonedTube', href: 'https://clonedtube.web.app/' }],
  },
]

export const SKILLS = [
  {
    title: 'GenAI and LLMs',
    lenses: ['genai'],
    items: ['LangChain', 'LangGraph', 'Prompt engineering', 'RAG', 'MCP', 'Multi-agent systems', 'LoRA / QLoRA', 'OpenAI, Gemini, Claude APIs', 'Agent Skills & subagents', 'GitHub Copilot workflows', 'FAISS', 'Neo4j'],
  },
  {
    title: 'Integration',
    lenses: ['fde', 'backend'],
    items: ['REST', 'SOAP', 'OData', 'SCIM', 'BAPI', 'SAP BTP Integration Suite', 'CDS / EDMX', 'ODBC / DSN', 'SFTP', 'Delta sync', 'Pagination'],
  },
  {
    title: 'Auth and identity',
    lenses: ['fde', 'backend'],
    items: ['OAuth 2.0', 'JWT', 'X.509', 'SAML', 'RBAC', 'Multi-tenancy', 'Provisioning', 'Reconciliation', 'SoD', 'Role & entitlement sync'],
  },
  {
    title: 'Enterprise platforms',
    lenses: ['fde'],
    items: ['SAP S/4HANA', 'SAP BTP', 'SAP IBP', 'SuccessFactors', 'Ariba', 'Salesforce', 'Oracle EPM / HCM', 'AWS Identity Center', 'E2open', 'Snowflake'],
  },
  {
    title: 'Backend',
    lenses: ['backend'],
    items: ['Node.js', 'Express', 'Prisma', 'Django', 'Flask', 'REST API design'],
  },
  {
    title: 'Languages',
    lenses: ['backend', 'genai', 'fde'],
    items: ['C++', 'Python', 'JavaScript', 'SQL', 'HTML / CSS'],
  },
  {
    title: 'Databases',
    lenses: ['backend'],
    items: ['PostgreSQL', 'SAP HANA', 'Snowflake', 'MS SQL Server', 'MySQL', 'Oracle', 'MongoDB', 'Cassandra', 'SQLite'],
  },
  {
    title: 'Frontend',
    lenses: ['backend'],
    items: ['React', 'Redux', 'Tailwind CSS', 'Firebase'],
  },
  {
    title: 'Delivery and tooling',
    lenses: ['backend', 'fde'],
    items: ['GitHub Actions', 'CI/CD', 'Docker', 'Postman', 'Nginx', 'Load testing', 'Git', 'WSL'],
  },
  {
    title: 'Machine learning',
    lenses: ['genai'],
    items: ['TensorFlow', 'scikit-learn', 'CNNs', 'Transfer learning', 'Vision Transformers', 'pandas', 'NumPy'],
  },
]

export const ACHIEVEMENTS = [
  { title: 'Star Employee', detail: 'Pathlock', year: '2026', kind: 'star' },
  { title: 'Engineering Excellence, twice', detail: 'Pathlock, for connector and integration delivery', kind: 'award' },
  { title: 'LeetCode Knight', detail: '1850+ peak rating, 1000+ problems solved', kind: 'code' },
  { title: '1st of 23 teams', detail: 'PEC ACM Ideathon, with MeetMate', kind: 'award' },
  { title: '4th of 17 teams', detail: 'Smart India Hackathon internal round', kind: 'award' },
  { title: '99.3 percentile', detail: 'JEE Mains', kind: 'code' },
]

export const EDUCATION = [
  { school: 'Punjab Engineering College (PEC), Chandigarh', degree: 'B.Tech, Computer Science and Engineering · CGPA 7.51', period: '2020 – 2024' },
  { school: 'Gurukul Kurukshetra', degree: 'Senior Secondary · 96.8%', period: '' },
]

export const CERTIFICATIONS = [
  'Anthropic — Claude 101, Building with the Claude API, AI Fluency, Agent Skills & Subagents',
  'Coding Ninjas — Data Structures in C++ (98.82%)',
]
