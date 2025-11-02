"use client";

import React, { useState } from 'react';
import Image from 'next/image';

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

  const icons = ['💻', '🎨', '🚀'];

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
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        className="absolute cursor-pointer top-[40%] font-domine left-8 md:left-[25%] text-white/70 hover:text-white text-sm uppercase tracking-widest transition-colors z-20"
      >
        Previous
      </button>

      {/* Center Content */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Image Container with Circular Text */}
        <div className="relative">
          {/* Circular Text */}
          <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8">
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

          {/* Decorative Stars */}
          <div className="absolute -top-8 -right-20 md:-right-60 flex gap-0">
            <span className="text-white/40 text-2xl">✦</span>
            <span className="text-white/40 text-2xl">✦</span>
          </div>
          <div className="absolute -top-13 -right-20 md:-right-60 flex gap-0">
            <span className="text-white/40 text-2xl">✦</span>
            <span className="text-white/40 text-2xl">✦</span>
          </div>

          {/* Arch Frame with Image */}
          <div className="relative w-64 h-80 md:w-[300px] md:h-[410px] rounded-full z-20 overflow-hidden shadow-2xl">
            <Image
              src={images[currentIndex]}
              alt={`Portfolio ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Large Title */}
        <h1 className="text-6xl z-20 -translate-y-14 font-domine md:text-7xl lg:text-[120px] font-semibold text-[#e6e6e6] tracking-wider text-center">
          {titles[currentIndex]}
        </h1>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute cursor-pointer top-[40%] font-domine right-8 md:right-[25%] text-white/70 hover:text-white text-sm uppercase tracking-widest transition-colors z-20"
      >
        Next
      </button>
    </div>
  );
};
export default HeroSection;
