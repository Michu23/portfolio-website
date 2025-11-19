import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

interface TimelineItem {
  year: string;
  description: string;
  items: string[];
  image?: string;
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
      year: '2024',
      description: 'Building the future of AI applications',
      items: [
        'Continuing to build next-gen AI applications with streaming capabilities',
        'Exploring advanced React patterns and performance optimization',
        'Contributing to open-source projects and developer community',
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    },
    {
      year: '2023',
      description: 'Joined Dview Technologies and built real-time AI platforms',
      items: [
        'Joined Dview Technologies as Software Engineer',
        'Engineered DsenseStreamViewer real-time AI platform',
        'Mastered Server-Sent Events and multi-phase streaming',
        'Built production-ready AI-powered user interfaces',
      ],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop',
    },
    {
      year: '2022',
      description: 'UI/UX Development and Full-stack Training',
      items: [
        'UI/UX Developer at Fabits - boosted user retention by 20%',
        'Frontend Developer at Bask Creative - reduced bounce rate by 22%',
        'Completed Full-stack Developer training at Brototype',
        'Built e-learning platform with social features and Zoom integration',
      ],
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop',
    },
    {
      year: '2021',
      description: 'Started the journey in full-stack development',
      items: [
        'Started journey in full-stack development',
        'Python Developer Trainee at iGuard',
        'Solved 200+ DSA problems to strengthen problem-solving skills',
      ],
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop',
    },
    {
      year: '2020',
      description: 'Graduated and began exploring web development',
      items: [
        'Graduated with B.Sc Computer Science from University of Calicut',
        'Started exploring web development and modern frameworks',
      ],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent mb-6">
              <span className="text-3xl">M</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Here's a timeline of what I've been up to
            </h2>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative flex flex-col items-center justify-center">
            {/* Vertical Line Container */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] md:-translate-x-1/2">
              {/* Background line */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-accent/20 to-primary/20" />
              {/* Animated fill line */}
              <motion.div
                className="absolute top-0 left-0 right-0 origin-top bg-gradient-to-b from-primary via-accent to-primary"
                style={{
                  height: lineHeight,
                }}
              />
            </div>

            {/* Timeline Items */}
            <div className="w-full space-y-0">
              {timelineData.map((item, index) => (
                <TimelineItem key={item.year} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ['end end', 'end center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.85, 1], [0, 0.25, 0.75, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.9, 1]);

  return (
    <div className="relative grid w-full auto-cols-fr grid-cols-[3rem_1fr] gap-x-4 gap-y-6 py-12 md:grid-cols-[1fr_3rem_1fr] md:gap-x-8 md:py-16 lg:grid-cols-[1fr_4rem_1fr]">
      {/* Year - Left side on desktop, top on mobile */}
      <motion.div
        className="order-2 md:order-1 md:text-right md:pr-8"
        style={{ opacity, scale }}
      >
        <h3 className="text-4xl font-bold leading-[1.2] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent md:text-5xl lg:text-6xl">
          {item.year}
        </h3>
      </motion.div>

      {/* Circle Indicator */}
      <div className="order-1 flex justify-start md:order-2 md:justify-center">
        <motion.div
          ref={circleRef}
          className="sticky top-[50vh] size-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/50"
          style={{
            scale,
            boxShadow: useTransform(
              scrollYProgress,
              [0, 1],
              [
                '0 0 0 4px var(--color-background), 0 0 20px rgba(139, 92, 246, 0.3)',
                '0 0 0 4px var(--color-background), 0 0 30px rgba(139, 92, 246, 0.8)',
              ]
            ),
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-ping opacity-50" />
        </motion.div>
      </div>

      {/* Content - Right side on desktop, bottom on mobile */}
      <motion.div className="order-3" style={{ opacity, scale }}>
        <div className="mb-6">
          <p className="text-xl font-semibold text-primary mb-4">{item.description}</p>
          <div className="space-y-3">
            {item.items.map((achievement, i) => (
              <div key={i} className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
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

        {/* Image */}
        {item.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <SpotlightCard className="overflow-hidden rounded-xl card-gradient">
              <img
                src={item.image}
                alt={`${item.year} milestone`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </SpotlightCard>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Timeline;
