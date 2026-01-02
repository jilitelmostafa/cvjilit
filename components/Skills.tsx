
import React from 'react';
import { SKILL_GROUPS } from '../constants';
import { Map, Zap, Globe, BarChart, Palette } from 'lucide-react';

const IconMap: Record<string, any> = {
  Map, Zap, Globe, BarChart, Palette
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900 dark:bg-slate-950 text-white rounded-[3rem] mx-4 my-10 px-6 sm:px-12 transition-colors relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Expertise Technique</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Une maîtrise complète des outils de pointe pour l'analyse spatiale et la gestion urbaine.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, idx) => {
            const IconComponent = IconMap[group.icon];
            return (
              <div key={idx} className="bg-slate-800/40 backdrop-blur p-8 rounded-3xl border border-slate-700/50 hover:border-indigo-500 hover:bg-slate-800/60 transition-all group flex flex-col h-full">
                <div className="bg-indigo-600/20 w-14 h-14 flex items-center justify-center rounded-2xl text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-6 transition-all shadow-inner">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors">{group.category}</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[11px] px-3 py-1 bg-slate-700/50 hover:bg-slate-700 rounded-full text-slate-300 font-medium transition-colors border border-slate-600/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
