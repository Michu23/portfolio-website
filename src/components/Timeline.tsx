import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TimelineItem {
  year: string;
  description: string;
  items: string[];
}

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const timelineData: TimelineItem[] = [
    {
      year: '2026',
      description: 'Launched ClashCWL / Legend Smash',
      items: [
        'Founded and solo-built a subscription platform on serverless AWS: 50+ modules, 500+ automated tests',
        '730+ commits and 200+ merged PRs in 3 months, AI-first with Claude Code',
        'Shipped billing across Paddle, PayPal and Razorpay, a Discord app, and an MCP-powered base builder',
      ],
    },
    {
      year: '2025',
      description: 'Co-founded Azolute AI Technologies',
      items: [
        'Wrapped up two years at Dview Technologies as a founding team member',
        'Started embedding with clients as sole technical lead: discovery, scoping, delivery, maintenance',
        'Delivered 10+ websites, 5+ apps and 3+ products end to end, including RetroBooth for a client in Germany',
      ],
    },
    {
      year: '2023',
      description: 'Joined Dview Technologies and built real-time AI interfaces',
      items: [
        'Joined Dview as Software Engineer and founding team member',
        'Built LLM streaming interfaces with Server-Sent Events and custom React hooks for Mirage (Dsense)',
        'Began running live technical reviews for Brototype students',
      ],
    },
    {
      year: '2022',
      description: 'From bootcamp to industry',
      items: [
        'Completed the Brototype Full Stack Bootcamp',
        'Full Stack Engineer at Bask: e-learning platform with social features',
        'UI/UX Developer at Fabits: goal-based investment flows for a fintech app',
      ],
    },
    {
      year: '2020',
      description: 'Graduated and began exploring web development',
      items: [
        'Graduated with a B.Sc in Computer Science from the University of Calicut',
        'Started exploring web development and modern frameworks',
      ],
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent mb-6">
              <span className="text-3xl text-white font-bold">M</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Here's a timeline of what I've been up to</h2>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative flex flex-col items-center justify-center">
            {/* Vertical Line Container */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] md:-translate-x-1/2">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-accent/20 to-primary/20" />
              <motion.div
                className="absolute top-0 left-0 right-0 origin-top bg-gradient-to-b from-primary via-accent to-primary"
                style={{ height: lineHeight }}
              />
            </div>

            {/* Timeline Items */}
            <div className="w-full space-y-0">
              {timelineData.map((item) => (
                <TimelineEntry key={item.year} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineEntryProps {
  item: TimelineItem;
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({ item }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ['end end', 'end center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.85, 1], [0, 0.25, 0.75, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.9, 1]);
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 1],
    [
      '0 0 0 4px var(--color-background), 0 0 20px rgba(139, 92, 246, 0.3)',
      '0 0 0 4px var(--color-background), 0 0 30px rgba(139, 92, 246, 0.8)',
    ]
  );

  return (
    <div className="relative grid w-full auto-cols-fr grid-cols-[3rem_1fr] gap-x-4 gap-y-6 py-12 md:grid-cols-[1fr_3rem_1fr] md:gap-x-8 md:py-16 lg:grid-cols-[1fr_4rem_1fr]">
      {/* Year */}
      <motion.div className="order-2 md:order-1 md:text-right md:pr-8" style={{ opacity, scale }}>
        <h3 className="text-4xl font-bold leading-[1.2] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent md:text-5xl lg:text-6xl">
          {item.year}
        </h3>
      </motion.div>

      {/* Circle Indicator */}
      <div className="order-1 flex justify-start md:order-2 md:justify-center">
        <motion.div
          ref={circleRef}
          className="sticky top-[50vh] size-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/50"
          style={{ scale, boxShadow }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-ping opacity-50" />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div className="order-3" style={{ opacity, scale }}>
        <div className="mb-6">
          <p className="text-xl font-semibold text-primary mb-4">{item.description}</p>
          <div className="space-y-3">
            {item.items.map((achievement, i) => (
              <div key={i} className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
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
      </motion.div>
    </div>
  );
};

export default Timeline;
