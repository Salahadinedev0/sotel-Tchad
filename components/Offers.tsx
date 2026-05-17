
import React, { useState } from 'react';
import { ViewState } from '../App';

type OfferType = 'fiber' | 'mobile';

interface OffersProps {
  onNavigate: (view: ViewState) => void;
}

const STATIC_FIBER_PLANS = [
  { name: 'Bronze', speed: '4 Mbps', price: '30.000', popular: false, features: ['Usage illimité', 'Support 24/7', 'Wifi inclus'] },
  { name: 'Silver', speed: '10 Mbps', price: '75.000', popular: true, features: ['Streaming HD', 'Usage illimité', 'Installation Prioritaire'] },
  { name: 'Gold', speed: '20 Mbps', price: '140.000', popular: false, features: ['Visioconférence 4K', 'Usage illimité', 'Routeur Premium'] },
];

const STATIC_MOBILE_BUNDLES = [
  { name: 'Journée Plus', data: '500 Mo', validity: '24h', price: '500' },
  { name: 'Semaine Giga', data: '4 Go', validity: '7 Jours', price: '2.500' },
  { name: 'Mois Max', data: '15 Go', validity: '30 Jours', price: '10.000' },
];

export const Offers: React.FC<OffersProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<OfferType>('fiber');

  const fiberPlans = STATIC_FIBER_PLANS;
  const mobileBundles = STATIC_MOBILE_BUNDLES;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 mb-6">Nos Meilleures <span className="text-primary">Offres</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">Choisissez le forfait qui correspond à vos besoins et profitez du meilleur réseau du Tchad.</p>
          
          {/* Tab Switcher */}
          <div className="mt-12 inline-flex p-1 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <button 
              onClick={() => setActiveTab('fiber')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'fiber' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:text-primary'}`}
            >
              Fibre Optique
            </button>
            <button 
              onClick={() => setActiveTab('mobile')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'mobile' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:text-primary'}`}
            >
              Mobile & Data
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'fiber' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fiberPlans.map((plan, idx) => (
                <div key={idx} className={`relative p-8 rounded-3xl border transition-all hover:scale-[1.02] ${plan.popular ? 'border-secondary bg-slate-50 shadow-2xl shadow-secondary/5' : 'border-slate-100 bg-white'}`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      Plus populaire
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-black text-primary mb-1">{plan.speed}</div>
                    <div className="text-slate-400 text-sm font-semibold uppercase tracking-tighter">Vitesse de connexion</div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center text-slate-600 text-sm font-medium">
                        <span className="material-symbols-outlined text-secondary mr-3 text-lg">check_circle</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-100 pt-8 text-center">
                    <div className="flex items-baseline justify-center mb-6">
                      <span className="text-3xl font-black text-slate-900">{plan.price}</span>
                      <span className="ml-2 text-slate-500 font-bold">FCFA</span>
                      <span className="ml-1 text-slate-400 text-xs">/mois</span>
                    </div>
                    <button 
                      onClick={() => onNavigate('contact')}
                      className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-green-600' : 'bg-primary text-white hover:bg-blue-800 shadow-lg shadow-primary/20'}`}
                    >
                      Souscrire
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mobileBundles.map((bundle, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-2xl">signal_cellular_alt</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-1">{bundle.name}</h3>
                  <div className="flex items-center space-x-2 text-primary font-black mb-4">
                    <span className="text-2xl">{bundle.data}</span>
                    {bundle.validity && (
                      <>
                        <span className="text-slate-300">|</span>
                        <span className="text-sm text-slate-500 uppercase tracking-widest">{bundle.validity}</span>
                      </>
                    )}
                  </div>
                  
                  <div className="text-slate-500 text-sm mb-6 line-clamp-2">
                    Profitez de la meilleure couverture 4G+ du Tchad avec l'offre {bundle.name}.
                  </div>
                  
                  <div className="flex items-baseline justify-between pt-6 border-t border-slate-50">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-black text-slate-900">{bundle.price}</span>
                      <span className="ml-1 text-xs font-bold text-slate-500 uppercase">FCFA</span>
                    </div>
                    <button 
                      onClick={() => onNavigate('contact')}
                      className="px-6 py-2 rounded-lg bg-slate-900 text-white font-bold text-sm hover:bg-primary transition-colors"
                    >
                      Activer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-20 p-8 rounded-3xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined text-3xl">corporate_fare</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Besoin d'une solution sur mesure pour votre entreprise ?</h4>
                <p className="text-slate-500 text-sm">Découvrez nos offres Sotel Business avec IP fixe et bande passante garantie.</p>
              </div>
            </div>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-800 transition-colors whitespace-nowrap"
            >
              Espace Entreprise
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Snippet */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              { q: "Comment payer ma facture Sotel ?", a: "Vous pouvez régler vos factures via Tawali Mobile Money, par virement bancaire ou directement dans l'une de nos agences." },
              { q: "Quels sont les délais d'installation de la fibre ?", a: "Nos équipes s'engagent à installer votre équipement sous 48h à 72h ouvrables après la validation de votre souscription." },
              { q: "Puis-je changer de forfait en cours de mois ?", a: "Oui, le changement d'offre est possible à tout moment depuis votre espace client ou en appelant le 123." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white p-6 rounded-2xl border border-slate-100 cursor-pointer">
                <summary className="list-none flex justify-between items-center font-bold text-slate-900">
                  {faq.q}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
