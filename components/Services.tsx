
import React from 'react';
import { ServiceCardProps } from '../types';

interface ExtendedServiceCardProps extends ServiceCardProps {
  id: string;
  onNavigateToService: (id: string) => void;
}

const ServiceCard: React.FC<ExtendedServiceCardProps> = ({ id, icon, title, description, color, onNavigateToService }) => (
  <div className="group p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full">
    <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-display font-bold mb-4 text-slate-900">{title}</h3>
    <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">{description}</p>
    <button 
      onClick={() => onNavigateToService(id)}
      className="inline-flex items-center text-primary font-bold text-sm group-hover:translate-x-1 transition-transform text-left"
    >
      En savoir plus <span className="material-symbols-outlined ml-1 text-base">arrow_forward</span>
    </button>
  </div>
);

interface ServicesProps {
  onNavigateToService: (id: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigateToService }) => {
  const services = [
    {
      id: 'fiber',
      icon: 'router',
      title: 'Fibre Optique (FTTH)',
      description: 'Le très haut débit stable et illimité pour votre domicile. Profitez du streaming, du gaming et du télétravail sans interruptions.',
      link: '#',
      color: 'bg-primary'
    },
    {
      id: 'mobile',
      icon: 'signal_cellular_alt',
      title: 'Mobile & Internet 4G',
      description: 'Restez connecté partout au Tchad avec le réseau Tawali. Des forfaits adaptés à tous les budgets et une couverture nationale.',
      link: '#',
      color: 'bg-secondary'
    },
    {
      id: 'phone',
      icon: 'phone_in_talk',
      title: 'Téléphonie Fixe',
      description: 'La fiabilité d\'une ligne fixe pour vos appels nationaux et internationaux. Idéal pour les foyers et les administrations.',
      link: '#',
      color: 'bg-primary'
    },
    {
      id: 'business',
      icon: 'cloud_queue',
      title: 'Solutions Entreprises',
      description: 'Hébergement cloud, MPLS et services sur mesure pour accompagner la croissance des entreprises tchadiennes.',
      link: '#',
      color: 'bg-slate-700'
    }
  ];

  return (
    <section id="offres" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">Nos pôles de services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Des solutions de communication innovantes pour répondre aux besoins de tous les Tchadiens.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <ServiceCard 
              key={idx} 
              {...service} 
              onNavigateToService={onNavigateToService}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
