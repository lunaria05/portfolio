"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import StaticGridPattern from './StaticGridPattern';

interface JourneyItem {
  year: string;
  title: string;
  description: string;
  duration?: string;
  achievement?: string;
}

const MyJourney = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);

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

  // Track scroll progress through the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={sectionRef} className="relative h-[300vh] w-full bg-[#121212]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center py-20 overflow-hidden">
        {/* Title Section - Top Center */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-domine font-bold text-[#e6e6e6] tracking-wider">
            MY JOURNEY
          </h1>
        </motion.div>

        {/* Grid Container with Horizontal Curved Timeline - No scrollbar */}
        <div ref={gridContainerRef} className='relative bg-black rounded-r-full w-full md:w-[85%] h-[50vh] overflow-hidden mt-20'>
          {/* Static Grid Pattern */}
          <StaticGridPattern gridSize={40} />

          {/* Scrolling Content */}
          <HorizontalScrollContent scrollProgress={scrollYProgress} journeyData={journeyData} />
        </div>
      </div>
    </div>
  );
};

// Separate component for horizontal scrolling content
const HorizontalScrollContent = ({
  scrollProgress,
  journeyData
}: {
  scrollProgress: any;
  journeyData: JourneyItem[];
}) => {
  // Transform scroll to horizontal movement - cards start from right and move left
  // Movement range covers full journey from right edge to left edge
  const x = useTransform(scrollProgress, [0.2, 0.9], [800, -2800]);

  return (
    <motion.div
      style={{ x }}
      className="absolute right-0 top-0 h-full flex items-center"
    >
            {/* Horizontal Smooth Curved SVG Path */}
            <svg
              className="absolute left-0 top-0 w-[3500px] h-full pointer-events-none"
              viewBox="0 0 3500 400"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 0 200 C 200 200, 250 80, 450 80 C 650 80, 700 200, 900 200 C 1100 200, 1150 320, 1350 320 C 1550 320, 1600 200, 1800 200 C 2000 200, 2050 80, 2250 80 C 2450 80, 2500 200, 2700 200 C 2900 200, 2950 320, 3150 320 C 3350 320, 3400 200, 3500 200"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

        {/* Timeline Cards - Horizontal Layout */}
        <div className="relative z-10 h-full flex items-center px-16 gap-16">
          {/* Starting spacer */}
          <div className="w-32 flex-shrink-0" />

          {journeyData.map((item, index) => (
            <TimelineCard
              key={index}
              item={item}
              index={index}
              scrollProgress={scrollProgress}
            />
          ))}

          {/* Ending spacer */}
          <div className="w-32 flex-shrink-0" />
        </div>
      </motion.div>
  );
};

// Timeline Card Component - Visible from start, slides with timeline
const TimelineCard = ({
  item,
  index,
  scrollProgress,
}: {
  item: JourneyItem;
  index: number;
  scrollProgress: any;
}) => {
  // Cards fade out as they move past the left edge
  // Calculate when each card exits based on its position in the timeline
  const exitStart = 0.3 + (index * 0.15);
  const exitEnd = 0.4 + (index * 0.15);

  const opacity = useTransform(
    scrollProgress,
    [0.2, exitStart, exitEnd],
    [1, 1, 0]
  );

  return (
    <motion.div
      style={{ opacity }}
      className={`flex-shrink-0 relative ${index % 2 === 0 ? 'self-start mt-16' : 'self-end mb-16'}`}
    >
      <div className="relative">
        {/* Connection Dot */}
        <motion.div
          style={{ opacity }}
          className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full border-2 border-[#121212] shadow-lg z-20 ${
            index % 2 === 0 ? '-bottom-6' : '-top-6'
          }`}
        />

        {/* Card - Compact Size */}
        <motion.div
          whileHover={{ scale: 1.05, y: index % 2 === 0 ? -5 : 5 }}
          className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl w-64 hover:shadow-white/10 transition-shadow duration-300"
        >
          {/* Year Badge */}
          <div className="inline-block bg-white/25 backdrop-blur-md px-3 py-1 rounded-full mb-2">
            <span className="text-white font-domine font-semibold text-xs tracking-wider">
              {item.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-domine font-semibold text-[#e6e6e6] mb-2">
            {item.title}
          </h3>

          {/* Description - Truncated */}
          <p className="text-white/80 font-domine text-sm leading-relaxed mb-2 line-clamp-3">
            {item.description}
          </p>

          {/* Additional Info */}
          <div className="flex flex-wrap gap-1.5 mt-2">
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
  );
};

export default MyJourney;
