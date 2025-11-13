"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import projectsData from '@/data/projects.json';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: {
    [key: string]: string[];
  };
  keyFeatures: string[];
  visuals: string[];
  projectLink: string;
  githubLink: string;
}

const MyProjects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600;
      const newPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'React': 'text-cyan-400',
      'Redux': 'text-purple-400',
      'Next.js': 'text-white',
      'TypeScript': 'text-blue-500',
      'JavaScript': 'text-yellow-400',
      'Node.js': 'text-green-500',
      'Express.js': 'text-green-400',
      'MongoDB': 'text-green-400',
      'PostgreSQL': 'text-blue-400',
      'GraphQL': 'text-pink-400',
      'React Native': 'text-cyan-400',
      'Firebase': 'text-orange-400',
      'Git': 'text-orange-500',
      'Docker': 'text-blue-500',
      'AWS': 'text-orange-400',
    };
    return colors[tech] || 'text-white';
  };

  return (
    <div id="projects" className="relative min-h-screen w-full bg-black py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 px-4 md:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-luckiestguy text-white uppercase tracking-wider mb-4">
            Featured Projects
          </h2>
          <p className="text-[#e6e6e6] text-lg md:text-xl font-domine max-w-3xl mx-auto">
            A showcase of my recent work in web development, from full-stack applications to mobile experiences
          </p>
        </motion.div>

        {/* Scroll Controls */}
        <div className="flex justify-end gap-4 mb-8 px-4">
          <button
            onClick={() => scroll('left')}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-white" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-white" />
          </button>
        </div>

        {/* Projects Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-8 scroll-smooth hide-scrollbar px-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {(projectsData as unknown as Project[]).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex-shrink-0 w-[90vw] md:w-[600px] bg-[#121212] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300"
            >
              {/* Project Card Content */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-luckiestguy text-white uppercase mb-4">
                  {project.title.split('–')[0].trim()}
                </h3>
                <p className="text-lg text-white/70 font-domine mb-2">
                  {project.title.split('–')[1]?.trim()}
                </p>

                {/* Description */}
                <p className="text-[#e6e6e6] font-domine mb-6 line-clamp-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white font-luckiestguy text-sm uppercase mb-3 tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {Object.values(project.technologies).flat().slice(0, 8).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-domine border ${getTechColor(tech)} border-current bg-white/5`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features - Expandable */}
                <div className="mb-6">
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="text-white font-luckiestguy text-sm uppercase mb-3 tracking-wider hover:text-white/70 transition-colors flex items-center gap-2"
                  >
                    Key Features
                    <span className={`transform transition-transform ${expandedProject === project.id ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {expandedProject === project.id && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2 text-[#e6e6e6] font-domine text-sm"
                    >
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-white mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-white text-black font-luckiestguy uppercase text-sm tracking-wider rounded-full hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-white/10 text-white font-luckiestguy uppercase text-sm tracking-wider rounded-full hover:bg-white/20 transition-colors flex items-center justify-center gap-2 border border-white/20"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-center text-white/50 font-domine mt-8 text-sm"
        >
          ← Scroll horizontally to explore more projects →
        </motion.p>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default MyProjects;
