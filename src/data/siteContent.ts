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
  headline: ['MESSY SYSTEMS.', 'MANUAL WORKAROUNDS.', 'NOT ANYMORE.'],
  gradientPhrase: 'NOT ANYMORE.',
  subtext:
    'Your business runs on disconnected software, manual spreadsheets, and reports no one fully trusts. 6A Logic cleans up your systems, connects your data, automates the repetitive work, and gets your operations ready for AI — whether you have five tools already or none at all.',
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
  headline: 'THE TOOLS YOUR BUSINESS NEEDS. SET UP AND RUNNING FROM DAY ONE.',
  subtext:
    'Most growing businesses are either overpaying for software they barely use, or making do with spreadsheets and workarounds. We give you a third option: a complete, integrated business stack — CRM, accounting, project management, analytics, and more — set up and configured for how your business actually works, at a price that makes sense.',
  tracks: [
    {
      label: 'NO EXISTING TOOLS',
      badge: 'Start fresh',
      title: 'We build your full stack',
      description:
        'We select, set up, and manage the right tools for your business: CRM, accounting, project management, transcription, analytics, and more. Everything runs in one place, configured for your workflows, so your team logs in and gets to work.',
    },
    {
      label: 'HAVE EXISTING TOOLS',
      badge: 'Keep what works',
      title: 'We connect and unify them',
      description:
        'Already running Salesforce, QuickBooks, or MS 365? We connect your existing tools, clean up the data, and make everything work together. Your team keeps using the software they know. Everything just finally agrees.',
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
    'Salesforce: $150+/user/month. HubSpot: $800+/month. QuickBooks: $200/month. We set up and manage tools that do the same job, at a fraction of the cost. No vendor lock-in. No bloated feature sets you will never use.',
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
    tagline: 'The tools you need. None of the complexity.',
    description:
      "For businesses that are overpaying for software they don't fully use, or still held together by spreadsheets. We set up and manage a complete, integrated business stack — configured for your workflows, connected to each other, and ready to grow with you.",
    features: [
      'CRM, accounting, analytics & more — fully set up',
      'One login, every tool, all your data in one place',
      'Configured around your workflows, not generic defaults',
      'AI that can answer questions from your actual business data',
    ],
  },
  {
    label: 'SERVICE 02',
    id: 'system-integration',
    icon: '⇄',
    title: 'System Integration',
    tagline: 'Your tools disagree. We fix that.',
    description:
      'If your CRM, accounting software, and spreadsheets are telling three different stories, that is the problem we solve. We connect your existing platforms, clean up the data, and build reliable sync so your team works from one version of the truth — not the latest manual export.',
    features: [
      'CRM, accounting & ops data that finally agree',
      'Duplicate records resolved, one source of truth',
      'Manual handoffs replaced with automatic triggers',
      'Alerts and visibility when something breaks',
    ],
  },
  {
    label: 'SERVICE 03',
    id: 'ai-infrastructure',
    icon: '◈',
    title: 'MCP & AI Infrastructure',
    tagline: 'AI that works with your real data.',
    description:
      "Most AI tools fail in real business environments because they have no reliable access to your actual data. We build the connection layer that gives your AI tools accurate, permissioned access to your CRM, invoices, pipeline, and operations — so you get real answers instead of confident guesses.",
    features: [
      'Your existing tools connected to AI — nothing replaced',
      'We manage the infrastructure, your team manages the work',
      'AI only accesses what it is supposed to',
      'Tested against your real data before going live',
    ],
  },
  {
    label: 'SERVICE 04',
    id: 'workflow-automation',
    icon: '⟳',
    title: 'Workflow Automation',
    tagline: 'Stop doing the same thing twice.',
    description:
      'We identify the repetitive steps your team handles manually — copying data between tools, routing approvals, reconciling invoices, sending follow-ups — and replace them with reliable automated logic. Your team stops doing the same thing twice and focuses on work that actually moves the business forward.',
    features: [
      'Workflows designed around how your business actually runs',
      'Approvals, notifications and conditional routing',
      'Alerts when something needs a human decision',
      'Dashboards that show what is running and what is not',
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
    'You do not need to replace Salesforce, QuickBooks, or any other tool your team depends on. We build the connection between your existing systems and your AI tools, so the AI has real, accurate business context to work from — not a best guess based on outdated training data.',
  wrapNote:
    'Your existing systems stay. We add the layer that makes them AI-ready.',
  capabilities: [
    'AI answers from your real business data, not guesses',
    'Your existing tools stay — nothing gets replaced',
    'Access controls so AI only touches approved systems',
    'Human review before AI takes action on anything critical',
    'Full audit trail of what was accessed and when',
    'Works with the tools your team already uses daily',
    'Data cleaned and structured before AI touches it',
    'Tested against your actual data before going live',
    'Scales as you add more tools and workflows',
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
  headline: 'PRACTICAL RESULTS. NOT AI THEATER.',
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
      description: 'We clean up the foundation before connecting AI tools. AI on dirty, fragmented data is still a mess — just a faster one.',
    },
    {
      title: 'Concrete outcomes, not deliverables',
      description: "Every engagement targets results you can measure: hours saved per week, records cleaned up, manual steps eliminated, workflows running automatically.",
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
