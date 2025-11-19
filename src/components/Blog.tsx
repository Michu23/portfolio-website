import React from 'react';
import SpotlightCard from './SpotlightCard';

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  link: string;
}

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      title: 'Building Real-time AI Streaming UIs with React',
      date: 'December 15, 2024',
      readTime: '8 min read',
      excerpt:
        'Deep dive into creating responsive interfaces for AI streaming applications using Server-Sent Events and React hooks - lessons from building DsenseStreamViewer.',
      link: '#',
    },
    {
      title: 'The Art of Frontend Performance Optimization',
      date: 'November 28, 2024',
      readTime: '6 min read',
      excerpt:
        "Practical strategies I used to reduce load times by 35% and improve user experience across web applications at Fabits.",
      link: '#',
    },
    {
      title: 'From CSS to Framer Motion: Animation Journey',
      date: 'October 10, 2024',
      readTime: '5 min read',
      excerpt:
        'My evolution from basic CSS animations to complex interactive experiences using Framer Motion and GSAP in modern React applications.',
      link: '#',
    },
  ];

  return (
    <section id="blogs" className="py-20 bg-background-secondary/50 relative section-glow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My learnings and thoughts on tech, UI, and AI
          </h2>
          <p className="text-text-secondary text-center mb-12 text-lg max-w-3xl mx-auto">
            I'm obsessed with writing clean code. I'm also obsessed with writing. Here, I write
            about my experiences with code and the things I've learned along the way.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <SpotlightCard
                key={index}
                className="card-gradient rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              >
                <article className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-text-secondary text-sm mb-4 space-x-4">
                  <time className="flex items-center space-x-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{post.date}</span>
                  </time>
                  <span className="flex items-center space-x-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-text-secondary mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                <a
                  href={post.link}
                  className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium"
                >
                  Read More
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
                </article>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
