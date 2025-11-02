"use client";

import React, { useEffect, useRef, useState } from 'react';

interface InteractiveGridPatternProps {
  className?: string;
  gridSize?: number;
  dotSize?: number;
  activeDotSize?: number;
  lineColor?: string;
  dotColor?: string;
  activeDotColor?: string;
}

const InteractiveGridPattern: React.FC<InteractiveGridPatternProps> = ({
  className = '',
  gridSize = 50,
  dotSize = 2,
  activeDotSize = 3,
  lineColor = 'rgba(255, 255, 255, 0.1)',
  dotColor = 'rgba(255, 255, 255, 0.2)',
  activeDotColor = 'rgba(255, 255, 255, 0.8)',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -1000, y: -1000 });
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Draw grid lines
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw dots at intersections
      for (let x = 0; x <= width; x += gridSize) {
        for (let y = 0; y <= height; y += gridSize) {
          const distance = Math.sqrt(
            Math.pow(x - mousePos.x, 2) + Math.pow(y - mousePos.y, 2)
          );

          const maxDistance = 150;
          const isNearMouse = distance < maxDistance;

          if (isNearMouse) {
            const intensity = 1 - distance / maxDistance;
            const currentDotSize = dotSize + (activeDotSize - dotSize) * intensity;

            ctx.fillStyle = activeDotColor;
            ctx.beginPath();
            ctx.arc(x, y, currentDotSize, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillStyle = dotColor;
            ctx.beginPath();
            ctx.arc(x, y, dotSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos, gridSize, dotSize, activeDotSize, lineColor, dotColor, activeDotColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute ${className}`}
      style={{ width: '90%', height: '90%' }}
    />
  );
};

export default InteractiveGridPattern;
