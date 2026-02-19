
import React, { useState } from 'react';

type NetworkStatus = 'operational' | 'degraded' | 'outage' | 'maintenance';

interface ServiceStatus {
  name: string;
  region: string;
  status: NetworkStatus;
  lastUpdate: string;
}

export const IncidentNetworkPage: React.FC = () => {
  const [reportSuccess, setReportSuccess] = useState(false);

  const services: ServiceStatus[] = [
    { name: "Fibre Optique (FTTH)", region: "N'Djamena Centre", status: "operational", lastUpdate: "Il y a 10 min" },
    { name: "Fibre Optique (FTTH)", region: "N'Djamena Sud", status: "operational", lastUpdate: "Il y a 10 min" },
    { name: "Réseau Mobile 4G LTE", region: "National", status: "operational", lastUpdate: "Il y a 5 min" },
    { name: "Backbone National Fibre", region: "Axe N'Djamena - Moundou", status: "degraded", lastUpdate: "Il y a 45 min" },
    { name: "Service Fixe (Voix)", region: "National", status: "operational", lastUpdate: "Il y a 20 min" },
    { name: "Tawali Mobile Money", region: "National", status: "maintenance", lastUpdate: "Prévu à 23:00" },
  ];

  const getStatusConfig = (status: NetworkStatus) => {
    switch (status) {
      case 'operational':
        return { color: 'text-secondary', icon: 'check_circle', label: 'Opérationnel', bg: 'bg-secondary/10' };
      case 'degraded':
        return { color: 'text-orange-500', icon: 'warning', label: 'Performances réduites', bg: 'bg-orange-500/10' };
      case 'outage':
        return { color: 'text-red-600', icon: 'error', label: 'Interruption', bg: 'bg-red-600/10' };
      case 'maintenance':
        return { color: 'text-primary', icon: 'build', label: 'Maintenance', bg: 'bg-primary/10' };
      default:
        return { color: 'text-slate-400', icon: 'help', label: 'Inconnu', bg: 'bg-slate-100' };
    }
  };

  const handleReport = (e: React.FormEvent) => {
    e.preventDefault();
    setReportSuccess(true);
    setTimeout(() => setReportSuccess(false), 5000);
  };

  return (
    <div className="animate-in fade-in duration-700">
      {/* Header with Global Status */}
      <section className="pt-32 pb-16 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <h1 className="text-4xl lg:text-5xl font-display font-extrabold mb-6 tracking-tight">État du Réseau</h1>
              <p className="text-slate-400 text-lg max-w-xl">Surveillez la disponibilité de nos services en temps réel sur l'ensemble du territoire national.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] flex items-center gap-6">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-5xl text-secondary">sensors</span>
              </div>
              <div>
                <div className="text-secondary font-black text-2xl uppercase tracking-tighter">Normal</div>
                <div className="text-slate-400 text-sm">Tous les systèmes critiques sont en ligne.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Status List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-2xl font-display font-bold text-slate-900">Services par région</h2>
            <div className="flex items-center text-slate-400 text-sm font-medium">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              Mis à jour le {new Date().toLocaleDateString()} à {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const config = getStatusConfig(service.status);
              return (
                <div key={idx} className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">
                        {service.name.includes('Mobile') ? 'smartphone' : service.name.includes('Fibre') ? 'router' : 'hub'}
                      </span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${config.bg} ${config.color} flex items-center`}>
                      <span className="material-symbols-outlined text-sm mr-1">{config.icon}</span>
                      {config.label}
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{service.name}</h3>
                  <p className="text-slate-500 text-xs mb-4">{service.region}</p>
                  <div className="pt-4 border-t border-slate-100 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Dernier check : {service.lastUpdate}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ongoing Incidents & Maintenance */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-8 flex items-center">
                <span className="material-symbols-outlined text-orange-500 mr-3">report_problem</span>
                Incidents en cours
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm border-l-4 border-l-orange-500">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-900">Lenteur sur le Backbone Sud</h4>
                    <span className="text-[10px] font-bold text-slate-400">ID: INC-9842</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">Une rupture partielle sur l'axe N'Djamena - Moundou entraîne des latences pour les clients entreprises. Nos équipes sont sur place pour la soudure de la fibre.</p>
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-tighter text-slate-400">
                    <span className="flex items-center"><span className="material-symbols-outlined text-sm mr-1">history</span> Depuis 1h 20m</span>
                    <span className="flex items-center text-primary"><span className="material-symbols-outlined text-sm mr-1">settings_backup_restore</span> Résolution en cours</span>
                  </div>
                </div>
                
                <div className="bg-white/50 p-6 rounded-3xl border border-dashed border-slate-200 text-center">
                  <p className="text-slate-400 text-sm italic">Aucun autre incident majeur signalé.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-8 flex items-center">
                <span className="material-symbols-outlined text-primary mr-3">calendar_month</span>
                Maintenances planifiées
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm border-l-4 border-l-primary">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-900">Mise à jour plateforme Tawali</h4>
                    <span className="text-[10px] font-bold text-slate-400">ID: MNT-102</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">Interruption temporaire des services de transfert d'argent pour maintenance évolutive. Impact : National.</p>
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-tighter text-primary">
                    <span className="flex items-center"><span className="material-symbols-outlined text-sm mr-1">event</span> 20 Mai 2024</span>
                    <span className="flex items-center"><span className="material-symbols-outlined text-sm mr-1">schedule</span> 23:00 - 02:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Form */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-4">Signaler un dysfonctionnement</h2>
              <p className="text-slate-400">Vous constatez une panne qui n'est pas listée ci-dessus ? Aidez-nous à améliorer le réseau.</p>
            </div>

            {reportSuccess ? (
              <div className="py-12 text-center animate-in zoom-in-95">
                <div className="w-20 h-20 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-5xl">verified</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Merci pour votre signalement</h3>
                <p className="text-slate-400">Votre ticket a été transmis à notre équipe technique. ID: REP-{Math.floor(Math.random()*9000)+1000}</p>
              </div>
            ) : (
              <form onSubmit={handleReport} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Type de service</label>
                  <select className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-secondary transition-colors appearance-none">
                    <option className="bg-slate-900">Fibre Optique</option>
                    <option className="bg-slate-900">Internet Mobile 4G</option>
                    <option className="bg-slate-900">Ligne Fixe</option>
                    <option className="bg-slate-900">Tawali Money</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Votre Quartier</label>
                  <input type="text" placeholder="Ex: Sabangali" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-secondary transition-colors" required />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Description du problème</label>
                  <textarea rows={4} placeholder="Soyez le plus précis possible..." className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-secondary transition-colors resize-none" required></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="w-full py-4 bg-secondary text-white font-bold rounded-xl hover:bg-green-600 transition-all shadow-lg shadow-secondary/20">
                    Envoyer le rapport technique
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Direct Support Contacts */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-12">Assistance immédiate</h3>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-4xl">headset_mic</span>
              </div>
              <p className="text-sm font-bold text-slate-900">Support Particuliers</p>
              <p className="text-2xl font-display font-black text-primary">123</p>
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1">Gratuit depuis Tawali</p>
            </div>
            <div className="w-px h-24 bg-slate-200 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-secondary mb-4">
                <span className="material-symbols-outlined text-4xl">business_center</span>
              </div>
              <p className="text-sm font-bold text-slate-900">Support Entreprises</p>
              <p className="text-2xl font-display font-black text-secondary">22 52 14 47</p>
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1">Disponible 24h/24</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
