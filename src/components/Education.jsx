import React from 'react';
import AASTLogo from '../assets/aast-logo.png';
import EJUSTLogo from '../assets/ejust-logo.png';
import STEMLogo from '../assets/stem-logo.png';

const educationData = [
  {
    id: 1,
    institution: 'Arab Academy for Science, Technology and Maritime Transport',
    degree: "Bachelor's degree, Electrical and Electronics Engineering",
    date: 'Feb 2025 – Jul 2028',
    location: 'Alexandria, Egypt',
    logo: AASTLogo,
    details: 'Focusing on core engineering principles, embedded systems, and advanced mathematics to build a foundation in hardware-software integration.',
  },
  {
    id: 2,
    institution: 'Egypt-Japan University of Science and Technology',
    degree: "Bachelor's degree (Foundational Term)",
    date: 'Oct 2024 – Jan 2025',
    location: 'Alexandria, Egypt',
    logo: EJUSTLogo,
    details: 'Completed intensive foundational engineering coursework before transitioning to specialized electronics and electrical engineering tracks.',
  },
  {
    id: 3,
    institution: 'Alexandria STEM School',
    degree: 'High School Diploma (STEM)',
    date: 'Oct 2021 – Jul 2024',
    location: 'Alexandria, Egypt',
    logo: STEMLogo,
    gpa: '3.95',
    details: 'Applied STEM core subjects to solve global challenges through capstone research projects. Cultivated critical thinking and problem-solving skills through hands-on technical labs.',
    skills: ['Research', 'Teamwork', 'Critical Thinking', 'Problem Solving'],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="bg-gray-800 text-gray-300 py-1 px-4 rounded-md text-sm font-medium mb-4">
          Education
        </span>
        <h2 className="text-3xl font-semibold text-emerald-500">
          My Academic Journey
        </h2>
      </div>

      <div className="space-y-8">
        {educationData.map((edu) => (
          <div 
            key={edu.id} 
            className="flex flex-col md:flex-row gap-6 p-6 bg-[#111820] border border-gray-800 rounded-xl hover:border-emerald-500/50 transition duration-300 shadow-lg"
          >
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-lg bg-white border border-gray-700 flex items-center justify-center overflow-hidden p-1">
                <img 
                  src={edu.logo} 
                  alt={edu.institution} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                  {edu.institution}
                </h3>
                <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                  {edu.date}
                </span>
              </div>
              
              <p className="text-emerald-400 font-medium text-sm mb-3">
                {edu.degree} {edu.gpa && <span className="text-gray-500 ml-2">| GPA: {edu.gpa}</span>}
              </p>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {edu.details}
              </p>

              {edu.skills && (
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill) => (
                    <span key={skill} className="text-[10px] uppercase tracking-wider text-gray-300 border border-gray-700 rounded px-2 py-0.5 bg-[#1a232c]">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;