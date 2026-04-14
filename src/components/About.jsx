import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
// 1. Import the image from your assets folder
import profileImg from '../assets/profile.png'; 

const About = () => {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-12">
        <span className="bg-gray-800 text-gray-300 py-1 px-4 rounded-md text-sm font-medium mb-4">
          About Me
        </span>
        <h2 className="text-3xl font-semibold text-emerald-500">
          Who am I?
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center relative">

        {/* Background decorative element */}
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-circles opacity-50 rounded-full hidden md:block z-0 pointer-events-none"></div>

        {/* Profile Card */}
        <div className="md:w-1/3 z-10">
          <div className="bg-[#111820] border border-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-lg">

            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-emerald-500/30 mb-6">
              <img
                src={profileImg}
                alt="Karim Wessam Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-xl font-semibold text-white mb-4">
              Karim Wessam
            </h3>

            {/* Social Icons */}
            <div className="flex space-x-5">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/karim-wessam-482357246/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition duration-300"
              >
                <Linkedin size={22} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/karimwessam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition duration-300"
              >
                <Github size={22} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/201273653739"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition duration-300"
              >
                <FaWhatsapp size={22} />
              </a>

            </div>

          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-2/3 space-y-6 text-gray-400 leading-relaxed z-10">

          <p>
            Hi, I'm Karim Wessam, an Electronics and Communication Engineering student at AAST
            (Arab Academy for Science and Technology) who enjoys building complete systems—from
            physical hardware to data-driven applications.
          </p>

          <p>
            I've worked on end-to-end projects such as wearable devices and smart agriculture
            systems, where I design and integrate sensors, microcontrollers, and software to create
            practical, real-world solutions. This experience gave me a strong foundation in embedded
            systems, hardware-software integration, and system-level thinking.
          </p>

          <p>
            Currently, I'm part of the Digital Egypt Pioneers Initiative (DEPI), focusing on data
            engineering. I'm learning how to design scalable pipelines and work with data
            efficiently—but more importantly, I connect this with my hardware background to
            understand how data is generated, processed, and used in real-world systems.
          </p>

          <p>
            I'm particularly interested in building intelligent systems that bridge the physical and
            digital worlds, and I'm looking for opportunities where I can apply this mindset to
            create impactful solutions.
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;
