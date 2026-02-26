import React from 'react';
import { Database, Cpu, Cloud, Terminal, Layers, BarChart3 } from 'lucide-react';

const skillCategories = [
  {
    title: "Data Engineering",
    icon: <Database className="text-emerald-500" size={24} />,
    skills: ["Python", "SQL", "Airflow", "Docker", "ETL Pipelines", "Pandas"]
  },
  {
    title: "Embedded Systems",
    icon: <Cpu className="text-blue-500" size={24} />,
    skills: ["C++", "Arduino", "Firmware", "AI Automation"]
  },
  {
    title: "Cloud & Analytics",
    icon: <Cloud className="text-cyan-500" size={24} />,
    skills: ["Azure", "Streamlit", "Dash", "Matplotlib", "Numpy", "Flask"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="p-8 rounded-3xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] hover:border-emerald-500/50 transition-all group"
          >
            <div className="mb-6 p-3 w-fit rounded-2xl bg-white dark:bg-white/5 shadow-sm">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 text-xs font-mono rounded-md bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}