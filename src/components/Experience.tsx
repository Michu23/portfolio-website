import React from 'react';

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
      title: 'Software Engineer',
      company: 'Dview Technologies',
      period: 'Jul 2023 – Present',
      location: 'Bengaluru, India',
      current: true,
      achievements: [
        'Engineered DsenseStreamViewer, a real-time AI platform that renders LLM outputs using Server-Sent Events and multi-phase streaming with React, optimizing latency and UI control',
        'Drove product development by converting complex AI pipelines into responsive interfaces through tight integration with backend systems and deep product-level decision-making',
        'Developed advanced custom React hooks to orchestrate streaming states, boost performance, and enforce consistency across multi-phase AI response rendering workflows',
        'Implemented ECharts and Plotly to deliver high-performance visual layers for dynamic data, supporting critical decision-making across AI-driven dashboards and tools',
      ],
    },
    {
      title: 'UI/UX Developer',
      company: 'Fabits',
      period: 'Nov 2022 – Jul 2023',
      location: 'Bengaluru, India',
      achievements: [
        'Built responsive user interfaces for web and mobile, boosting user retention by 20%',
        'Streamlined frontend–backend integration, ensuring smooth data flows and reduced load time by 35%',
        'Ran structured UX testing loops, converting feedback into iterative design improvements',
        'Optimized landing pages and product interfaces to support performance marketing, better lead conversion rate',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Bask Creative',
      period: 'Jul 2022 – Nov 2022',
      location: 'Bengaluru, India',
      achievements: [
        'Delivered 4+ client-facing websites with cross-browser compatibility using React.js, Bootstrap, and CSS3',
        'Led a tech team to build an e-learning platform with a social-media-style feed for user interaction, Zoom-integrated video conferencing, and separate modules for tutors and learners',
        'Implemented responsive layouts and mobile-first design, reducing bounce rate by 22%',
        'Collaborated directly with UI/UX teams, aligning design systems with frontend delivery',
      ],
    },
  ];

  const training: Training[] = [
    {
      title: 'Full-stack Developer Trainee',
      company: 'Brototype',
      period: 'Nov 2021 – Jul 2022',
      location: 'Kochi, India',
      description: [
        'Built full-stack applications using Python-JS, following clean code standards and modular design practices',
        'Practiced DSA daily, solving 200+ problems to strengthen core logic-building and problem-solving skills',
        'Trained in an intensive 12–14 hr/day environment under the guidance of industry experts',
      ],
    },
    {
      title: 'Python Developer Trainee',
      company: 'iGuard',
      period: 'Nov 2021 – Jul 2022',
      location: 'Calicut, India',
      description: [
        'Applied core Python programming concepts to build scripts and utilities, focusing on object-oriented design',
        'Practiced and implemented data structures and algorithms in Python to solve real-world problems',
        'Gained hands-on experience with Python libraries such as NumPy, Pandas, and Matplotlib',
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
                <div key={index} className="card-gradient rounded-xl p-6 md:p-8 hover:shadow-xl transition-all duration-300">
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
                <div key={index} className="card-gradient rounded-xl p-6 hover:shadow-xl transition-all duration-300">
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
