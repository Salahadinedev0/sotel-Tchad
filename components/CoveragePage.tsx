
import React, { useState } from 'react';

export const CoveragePage: React.FC = () => {
  const [eligibilityResult, setEligibilityResult] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      setEligibilityResult("Félicitations ! Votre zone est couverte par la Fibre Optique Sotel.");
    }, 1500);
  };

  const coverageStats = [
    { city: "N'Djamena", fiber: true, g4: true, g3: true },
    { city: "Moundou", fiber: false, g4: true, g3: true },
    { city: "Abéché", fiber: false, g4: true, g3: true },
    { city: "Sarh", fiber: false, g4: false, g3: true },
    { city: "Kélo", fiber: false, g4: false, g3: true },
  ];

  const pointsDeVente = [
    {
      name: "Direction Générale & Agence Centrale",
      address: "Avenue Charles de Gaulle, N'Djamena",
      phone: "+235 22 52 14 47",
      hours: "Lun - Jeu: 07:30 - 15:30 | Ven: 07:30 - 12:00",
      services: ["Fibre", "Mobile", "Fixe", "Business"]
    },
    {
      name: "Agence Sabangali",
      address: "Quartier Sabangali, face au Ministère des Finances",
      phone: "+235 22 52 00 01",
      hours: "Lun - Jeu: 07:30 - 15:30 | Ven: 07:30 - 12:00",
      services: ["Mobile", "Fixe", "Réclamations"]
    },
    {
      name: "Agence Bololo",
      address: "Rond-point Bololo, Immeuble Sotel",
      phone: "+235 22 52 00 02",
      hours: "Lun - Jeu: 07:30 - 15:30 | Ven: 07:30 - 12:00",
      services: ["Fibre", "Mobile", "Facturation"]
    },
    {
      name: "Agence Chagoua",
      address: "Avenue Mobutu, Quartier Chagoua",
      phone: "+235 22 52 00 03",
      hours: "Lun - Jeu: 08:00 - 16:00 | Sam: 09:00 - 13:00",
      services: ["Mobile", "Cartes SIM", "Tawali Money"]
    },
    {
      name: "Agence Moursal",
      address: "Rue de 40 mètres, Moursal",
      phone: "+235 22 52 00 04",
      hours: "Lun - Jeu: 07:30 - 15:30 | Ven: 07:30 - 12:00",
      services: ["Mobile", "Fixe"]
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl lg:text-6xl font-display font-extrabold mb-6">Notre Réseau, <span className="text-secondary">Votre Liberté</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Découvrez l'étendue de notre couverture nationale et vérifiez instantanément la disponibilité de nos services chez vous.
          </p>
        </div>
      </section>

      {/* Eligibility Checker */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[2.5rem] p-8 lg:p-16 border border-slate-100 shadow-xl -mt-32 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Suis-je éligible ?</h2>
                <p className="text-slate-500 mb-8">Saisissez votre quartier pour savoir si la fibre optique ou la 4G Tawali est disponible à votre adresse.</p>
                
                <form onSubmit={handleCheck} className="space-y-4">
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">location_on</span>
                    <input 
                      type="text" 
                      placeholder="Ex: Sabangali, N'Djamena"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  <button 
                    disabled={isChecking}
                    className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center shadow-lg shadow-primary/20"
                  >
                    {isChecking ? (
                      <span className="animate-spin material-symbols-outlined">progress_activity</span>
                    ) : 'Vérifier maintenant'}
                  </button>
                </form>

                {eligibilityResult && (
                  <div className="mt-8 p-6 bg-secondary/10 border border-secondary/20 rounded-2xl animate-in slide-in-from-top-2 flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary">verified</span>
                    <div>
                      <p className="text-secondary font-bold">{eligibilityResult}</p>
                      <button className="mt-2 text-primary font-bold text-sm underline">Passer commande</button>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative group">
                <div className="aspect-square bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-inner relative flex items-center justify-center p-4">
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                     <svg viewBox="0 0 100 100" className="w-full h-full fill-slate-300">
                        <path d="M20,10 L80,10 L90,90 L10,90 Z" />
                     </svg>
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <span className="material-symbols-outlined text-5xl text-primary">satellite_alt</span>
                    </div>
                    <p className="font-display font-bold text-slate-800">Visualisation du réseau</p>
                    <p className="text-xs text-slate-400 mt-2">Plus de 350 sites actifs à travers le pays</p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase border border-primary/10">Fibre</span>
                      <span className="px-3 py-1 rounded-full bg-secondary/5 text-secondary text-[10px] font-bold uppercase border border-secondary/10">4G LTE</span>
                      <span className="px-3 py-1 rounded-full bg-slate-50 text-slate-400 text-[10px] font-bold uppercase border border-slate-200">ADSL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points de Vente Section */}
      <section id="points-de-vente" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-bold mb-4">
              <span className="material-symbols-outlined text-lg mr-2">storefront</span>
              Proximité
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">Nos Points de Vente</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Retrouvez-nous dans nos agences commerciales pour toutes vos démarches de souscription ou d'assistance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pointsDeVente.map((point, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-primary/20 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-end max-w-[120px]">
                    {point.services.slice(0, 2).map(s => (
                      <span key={s} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{point.name}</h4>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed flex items-start">
                   <span className="material-symbols-outlined text-xs mr-2 mt-1">pin_drop</span>
                   {point.address}
                </p>
                <div className="space-y-3 pt-6 border-t border-slate-200">
                  <div className="flex items-center text-sm">
                    <span className="material-symbols-outlined text-primary mr-3 text-lg">call</span>
                    <span className="font-bold text-slate-700">{point.phone}</span>
                  </div>
                  <div className="flex items-start text-xs text-slate-400">
                    <span className="material-symbols-outlined mr-3 text-lg">schedule</span>
                    <span className="leading-relaxed">{point.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-900 rounded-3xl p-8 lg:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-4xl">distance</span>
               </div>
               <div>
                 <h4 className="text-xl font-bold">Un réseau de revendeurs partout au Tchad</h4>
                 <p className="text-slate-400 text-sm mt-1">Plus de 1000 points relais agréés pour l'achat de crédits et cartes SIM Tawali.</p>
               </div>
            </div>
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-800 transition-colors whitespace-nowrap shadow-lg">
              Devenir revendeur
            </button>
          </div>
        </div>
      </section>

      {/* Network Details */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900">Détails par Localité</h2>
            <p className="text-slate-500 mt-4">Retrouvez les services disponibles dans votre ville.</p>
          </div>

          <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="px-8 py-6 font-bold text-slate-900">Ville / Province</th>
                  <th className="px-8 py-6 font-bold text-slate-900">Fibre (FTTH)</th>
                  <th className="px-8 py-6 font-bold text-slate-900">4G LTE</th>
                  <th className="px-8 py-6 font-bold text-slate-900">3G / EDGE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {coverageStats.map((stat, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-5 font-semibold text-slate-700">{stat.city}</td>
                    <td className="px-8 py-5">
                      {stat.fiber ? (
                        <span className="text-secondary flex items-center text-sm font-bold"><span className="material-symbols-outlined mr-2 text-lg">check_circle</span>Disponible</span>
                      ) : (
                        <span className="text-slate-300 flex items-center text-sm font-medium"><span className="material-symbols-outlined mr-2 text-lg">remove_circle</span>Prochainement</span>
                      )}
                    </td>
                    <td className="px-8 py-5">
                      {stat.g4 ? (
                        <span className="text-secondary flex items-center text-sm font-bold"><span className="material-symbols-outlined mr-2 text-lg">check_circle</span>Disponible</span>
                      ) : (
                        <span className="text-slate-300 flex items-center text-sm font-medium"><span className="material-symbols-outlined mr-2 text-lg">remove_circle</span>Indisponible</span>
                      )}
                    </td>
                    <td className="px-8 py-5">
                      {stat.g3 ? (
                        <span className="text-secondary flex items-center text-sm font-bold"><span className="material-symbols-outlined mr-2 text-lg">check_circle</span>Disponible</span>
                      ) : (
                        <span className="text-slate-300 flex items-center text-sm font-medium"><span className="material-symbols-outlined mr-2 text-lg">remove_circle</span>Indisponible</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-center text-sm text-slate-400 italic">Ces informations sont données à titre indicatif et peuvent varier selon les contraintes techniques locales.</p>
        </div>
      </section>

      {/* Expansion Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-primary p-12 rounded-[2.5rem] text-white">
              <h3 className="text-2xl font-bold mb-6">Plan National d'Expansion</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Sotel Tchad investit massivement dans le déploiement de la boucle locale optique. Notre objectif est d'équiper plus de 20.000 foyers supplémentaires d'ici la fin de l'année 2024.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                  <div className="text-secondary font-black text-xl mb-1">500 km</div>
                  <div className="text-xs uppercase font-bold text-blue-200">De fibre supplémentaire en cours de pose</div>
                </div>
                <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                  <div className="text-secondary font-black text-xl mb-1">10 Nouvelles Villes</div>
                  <div className="text-xs uppercase font-bold text-blue-200">Bientôt raccordées au backbone national</div>
                </div>
              </div>
            </div>
            
            <div className="p-12">
              <span className="material-symbols-outlined text-5xl text-primary mb-6">dynamic_feed</span>
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-6">Restez informé</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Votre zone n'est pas encore couverte ? Laissez-nous vos coordonnées pour être averti dès que Sotel Tchad arrive dans votre quartier.
              </p>
              <div className="flex flex-col gap-4">
                <input type="email" placeholder="votre@email.com" className="px-6 py-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-primary" />
                <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-800 transition-colors">M'informer</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
