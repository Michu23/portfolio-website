import React from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      degree: 'B.Sc Computer Science',
      institution: 'University of Calicut',
      year: '2017 - 2020',
    },
    {
      degree: '12th Grade',
      institution: 'Ansar English School, India (CBSE)',
      year: '2017',
    },
    {
      degree: '10th Grade',
      institution: 'Ideal Indian School, Qatar (CBSE)',
      year: '2015',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Education</h2>
          <p className="text-text-secondary text-center mb-12 text-lg">
            Academic foundation in Computer Science
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((item, index) => (
              <div
                key={index}
                className="card-gradient rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 mx-auto text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                <p className="text-text-secondary mb-2">{item.institution}</p>
                <p className="text-primary font-semibold">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
