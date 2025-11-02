"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#121212] border-b border-white/10">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-[#121212] font-bold text-sm">H</span>
          </div>
          <span className="text-white font-semibold text-lg">Portfolio</span>
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

      {/* Mobile Menu - Optional */}
      {/* {isMenuOpen && (
        <div className="border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4 text-white">
            <li className="hover:text-white/70 cursor-pointer transition-colors">Home</li>
            <li className="hover:text-white/70 cursor-pointer transition-colors">About</li>
            <li className="hover:text-white/70 cursor-pointer transition-colors">Projects</li>
            <li className="hover:text-white/70 cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
