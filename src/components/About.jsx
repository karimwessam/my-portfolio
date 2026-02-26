import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

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
               src="/profile.jpg"
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
            Hi, I’m Karim Wessam, an Electronics and Communication Engineering student at AAST
            (Arab Academy for Science and Technology) with a strong foundation in hardware,
            embedded systems, and full-stack project development. Over the years, I’ve built
            end-to-end systems—from wearable health devices to smart farming platforms—designing,
            programming, and integrating both hardware and software to deliver real-world solutions.
          </p>

          <p>
            I’m currently enrolled in the Digital Egypt Pioneers Initiative (DEPI) for Data Science,
            specializing in data engineering and learning to build scalable, data-driven systems that
            collect, process, and analyze information efficiently. My background in hardware gives me
            a unique perspective on data collection, sensor integration, and real-time processing,
            enabling me to tackle projects holistically from the ground up.
          </p>

          <p>
            I’m passionate about creating systems that not only work but make an impact, and I’m
            looking to bring this mindset to freelance and professional opportunities in the data
            engineering space.
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;