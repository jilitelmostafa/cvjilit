
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2 group animate-bounce-subtle">
      <button 
        onClick={() => setIsVisible(false)}
        className="bg-slate-900/50 dark:bg-white/10 hover:bg-slate-900 dark:hover:bg-white/20 text-white p-1 rounded-full transition-all opacity-0 group-hover:opacity-100 mb-1"
        aria-label="Fermer"
      >
        <X size={14} />
      </button>
      <a 
        href={PERSONAL_INFO.socials.whatsapp} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all flex items-center justify-center relative"
        title="Contactez-moi sur WhatsApp"
      >
        <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-25"></div>
        <MessageCircle size={32} />
      </a>
      
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default FloatingWhatsApp;
