
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl lg:text-6xl font-display font-extrabold mb-6">Notre Engagement pour <br/><span className="text-secondary">l'Avenir du Tchad</span></h1>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            Depuis sa création, Sotel Tchad se positionne comme le pilier des télécommunications nationales, œuvrant pour une souveraineté numérique totale.
          </p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary text-sm font-bold rounded-full mb-4">Notre Histoire</div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">L'héritage d'un pionnier</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Héritière de l'Office National des Postes et Télécommunications (ONPT), la Société des Télécommunications du Tchad (Sotel Tchad) a traversé les décennies pour devenir l'opérateur historique que nous connaissons aujourd'hui.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Notre mission est claire : assurer la disponibilité, la qualité et l'accessibilité des services de communication sur toute l'étendue du territoire national, tout en accompagnant l'État dans sa politique de développement numérique.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
                <div>
                  <div className="text-3xl font-display font-black text-primary mb-1">20+</div>
                  <div className="text-xs uppercase font-bold text-slate-400 tracking-widest">Ans d'Expertise</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-black text-primary mb-1">100%</div>
                  <div className="text-xs uppercase font-bold text-slate-400 tracking-widest">Tchadien</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573163231162-717dfc3e0c1f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Technologie et Tchad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-2xl text-white shadow-xl hidden md:block">
                <span className="material-symbols-outlined text-4xl mb-2">hub</span>
                <p className="font-bold text-lg">Connecter le Sahel <br/>au reste du monde</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900">Nos Valeurs Fondamentales</h2>
            <p className="text-slate-500 mt-4">Ce qui guide nos actions au quotidien</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'handshake', title: 'Proximité', desc: 'Être proche de nos clients, partout, tout le temps.' },
              { icon: 'lightbulb', title: 'Innovation', desc: 'Anticiper les besoins technologiques de demain.' },
              { icon: 'workspace_premium', title: 'Excellence', desc: 'Fournir un service de qualité supérieure aux standards internationaux.' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-primary/20 transition-all text-center group">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="material-symbols-outlined text-6xl text-slate-200 mb-6">format_quote</span>
            <h2 className="text-2xl lg:text-3xl font-display font-medium text-slate-800 italic leading-snug mb-8">
              "Notre ambition est de faire de Sotel Tchad le moteur de la transformation numérique du Tchad, en offrant à chaque citoyen les outils nécessaires pour réussir dans l'économie globale."
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-slate-200"></div>
              <div className="text-left">
                <div className="font-bold text-slate-900">La Direction Générale</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Sotel Tchad</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
