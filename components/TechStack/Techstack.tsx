"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiGithub, SiDocker, SiAmazon, SiVercel,
  SiRedux, SiGraphql, SiPrisma, SiPostman, SiFigma
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface Technology {
  name: string;
  icon: IconType;
  category: string;
  color: string;
}

const Techstack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,  // Animation will trigger every time
    amount: 0.3   // Trigger when 30% of component is in view
  });

  const technologies: Technology[] = [
    { name: 'React', icon: SiReact, category: 'Frontend', color: 'text-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend', color: 'text-white' },
    { name: 'TypeScript', icon: SiTypescript, category: 'Frontend', color: 'text-blue-400' },
    { name: 'JavaScript', icon: SiJavascript, category: 'Frontend', color: 'text-yellow-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend', color: 'text-teal-400' },
    { name: 'Redux', icon: SiRedux, category: 'Frontend', color: 'text-purple-400' },
    { name: 'Node.js', icon: SiNodedotjs, category: 'Backend', color: 'text-green-500' },
    { name: 'Express', icon: SiExpress, category: 'Backend', color: 'text-gray-400' },
    { name: 'GraphQL', icon: SiGraphql, category: 'Backend', color: 'text-pink-400' },
    { name: 'Prisma', icon: SiPrisma, category: 'Backend', color: 'text-teal-300' },
    { name: 'MongoDB', icon: SiMongodb, category: 'Database', color: 'text-green-400' },
    { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database', color: 'text-blue-300' },
    { name: 'MySQL', icon: SiMysql, category: 'Database', color: 'text-blue-400' },
    { name: 'Git', icon: SiGit, category: 'Tools', color: 'text-orange-500' },
    { name: 'GitHub', icon: SiGithub, category: 'Tools', color: 'text-white' },
    { name: 'Docker', icon: SiDocker, category: 'Tools', color: 'text-blue-500' },
    { name: 'AWS', icon: SiAmazon, category: 'Tools', color: 'text-orange-400' },
    { name: 'Vercel', icon: SiVercel, category: 'Tools', color: 'text-white' },
    { name: 'Postman', icon: SiPostman, category: 'Tools', color: 'text-orange-500' },
    { name: 'Figma', icon: SiFigma, category: 'Tools', color: 'text-purple-400' },
  ];

  // Create Tetris-style grid layout (5 rows with alternating stagger pattern)
  const createTetrisGrid = () => {
    const rows = 5;
    const cols = 6;
    const grid: (Technology | null)[][] = [];
    let techIndex = 0;

    for (let row = 0; row < rows; row++) {
      const rowArray: (Technology | null)[] = [];
      const isEvenRow = row % 2 === 0;

      for (let col = 0; col < cols; col++) {
        // Stagger pattern: even rows start with space, odd rows start with block
        const shouldHaveBlock = isEvenRow ? col % 2 === 1 : col % 2 === 0;

        if (shouldHaveBlock && techIndex < technologies.length) {
          rowArray.push(technologies[techIndex]);
          techIndex++;
        } else {
          rowArray.push(null);
        }
      }
      grid.push(rowArray);
    }

    return grid;
  };

  const tetrisGrid = createTetrisGrid();

  return (
    <div className="relative min-h-screen w-full bg-[#121212] flex flex-col items-center justify-between py-12 overflow-hidden">
      {/* Title Section - Top */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-domine font-bold text-[#e6e6e6] tracking-wider leading-30 mb-16">
          SKILLS & TECHNOLOGIES
        </h1>
      </motion.div>

      {/* Tetris Grid - Bottom */}
      <div ref={ref} className="w-full max-w-6xl px-4 pb-8">
        <div className="flex flex-col gap-0">
          {tetrisGrid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-0">
              {row.map((tech, colIndex) => {
                if (!tech) {
                  return <div key={`empty-${rowIndex}-${colIndex}`} className="w-36 md:w-40 lg:w-48" />;
                }

                // Animate from bottom to top: reverse the row index
                const reversedRowIndex = 4 - rowIndex; // Bottom row (4) becomes 0, top row (0) becomes 4
                const blockIndexInRow = Math.floor(colIndex / 2); // 0, 1, 2 for each block in row

                // Each row starts after previous row completes
                const rowBaseDelay = reversedRowIndex * 0.25; // 0.25s for all blocks in a row
                const blockDelay = blockIndexInRow * 0.08; // Stagger within row
                const totalDelay = rowBaseDelay + blockDelay;

                return (
                  <motion.div
                    key={tech.name}
                    initial={{ y: -600, opacity: 0 }}
                    animate={isInView ? {
                      y: 0,
                      opacity: 1
                    } : {
                      y: -600,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.5,
                      delay: totalDelay,
                      ease: [0.34, 1.26, 0.64, 1], // Smooth with slight bounce
                    }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="bg-linear-to-br from-white/15 to-white/5 backdrop-blur-md border-r border-b border-white/20 rounded-none p-4 shadow-xl hover:shadow-white/10 transition-all duration-300 flex flex-col items-center justify-center gap-3 group cursor-pointer w-36 md:w-40 lg:w-48 h-24 md:h-28 lg:h-32"
                  >
                    {/* Icon */}
                    <tech.icon className={`text-3xl md:text-4xl lg:text-5xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} />

                    {/* Name */}
                    <h3 className="text-[10px] md:text-xs font-domine font-semibold text-[#e6e6e6] text-center leading-tight">
                      {tech.name}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techstack;
