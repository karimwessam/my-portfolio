import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp, Send } from 'lucide-react';

function App() {
  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // scroll to top of the page
      behavior: 'smooth', // smooth animation
    });
  };

  return (
    <div className="min-h-screen bg-[#0b0f15] text-white selection:bg-emerald-500/30">
      <Navbar />

      <main>
        <Hero />
        <About />
        { <Skills />}
        <Projects />
        <Experience />
        <Contact /> {/* ✅ Contact is now just a section */}
      </main>

      <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={scrollToTop} // <-- Add onClick handler
          className="p-3 bg-transparent border border-gray-600 text-emerald-500 rounded-full hover:bg-emerald-500 hover:text-white transition"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </div>
  );
}

export default App;