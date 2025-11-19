import React from 'react';
import SpotlightCard from './SpotlightCard';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  link?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'DsenseStreamViewer',
      description:
        'Real-time AI platform that renders LLM outputs using Server-Sent Events and multi-phase streaming with React, optimizing latency and UI control.',
      technologies: ['React', 'Server-Sent Events', 'ECharts', 'Plotly', 'Custom Hooks'],
      featured: true,
      link: '#',
    },
    {
      title: 'E-learning Platform',
      description:
        'Social-media-style feed for user interaction, Zoom-integrated video conferencing, and separate modules for tutors and learners.',
      technologies: ['React.js', 'Zoom API', 'Bootstrap', 'CSS3'],
      featured: true,
      link: '#',
    },
    {
      title: 'Responsive Web Applications',
      description:
        "4+ client-facing websites with cross-browser compatibility, mobile-first design, reducing bounce rate by 22%.",
      technologies: ['React.js', 'Bootstrap', 'CSS3', 'Responsive Design'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background-secondary/50 relative section-glow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            I've built some cool things
          </h2>
          <p className="text-text-secondary text-center mb-12 text-lg">
            Dive in to explore my creative coding adventures
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
                    Featured
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
                    className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium"
                  >
                    View Source
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
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
