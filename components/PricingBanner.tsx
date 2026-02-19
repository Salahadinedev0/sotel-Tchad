
import React from 'react';
import { analytics } from '../services/analytics';

export const PricingBanner: React.FC = () => {
  const handleSubscribe = () => {
    analytics.track('cta_click', 'Subscription Fiber 30k FCFA');
    alert('Merci de votre intérêt ! Un conseiller vous contactera.');
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-primary rounded-[2rem] p-8 lg:p-16 text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:max-w-xl text-center lg:text-left">
              <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">La Fibre à un prix imbattable</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Propulsez votre foyer dans une nouvelle dimension numérique avec notre offre d'entrée de gamme ultra-performante.
              </p>
              <ul className="space-y-4 mb-8">
                {['Connexion stable 24h/24', 'Support technique de proximité', 'Installation rapide et offerte'].map(item => (
                  <li key={item} className="flex items-center justify-center lg:justify-start">
                    <span className="material-symbols-outlined text-secondary mr-3">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-2xl text-slate-900 w-full max-w-sm">
              <div className="text-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Offre Découverte</span>
                <div className="mt-2 flex items-baseline justify-center">
                  <span className="text-6xl font-display font-black text-primary">30.000</span>
                  <span className="ml-2 text-xl font-bold text-slate-500">FCFA</span>
                </div>
                <p className="mt-1 text-slate-400 text-sm italic">/ Mbps / mois</p>
                <div className="my-8 h-px bg-slate-100"></div>
                <button 
                  onClick={handleSubscribe}
                  className="w-full py-4 rounded-xl bg-secondary text-white font-bold text-lg hover:bg-green-600 transition-colors shadow-lg shadow-secondary/30"
                >
                  Souscrire maintenant
                </button>
                <p className="mt-4 text-[10px] text-slate-400">Tarifs et conditions susceptibles d’évoluer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
