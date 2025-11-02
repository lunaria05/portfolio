"use client";

import React, { useState } from 'react';
import Image from 'next/image';
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
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      {/* Previous Button - Hide when expanded */}
      <button
        onClick={handlePrevious}
        className={`absolute cursor-pointer top-[50%] font-domine left-8 md:left-[25%] text-white/70 hover:text-white text-sm uppercase tracking-widest transition-all duration-700 z-20 ${
          isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        Previous
      </button>

      {/* Next Button - Hide when expanded */}
      <button
        onClick={handleNext}
        className={`absolute cursor-pointer top-[50%] font-domine right-8 md:right-[25%] text-white/70 hover:text-white text-sm uppercase tracking-widest transition-all duration-700 z-20 ${
          isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        Next
      </button>

      {/* Back Button - Fade in when expanded */}
      <button
        onClick={handleBack}
        className={`absolute cursor-pointer top-20 left-12 md:left-36 font-domine text-white/70 hover:text-white text-sm uppercase tracking-widest transition-all duration-700 z-50 flex items-center gap-2 ${
          isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <FaArrowLeftLong /> Back
      </button>

      {/* Circular Text - Moves to top-right and fades out */}
      <div
        className={`absolute transition-all duration-700 ease-out z-10 ${
          isExpanded
            ? '-top-[60%] right-[30%] opacity-0 scale-75'
            : 'top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-[240px] ml-[80px] md:-mt-[260px] md:ml-[100px] opacity-100 scale-100'
        }`}
      >
        <svg className="w-32 h-32 md:w-40 md:h-40 animate-spin-slow" viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            />
          </defs>
          <text fill="white" fontSize="16" fontWeight="300" letterSpacing="4">
            <textPath href="#circlePath" startOffset="0%">
              DEVELOPMENT GUIDED PAYMENT SERVICES
            </textPath>
          </text>
        </svg>
      </div>

      {/* Decorative Stars - Fade out when expanded */}
      <div className={`absolute top-1/2 right-[30%] -translate-x-1/2 -translate-y-1/2 -mt-[280px] -mr-[200px] md:-mr-[200px] flex gap-0 z-10 transition-opacity duration-700 ${
          isExpanded ? 'opacity-0' : 'opacity-100'
        }`}><WiStars className='text-white/40 text-7xl'/></div>

      {/* Image - Moves from center to left */}
      <div
        className={`absolute transition-all duration-700 ease-out z-20 ${
          isExpanded
            ? 'left-8 md:left-[20%] top-1/2 -translate-y-1/2'
            : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
        }`}
      >
        <div
          className={`relative w-64 h-80 md:w-[300px] md:h-[410px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 ${
            !isExpanded ? 'cursor-pointer hover:scale-105' : ''
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
        </div>
      </div>

      {/* Title - Moves from bottom-center to top-right */}
      <div
        className={`absolute transition-all duration-700 ease-out z-20 ${
          isExpanded
            ? 'right-8 md:left-[54%] top-[38%]'
            : 'left-1/2 -translate-x-1/2 top-1/2 translate-y-[250px] md:translate-y-[160px]'
        }`}
      >
        <h1
          className={`font-domine font-semibold text-[#e6e6e6] tracking-wider transition-all duration-700 ${
            isExpanded
              ? 'text-5xl md:text-7xl text-left'
              : 'text-6xl md:text-7xl lg:text-[120px] text-center'
          }`}
        >
          {titles[currentIndex]}
        </h1>
      </div>

      {/* Description - Fades in at bottom-right */}
      <div
        className={`absolute right-8 md:left-[54%] bottom-[35%] max-w-xl z-20 transition-all duration-700 ${
          isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <p className="text-lg md:text-xl text-white/80 font-domine leading-relaxed">
          {descriptions[currentIndex]}
        </p>

        {/* Navigation Dots */}
        <div className="flex gap-3 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
