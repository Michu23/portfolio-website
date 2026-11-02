import React from 'react';
import SpotlightCard from './SpotlightCard';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  link?: string;
  linkLabel?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'ClashCWL / Legend Smash',
      description:
        'Subscription platform for competitive Clash of Clans players, built solo as founder and sole engineer. Three branded sites from one multi-tenant React codebase on an event-driven serverless AWS backend (Lambda, DynamoDB, S3, CloudFront, EventBridge, SES) with 50+ modules and 500+ automated tests. Automated CWL scouting saves clan leaders 10–15 hours a week; a daily pipeline analyses ~267,000 attacks a week into a live army meta. Billing across Paddle, PayPal and Razorpay, a Discord app with OAuth and real-time alerts, and a self-running QA pipeline with one-click releases.',
      technologies: ['React', 'Vite', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'EventBridge', 'Discord API', 'Paddle', 'PayPal', 'Razorpay'],
      featured: true,
      link: 'https://clashcwl.com',
      linkLabel: 'Visit clashcwl.com',
    },
    {
      title: 'AI-Assisted TH18 Base Builder + MCP Server',
      description:
        '44x44 grid editor with a rule engine for Clash of Clans bases, exposed through an MCP server so an LLM can draft, validate and save bases against the rules. Part of the ClashCWL platform.',
      technologies: ['MCP', 'Claude API', 'TypeScript', 'Rule Engine'],
      link: 'https://legends.clashcwl.com',
      linkLabel: 'Visit Legend Smash',
    },
    {
      title: 'Mirage (Dsense) Streaming UI',
      description:
        'Real-time LLM streaming interfaces for an enterprise data analytics and AI chat platform at Dview Technologies, using Server-Sent Events and custom React hooks. Led the front end and aligned APIs with the backend team.',
      technologies: ['React', 'Server-Sent Events', 'Custom Hooks', 'ECharts', 'Plotly'],
    },
    {
      title: 'RetroBooth',
      description:
        'Flutter souvenir photo app for a client in Germany that turns HTML templates into printed keepsakes. Scoped, built and shipped in two weeks.',
      technologies: ['Flutter', 'HTML Templates', 'Client Delivery'],
    },
    {
      title: 'AI Website Support Agent',
      description:
        'n8n workflow automation for clients: an AI support agent that answers website visitors, plus recurring client patterns turned into reusable tooling so each deployment ships faster.',
      technologies: ['n8n', 'OpenAI', 'Claude API', 'Automation'],
    },
    {
      title: 'E-learning Platform',
      description:
        'Full-stack e-learning platform with built-in social features, built at Bask with separate flows for tutors and learners.',
      technologies: ['React', 'Node.js', 'Full Stack'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background-secondary/50 relative section-glow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">I've built some cool things</h2>
          <p className="text-text-secondary text-center mb-12 text-lg">
            Products, client systems and tooling, shipped end to end
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <SpotlightCard
                key={index}
                className={`card-gradient rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="p-6 md:p-8">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-bold mb-4">
                      Flagship
                    </span>
                  )}

                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium"
                    >
                      {project.linkLabel ?? 'View Project'}
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
