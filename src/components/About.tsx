import React from 'react';
import SpotlightCard from './SpotlightCard';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative section-glow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-30 animate-pulse"></div>

                {/* Profile Card */}
                <SpotlightCard className="card-gradient rounded-2xl backdrop-blur-sm">
                  <div className="p-8">
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-8xl font-bold text-primary">
                      M
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Hey! I'm <span className="gradient-text">Miras</span>,
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold text-text-secondary mb-6">
                  a software engineer building real-time solutions.
                </h3>
              </div>

              <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                <p>
                  Software engineer with a computer science background and hands-on experience in front-end development,
                  real-time interfaces, and cross-functional product work. I built streaming interfaces for large language
                  model responses at Dview and collaborated closely with backend teams to deliver coordinated features.
                </p>

                <p>
                  Strong focus on structured execution, clarity in communication, and continuous improvement.
                  Currently working as a founding team member at Dview Technologies while also reviewing student
                  projects at Brototype. Aspiring to pursue a Master's in Germany (Summer 2026) and highly aligned
                  with programs like Master@IBM.
                </p>
              </div>

              {/* Key Skills */}
              <div className="pt-6">
                <h4 className="text-xl font-semibold mb-4">Core Competencies</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 font-medium hover:border-primary/50 transition-all">
                    Real-time Interfaces
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 font-medium hover:border-primary/50 transition-all">
                    API Integration
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 font-medium hover:border-primary/50 transition-all">
                    Structured Execution
                  </span>
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
