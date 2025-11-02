"use client";

import React from 'react';

interface StaticGridPatternProps {
  className?: string;
  gridSize?: number;
  lineColor?: string;
  dotColor?: string;
}

const StaticGridPattern: React.FC<StaticGridPatternProps> = ({
  className = '',
  gridSize = 40,
  lineColor = 'rgba(255, 255, 255, 0.08)',
  dotColor = 'rgba(255, 255, 255, 0.15)',
}) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Grid background using CSS */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${lineColor} 1px, transparent 1px),
            linear-gradient(90deg, ${lineColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />

      {/* Dots at intersections */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid-dots"
            x="0"
            y="0"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            <circle cx={0} cy={0} r={1.5} fill={dotColor} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-dots)" />
      </svg>
    </div>
  );
};

export default StaticGridPattern;
