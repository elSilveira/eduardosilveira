export interface PersonalProject {
  slug: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  detail: string;
  technicalFocus: string;
  impact: string;
  repositoryUrl: string;
  homepageUrl?: string;
  tags: string[];
  featured: boolean;
}

export const personalProjects: PersonalProject[] = [
  {
    slug: 'cge',
    name: 'CGE',
    category: 'Capability intelligence',
    status: 'Local analysis',
    summary:
      'Capability Graph Engine for measuring human capability convergence beyond keyword matching.',
    detail:
      'CGE models candidates and roles as transferable capabilities, measuring how skills converge across domains instead of treating missing keywords as missing ability.',
    technicalFocus:
      'FastAPI services, graph traversal, source-aware matching, resume and LinkedIn decomposition, GitHub profile analysis, machine-learning-ready embeddings, authentication, quotas, Docker deployment, and PostgreSQL-backed APIs.',
    impact:
      'Turns recruiting and talent evaluation into an explainable capability-transfer problem, making role matching more precise for non-linear career paths.',
    repositoryUrl: 'https://github.com/elSilveira/cge',
    tags: ['Python', 'FastAPI', 'Graph Modeling', 'Machine Learning', 'PostgreSQL', 'Docker'],
    featured: true,
  },
  {
    slug: 'semanticir',
    name: 'SemanticIR',
    category: 'AI developer tooling',
    status: 'Public repository',
    summary:
      'Prompt compiler and context gateway for deterministic, codebase-aware LLM workflows.',
    detail:
      'SemanticIR compiles raw user intent, reusable module context, skill constraints, and schema validation into structured prompts for coding agents, RAG-style context retrieval, MCP workflows, and general LLMs.',
    technicalFocus:
      'Python CLI tooling, MCP server entry points, FastAPI support, Pydantic schemas, token accounting, prompt engineering, prompt optimization, and persistent codebase context indexes for AI agents.',
    impact:
      'Reduces repeated recontextualization and prompt drift by turning codebase facts into reusable, validated context slices.',
    repositoryUrl: 'https://github.com/elSilveira/semanticir',
    tags: ['Python', 'RAG', 'LLM', 'MCP', 'AI Agents', 'Prompt Engineering', 'FastAPI'],
    featured: true,
  },
  {
    slug: 'helpai',
    name: 'HelpAI',
    category: 'Local AI assistant',
    status: 'Public repository',
    summary:
      'Windows AI overlay for QA sessions, training, coding help, screenshots, and audio analysis.',
    detail:
      'HelpAI provides a lightweight always-on-top overlay that can analyze microphone or system audio, screenshots, and quick text prompts with local-first LLM providers and agent-like assistance flows.',
    technicalFocus:
      'Python desktop overlay, Ollama support, faster-whisper transcription, screenshot capture, prompt engineering for QA/coding workflows, optional OpenAI vision/text analysis, xAI speech-to-text, and capture-excluded window behavior.',
    impact:
      'Makes AI assistance usable during real work sessions while preserving a local-first privacy model and avoiding app-side telemetry.',
    repositoryUrl: 'https://github.com/elSilveira/helpai',
    tags: ['Python', 'LLM', 'Ollama', 'Whisper', 'OpenAI', 'Prompt Engineering', 'AI Agents'],
    featured: true,
  },
  {
    slug: 'genesis-protocol',
    name: 'Genesis Protocol',
    category: 'Digital life research',
    status: 'Public repository',
    summary:
      'Rust framework for creating, evolving, and networking digital organisms.',
    detail:
      'Genesis Protocol experiments with digital DNA, adaptive neural systems, evolution engines, collective behavior, and peer-to-peer organism interaction.',
    technicalFocus:
      'Rust library design, Python bindings through maturin, async networking, cryptographic organism identity, evolutionary simulation, and extensible organism behavior.',
    impact:
      'Explores how biological metaphors can shape autonomous software entities, simulation systems, and networked adaptive agents.',
    repositoryUrl: 'https://github.com/elSilveira/genesis-protocol',
    homepageUrl: 'https://www.genesis-protocol.org',
    tags: ['Rust', 'Python', 'Simulation', 'AI Agents', 'Machine Learning', 'Networking'],
    featured: true,
  },
  {
    slug: 'genesis-chat',
    name: 'Genesis Chat',
    category: 'Experimental communication',
    status: 'Public repository',
    summary:
      'Chat system showcasing Genesis Protocol communication between digital organisms.',
    detail:
      'Genesis Chat demonstrates TRON organisms exchanging messages with biological memory concepts, lifecycle management, and consciousness-oriented commands.',
    technicalFocus:
      'Rust CLI application, Genesis Protocol integration, shared memory structures, clap command parsing, tokio async runtime, and multi-user organism messaging.',
    impact:
      'Acts as a concrete demo layer for the Genesis Protocol ideas, making abstract digital organism concepts observable through chat interactions.',
    repositoryUrl: 'https://github.com/elSilveira/genesis-chat',
    tags: ['Rust', 'Tokio', 'CLI', 'AI Agents', 'Simulation', 'Chat'],
    featured: false,
  },
  {
    slug: 'dolarotomorrow',
    name: 'Dolar Tomorrow',
    category: 'Financial forecasting',
    status: 'Public repository',
    summary:
      'USD/BRL prediction system using multi-horizon machine learning and economic news signals.',
    detail:
      'Dolar Tomorrow forecasts exchange-rate movement across horizons from one day to six months, combining technical indicators, ensemble models, confidence scoring, and news sentiment.',
    technicalFocus:
      'Python forecasting pipeline, Ridge Regression, Random Forest, Gradient Boosting, SVR, technical indicators, caching, scraping, HTML/CSS/JavaScript UI, and deployment configuration.',
    impact:
      'Turns currency forecasting into an explainable multi-horizon interface with confidence bands and cached model execution for faster responses.',
    repositoryUrl: 'https://github.com/elSilveira/dolarotomorrow',
    tags: ['Python', 'Machine Learning', 'Forecasting', 'Finance', 'JavaScript'],
    featured: true,
  },
  {
    slug: 'advanced-http-request-interceptor',
    name: 'Advanced HTTP Request Interceptor',
    category: 'Node.js observability',
    status: 'Public repository',
    summary:
      'Express middleware library for HTTP interception, logging, metrics, and auditing.',
    detail:
      'Advanced HTTP Request Interceptor provides request visibility for Express applications with performance metrics, slow-request detection, security audit logs, and TypeScript support.',
    technicalFocus:
      'TypeScript-ready Node package, Express middleware, route metrics, audit logging, request analysis, examples, documentation site, and zero-dependency runtime goals.',
    impact:
      'Gives production APIs a lightweight observability layer for debugging, compliance, performance tuning, and operational analytics.',
    repositoryUrl: 'https://github.com/elSilveira/advanced-http-request-interceptor',
    homepageUrl: 'https://elsilveira.github.io/advanced-http-request-interceptor',
    tags: ['TypeScript', 'Node.js', 'Express', 'Observability', 'Middleware'],
    featured: true,
  },
  {
    slug: 'autoinvoice',
    name: 'AutoInvoice',
    category: 'Productivity automation',
    status: 'Public repository',
    summary:
      'Small web tool for generating invoices quickly from a lightweight browser interface.',
    detail:
      'AutoInvoice is a compact JavaScript application focused on turning invoice generation into a one-click workflow with a simple static front end.',
    technicalFocus:
      'Vanilla JavaScript, static HTML, client-side form logic, GitHub Pages or Vercel-friendly deployment, and a minimal browser-based invoice flow.',
    impact:
      'Automates a repetitive administrative task with a low-friction tool that can be opened and used without a backend service.',
    repositoryUrl: 'https://github.com/elSilveira/autoinvoice',
    homepageUrl: 'https://autoinvoice-ecru.vercel.app',
    tags: ['JavaScript', 'HTML', 'Automation', 'Invoices'],
    featured: false,
  },
  {
    slug: 'meeting-copilot',
    name: 'Meeting Copilot',
    category: 'Browser extension',
    status: 'Public repository',
    summary:
      'React browser extension foundation for OpenAI-assisted meeting and context workflows.',
    detail:
      'Meeting Copilot is an extension project with Chrome and Firefox loading instructions, OpenAI key configuration, and a React-based extension shell for meeting assistance workflows.',
    technicalFocus:
      'React extension structure, Vite-style module setup, browser extension packaging, OpenAI configuration, JavaScript, CSS, SCSS, and static privacy documentation.',
    impact:
      'Explores how AI assistance can be embedded directly into browser-based meeting and context workflows instead of living in a separate app.',
    repositoryUrl: 'https://github.com/elSilveira/meeting-copilot',
    tags: ['React', 'JavaScript', 'Browser Extension', 'OpenAI', 'LLM', 'Prompt Engineering'],
    featured: false,
  },
];

export const featuredPersonalProjects = personalProjects.filter(
  (project) => project.featured,
);

export const projectCount = personalProjects.length;
