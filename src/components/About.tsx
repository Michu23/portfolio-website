import React from 'react';

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
                <div className="relative card-gradient rounded-2xl p-8 backdrop-blur-sm">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-8xl font-bold text-primary">
                    M
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Hey! I'm <span className="gradient-text">Miras</span>,
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold text-text-secondary mb-6">
                  a frontend wizard exploring AI.
                </h3>
              </div>

              <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                <p>
                  I've been obsessed with technology ever since I was a kid. When I wasn't taking
                  apart my family's computer (sorry, mom), I was teaching myself how to code. Fast
                  forward a few years, and now I'm a full-fledged code ninja with an insatiable
                  thirst for creating beautiful websites and functional applications.
                </p>

                <p>
                  When I'm not busy slaying bugs and writing code, I'm usually busy indulging in my
                  two favorite hobbies: exploring new AI technologies and perfecting user
                  interfaces. I firmly believe that a good user experience and clean code can fix
                  just about anything, including my tendency to drink way too much coffee.
                </p>
              </div>

              {/* Featured Projects */}
              <div className="pt-6">
                <h4 className="text-xl font-semibold mb-4">Featured Projects</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 font-medium hover:border-primary/50 transition-all">
                    DsenseStreamViewer
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 font-medium hover:border-primary/50 transition-all">
                    AI Haircare Tracker
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
