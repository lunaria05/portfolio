"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import StaticGridPattern from './StaticGridPattern';

interface JourneyItem {
  year: string;
  title: string;
  description: string;
  duration?: string;
  achievement?: string;
}

interface HorizontalScrollContentProps {
  scrollProgress: MotionValue<number>;
  journeyData: JourneyItem[];
}

const HorizontalScrollContent: React.FC<HorizontalScrollContentProps> = ({ scrollProgress, journeyData }) => {
  // Horizontal scroll animation - ends when last card is visible
  const x = useTransform(scrollProgress, [0, 0.2, 0.5, 0.85, 1], ["60%", "30%", "0%", "-100%", "-100%"]);
  const opacity = useTransform(scrollProgress, [0, 0.15, 0.25, 0.8, 1], [0, 0.5, 1, 1, 1]);

  return (
    <motion.div
      style={{ x, opacity, willChange: 'transform' }}
      className="absolute inset-0 flex items-center gap-24 sm:gap-32 md:gap-44 pl-[5%] pr-[30%] md:pr-[50%]"
    >
      {/* Curved Timeline SVG - Smooth Rounded Wave */}
      <svg
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[150%] h-[250px] pointer-events-none"
        viewBox="0 0 1600 250"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.15)" />
            <stop offset="20%" stopColor="rgba(255, 255, 255, 0.35)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
            <stop offset="80%" stopColor="rgba(255, 255, 255, 0.35)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.15)" />
          </linearGradient>
        </defs>
        <path
          d="M 0,125 C 100,85 150,85 250,125 C 350,165 400,165 500,125 C 600,85 650,85 750,125 C 850,165 900,165 1000,125 C 1100,85 1150,85 1250,125 C 1350,165 1400,165 1500,125 L 1600,125"
          fill="none"
          stroke="url(#timelineGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Journey Cards */}
      {journeyData.map((item, index) => (
        <motion.div
          key={index}
          style={{ opacity }}
          className={`shrink-0 relative ${index % 2 === 0 ? 'self-start mt-16' : 'self-end mb-16'}`}
        >
          <div className="relative">
            {/* Card - Fixed Size */}
            <motion.div
              initial={{ opacity: 0, y: index % 2 === 0 ? -80 : 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1] // cubic-bezier for smooth easing
              }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.05, y: index % 2 === 0 ? -5 : 5 }}
              className="bg-linear-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 shadow-xl w-48 sm:w-56 md:w-64 h-[250px] sm:h-[270px] md:h-[280px] hover:shadow-white/10 transition-shadow duration-300 flex flex-col"
            >
              {/* Year Badge */}
              <div className="inline-block bg-white/25 backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1 rounded-full mb-1.5 sm:mb-2 w-fit">
                <span className="text-white font-domine font-semibold text-xs tracking-wider">
                  {item.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-domine font-semibold text-[#e6e6e6] mb-1.5 sm:mb-2 line-clamp-2">
                {item.title}
              </h3>

              {/* Description - Truncated */}
              <p className="text-white/80 font-domine text-xs sm:text-sm leading-relaxed mb-1.5 sm:mb-2 line-clamp-4 grow">
                {item.description}
              </p>

              {/* Additional Info */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {item.achievement && (
                  <div className="inline-block bg-teal-500/20 border border-teal-500/40 px-2 py-0.5 rounded">
                    <span className="text-teal-300 font-domine text-xs font-semibold">
                      {item.achievement}
                    </span>
                  </div>
                )}

                {item.duration && (
                  <div className="inline-block bg-purple-500/20 border border-purple-500/40 px-2 py-0.5 rounded">
                    <span className="text-purple-300 font-domine text-xs font-semibold">
                      {item.duration}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const MyJourney = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress based on section - this ensures smooth bidirectional scrolling
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const journeyData: JourneyItem[] = [
    {
      year: "2020",
      title: "Completed Science Education",
      description: "Successfully completed high school with Science stream, laying the foundation for my technical journey.",
    },
    {
      year: "2020-2024",
      title: "IT Engineering Degree",
      description: "B.Tech in Information Technology from LD College of Engineering, Ahmedabad",
      achievement: "CGPA: 8.68",
    },
    {
      year: "Feb 2024",
      title: "Software Development Intern",
      description: "Started my professional journey as a Software Developer Intern at Lampros Tech",
      duration: "6 months",
    },
    {
      year: "Aug 2024 - Present",
      title: "Software Development Engineer",
      description: "Promoted to full-time SDE role at Lampros Tech, working on cutting-edge web technologies",
    },
  ];

  return (
    <div ref={sectionRef} className="relative h-[180vh] w-full bg-[#121212]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center py-12 md:py-20 overflow-hidden px-4">
        {/* Title Section - Top Center */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-domine font-bold text-[#e6e6e6] tracking-wider">
            MY JOURNEY
          </h1>
        </motion.div>

        {/* Grid Container with Horizontal Timeline */}
        <div ref={gridContainerRef} className='relative bg-black rounded-r-full w-full md:w-[90%] lg:w-[85%] h-[45vh] sm:h-[50vh] overflow-hidden mt-12 md:mt-20'>
          {/* Static Grid Pattern */}
          <StaticGridPattern gridSize={40} />

          {/* Scrolling Content */}
          <HorizontalScrollContent scrollProgress={scrollYProgress} journeyData={journeyData} />
        </div>
      </div>
    </div>
  );
};

export default MyJourney;
