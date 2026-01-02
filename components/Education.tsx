
import React from 'react';
import { EDUCATIONS, TRAININGS } from '../constants';
import { GraduationCap, Presentation, BookOpen, Star } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Formations Académiques */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3.5 rounded-2xl text-emerald-600 dark:text-emerald-400 shadow-sm">
                <GraduationCap size={30} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Cursus Académique</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Parcours d'excellence en Géographie et SIG.</p>
              </div>
            </div>
            <div className="space-y-6 relative">
               <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-100 dark:bg-slate-800 hidden sm:block"></div>
              {EDUCATIONS.map((edu, idx) => (
                <div key={idx} className="relative sm:pl-16 group">
                  <div className="hidden sm:flex absolute left-6 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 bg-emerald-500 group-hover:scale-125 transition-transform z-10"></div>
                  <div className="p-7 rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl hover:-translate-y-1 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">{edu.period}</span>
                      <Star size={16} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{edu.title}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-3">{edu.institution}</p>
                    {edu.details && <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{edu.details}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ateliers & Enseignement */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3.5 rounded-2xl text-indigo-600 dark:text-indigo-400 shadow-sm">
                <Presentation size={30} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Transmission & Formation</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Partage d'expertise et enseignement vacataire.</p>
              </div>
            </div>
            <div className="space-y-6">
              {TRAININGS.map((train, idx) => (
                <div key={idx} className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl hover:-translate-y-1 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-widest bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">{train.period}</span>
                    <BookOpen size={18} className="text-indigo-400 group-hover:rotate-12 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{train.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300 font-bold mb-4">{train.institution}</p>
                  {train.description && (
                    <div className="flex items-start gap-3 bg-white dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
                      <p className="text-slate-500 dark:text-slate-400 text-sm italic leading-relaxed">"{train.description}"</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
