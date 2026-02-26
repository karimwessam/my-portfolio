import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between min-h-[90vh]"
    >
      {/* --- Text Content --- */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-3/5 mt-12 md:mt-0 space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-emerald-500 font-mono tracking-widest uppercase text-sm font-bold">
            Systems & Data Engineer
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            Karim <span className="text-emerald-500">Wessam</span>
          </h1>
        </div>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
          I build scalable data systems and pipelines, transforming raw information 
          into structured, reliable infrastructure — backed by a deep understanding 
          of hardware and real-world system design.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
          >
            View Projects
          </a>
          <a 
            href="/cv.pdf" 
            target="_blank"
            className="px-8 py-4 bg-transparent border border-gray-700 text-white font-bold rounded-xl hover:border-emerald-500 transition-all flex items-center gap-2"
          >
            <FileText size={20} />
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 pt-6 text-gray-500">
          <a href="https://github.com/YOUR_GITHUB" className="hover:text-emerald-500 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/YOUR_LINKEDIN" className="hover:text-emerald-500 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:kareimwessam@gmail.com" className="hover:text-emerald-500 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </motion.div>

      {/* --- Profile Image Area --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-2/5 flex justify-center md:justify-end"
      >
        <div className="relative group">
          {/* Decorative Glow Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden border border-gray-800 bg-[#161b22]">
            {/* Image Path: Ensure your photo is in /public/profile.jpg */}
            <img
              src="/profile.jpg"
              alt="Karim Wessam"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700 ease-in-out scale-105 group-hover:scale-100"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;