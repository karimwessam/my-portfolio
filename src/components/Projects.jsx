import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Memory Companion',
    description: 'Developed a full system including a companion mobile app and hardware unit. Features include geolocation tracking with geofencing alerts, smart medication reminders, and object detection to help patients find items.',
    image: 'https://via.placeholder.com/600x400/2a2a2a/ffffff?text=Memory+Companion',
    tags: ['C++', 'FlutterFlow', 'Arduino', 'IoT', 'Hardware-Software Integration'],
    link: '#', // Add link to live demo if available
    more: 'Enhanced safety and independence for patients; real-time caregiver notifications.'
  },
  {
    id: 2,
    title: 'Agricultural Intelligence',
    description: 'A three-stage smart farm system for climate-aware farming, sustainable water use, and agrarian waste recycling. Collected precise environmental data and analyzed it for actionable insights.',
    image: 'https://via.placeholder.com/600x400/2a2a2a/ffffff?text=Agricultural+Intelligence',
    tags: ['IoT', 'Sensors', 'Smart Farm', 'Data Analysis'],
    link: 'https://isef.net/project/enev068t-agricultural-intelligence-a-i?rc=jamzxgoj',
    more: 'Reduced river water usage by 30%, improved water quality by 75%, presented to Egyptian Ministry of Education, represented Egypt at ISEF, finalist in AI & IoT challenge.'
  },
  {
    id: 3,
    title: 'Smart Posture Correction System',
    description: 'Wearable system measuring spinal alignment in real-time and providing haptic feedback to correct posture.',
    image: 'https://via.placeholder.com/600x400/2a2a2a/ffffff?text=Posture+System',
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
    image: 'https://via.placeholder.com/600x400/2a2a2a/ffffff?text=Power+Supply',
    tags: ['Altium Designer', 'PCB Design', 'AC-DC Electronics'],
    link: '#', // Add link to project or documentation if available
    more: 'Strengthened understanding of power electronics, design workflow, and reliability testing.'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-12">
        <span className="bg-gray-800 text-gray-300 py-1 px-4 rounded-md text-sm font-medium mb-4">Projects</span>
        <h2 className="text-3xl font-semibold text-emerald-500">Things I've built so far</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#111820] rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition duration-300 group">
            <div className="h-48 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs text-gray-300 border border-gray-700 rounded px-2 py-1 bg-gray-800/50">
                    {tag}
                  </span>
                ))}
              </div>
              {project.more && <p className="text-gray-500 text-sm">{project.more}</p>}
              <div className="pt-4 flex flex-col gap-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-emerald-500 text-sm font-medium transition">
                  <ExternalLink size={16} className="mr-2" /> Live Preview / Project Link
                </a>
                {project.extraLink && (
                  <a href={project.extraLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-emerald-500 text-sm font-medium transition">
                    <ExternalLink size={16} className="mr-2" /> {project.extraLinkText}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;