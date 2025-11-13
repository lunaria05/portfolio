"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { WiStars } from 'react-icons/wi';
import { FaArrowLeftLong } from 'react-icons/fa6';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const images = [
    '/assets/me1.jpg',
    '/assets/me2.jpeg',
    '/assets/me3.jpg'
  ];

  const titles = ['DEVELOPER', 'CREATOR', 'INNOVATOR'];

  const descriptions = [
    "Turning ideas into interactive, scalable, and beautiful web experiences with clean code and modern design.",
    "Bringing concepts to life through thoughtful interfaces, immersive visuals, and user-focused digital stories.",
    "Exploring the future of Web3 by crafting meaningful, decentralized, and creative solutions that inspire."
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageClick = () => {
    setIsExpanded(true);
  };

  const handleBack = () => {
    setIsExpanded(false);
  };

  return (
    <div className="relative min-h-[calc(100vh-73px)] w-full flex items-center justify-center overflow-hidden py-8 md:py-12 px-4">
      {/* Previous Button - Hide when expanded */}
      <motion.button
        onClick={handlePrevious}
        whileHover={{ scale: 1.05 }}
        className={`absolute cursor-pointer top-[50%] font-domine left-2 sm:left-4 md:left-8 lg:left-[25%] text-white/70 hover:text-white text-xs sm:text-sm uppercase tracking-widest transition-all duration-700 z-20 ${
          isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <span className="hidden sm:inline">Previous</span>
        <span className="sm:hidden">Prev</span>
      </motion.button>

      {/* Next Button - Hide when expanded */}
      <motion.button
        onClick={handleNext}
        whileHover={{ scale: 1.05 }}
        className={`absolute cursor-pointer top-[50%] font-domine right-2 sm:right-4 md:right-8 lg:right-[25%] text-white/70 hover:text-white text-xs sm:text-sm uppercase tracking-widest transition-all duration-700 z-20 ${
          isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        Next
      </motion.button>

      {/* Back Button - Fade in when expanded */}
      <motion.button
        onClick={handleBack}
        whileHover={{ scale: 1.05 }}
        className={`absolute cursor-pointer top-4 sm:top-8 md:top-20 left-2 sm:left-4 md:left-12 lg:left-36 font-domine text-white/70 hover:text-white text-xs sm:text-sm uppercase tracking-widest transition-all duration-700 z-50 flex items-center gap-2 ${
          isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <FaArrowLeftLong /> Back
      </motion.button>

      {/* Circular Text - Moves to top-right and fades out - Hidden on mobile */}
      <motion.div
        animate={{
          opacity: isExpanded ? 0 : 1,
          scale: isExpanded ? 0.75 : 1,
        }}
        transition={{ duration: 0.7 }}
        className={`absolute hidden md:block z-10 ${
          isExpanded
            ? '-top-[60%] right-[30%]'
            : 'top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-[200px] ml-[60px] lg:-mt-[260px] lg:ml-[100px]'
        }`}
      >
        <svg className="w-28 h-28 lg:w-40 lg:h-40 animate-spin-slow" viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            />
          </defs>
          <text fill="white" fontSize="14" fontWeight="300" letterSpacing="4">
            <textPath href="#circlePath" startOffset="0%">
              DEVELOPMENT GUIDED PAYMENT SERVICES
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Decorative Stars - Fade out when expanded - Hidden on mobile */}
      <motion.div
        animate={{ opacity: isExpanded ? 0 : 1 }}
        transition={{ duration: 0.7 }}
        className="absolute top-1/2 right-[30%] -translate-x-1/2 -translate-y-1/2 -mt-[280px] -mr-[120px] lg:-mr-[200px] z-10 hidden md:flex"
      >
        <WiStars className='text-white/40 text-5xl lg:text-7xl'/>
      </motion.div>

      {/* Image - Moves from center to left */}
      <motion.div
        animate={{
          left: isExpanded ? ['50%', '20%'] : '50%',
          x: isExpanded ? 0 : '-50%',
        }}
        transition={{ duration: 0.7 }}
        className="absolute top-1/2 -translate-y-1/2 z-20"
      >
        <motion.div
          whileHover={!isExpanded ? { scale: 1.05 } : {}}
          className={`relative w-36 h-48 xs:w-44 xs:h-56 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-[300px] lg:h-[410px] rounded-full overflow-hidden shadow-2xl ${
            !isExpanded ? 'cursor-pointer' : ''
          }`}
          onClick={!isExpanded ? handleImageClick : undefined}
        >
          <Image
            src={images[currentIndex]}
            alt={`Portfolio ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Title - Moves from bottom-center to top-right */}
      <motion.div
        animate={{
          left: isExpanded ? ['50%', 'auto'] : '50%',
          right: isExpanded ? '5%' : 'auto',
          top: isExpanded ? '38%' : '50%',
          x: isExpanded ? 0 : '-50%',
          y: isExpanded ? 0 : ['160px'],
        }}
        transition={{ duration: 0.7 }}
        className="absolute z-20 px-4 max-w-full"
      >
        <motion.h1
          animate={{
            fontSize: isExpanded
              ? ['clamp(2rem, 8vw, 5rem)']
              : ['clamp(2.5rem, 10vw, 7.5rem)'],
            textAlign: isExpanded ? 'left' : 'center',
          }}
          transition={{ duration: 0.7 }}
          className="font-domine font-semibold text-[#e6e6e6] tracking-wider"
        >
          {titles[currentIndex]}
        </motion.h1>
      </motion.div>

      {/* Description - Fades in at bottom-right */}
      <motion.div
        animate={{
          opacity: isExpanded ? 1 : 0,
          y: isExpanded ? 0 : 10,
        }}
        transition={{ duration: 0.7 }}
        className={`absolute left-4 right-4 sm:left-auto sm:right-4 md:right-8 lg:left-[54%] bottom-[15%] sm:bottom-[20%] md:bottom-[35%] max-w-xl z-20 ${
          !isExpanded ? 'pointer-events-none' : ''
        }`}
      >
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 font-domine leading-relaxed">
          {descriptions[currentIndex]}
        </p>

        {/* Navigation Dots */}
        <div className="flex gap-3 mt-4 md:mt-6">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-6 md:w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
