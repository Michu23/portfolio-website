import React from 'react';

const Hero: React.FC = () => {
  const techStack = [
    'React',
    'TypeScript',
    'Python',
    'Django',
    'Kubernetes',
    'Docker',
    'Git',
    'Figma',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Rotating Glow Background */}
      <div className="rotating-glow-container"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Availability Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-8 animate-pulse">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-green-500 text-sm font-medium">Available for freelance</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block mb-2">I'm a</span>
            <span className="gradient-text">software developer</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-text-secondary">
            building real-time interfaces and full-stack solutions.
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
            Software engineer with hands-on experience in front-end development, real-time interfaces, and cross-functional product work.
            Strong focus on structured execution, clarity in communication, and continuous improvement.
            Currently at <span className="text-primary font-semibold">Dview Technologies</span> as a founding team member.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#"
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-medium hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </a>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <p className="text-text-secondary font-medium">Building amazing things with</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-background-secondary border border-primary/20 text-sm font-medium hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
