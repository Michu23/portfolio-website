import React from 'react';
import SpotlightCard from './SpotlightCard';

interface Job {
  title: string;
  company: string;
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
      title: 'Software Engineer & Founding Team Member',
      company: 'Dview Technologies',
      period: 'Jul 2023 – Present',
      location: 'Bengaluru, India',
      current: true,
      achievements: [
        'Led end-to-end frontend development for the company\'s website and platform UI, handling design, implementation, and feature updates',
        'Built real-time LLM response interfaces using Server-Sent Events (SSE), custom React hooks, and structured streaming logic',
        'Designed interface flows in Figma and improved usability through refined layouts, interactions, and consistency',
        'Developed reusable UI components and collaborated with backend teams to align APIs and ensure smooth feature integration',
      ],
    },
    {
      title: 'Technical Reviewer (Part-Time)',
      company: 'Brototype',
      period: 'Jul 2023 – Present',
      location: 'Kochi, India',
      current: true,
      achievements: [
        'Reviewed weekly student projects across frontend, backend, and full-stack modules',
        'Provided clear feedback on code quality, problem-solving, and development practices to maintain consistency across batches',
      ],
    },
    {
      title: 'UI/UX Developer',
      company: 'Fabits',
      period: 'Nov 2022 – Jul 2023',
      location: 'Bengaluru, India',
      achievements: [
        'Delivered responsive web and mobile interfaces while improving load performance via optimized layout and integration',
        'Conducted structured UX feedback cycles with product/design teams, implementing changes that boosted user experience',
        'Refined landing pages and key product screens for clearer flows and stronger engagement',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Bask Creative',
      period: 'Jul 2022 – Nov 2022',
      location: 'Bengaluru, India',
      achievements: [
        'Built client websites using React and CSS, ensuring cross-browser and multi-device compatibility',
        'Led frontend development for an e-learning platform with role-based access, social-style feeds, and integrated video sessions',
        'Improved mobile usability by restructuring component behavior and layout responsiveness',
      ],
    },
  ];

  const training: Training[] = [
    {
      title: 'Full Stack Bootcamp',
      company: 'Brototype',
      period: 'Nov 2021 – Jul 2022',
      location: 'Kochi, India',
      description: [
        'Completed a 10-month program covering Python, Django, REST APIs, React, SQL, DSA, cloud deployment, and production workflows',
        'Built a full-stack MVP replacing Google-Sheet-based workflows with a role-based system for students, staff, and reviewers',
        'Gained hands-on experience through daily evaluations, tight deadlines, and continuous project delivery',
      ],
    },
    {
      title: 'Python Trainee',
      company: 'iGuard',
      period: 'Nov 2021 – Jul 2022',
      location: 'Calicut, India',
      description: [
        'Developed internal scripts for workflow automation using Python, applying OOP concepts and algorithmic thinking',
        'Performed small-scale data analysis using NumPy, Pandas, and Matplotlib for internal reporting',
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
              Crafting great UIs and solving tricky problems, company by company.
            </p>

            <div className="space-y-8">
              {jobs.map((job, index) => (
                <SpotlightCard key={index} className="card-gradient rounded-xl hover:shadow-xl transition-all duration-300">
                  <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                      <p className="text-xl text-primary font-semibold">{job.company}</p>
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
                        <svg
                          className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
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

          {/* Training & Internships Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Training & Internships
            </h2>
            <p className="text-text-secondary text-center mb-12 text-lg">
              Hands-on experience and intensive training programs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {training.map((item, index) => (
                <SpotlightCard key={index} className="card-gradient rounded-xl hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-lg text-primary font-semibold mb-2">{item.company}</p>
                  <p className="text-text-secondary mb-1">{item.period}</p>
                  <p className="text-text-secondary mb-4">{item.location}</p>

                  <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <svg
                          className="w-4 h-4 text-accent flex-shrink-0 mt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
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
