import React from 'react';
import SpotlightCard from './SpotlightCard';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: '💻',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'Python'],
    },
    {
      title: 'Frameworks',
      icon: '⚛️',
      skills: ['React.js', 'Redux Toolkit', 'PrimeReact', 'Bootstrap', 'Framer Motion', 'GSAP'],
    },
    {
      title: 'Tools',
      icon: '🛠️',
      skills: [
        'Vite',
        'Webpack',
        'npm',
        'ESLint',
        'Prettier',
        'Git',
        'GitHub',
        'Vercel',
        'Netlify',
        'Postman',
      ],
    },
    {
      title: 'Design',
      icon: '🎨',
      skills: [
        'Figma',
        'Responsive Web Design',
        'Media Queries',
        'Cross-browser Compatibility',
      ],
    },
  ];

  const coreSkills = [
    'Clean code practices',
    'Product thinking',
    'UI/UX collaboration',
    'Fast-paced execution',
    'Real-time AI platforms',
    'Server-Sent Events',
    'Performance optimization',
    'Cross-browser compatibility',
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            All of my Technical Knowledge
          </h2>
          <p className="text-text-secondary text-center mb-12 text-lg">in one place</p>

          {/* Technical Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <SpotlightCard
                key={index}
                className="card-gradient rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <svg
                        className="w-4 h-4 text-primary flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-text-secondary text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* Core Skills & Expertise */}
          <SpotlightCard className="card-gradient rounded-xl">
            <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Core Skills & Expertise</h3>
            <p className="text-text-secondary text-center mb-8">
              Key competencies that drive my development approach
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {coreSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-accent flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-text-secondary font-medium">{skill}</span>
                </div>
              ))}
            </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
