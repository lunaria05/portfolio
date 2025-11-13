"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black border-t border-white/10 py-12 md:py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-black font-luckiestguy text-xl">H</span>
              </div>
              <span className="text-white font-luckiestguy text-xl uppercase tracking-widest">
                HiralVala
              </span>
            </div>
            <p className="text-[#e6e6e6] font-domine text-sm leading-relaxed">
              Full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:mx-auto"
          >
            <h3 className="text-white font-luckiestguy uppercase text-sm mb-4 tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'Journey', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[#e6e6e6] hover:text-white font-domine text-sm transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:ml-auto"
          >
            <h3 className="text-white font-luckiestguy uppercase text-sm mb-4 tracking-wider">
              Connect
            </h3>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/20 hover:border-white/40"
                  aria-label={social.label}
                >
                  <social.icon className="text-white text-lg" />
                </a>
              ))}
            </div>
            <p className="text-[#e6e6e6] font-domine text-sm mt-6 italic">
              "Code is poetry written in logic."
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[#e6e6e6] font-domine text-sm text-center md:text-left">
            © {currentYear} Hiral Vala. All rights reserved. Built with{' '}
            <FaHeart className="inline text-red-500 text-xs mx-1" />
            and Next.js
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[#e6e6e6] hover:text-white font-domine text-sm transition-colors"
          >
            Back to Top
            <div className="w-8 h-8 bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/20">
              <FaArrowUp className="text-xs" />
            </div>
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
