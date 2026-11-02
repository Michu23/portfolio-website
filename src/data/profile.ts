// Single source of truth for personal details shown across the site.
export const profile = {
  name: 'Miras Mujeeb',
  firstName: 'Miras',
  title: 'Forward Deployed Software Engineer',
  company: 'Azolute AI Technologies',
  companyUrl: 'https://azolute.one',
  email: 'miraspk98@gmail.com',
  linkedin: 'https://linkedin.com/in/miras98',
  linkedinLabel: 'linkedin.com/in/miras98',
  website: 'https://miras-dev.com',
  location: 'Calicut, Kerala, India',
  availability: 'Open to remote worldwide and on-site in Germany',
  resumeUrl: `${import.meta.env.BASE_URL}Miras_Mujeeb_Resume.pdf`,
  portraitUrl: `${import.meta.env.BASE_URL}portrait.webp`,
  languages: ['English', 'Malayalam', 'Hindi'],
  flagship: { name: 'ClashCWL', url: 'https://clashcwl.com' },
  legends: { name: 'Legend Smash', url: 'https://legends.clashcwl.com' },
};

export type ProjectCategory = 'Products' | 'Client Work' | 'AI & Automation' | 'Frontend';

export interface Project {
  title: string;
  category: ProjectCategory;
  year: string;
  type: string;
  description: string;
  stack: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'ClashCWL / Legend Smash',
    category: 'Products',
    year: '2026',
    type: 'Subscription platform',
    description:
      'Founder and sole engineer. Three branded sites from one multi-tenant React codebase on an event-driven serverless AWS backend with 50+ modules and 500+ automated tests. Automated scouting saves clan leaders 10 to 15 hours a week.',
    stack: ['React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'EventBridge'],
    link: 'https://clashcwl.com',
  },
  {
    title: 'TH18 Base Builder + MCP Server',
    category: 'AI & Automation',
    year: '2026',
    type: 'AI tooling',
    description:
      '44x44 grid editor with a rule engine, exposed through an MCP server so an LLM can draft, validate and save bases. Part of the ClashCWL platform.',
    stack: ['MCP', 'Claude API', 'TypeScript'],
    link: 'https://legends.clashcwl.com',
  },
  {
    title: 'Billing & Discord Integrations',
    category: 'Products',
    year: '2026',
    type: 'Integrations',
    description:
      'Four plans with free trials, weekly-resetting credits, an append-only ledger wallet and country routing across Paddle, PayPal and Razorpay. Discord app with OAuth, slash commands, role linking and real-time DM alerts.',
    stack: ['Paddle', 'PayPal', 'Razorpay', 'Discord API'],
    link: 'https://clashcwl.com',
  },
  {
    title: 'RetroBooth',
    category: 'Client Work',
    year: '2026',
    type: 'Flutter app',
    description:
      'Souvenir photo app for a client in Germany that turns HTML templates into printed keepsakes. Scoped, built and shipped in two weeks.',
    stack: ['Flutter', 'HTML templates'],
  },
  {
    title: 'AI Website Support Agent',
    category: 'AI & Automation',
    year: '2026',
    type: 'n8n automation',
    description:
      'n8n workflow automation for clients: an AI support agent that answers website visitors, plus recurring client patterns turned into reusable tooling so each deployment ships faster.',
    stack: ['n8n', 'OpenAI', 'Claude API'],
  },
  {
    title: 'Mirage (Dsense) Streaming UI',
    category: 'Frontend',
    year: '2024',
    type: 'Real-time LLM interface',
    description:
      'Real-time LLM streaming interfaces for an enterprise data analytics and AI chat platform at Dview Technologies, using Server-Sent Events and custom React hooks. Led the front end.',
    stack: ['React', 'Server-Sent Events', 'Custom hooks'],
  },
];

export interface Job {
  period: string;
  title: string;
  place: string;
  summary: string;
  bullets: string[];
}

