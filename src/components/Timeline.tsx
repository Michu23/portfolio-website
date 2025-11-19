import React from 'react';

interface TimelineItem {
  year: string;
  items: string[];
}

const Timeline: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      year: '2024',
      items: [
        'Continuing to build next-gen AI applications with streaming capabilities',
        'Exploring advanced React patterns and performance optimization',
        'Contributing to open-source projects and developer community',
      ],
    },
    {
      year: '2023',
      items: [
        'Joined Dview Technologies as Software Engineer',
        'Engineered DsenseStreamViewer real-time AI platform',
        'Mastered Server-Sent Events and multi-phase streaming',
        'Built production-ready AI-powered user interfaces',
      ],
    },
    {
      year: '2022',
      items: [
        'UI/UX Developer at Fabits - boosted user retention by 20%',
        'Frontend Developer at Bask Creative - reduced bounce rate by 22%',
        'Completed Full-stack Developer training at Brototype',
        'Built e-learning platform with social features and Zoom integration',
      ],
    },
    {
      year: '2021',
      items: [
        'Started journey in full-stack development',
        'Python Developer Trainee at iGuard',
        'Solved 200+ DSA problems to strengthen problem-solving skills',
      ],
    },
    {
      year: '2020',
      items: [
        'Graduated with B.Sc Computer Science from University of Calicut',
        'Started exploring web development and modern frameworks',
      ],
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent mb-6">
              <span className="text-3xl">M</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Here's a timeline of what I've been up to
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Year Badge */}
                  <div className="flex items-center md:w-1/2 mb-4 md:mb-0">
                    <div
                      className={`flex items-center ${index % 2 === 0
                          ? 'md:justify-end md:pr-8'
                          : 'md:justify-start md:pl-8'
                        }`}
                    >
                      <div className="flex items-center space-x-4">
                        {/* Dot */}
                        <div className="relative flex-shrink-0">
                          <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50"></div>
                          <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-50"></div>
                        </div>

                        {/* Year */}
                        <div className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-lg shadow-lg">
                          {item.year}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 pl-16 md:pl-0">
                    <div
                      className={`card-gradient rounded-xl p-6 space-y-3 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                        }`}
                    >
                      {item.items.map((achievement, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <svg
                            className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className="text-text-secondary leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
