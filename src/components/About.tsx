import React from 'react';
import SpotlightCard from './SpotlightCard';
import { profile } from '../data/profile';

const About: React.FC = () => {
  const competencies = [
    'Client discovery & scoping',
    'Production integrations',
    'Workflow automation',
    'AI agents & MCP servers',
    'Serverless AWS',
    'Reusable tooling',
  ];

  const facts = [
    { label: 'Based in', value: profile.location },
    { label: 'Open to', value: 'Remote worldwide · On-site in Germany' },
    { label: 'Languages', value: profile.languages.join(', ') },
  ];

  return (
    <section id="about" className="py-20 relative section-glow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Card */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-30 animate-pulse"></div>

                <SpotlightCard className="card-gradient rounded-2xl backdrop-blur-sm">
                  <div className="p-8">
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-8xl font-bold text-primary mb-6">
                      M
                    </div>
                    <dl className="space-y-3">
                      {facts.map((fact) => (
                        <div key={fact.label} className="flex items-start justify-between gap-4 text-sm">
                          <dt className="text-text-secondary">{fact.label}</dt>
                          <dd className="font-medium text-right">{fact.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </SpotlightCard>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Hey! I'm <span className="gradient-text">{profile.shortName}</span>,
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold text-text-secondary mb-6">
                  a forward deployed software engineer who thinks like a product manager.
                </h3>
              </div>

              <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                <p>
                  I learn how a client's business works before writing code, then build, ship and maintain the
                  system that fits it. At Azolute AI I act as sole technical lead for clients: discovery, scoped
                  design, deployment and maintenance, including n8n automations such as an AI website support
                  agent and production integrations across payments, OAuth and event-driven AWS.
                </p>

                <p>
                  My flagship product, ClashCWL / Legend Smash, is a subscription platform on a serverless AWS
                  backend with 50+ modules and 500+ automated tests, built solo and AI-first. Before that I was a
                  founding team member at Dview Technologies, where I led the front end and built real-time LLM
                  streaming interfaces. I still run live technical reviews for Brototype's full-stack students.
                </p>

                <p>
                  My aim is simple: build systems that remove manual work so a company can run and grow with
                  minimal people and spend.
                </p>
              </div>

              {/* Key Skills */}
              <div className="pt-6">
                <h4 className="text-xl font-semibold mb-4">Core Competencies</h4>
                <div className="flex flex-wrap gap-3">
                  {competencies.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 font-medium hover:border-primary/50 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