export const jobs: Job[] = [
  {
    period: 'Dec 2025 · Now',
    title: 'Forward Deployed Software Engineer (Co-Founder)',
    place: 'Azolute AI Technologies, India',
    summary:
      'Embed with clients as sole technical lead: learn how the business works, turn ambiguous problems into a scoped design, then build, deploy and maintain the system that fits it.',
    bullets: [
      'Delivered 10+ websites, 5+ apps and 3+ products end to end, including RetroBooth, shipped in two weeks.',
      'ClashCWL / Legend Smash: subscription platform on serverless AWS with 50+ modules and 500+ automated tests; 730+ commits and 200+ merged PRs in 3 months.',
      'Production integrations from scratch: Paddle, PayPal and Razorpay billing with country routing; Discord OAuth, slash commands and real-time alerts.',
      'n8n automations for clients, including an AI website support agent, and an MCP server that lets an LLM draft and validate game bases.',
    ],
  },
  {
    period: 'Jul 2023 – Sep 2025',
    title: 'Software Engineer & Founding Team Member',
    place: 'Dview Technologies, Bengaluru',
    summary:
      'Worked directly with founders on product, clients and delivery. Rebuilt the website and platform about four times as the business repositioned roughly every three months.',
    bullets: [
      'Integrated services from 4 to 5 senior backend engineers into shipped product, aligning APIs between front end and backend.',
      'Built real-time LLM streaming interfaces (Server-Sent Events, custom React hooks) for Mirage (Dsense); led the front end.',
      'Beyond the front-end role: Figma product design, After Effects videos, Lottie animations and backend tasks.',
    ],
  },
  {
    period: 'Jul 2023 · Now',
    title: 'Technical Reviewer (Part-time)',
    place: 'Brototype, Kochi',
    summary:
      'Run live 1:1 technical reviews for students in a 24-week full-stack program: review code, question understanding, score and decide who advances.',
    bullets: ['Keeps me current and sharpens how I interview and evaluate engineers.'],
  },
  {
    period: 'Nov 2022 – Jul 2023',
    title: 'UI/UX Developer',
    place: 'Fabits, Bengaluru',
    summary:
      'Designed goal-based investment flows (retirement, wedding, travel) for a fintech app that tells users how much to invest from today.',
    bullets: ['Combined UI/UX design with competitor research and strategy ops to make flows feel familiar.'],
  },
  {
    period: 'Jul 2022 – Nov 2022',
    title: 'Full Stack Engineer',
    place: 'Bask, Bengaluru',
    summary: 'Built an e-learning platform with built-in social features.',
    bullets: [],
  },
];

export const milestones = [
  { title: 'ClashCWL / Legend Smash launched', year: '2026', link: 'https://clashcwl.com' },
  { title: 'Co-founded Azolute AI', year: '2025', link: 'https://azolute.one' },
  { title: 'Founding team at Dview', year: '2023' },
  { title: 'Brototype Full Stack Bootcamp', year: '2022' },
];

export const impact = [
  { title: '10 to 15 hours saved a week', sub: 'Per clan leader, through automated CWL scouting on ClashCWL', value: '15', unit: 'h/wk' },
  { title: '~267,000 attacks analysed weekly', sub: 'Daily pipeline over the top 5,000 Legend League players', value: '267', unit: 'k' },
  { title: '730+ commits, 200+ merged PRs', sub: 'In 3 months, solo, AI-first with Claude Code', value: '730', unit: '+' },
  { title: '~10,000 clans looked up', sub: 'In one 7-day league window', value: '10', unit: 'k' },
  { title: '10+ websites, 5+ apps, 3+ products', sub: 'Delivered end to end for Azolute AI clients', value: '18', unit: '+' },
  { title: 'Platform rebuilt 4 times', sub: 'At Dview, as the business repositioned every three months', value: '4', unit: 'x' },
];

export const skillGroups = [
  { label: 'AI & agents', tags: ['Claude API', 'OpenAI', 'MCP servers', 'AI agents', 'Prompt engineering', 'Claude Code'] },
  { label: 'Full-stack', tags: ['TypeScript', 'React', 'Vite', 'Next.js', 'Node.js', 'Python', 'Django', 'Flutter', 'PostgreSQL', 'Supabase'] },
  { label: 'Cloud & integrations', tags: ['AWS Lambda', 'DynamoDB', 'S3 + CloudFront', 'EventBridge', 'SES', 'GitHub Actions', 'Docker', 'n8n', 'Paddle', 'PayPal', 'Razorpay', 'Discord API', 'Twilio'] },
];

export const process = [
  { title: 'Discovery', text: 'Sit with the client, learn how the business runs, and find where the manual work hides.' },
  { title: 'Scope', text: 'Turn the ambiguous problem into a scoped design with clear outcomes and a short path to production.' },
  { title: 'Build', text: 'Ship integrations, automation and interfaces with tests from day one, AI-first where it speeds things up.' },
  { title: 'Deploy', text: 'Release on serverless infrastructure with CI/CD, monitoring and one-click releases.' },
  { title: 'Maintain', text: 'Keep it running, turn recurring requests into reusable tooling, and hand the client a system they can operate.' },
];
