
import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, Building2, ChevronDown, Hash, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first one

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 px-4 bg-white dark:bg-slate-950 transition-colors relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-5 mb-16">
          <div className="bg-indigo-600 dark:bg-indigo-500 p-4 rounded-2xl text-white shadow-lg shadow-indigo-500/20 shadow-xl">
            <Briefcase size={32} />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Parcours Professionnel</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium italic">Cliquez sur un poste pour voir les détails des missions.</p>
          </div>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 relative">
          {/* Vertical Decoration Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-100 dark:bg-slate-800 ml-6 md:ml-8 hidden sm:block"></div>

          {EXPERIENCES.map((exp, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <div 
                key={idx} 
                className={`relative sm:pl-16 transition-all duration-300 ${isOpen ? 'z-10' : 'z-0'}`}
              >
                {/* Timeline Dot */}
                <div className={`hidden sm:flex absolute left-6 top-8 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 transition-colors duration-300 z-20 ${isOpen ? 'bg-indigo-600 scale-125' : 'bg-slate-300 dark:bg-slate-700'}`}></div>

                <div className={`group overflow-hidden rounded-[2rem] border transition-all duration-500 ${
                  isOpen 
                  ? 'bg-white dark:bg-slate-900 border-indigo-200 dark:border-indigo-800 shadow-xl shadow-indigo-500/5 translate-x-1' 
                  : 'bg-slate-50 dark:bg-slate-900/40 border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}>
                  {/* Header - Clickable Area */}
                  <button 
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                          <Calendar size={14} className="opacity-70" />
                          <span className="text-[10px] font-black uppercase tracking-widest">{exp.period}</span>
                        </div>
                        {exp.ref && (
                          <div className="flex items-center gap-1 px-2 py-0.5 bg-slate-200/50 dark:bg-slate-800 rounded text-[9px] font-mono font-bold text-slate-500">
                            <Hash size={10} />
                            {exp.ref}
                          </div>
                        )}
                      </div>
                      
                      <h3 className={`text-xl md:text-2xl font-bold transition-colors ${isOpen ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>
                        {exp.role}
                      </h3>
                      
                      <div className="flex items-center gap-2 mt-1 text-slate-500 dark:text-slate-400 font-semibold text-sm">
                        <Building2 size={16} className="opacity-50" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 rotate-0 group-hover:bg-slate-300'}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  {/* Body - Collapsible Content */}
                  <div 
                    className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100 border-t border-slate-100 dark:border-slate-800' : 'max-h-0 opacity-0 pointer-events-none'}`}
                  >
                    <div className="p-6 md:p-8 bg-white dark:bg-slate-900/80">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Missions & Réalisations</h4>
                      <ul className="space-y-4">
                        {exp.description.map((desc, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-4 group/item">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 group-hover/item:scale-150 transition-transform"></div>
                            <span className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                              {desc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info tag */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl text-xs font-bold text-slate-400 uppercase tracking-widest">
            <ChevronRight size={14} className="text-indigo-500" />
            Cliquez pour explorer mon expertise
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
