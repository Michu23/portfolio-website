import React, { useState } from 'react';
import SpotlightCard from './SpotlightCard';
import { profile } from '../data/profile';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} <${formData.email}>`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: 'Email',
      value: profile.email,
      link: `mailto:${profile.email}`,
      external: false,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/miras98',
      link: profile.linkedin,
      external: true,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      label: 'Company',
      value: 'azolute.one',
      link: profile.companyUrl,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 relative section-glow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's build something that runs itself</h2>
            <p className="text-text-secondary text-lg">
              Have a workflow to automate, an integration to ship, or a team that needs a forward deployed engineer?
              Drop me a message.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <SpotlightCard className="card-gradient rounded-xl">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.link}
                        target={info.external ? '_blank' : undefined}
                        rel={info.external ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
                      >
                        <div className="text-primary group-hover:text-accent transition-colors">{info.icon}</div>
                        <div>
                          <p className="text-text-secondary text-sm">{info.label}</p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </SpotlightCard>

              {/* Availability */}
              <div className="hidden lg:block">
                <div className="relative w-full h-64 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center px-6">
                      <div className="text-6xl mb-4">🌍</div>
                      <p className="text-xl font-semibold">{profile.availability}</p>
                      <p className="text-text-secondary mt-2">Based in {profile.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <SpotlightCard className="card-gradient rounded-xl">
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-medium hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
