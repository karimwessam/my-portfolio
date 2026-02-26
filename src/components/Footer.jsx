import React from 'react';
import { Linkedin, Github, Instagram, Phone, Mail } from 'lucide-react'; // Added Instagram import

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo branding - Matches the design in the screenshots */}
        <div className="text-2xl font-bold text-white mb-4 md:mb-0 cursor-pointer">
         <span className="text-2xl font-black tracking-widest text-white">
        K<span className="text-emerald-500">W</span>
        </span>
        </div>
        
        {/* Contact Details with Icons */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
          <a href="tel:+201273653739" className="hover:text-emerald-500 transition flex items-center gap-2">
             <Phone size={16} /> +20 127 365 3739
          </a>
          <a href="mailto:kareimwessam@gmail.com" className="hover:text-emerald-500 transition flex items-center gap-2">
             <Mail size={16} /> kareimwessam@gmail.com
          </a>
        </div>

        {/* Updated Social Links with Instagram */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/karim-wessam-482357246/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/karimwessam" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <Github size={20} />
          </a>
          {/* New Instagram Link */}
          <a href="https://www.instagram.com/_karimwessam/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;