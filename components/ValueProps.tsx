
import React from 'react';

export const ValueProps: React.FC = () => {
  const values = [
    {
      icon: 'flag',
      title: 'Opérateur National',
      desc: 'Historique et engagé pour le développement du Tchad.'
    },
    {
      icon: 'language',
      title: 'Réseau en Expansion',
      desc: 'Déploiement massif de la fibre optique sur tout le pays.'
    },
    {
      icon: 'support_agent',
      title: 'Support Local',
      desc: 'Des équipes dédiées et réactives partout à N\'Djamena.'
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-slate-900">Pourquoi choisir Sotel Tchad ?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <div key={i} className="text-center px-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
                <span className="material-symbols-outlined text-3xl text-primary">{v.icon}</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{v.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
