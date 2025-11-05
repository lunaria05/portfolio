"use client";

import React from 'react';
import { motion } from 'framer-motion';
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
    <div className="relative h-screen w-full bg-[#121212] flex flex-col items-center justify-between py-12 overflow-hidden">
      {/* Title Section - Top */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-domine font-bold text-[#e6e6e6] tracking-wider">
          MY SKILLS & TECHNOLOGIES
        </h1>
      </motion.div>

      {/* Tetris Grid - Bottom */}
      <div className="w-full max-w-6xl px-4 pb-8">
        <div className="flex flex-col gap-4">
          {tetrisGrid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-4">
              {row.map((tech, colIndex) => {
                if (!tech) {
                  return <div key={`empty-${rowIndex}-${colIndex}`} className="w-24 md:w-28 lg:w-32" />;
                }

                const cardIndex = rowIndex * 3 + Math.floor(colIndex / 2);

                return (
                  <motion.div
                    key={tech.name}
                    initial={{ y: -1000, opacity: 0, rotate: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      rotate: [0, -5, 5, 0]
                    }}
                    transition={{
                      duration: 0.8,
                      delay: cardIndex * 0.15,
                      ease: [0.34, 1.56, 0.64, 1], // Bouncy easing
                      rotate: {
                        duration: 0.4,
                        delay: cardIndex * 0.15 + 0.8,
                      }
                    }}
                    whileHover={{ scale: 1.1, y: -8, rotate: 5 }}
                    className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl hover:shadow-white/10 transition-all duration-300 flex flex-col items-center justify-center gap-3 group cursor-pointer w-24 md:w-28 lg:w-32 h-24 md:h-28 lg:h-32"
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
