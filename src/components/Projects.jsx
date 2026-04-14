import React, { useState, useEffect } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;

const projects = [
  {
    id: 1,
    title: 'Memory Companion',
    description: 'Developed a full system including a companion mobile app and hardware unit. Features include geolocation tracking with geofencing alerts, smart medication reminders, and object detection to help patients find items.',
    images: [`${baseUrl}memory1.jpg`], 
    tags: ['C++', 'FlutterFlow', 'Arduino', 'IoT', 'Hardware-Software Integration'],
    link: 'https://github.com/karimwessam',
    more: 'Enhanced safety and independence for patients; real-time caregiver notifications.'
  },
  {
    id: 2,
    title: 'Agricultural Intelligence',
    description: 'A three-stage smart farm system for climate-aware farming, sustainable water use, and agrarian waste recycling. Collected precise environmental data and analyzed it for actionable insights.',
    images: [`${baseUrl}AI.jpg`],
    tags: ['IoT', 'Sensors', 'Smart Farm', 'Data Analysis'],
    link: 'https://isef.net/project/enev068t-agricultural-intelligence-a-i?rc=jamzxgoj',
    more: 'Reduced river water usage by 30%, improved water quality by 75%.'
  },
  {
    id: 3,
    title: 'Smart Posture Correction System',
    description: 'Wearable system measuring spinal alignment in real-time and providing haptic feedback to correct posture.',
    images: [`${baseUrl}smart1.jpg`, `${baseUrl}smart2.jpg`],
    tags: ['Arduino', 'IMU Sensors', 'Embedded Systems', 'Sensor Fusion'],
    link: 'https://github.com/karimwessam/Back-Angle',
    more: 'Promoted health awareness and posture correction using real-time data feedback.',
    extraLinkText: 'Video',
    extraLink: 'https://drive.google.com/file/d/1Gem3uRdw1qlRwOnjvhBBf3mrxs4_KNPm/view'
  },
  {
    id: 4,
    title: 'Regulated AC-to-DC 5V Power Supply',
    description: 'Designed and tested a full hardware solution, from schematic to PCB and final testing, delivering a regulated 5V supply.',
    images: [`${baseUrl}ac1.jpg`, `${baseUrl}ac2.jpg`, `${baseUrl}ac3.jpg`, `${baseUrl}ac4.jpg`],
    tags: ['Altium Designer', 'PCB Design', 'AC-DC Electronics'],
    link: 'https://github.com/karimwessam', 
    more: 'Strengthened understanding of power electronics, design workflow, and reliability testing.'
  }
];

const ProjectCard = ({ project, onImageClick }) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % project.images.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [project.images.length]);

  return (
    <div className="bg-[#111820] rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition duration-300 group flex flex-col h-full">
      
      {/* Clickable Image Area */}
      <div 
        onClick={() => onImageClick(project.images[currentImg])}
        className="relative h-48 overflow-hidden cursor-zoom-in"
      >
        {project.images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={project.title} 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${
              index === currentImg ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`} 
          />
        ))}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
           <span className="text-white text-xs font-mono bg-black/50 px-2 py-1 rounded">Click to Expand</span>
        </div>
      </div>

      <div className="p-6 space-y-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-500 transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs text-gray-300 border border-gray-700 rounded px-2 py-1 bg-gray-800/50">{tag}</span>
          ))}
        </div>
        
        <div className="pt-4 mt-auto">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-emerald-500 text-sm font-medium transition">
            <ExternalLink size={16} className="mr-2" /> View Details
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-12">
        <span className="bg-gray-800 text-gray-300 py-1 px-4 rounded-md text-sm font-medium mb-4">Projects</span>
        <h2 className="text-3xl font-semibold text-emerald-500">Things I've built so far</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onImageClick={setSelectedImage} />
        ))}
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 transition-all"
          onClick={() => setSelectedImage(null)} // Click background to close
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-emerald-500 transition-colors z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Full view" 
            className="max-w-full max-h-full rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
        </div>
      )}
    </section>
  );
};

export default Projects;