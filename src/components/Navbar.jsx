import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0b0f15]/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-black tracking-widest text-white">
              K<span className="text-emerald-500">W</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-gray-300 hover:text-emerald-500 transition">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-emerald-500 transition">
              About
            </a>
            <a href="#skills" className="text-gray-300 hover:text-emerald-500 transition">
              Skills
            </a>
            <a href="#projects" className="text-gray-300 hover:text-emerald-500 transition">
              Projects
            </a>
            <a href="#experience" className="text-gray-300 hover:text-emerald-500 transition">
              Experience
            </a>
            <a href="#education" className="text-gray-300 hover:text-emerald-500 transition">
              Education
            </a>
          </div>

          {/* Empty spacer for balance */}
          <div className="w-10"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;