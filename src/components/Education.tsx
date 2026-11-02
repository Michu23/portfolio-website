import React from 'react';
import SpotlightCard from './SpotlightCard';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  note?: string;
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      degree: 'B.Sc Computer Science',
      institution: 'University of Calicut',
      year: '2017 – 2020',
    },
    {
      degree: 'Full Stack Bootcamp',
      institution: 'Brototype, Kochi',
      year: 'Nov 2021 – Jul 2022',
      note: 'Python, Django, REST APIs, React, SQL, DSA, cloud deployment',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Education</h2>
          <p className="text-text-secondary text-center mb-12 text-lg">
            Academic foundation in Computer Science, sharpened by an intensive bootcamp
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((item, index) => (
              <SpotlightCard
                key={index}
                className="card-gradient rounded-xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <svg className="w-12 h-12 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                  <p className="text-text-secondary mb-2">{item.institution}</p>
                  <p className="text-primary font-semibold">{item.year}</p>
                  {item.note && <p className="text-text-secondary text-sm mt-3">{item.note}</p>}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
