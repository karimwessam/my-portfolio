import React from 'react';

const experiences = [
  {
    id: 1,
    role: 'Technical Committee Member',
    company: 'IEEE AAST Student Branch',
    date: 'Nov 2025 – Present',
    location: 'Alexandria, Egypt',
    link: '#',
    linkName: '', // No link needed
    description:
      'Selected through a competitive process to design and build a search-and-rescue robot for locating individuals trapped under rubble. Facilitate technical workshops and sessions, translating complex engineering concepts into engaging, accessible experiences for fellow students.',
    skills: ['Robotics', 'Workshops', 'Engineering', 'Problem Solving'],
  },
  {
    id: 2,
    role: 'TechMakers Intern',
    company: 'ITIDA & Egypt Makes Electronics (EME)',
    date: 'Aug 2024 – Nov 2024',
    location: 'Alexandria, Egypt',
    link: '#',
    linkName: '',
    description:
      'Gained hands-on expertise in digital fabrication, embedded systems, and IoT prototyping through intensive on-site training. Designed and manufactured prototypes using 2D/3D CAD, laser cutting, 3D printing, and CNC machining. Developed custom PCBs and programmed microcontrollers (Arduino, ESP32, Raspberry Pi) for sensor integration and automation tasks.',
    skills: ['Embedded Systems', 'PCB Design', 'IoT', 'CAD', 'Arduino', 'Raspberry Pi', 'ESP32'],
  },
  {
    id: 3,
    role: 'Independent Researcher',
    company: 'Pioneer Academics',
    date: 'Jul 2024 – Oct 2024',
    location: 'Remote / Online',
    link: '#',
    linkName: '',
    description:
      'Led an independent behavioral science research project under mentorship of a Babson College Associate Professor. Designed and analyzed surveys using statistical methods to study how persuasive messaging influences farmers’ adoption of new technologies.',
    skills: ['Research', 'Behavioral Science', 'Statistics', 'Data Analysis', 'Survey Design'],
  },
  {
    id: 4,
    role: 'Volunteer',
    company: 'Bibliotheca Alexandrina',
    date: 'Jul 2023 – Present',
    location: 'Alexandria, Egypt',
    link: '#',
    linkName: '',
    description:
      'Coordinated major cultural events, including the International Book Fair, managing event flow and facilitating sessions with distinguished speakers. Actively contributed to the organization of multiple competitions, including the First Lego League (FLL) and the Bibliotheca Alexandrina Science and Engineering Fair (BASEF).',
    skills: ['Event Coordination', 'Teamwork', 'Leadership', 'FLL', 'BASEF'],
  },
  {
    id: 5,
    role: 'Global Finalist',
    company: 'Regeneron ISEF',
    date: 'May 2023',
    location: 'Dallas, TX, USA',
    link: 'https://isef.net/project/enev068t-agricultural-intelligence-a-i?rc=jamzxgoj',
    linkName: 'View Project',
    description:
      'Selected as one of the world’s top pre-college scientists to represent Egypt. Defended independent research before international panels of elite scientists, earning the title of ISEF Finalist.',
    skills: ['Research', 'Presentation', 'Science', 'Global Recognition'],
  },
  {
    id: 6,
    role: 'National Champion',
    company: 'ISEF Egypt (Bibliotheca Alexandrina)',
    date: 'Apr 2023',
    location: 'Alexandria, Egypt',
    link: '#',
    linkName: '',
    description:
      'Achieved 1st Place in Environmental Engineering and 2nd Place Overall in Egypt. Secured a highly competitive spot as a Global Finalist, outperforming top innovators nationwide.',
    skills: ['Environmental Engineering', 'Competition', 'Innovation', 'Research'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="bg-gray-800 text-gray-300 py-1 px-4 rounded-md text-sm font-medium mb-4">
          Experience
        </span>
        <h2 className="text-3xl font-semibold text-emerald-500 max-w-md">
          Here is a quick summary of my most recent experiences
        </h2>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gray-800">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Timeline Dot */}
            <div className="flex items-center justify-center w-4 h-4 rounded-full border-4 border-[#0b0f15] bg-gray-400 group-hover:bg-emerald-500 absolute left-3 md:left-1/2 -translate-x-1/2 z-10 transition"></div>

            {/* Content Card */}
            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] bg-[#111820] border border-gray-800 rounded-xl p-6 ml-12 md:ml-0 hover:border-gray-600 transition duration-300 shadow-md">
              <h3 className="text-xl font-bold text-white mb-1">
                {exp.role} — <span className="text-gray-300">{exp.company}</span>
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {exp.date} | {exp.location}{' '}
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-500 hover:underline"
                  >
                    {exp.linkName || exp.link}
                  </a>
                )}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-gray-300 border border-gray-700 rounded px-2 py-1 bg-[#1a232c]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;