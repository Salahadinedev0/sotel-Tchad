
import React from 'react';
import { ViewState } from '../App';

interface CoverageProps {
  onNavigate?: (view: ViewState) => void;
}

export const Coverage: React.FC<CoverageProps> = ({ onNavigate }) => {
  return (
    <section id="couverture" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">Notre Couverture</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Nous étendons chaque jour notre réseau pour apporter le meilleur de la technologie partout au Tchad. De N'Djamena aux chefs-lieux de province, Sotel Tchad est là pour vous.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3">check</span>
                <p className="text-sm font-semibold text-slate-700">Fibre optique disponible dans 15 quartiers de la capitale.</p>
              </div>
              <div className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3">check</span>
                <p className="text-sm font-semibold text-slate-700">Réseau 4G LTE en déploiement dans les grandes villes.</p>
              </div>
              <div className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3">check</span>
                <p className="text-sm font-semibold text-slate-700">Lignes spécialisées pour les entreprises rurales.</p>
              </div>
            </div>
            <button 
              onClick={() => onNavigate?.('coverage')}
              className="inline-flex items-center px-8 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
            >
              Voir la carte interactive
            </button>
          </div>
          
          <div className="relative group">
            <div className="aspect-[4/5] md:aspect-square bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-inner relative">
               {/* Minimal CSS Chad Outline Substitute */}
               <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <span className="material-symbols-outlined text-[12rem] text-slate-300">map</span>
               </div>
               <div className="absolute inset-0 flex items-center justify-center p-8">
                 <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full animate-ping absolute top-1/3 left-1/2 opacity-20"></div>
                    <div className="w-4 h-4 bg-primary rounded-full absolute top-1/3 left-1/2 border-2 border-white"></div>
                    
                    <div className="w-12 h-12 bg-secondary rounded-full animate-ping absolute top-1/2 left-1/3 opacity-20"></div>
                    <div className="w-4 h-4 bg-secondary rounded-full absolute top-1/2 left-1/3 border-2 border-white"></div>
                    
                    <span className="text-slate-400 font-display font-bold">CARTE DU RÉSEAU</span>
                 </div>
               </div>
               <button 
                onClick={() => onNavigate?.('coverage')}
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-slate-200 text-[10px] font-bold text-slate-500 shadow-sm hover:text-primary transition-colors uppercase"
               >
                 VÉRIFIEZ VOTRE ÉLIGIBILITÉ
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
