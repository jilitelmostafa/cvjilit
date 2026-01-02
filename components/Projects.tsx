
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Layout, ExternalLink, Box, ChevronDown, Map as MapIcon } from 'lucide-react';

const Projects: React.FC = () => {
  const [isTopomaOpen, setIsTopomaOpen] = useState(false);

  return (
    <section id="projects" className="py-24 px-4 bg-slate-50 dark:bg-slate-900/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="bg-amber-100 dark:bg-amber-900/30 p-3.5 rounded-2xl text-amber-600 dark:text-amber-400 shadow-sm">
            <Layout size={30} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Plateformes & Projets</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Solutions numériques et outils SIG que j'ai conçus.</p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="bg-indigo-50 dark:bg-indigo-900/30 w-14 h-14 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:rotate-12 transition-transform">
                <Box size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-slate-100 dark:border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm hover:underline"
                >
                  Voir la plateforme <ExternalLink size={16} />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Collapsible Topoma Map Section */}
        <div className="mt-20">
          <div className={`bg-white dark:bg-slate-900 rounded-[3rem] border transition-all duration-500 overflow-hidden ${
            isTopomaOpen 
            ? 'border-indigo-200 dark:border-indigo-800 shadow-2xl scale-[1.01]' 
            : 'border-slate-100 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700'
          }`}>
            {/* Header / Trigger */}
            <button 
              onClick={() => setIsTopomaOpen(!isTopomaOpen)}
              className="w-full p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left focus:outline-none group"
            >
              <div className="flex items-center gap-5">
                <div className={`p-4 rounded-2xl transition-all duration-500 ${isTopomaOpen ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                  <MapIcon size={24} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold transition-colors ${isTopomaOpen ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>
                    Topoma Interactive
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                    {isTopomaOpen ? "Exploration en cours..." : "Cliquez pour explorer la plateforme de cartographie interactive."}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {isTopomaOpen && (
                  <a 
                    href="https://jilitelmostafa.github.io/topoma/topoma" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hidden md:inline-flex items-center justify-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-5 py-2 rounded-xl font-bold text-sm hover:bg-indigo-600 hover:text-white transition-all"
                  >
                    Plein Écran <ExternalLink size={14} />
                  </a>
                )}
                <div className={`p-2 rounded-full transition-all duration-500 ${isTopomaOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                  <ChevronDown size={24} />
                </div>
              </div>
            </button>

            {/* Collapsible Content */}
            <div className={`transition-all duration-700 ease-in-out ${isTopomaOpen ? 'max-h-[1200px] opacity-100 border-t border-slate-100 dark:border-slate-800' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <div className="relative w-full aspect-video md:aspect-[21/9] min-h-[500px] bg-slate-50 dark:bg-slate-950">
                {isTopomaOpen && (
                  <iframe 
                    src="https://jilitelmostafa.github.io/topoma/topoma" 
                    className="absolute inset-0 w-full h-full border-0"
                    title="Topoma Interactive Map"
                    loading="lazy"
                  />
                )}
              </div>
              
              {/* Mobile Full Screen Link */}
              <div className="md:hidden p-6 bg-slate-50 dark:bg-slate-800/50 flex justify-center">
                <a 
                  href="https://jilitelmostafa.github.io/topoma/topoma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-indigo-500/20"
                >
                  Ouvrir en plein écran <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
