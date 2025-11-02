"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#121212] border-b border-white/10 font-luckiestguy">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-luckiestguy">
            <span className="text-[#121212] font-bold text-xl ">H</span>
          </div>
          <span className="text-white font-semibold text-xl uppercase tracking-widest">HiralVala</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Vertical Line Separator */}
          <div className="h-8 w-px bg-white/20"></div>

          {/* Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1.5 p-2 hover:bg-white/5 rounded transition-colors"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-white rounded transition-transform"></span>
            <span className="w-6 h-0.5 bg-white rounded transition-transform"></span>
            <span className="w-6 h-0.5 bg-white rounded transition-transform"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
