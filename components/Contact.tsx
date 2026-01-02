
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 px-4 bg-slate-900 text-white rounded-t-[3rem]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Travaillons Ensemble</h2>
            <p className="text-slate-400 mb-8 max-w-md">
              Disponible pour des collaborations, des études de terrain ou des postes stratégiques en Géomatique et SIG.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="bg-slate-800 p-3 rounded-xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg hover:text-indigo-400 transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="bg-slate-800 p-3 rounded-xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <span className="text-lg">{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="bg-slate-800 p-3 rounded-xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <span className="text-lg">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
            <h3 className="text-xl font-bold mb-6">Vie Associative & Intérêts</h3>
            <div className="space-y-4 text-slate-400 text-sm">
              <p>• Président de l'association INMAA pour l'éducation (2021-2023)</p>
              <p>• Coordinateur Régional ASFYIT (Souss Massa)</p>
              <p>• Intérêts : Photographie, Voyage, Musique, Recherche Scientifique</p>
              <div className="pt-6">
                <a 
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all"
                >
                  <Linkedin size={20} />
                  Connecter sur LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm text-center">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Tous droits réservés.</p>
          <div className="flex items-center gap-1">
            <span>Conçu avec</span>
            <Heart size={14} className="text-rose-500 fill-rose-500" />
            <span>pour l'excellence géospatiale</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
