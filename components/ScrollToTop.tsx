
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Gérer la visibilité du bouton en fonction du défilement
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 bg-indigo-600 text-white rounded-2xl shadow-2xl transition-all duration-300 hover:bg-indigo-700 hover:scale-110 active:scale-90 flex items-center justify-center group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Retour en haut"
    >
      <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
      <span className="sr-only">Retour en haut</span>
    </button>
  );
};

export default ScrollToTop;
