import React from 'react';
import SpotlightCard from './SpotlightCard';

interface Job {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  current?: boolean;
  achievements: string[];
}

interface Training {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      title: 'Forward Deployed Software Engineer (Co-Founder)',
      company: 'Azolute AI Technologies',
      companyUrl: 'https://azolute.one',
      period: 'Dec 2025 – Present',
      location: 'India · Remote',
      current: true,
      achievements: [
        'Embed with clients as sole technical lead: learn how the business works, turn ambiguous problems into a scoped design, then build, deploy and maintain the system that fits it',
        'Delivered 10+ websites, 5+ apps and 3+ products end to end, including RetroBooth, a Flutter souvenir photo app for a client in Germany, shipped in two weeks',
        'ClashCWL / Legend Smash (flagship product, founder and sole engineer): subscription platform on an event-driven serverless AWS backend with 50+ modules and 500+ automated tests; automated scouting saves clan leaders 10–15 hours a week',
        'Production integrations built from scratch: billing across Paddle, PayPal and Razorpay (UPI) with country routing; Discord app with OAuth, slash commands, role linking and real-time DM alerts; three branded sites from one multi-tenant codebase',
        'Daily data pipeline analysing ~267,000 attacks a week from the top 5,000 players; self-running QA pipeline with one-click release via Discord buttons; 730+ commits and 200+ merged PRs in 3 months',
        'n8n workflow automations for clients, including an AI website support agent, plus an MCP server that lets an LLM draft, validate and save game bases against a rule engine',
      ],
    },
    {
      title: 'Software Engineer & Founding Team Member',
      company: 'Dview Technologies',
      period: 'Jul 2023 – Sep 2025',
      location: 'Bengaluru, India',
      achievements: [
        'Worked directly with founders on product, clients and delivery; rebuilt the website and platform about four times as the business repositioned roughly every three months',
        'Integrated services from 4–5 senior backend engineers into shipped product, aligning APIs between front end and backend',
        'Built real-time LLM streaming interfaces (Server-Sent Events, custom React hooks) for Mirage (Dsense), an enterprise data analytics and AI chat platform; led the front end',
        'Beyond the front-end role: Figma product design, After Effects videos, Lottie animations and backend tasks',
      ],
    },
    {
      title: 'Technical Reviewer (Part-Time)',
      company: 'Brototype',
      period: 'Jul 2023 – Present',
      location: 'Kochi, India',
      current: true,
      achievements: [
        'Run live 1:1 technical reviews for students in a 24-week full-stack program: review code, question understanding, score and decide who advances',
        'Keeps me current and sharpens how I interview and evaluate engineers',
      ],
    },
    {
      title: 'UI/UX Developer',
      company: 'Fabits',
      period: 'Nov 2022 – Jul 2023',
      location: 'Bengaluru, India',
      achievements: [
        'Designed goal-based investment flows (retirement, wedding, travel) for a fintech app that tells users how much to invest from today',
        'Combined UI/UX design with competitor research and strategy ops to make flows feel familiar',
      ],
    },
    {
      title: 'Full Stack Engineer',
      company: 'Bask',
      period: 'Jul 2022 – Nov 2022',
      location: 'Bengaluru, India',
      achievements: ['Built an e-learning platform with built-in social features'],
    },
  ];

  const training: Training[] = [
    {
      title: 'Full Stack Bootcamp',
      company: 'Brototype',
      period: 'Nov 2021 – Jul 2022',
      location: 'Kochi, India',
      description: [
        '10-month program covering Python, Django, REST APIs, React, SQL, DSA and cloud deployment',
        'Built a full-stack MVP with role-based access for students, staff and reviewers',
        'Daily evaluations, tight deadlines and continuous project delivery',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background-secondary/50 relative section-glow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Work Experience Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Work Experience</h2>
            <p className="text-text-secondary text-center mb-12 text-lg">
              From founding teams to my own studio: shipping systems clients can run themselves.
            </p>

            <div className="space-y-8">
              {jobs.map((job, index) => (
                <SpotlightCard key={index} className="card-gradient rounded-xl hover:shadow-xl transition-all duration-300">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                        {job.companyUrl ? (
                          <a
                            href={job.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl text-primary font-semibold hover:text-accent transition-colors"
                          >
                            {job.company}
                          </a>
                        ) : (
                          <p className="text-xl text-primary font-semibold">{job.company}</p>
                        )}
                      </div>
                      <div className="text-left md:text-right">
                        <p className="text-text-secondary mb-1">{job.period}</p>
                        <p className="text-text-secondary mb-2">{job.location}</p>
                        {job.current && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 text-sm font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-text-secondary leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Training Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Training</h2>
            <p className="text-text-secondary text-center mb-12 text-lg">
              Intensive, hands-on full-stack training
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {training.map((item, index) => (
                <SpotlightCard key={index} className="card-gradient rounded-xl hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-2">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-lg text-primary font-semibold mb-2">{item.company}</p>
                    <p className="text-text-secondary mb-1">{item.period}</p>
                    <p className="text-text-secondary mb-4">{item.location}</p>

                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <svg className="w-4 h-4 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-text-secondary text-sm leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
