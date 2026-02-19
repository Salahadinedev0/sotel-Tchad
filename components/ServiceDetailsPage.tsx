
import React from 'react';
import { ViewState } from '../App';

interface ServiceDetailsPageProps {
  serviceId: string;
  onNavigate: (view: ViewState) => void;
}

const serviceData: Record<string, any> = {
  fiber: {
    title: "Fibre Optique (FTTH)",
    subtitle: "La vitesse de la lumière chez vous",
    description: "La fibre optique de Sotel Tchad (Fiber-to-the-Home) est la technologie de pointe qui apporte une connexion ultra-rapide directement dans votre foyer ou votre bureau.",
    icon: "router",
    color: "bg-primary",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      { title: "Débit Illimité", desc: "Téléchargez et streamez sans aucune limite de volume data." },
      { title: "Stabilité Maximale", desc: "Oubliez les coupures liées aux intempéries ou aux interférences radio." },
      { title: "Ping Ultra-Bas", desc: "Idéal pour le gaming en ligne et les visioconférences professionnelles." },
      { title: "Multi-usages", desc: "Connectez tous vos appareils simultanément sans perte de vitesse." }
    ],
    cta: "Voir les forfaits Fibre"
  },
  mobile: {
    title: "Mobile & Internet 4G",
    subtitle: "La mobilité sans compromis avec Tawali",
    description: "Le réseau mobile de Sotel Tchad, porté par la marque Tawali, vous offre une couverture nationale et des services data 4G LTE de haute performance.",
    icon: "signal_cellular_alt",
    color: "bg-secondary",
    image: "https://images.unsplash.com/photo-1512428559083-a401c338e45e?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      { title: "4G LTE Rapide", desc: "Naviguez sur le web et utilisez vos applications sociales avec fluidité." },
      { title: "Forfaits Flexibles", desc: "Des offres à la journée, à la semaine ou au mois adaptées à votre budget." },
      { title: "Roaming National", desc: "Restez connecté même lors de vos déplacements en province." },
      { title: "Tawali Money", desc: "Gérez votre argent et payez vos factures depuis votre mobile." }
    ],
    cta: "Découvrir les offres Tawali"
  },
  phone: {
    title: "Téléphonie Fixe",
    subtitle: "La fiabilité historique pour rester en contact",
    description: "Le service de téléphonie fixe de Sotel Tchad reste la solution la plus fiable et économique pour vos communications vocales, tant pour les particuliers que pour les administrations.",
    icon: "phone_in_talk",
    color: "bg-primary",
    image: "https://images.unsplash.com/photo-1520923642038-b4259ace9439?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      { title: "Qualité Audio Cristalline", desc: "Une ligne dédiée pour des appels clairs sans interférences." },
      { title: "Tarifs Compétitifs", desc: "Les prix les plus bas du marché pour vos appels nationaux." },
      { title: "International", desc: "Des forfaits avantageux pour appeler vos proches à l'étranger." },
      { title: "Professionnel", desc: "L'outil indispensable pour l'accueil téléphonique de votre entreprise." }
    ],
    cta: "Demander une ligne fixe"
  },
  business: {
    title: "Solutions Entreprises",
    subtitle: "Accompagner la transformation digitale du Tchad",
    description: "Sotel Business conçoit des solutions d'infrastructure et de connectivité sur mesure pour les PME, les grandes entreprises et les institutions publiques.",
    icon: "cloud_queue",
    color: "bg-slate-700",
    image: "https://images.unsplash.com/photo-1451187534963-11d9532e87fa?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      { title: "Liaisons Louées", desc: "Bande passante garantie et symétrique pour vos besoins critiques." },
      { title: "VPN & MPLS", desc: "Interconnectez vos différents sites en toute sécurité." },
      { title: "Cloud & Hébergement", desc: "Hébergez vos données localement dans notre datacenter sécurisé." },
      { title: "Support Dédié", desc: "Une équipe technique disponible 24h/24 pour votre entreprise." }
    ],
    cta: "Contacter un conseiller Business"
  }
};

export const ServiceDetailsPage: React.FC<ServiceDetailsPageProps> = ({ serviceId, onNavigate }) => {
  const data = serviceData[serviceId];

  if (!data) return <div className="pt-32 text-center">Service non trouvé.</div>;

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Header */}
      <section className={`pt-32 pb-24 ${data.color} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center text-white/80 hover:text-white mb-8 font-bold text-sm transition-colors"
          >
            <span className="material-symbols-outlined mr-2">arrow_back</span>
            Retour aux services
          </button>
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <span className="material-symbols-outlined text-4xl">{data.icon}</span>
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-display font-extrabold">{data.title}</h1>
              <p className="text-xl text-blue-100/80 mt-2">{data.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Pourquoi choisir ce service ?</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {data.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {data.benefits.map((benefit: any, idx: number) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                      <span className="material-symbols-outlined text-secondary mr-2 text-xl">verified</span>
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-slate-500">{benefit.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <button 
                  onClick={() => onNavigate('offers')}
                  className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-xl shadow-primary/20"
                >
                  {data.cta}
                </button>
              </div>
            </div>

            <div className="sticky top-32">
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                <img 
                  src={data.image} 
                  alt={data.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-8 p-8 bg-slate-900 rounded-3xl text-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-secondary">support_agent</span>
                  <h4 className="font-bold">Besoin d'aide ?</h4>
                </div>
                <p className="text-sm text-slate-400 mb-6">Nos conseillers sont disponibles pour vous aider à choisir l'offre la plus adaptée à vos besoins.</p>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="w-full py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors"
                >
                  Contacter le support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900">Comment en profiter ?</h2>
            <p className="text-slate-500 mt-4">Un parcours simple et rapide vers l'excellence numérique.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Choix de l'offre", desc: "Consultez nos tarifs et sélectionnez le forfait qui vous convient." },
              { step: "02", title: "Souscription", desc: "Remplissez le formulaire en ligne ou rendez-vous en agence Sotel." },
              { step: "03", title: "Activation", desc: "Nos techniciens procèdent à la mise en service rapide de votre accès." }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-display font-black text-primary/5 absolute -top-8 -left-4 select-none">{item.step}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
