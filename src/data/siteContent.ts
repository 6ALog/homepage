export const nav = {
  logo: '6A Logic',
  links: [
    {
      label: 'Services',
      href: '#services',
      dropdown: [
        { label: 'Business Suite',         href: '#business-suite' },
        { label: 'System Integration',     href: '#system-integration' },
        { label: 'MCP & AI Infrastructure',href: '#ai-infrastructure' },
        { label: 'Workflow Automation',    href: '#how-it-works' },
      ],
    },
    { label: 'Use Cases',    href: '#use-cases' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact',      href: '#contact' },
  ],
  cta: 'Book a Consultation',
}

export const hero = {
  eyebrow: 'AI-POWERED BUSINESS INFRASTRUCTURE',
  headline: ['UNIFY DATA.', 'AUTOMATE WORK.', 'MAKE AI USEFUL.'],
  gradientPhrase: 'MAKE AI USEFUL.',
  subtext:
    'Whether your business runs on Salesforce and QuickBooks or nothing at all, 6A Logic meets you where you are. We connect and AI-enable what you have, or build and host your entire software stack from scratch. Either way, you get a clean data foundation and an AI layer that actually works.',
  primaryCta: 'Book a Consultation',
  secondaryCta: 'See What We Build',
  pills: [
    'Hosted Business Suite',
    'System Integration',
    'MCP & AI Infrastructure',
    'Workflow Automation',
    'Custom Portals',
  ],
  systemStatus: [
    { from: 'Disconnected tools', to: 'unified data layer' },
    { from: 'Manual workflows',   to: 'automated execution' },
    { from: 'Messy data',         to: 'AI-ready context' },
  ],
  architectureInputs: [
    'Salesforce', 'QuickBooks', 'Microsoft 365', 'Excel', 'Database', 'Industry SaaS',
  ],
  architectureMiddle: [
    '6A Logic Data Layer', 'Sync Engine', 'Normalization', 'Reconciliation', 'Audit Logs',
  ],
  architectureOutputs: [
    'Dashboard', 'API', 'MCP Server', 'AI Assistant', 'Internal Tool',
  ],
}

export const aiUrgency = {
  eyebrow: 'THE 2026 REALITY',
  headline: 'IN 2026, AI IS NO LONGER A STRATEGY. IT\'S AN EXPECTATION.',
  subtext:
    'Every company in your market has committed to AI. The ones pulling ahead are not the ones with the most AI tools. They are the ones who built the data foundation underneath them first.',
  divider:
    'The question is no longer whether your business will use AI. It\'s whether your systems are ready for it.',
  stats: [
    {
      value: '7 in 10',
      label: 'companies have an active AI adoption mandate',
      note: 'and most are blocked by disconnected data',
    },
    {
      value: '5×',
      label: 'faster AI deployment',
      note: 'for businesses with connected operational data',
    },
    {
      value: '$500B+',
      label: 'committed to AI infrastructure',
      note: 'by enterprise leaders in 2025–2026',
    },
    {
      value: '#1',
      label: 'bottleneck in AI adoption',
      note: 'the model is never the problem. the data is.',
    },
  ],
  callout:
    'Companies without a connected data layer cannot build useful AI. They can only buy tools that don\'t work.',
}

export const businessSuite = {
  eyebrow: 'BUSINESS SUITE',
  headline: 'YOUR FULL BUSINESS STACK. HOSTED. AI-READY. YOURS.',
  subtext:
    'Most SMBs are either overpaying for enterprise SaaS or running on spreadsheets and guesswork. We give you a third option: battle-tested open-source business tools, hosted on your own private portal, configured for your workflows, and wired for AI from day one.',
  tracks: [
    {
      label: 'NO EXISTING TOOLS',
      badge: 'Start fresh',
      title: 'We build your full stack',
      description:
        'We select, configure, and host the right open-source tools for your business: CRM, accounting, project management, transcription, analytics, and more. All of it runs on a branded AWS-hosted portal you own and control.',
    },
    {
      label: 'HAVE EXISTING TOOLS',
      badge: 'Keep what works',
      title: 'We connect and unify them',
      description:
        'Already running Salesforce, QuickBooks, or MS 365? We integrate your existing stack, normalize the data, build the MCP layer, and put an AI interface on top. No rip-and-replace required.',
    },
  ],
  tools: [
    {
      name: 'CRM',
      description: 'Customer, contact & pipeline management',
      openSource: 'Twenty / SuiteCRM',
      icon: 'crm',
    },
    {
      name: 'Accounting',
      description: 'Invoicing, payments & financial reporting',
      openSource: 'Invoice Ninja / Akaunting',
      icon: 'accounting',
    },
    {
      name: 'Project Management',
      description: 'Tasks, boards, sprints & timelines',
      openSource: 'Plane / Taiga',
      icon: 'pm',
    },
    {
      name: 'Transcription',
      description: 'Meeting notes, call logs & search',
      openSource: 'Whisper / OpenAI-compatible STT',
      icon: 'transcript',
    },
    {
      name: 'Data Analytics',
      description: 'Dashboards, KPIs & business intelligence',
      openSource: 'Metabase / Apache Superset',
      icon: 'analytics',
    },
    {
      name: 'Workflow Automation',
      description: 'Cross-tool triggers & automated pipelines',
      openSource: 'n8n / custom workers',
      icon: 'automation',
    },
  ],
  portal: {
    headline: 'One portal. Every tool. Fully yours.',
    description:
      'Every client gets a dedicated, AWS-hosted portal. Log in to access your tools, your data, and your AI assistant. Everything in one place, branded to your business, owned by you.',
    features: [
      'Per-company AWS hosting',
      'Branded login portal',
      'Role-based access control',
      'Unified data across all tools',
      'AI assistant with full business context',
      'Scales as your team grows',
    ],
  },
  costNote:
    'Salesforce: $150+/user/month. HubSpot: $800+/month. QuickBooks: $200/month. We give you equivalent capability through open-source tools we host and manage, at a fraction of the cost, with no vendor lock-in.',
}

export const problem = {
  headline: 'YOUR AI PROBLEM IS PROBABLY A DATA PROBLEM.',
  subtext:
    'Most SMBs do not need another chatbot pasted on top of broken workflows. They need clean data paths, reliable integrations, and systems that agree with each other.',
  cards: [
    {
      label: 'FAILURE MODE 01',
      title: 'Disconnected CRMs and Accounting Systems',
      description:
        'Sales, finance, and operations work from different versions of the same data. No one trusts the numbers.',
    },
    {
      label: 'FAILURE MODE 02',
      title: 'Manual Spreadsheet Reconciliation',
      description:
        'Hours spent every week downloading, merging, and checking files that should update automatically.',
    },
    {
      label: 'FAILURE MODE 03',
      title: 'Reports That Do Not Match',
      description:
        'Revenue in the CRM never agrees with accounting. Inventory counts drift. Dashboards become decorative.',
    },
    {
      label: 'FAILURE MODE 04',
      title: 'Duplicate Customers, Vendors, and Records',
      description:
        'The same entity appears under five different IDs across three systems. Every query requires manual cleanup.',
    },
    {
      label: 'FAILURE MODE 05',
      title: 'Fragile API and Middleware Syncs',
      description:
        'Integrations break silently. Data stops flowing. No alerts, no logs, no clear ownership.',
    },
    {
      label: 'FAILURE MODE 06',
      title: 'AI Tools With No Safe Access to Real Business Context',
      description:
        'You want AI to help, but it cannot access your actual data, or it cannot be trusted when it does.',
    },
  ],
}

export const solution = {
  headline: 'BUILD THE INFRASTRUCTURE LAYER BETWEEN YOUR SYSTEMS, WORKFLOWS, AND AI.',
  subtext:
    '6A Logic connects your business systems, defines clean data models, builds reliable sync logic, automates repetitive processes, and exposes approved tools through dashboards, APIs, and hosted MCP servers.',
  before: [
    'Disconnected systems',
    'Manual handoffs',
    'Spreadsheet dependency',
    'Broken sync logic',
    'Unusable AI layer',
  ],
  after: [
    'Unified operational data',
    'Automated workflows',
    'Reliable integrations',
    'Clean reporting',
    'AI-accessible business systems',
  ],
}

export const metrics = [
  {
    label: 'DATA LAYER',
    value: '01',
    description: 'Canonical records across CRM, finance, and operations.',
  },
  {
    label: 'AUTOMATION',
    value: '24/7',
    description: 'Workflow execution without manual copy-paste.',
  },
  {
    label: 'AI ACCESS',
    value: 'MCP',
    description: 'Hosted tool interfaces for permissioned AI actions.',
  },
  {
    label: 'SYSTEM TRUST',
    value: 'SYNC',
    description: 'Reliable IDs, logs, and reconciliation paths.',
  },
]

export const services = [
  {
    label: 'SERVICE 01',
    id: 'business-suite',
    icon: '▦',
    title: 'Business Suite',
    tagline: 'Your full stack. Hosted. Owned.',
    description:
      "For businesses that need the right tools but can't justify enterprise SaaS pricing. We host open-source CRM, accounting, analytics, project management, and transcription on a private AWS portal, configured, integrated, and AI-ready from day one.",
    features: [
      'Open-source tool selection & setup',
      'Private AWS-hosted portal',
      'Custom configuration per business',
      'AI assistant layer included',
    ],
  },
  {
    label: 'SERVICE 02',
    id: 'system-integration',
    icon: '⇄',
    title: 'System Integration',
    tagline: 'Already have tools? We unify them.',
    description:
      'Connect Salesforce, QuickBooks, MS 365, and any other platform into a single reliable data layer. We normalize records, resolve conflicts, build sync logic, and give your team one version of the truth.',
    features: [
      'CRM + accounting sync',
      'Record normalization & deduplication',
      'Cross-platform workflow automation',
      'Audit logging & error monitoring',
    ],
  },
  {
    label: 'SERVICE 03',
    id: 'ai-infrastructure',
    icon: '◈',
    title: 'MCP & AI Infrastructure',
    tagline: 'Make your systems AI-accessible.',
    description:
      "We build and host MCP servers that give AI tools safe, permissioned access to your business data. Whether it's tying a few APIs together or fully hosting your AI infrastructure, your AI agents get real context, not hallucinations.",
    features: [
      'API-to-MCP conversion',
      'Hosted or self-hosted MCP servers',
      'Permissioned tool definitions',
      'AI agent integration & testing',
    ],
  },
  {
    label: 'SERVICE 04',
    id: 'workflow-automation',
    icon: '⟳',
    title: 'Workflow Automation',
    tagline: 'Replace manual work with logic.',
    description:
      'From quote-to-cash and invoice reconciliation to onboarding and approvals, we automate the repetitive processes draining your team using n8n, custom workers, or direct API integrations.',
    features: [
      'Cross-system automation design',
      'Custom workflow logic & routing',
      'Error handling & alerting',
      'Internal dashboards & admin tools',
    ],
  },
]

export const howItWorks = {
  headline: 'FROM OPERATIONAL MESS TO AI-READY INFRASTRUCTURE.',
  steps: [
    {
      label: 'STEP 01',
      title: 'Map the mess',
      description:
        'Audit systems, workflows, data sources, manual processes, reporting gaps, and failure points.',
    },
    {
      label: 'STEP 02',
      title: 'Design the data layer',
      description:
        'Define canonical records, IDs, sync rules, permissions, automation architecture, and error handling.',
    },
    {
      label: 'STEP 03',
      title: 'Build and connect',
      description:
        'Implement APIs, pipelines, automations, dashboards, MCP servers, and internal tools.',
    },
    {
      label: 'STEP 04',
      title: 'Deploy, monitor, improve',
      description:
        'Host, monitor, document, and iterate so the system stays reliable as the business changes.',
    },
  ],
}

export const useCases = [
  {
    label: 'USE CASE 01',
    title: 'Salesforce + QuickBooks Sync',
    problem: 'Sales, finance, and operations disagree because customer, invoice, and payment data are split across systems.',
    build: 'Reliable API-based sync logic, ID mapping, reconciliation dashboards, and error monitoring.',
    result: 'Cleaner records, fewer manual fixes, and more trustworthy reporting.',
  },
  {
    label: 'USE CASE 02',
    title: 'Customer & Vendor Record Matching',
    problem: 'The same entity appears under multiple IDs across CRM, ERP, and accounting, creating duplicate work and incorrect totals.',
    build: 'Deduplication pipelines, canonical ID assignment, merge rules, and audit logs.',
    result: 'Single source of truth for every entity, with a clear trail of what changed.',
  },
  {
    label: 'USE CASE 03',
    title: 'PO, Invoice, and Payment Reconciliation',
    problem: 'Accounts payable spends hours every period manually matching purchase orders, invoices, and payments across disconnected systems.',
    build: 'Automated three-way match logic, exception surfacing, and reconciliation dashboards.',
    result: 'Faster closes, fewer errors, and full visibility into open items.',
  },
  {
    label: 'USE CASE 04',
    title: 'Quote-to-Cash Automation',
    problem: 'Sales creates quotes in one tool, operations fulfills in another, and finance invoices from a third, with manual handoffs at every step.',
    build: 'End-to-end workflow automation connecting CRM, operations, and accounting with status tracking.',
    result: 'Faster revenue recognition, fewer dropped handoffs, and clear deal status across teams.',
  },
  {
    label: 'USE CASE 05',
    title: 'Spreadsheet-to-Database Migration',
    problem: 'Critical business data lives in Excel files that are hard to query, easy to corrupt, and impossible to automate against.',
    build: 'Structured database design, migration scripts, validation logic, and admin tooling.',
    result: 'Reliable queryable data that can feed dashboards, automations, and AI tools.',
  },
  {
    label: 'USE CASE 06',
    title: 'AI Assistant Connected to Business Systems',
    problem: "You want AI to answer questions about your business, but it doesn't have safe, accurate access to your actual data.",
    build: 'MCP server with permissioned read/write tool definitions, data normalization, and audit logging.',
    result: 'AI that can retrieve real context, respect permissions, and trigger approved workflows.',
  },
]

export const aiInfrastructure = {
  headline: 'WRAP YOUR EXISTING STACK IN AI. NOTHING GETS REPLACED.',
  subtext:
    'You don\'t need to replace Salesforce, QuickBooks, or your ERP. 6A Logic adds a permissioned AI-accessible layer on top of the tools you already run, so your AI tools can read, reason, and act on real business data from day one.',
  wrapNote:
    'Your existing systems stay. We add the layer that makes them AI-ready.',
  capabilities: [
    'MCP server development',
    'Hosted tool access',
    'Permissioned data retrieval',
    'API wrappers for internal systems',
    'AI-readable business context',
    'Human-in-the-loop workflow design',
    'Auditability and logging',
    'Secure credential handling',
    'Structured data pipelines',
  ],
  layers: [
    { label: 'INPUTS', items: ['Salesforce', 'QuickBooks', 'Excel', 'PostgreSQL', 'ERPs'] },
    { label: '6A LOGIC LAYER', items: ['Normalize', 'Sync', 'Reconcile', 'Audit'] },
    { label: 'MCP / API', items: ['Tool Definitions', 'Permission Rules', 'Rate Limits'] },
    { label: 'AI OUTPUTS', items: ['AI Assistant', 'Internal Tool', 'Dashboard', 'API Consumer'] },
  ],
}

export const features = [
  {
    tag: 'FEATURE 01',
    title: 'One source of operational truth',
    description:
      'Unify customer, financial, sales, and workflow data across disconnected tools into a single data layer your whole team can trust.',
  },
  {
    tag: 'FEATURE 02',
    title: 'Automations that match how your business actually works',
    description:
      'Replace manual handoffs and fragile spreadsheets with workflows designed around real operational logic, not generic templates.',
  },
  {
    tag: 'FEATURE 03',
    title: 'AI access without chaos',
    description:
      'Give AI tools controlled, permissioned access to the systems and data they need, with audit logs, rate limits, and human review gates.',
  },
  {
    tag: 'FEATURE 04',
    title: 'Custom tools instead of generic workarounds',
    description:
      'Build focused dashboards, portals, and internal apps around your exact processes, not features you will never use.',
  },
]

export const whySixALogic = {
  headline: 'PRACTICAL INFRASTRUCTURE. NOT AI THEATER.',
  differentiators: [
    {
      title: 'We meet you where you are',
      description: "Have existing tools? We connect them. Have nothing? We build your stack. Either way you get the same outcome: a unified, AI-ready business infrastructure.",
    },
    {
      title: 'No rip-and-replace',
      description: 'We add an AI-accessible layer on top of the tools you already run. Your Salesforce stays. Your QuickBooks stays. AI just finally gets real access to the data inside them.',
    },
    {
      title: 'Own your software',
      description: "Open-source tools mean no vendor lock-in, no per-seat pricing hikes, and no surprise deprecations. You own the stack we build you.",
    },
    {
      title: 'Business-process-first engineering',
      description: 'We start with how your business actually operates, not what a SaaS template assumes it does.',
    },
    {
      title: 'Data quality before AI',
      description: 'We fix the foundation before connecting AI tools. AI on dirty, fragmented data is still a problem.',
    },
    {
      title: 'Measurable operational leverage',
      description: "Every engagement targets concrete outcomes: hours saved, records fixed, workflows automated, tools replaced.",
    },
  ],
}

export const systems = {
  headline: 'SYSTEMS WE CAN CONNECT.',
  disclaimer: 'Common systems and categories 6A Logic can integrate with.',
  categories: [
    { label: 'CRM', items: ['Salesforce', 'HubSpot', 'Zoho CRM'] },
    { label: 'ACCOUNTING', items: ['QuickBooks', 'Xero'] },
    { label: 'PRODUCTIVITY', items: ['Microsoft 365', 'Google Workspace', 'Excel', 'SharePoint'] },
    { label: 'DATABASES', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Airtable'] },
    { label: 'AUTOMATION', items: ['n8n', 'Zapier', 'Make', 'Custom Workers'] },
    { label: 'CLOUD', items: ['AWS', 'Azure', 'Vercel', 'Supabase', 'Docker'] },
    { label: 'AI INFRA', items: ['MCP Protocol', 'REST APIs', 'Vector Databases', 'RAG Systems'] },
  ],
}

export const ctaBanner = {
  headline: 'MISSING TOOLS, DISCONNECTED SYSTEMS, OR NOT SURE WHERE TO START?',
  subtext:
    'Whether you need a full hosted business suite or just want to unify what you already have, 6A Logic can map the problem, design the right solution, and build it.',
  primaryCta: 'Book a Consultation',
  secondaryCta: 'Describe Your Setup',
}

export const finalCta = {
  headline: 'YOUR COMPETITORS ARE BUILDING AI INTO THEIR OPERATIONS. IS YOUR DATA LAYER READY?',
  subtext:
    'Every week without a connected data foundation is a week your competitors pull further ahead. 6A Logic builds the layer that makes AI real, not theoretical.',
  primaryCta: 'Book a Consultation',
  secondaryCta: 'Contact 6A Logic',
}

export const footer = {
  logo: '6A Logic',
  description: 'Data unification, automation, and AI infrastructure for small and mid-sized businesses.',
  email: 'contact@6alogic.com',
  copyright: '© 2026 6A Logic. All rights reserved.',
  links: [
    { label: 'Services',          href: '#services' },
    { label: 'Use Cases',         href: '#use-cases' },
    { label: 'How It Works',      href: '#how-it-works' },
    { label: 'AI Infrastructure', href: '#ai-infrastructure' },
    { label: 'Contact',           href: '#contact' },
  ],
  tickerItems: [
    'CRM_SYNC: ONLINE',
    'DATA_LAYER: NORMALIZED',
    'MCP_HOSTING: READY',
    'WORKFLOW_ENGINE: ACTIVE',
    'RECONCILIATION: RUNNING',
    'API_STATUS: STABLE',
    'AI_CONTEXT: PERMISSIONED',
    'DASHBOARDS: LIVE',
    'SYNC_ENGINE: OPERATIONAL',
    'AUDIT_LOGS: STREAMING',
  ],
}
