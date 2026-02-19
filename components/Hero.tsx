
import React from 'react';
import { ViewState } from '../App';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden">
      {/* Abstract Background Elements (Lightweight) */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full text-primary fill-current">
          <circle cx="400" cy="100" r="300" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-6">
            <span className="material-symbols-outlined text-lg mr-2">verified</span>
            Connecter le Tchad au Monde
          </div>
          <h1 className="text-4xl lg:text-7xl font-display font-extrabold text-slate-900 leading-[1.1] mb-8">
            L'excellence technologique au <span className="text-primary">cœur du Tchad</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
            Découvrez une connectivité ultra-rapide avec la fibre optique de Sotel Tchad. Le premier opérateur historique au service de votre transformation numérique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('offers')}
              className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-blue-800 transition-all shadow-xl shadow-primary/25"
            >
              Découvrir nos offres
            </button>
            <button 
              onClick={() => onNavigate('coverage')}
              className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-bold text-lg hover:border-primary hover:text-primary transition-all"
            >
              Vérifier la couverture
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
