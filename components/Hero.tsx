
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { MapPin, Mail, Phone, ExternalLink, Facebook, Instagram, Twitter, Linkedin, MessageCircle, FileDown, Send } from 'lucide-react';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-16 pb-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Profile Image with Status and Flag */}
        <div className="relative mb-10 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transition-transform group-hover:scale-105 duration-500 bg-white dark:bg-slate-900">
            <img 
              src="https://jilitelmostafa.github.io/portfolio/assets/img/Jilit-Elmostafa.webp" 
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Status Indicator (Right) */}
          <div className="absolute bottom-2 right-2 w-8 h-8 bg-emerald-500 border-4 border-white dark:border-slate-800 rounded-full animate-pulse shadow-lg z-10" title="En ligne"></div>
          
          {/* Morocco Flag Indicator (Left) */}
          <div className="absolute bottom-2 left-2 w-8 h-8 border-4 border-white dark:border-slate-800 rounded-full shadow-lg overflow-hidden z-10 bg-white flex items-center justify-center" title="Maroc">
            <img 
              src="https://flagcdn.com/w80/ma.png" 
              alt="Maroc" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-100 dark:border-indigo-800/50">
          Disponible pour de nouveaux projets
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight leading-tight">
          {PERSONAL_INFO.name}
        </h1>

        {/* Social Media Icons - Below Name */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a href={PERSONAL_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white dark:bg-slate-800 rounded-full text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:scale-110" title="Facebook">
            <Facebook size={20} />
          </a>
          <a href={PERSONAL_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white dark:bg-slate-800 rounded-full text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:scale-110" title="Instagram">
            <Instagram size={20} />
          </a>
          <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white dark:bg-slate-800 rounded-full text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:scale-110" title="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={PERSONAL_INFO.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white dark:bg-slate-800 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:scale-110" title="Twitter">
            <Twitter size={20} />
          </a>
          <a href={PERSONAL_INFO.socials.tiktok} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white dark:bg-slate-800 rounded-full text-slate-500 hover:text-black dark:hover:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:scale-110" title="TikTok">
            <TikTokIcon size={20} />
          </a>
          <a href={PERSONAL_INFO.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white dark:bg-slate-800 rounded-full text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:scale-110" title="WhatsApp">
            <MessageCircle size={20} />
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {PERSONAL_INFO.titles.map((title, i) => (
            <span key={i} className="px-5 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300 shadow-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              {title}
            </span>
          ))}
        </div>
        
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          {PERSONAL_INFO.objective}
        </p>

        {/* Main CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href={PERSONAL_INFO.cvLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/30 transition-all active:scale-95 group"
          >
            <FileDown size={24} className="group-hover:animate-bounce" />
            Télécharger mon CV
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95 shadow-sm"
          >
            <Send size={20} className="text-indigo-600 dark:text-indigo-400" />
            Me Contacter
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-3 group transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-2.5 rounded-xl text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
              <MapPin size={22} />
            </div>
            <div className="text-left overflow-hidden">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Localisation</p>
              <p className="text-sm font-semibold truncate">{PERSONAL_INFO.location}</p>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-3 group transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="bg-rose-50 dark:bg-rose-900/30 p-2.5 rounded-xl text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform">
              <Mail size={22} />
            </div>
            <div className="text-left overflow-hidden">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email</p>
              <p className="text-sm font-semibold truncate">{PERSONAL_INFO.email}</p>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-3 group transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="bg-emerald-50 dark:bg-emerald-900/30 p-2.5 rounded-xl text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
              <Phone size={22} />
            </div>
            <div className="text-left overflow-hidden">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Téléphone</p>
              <p className="text-sm font-semibold truncate">{PERSONAL_INFO.phone}</p>
            </div>
          </div>
          <a 
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-3 hover:border-indigo-300 dark:hover:border-indigo-700 group transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-blue-50 dark:bg-blue-900/30 p-2.5 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
              <ExternalLink size={22} />
            </div>
            <div className="text-left overflow-hidden">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">LinkedIn</p>
              <p className="text-sm font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">Connecter</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
