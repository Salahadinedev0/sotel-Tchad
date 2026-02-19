
import React from 'react';
import { NewsCardProps } from '../types';

interface ExtendedNewsCardProps extends NewsCardProps {
  id: string;
  onRead: (id: string) => void;
}

const NewsCard: React.FC<ExtendedNewsCardProps> = ({ id, date, title, excerpt, image, onRead }) => (
  <div 
    className="bg-white rounded-2xl border border-slate-100 overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
    onClick={() => onRead(id)}
  >
    <div className="h-48 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
        {date}
      </div>
    </div>
    <div className="p-6">
      <h4 className="text-lg font-bold mb-3 text-slate-900 line-clamp-2 leading-tight">{title}</h4>
      <p className="text-slate-500 text-sm mb-4 line-clamp-3 leading-relaxed">{excerpt}</p>
      <button className="text-primary font-bold text-xs uppercase tracking-widest flex items-center group-hover:translate-x-1 transition-transform">
        Lire l'article <span className="material-symbols-outlined ml-1 text-sm">chevron_right</span>
      </button>
    </div>
  </div>
);

interface NewsProps {
  onSeeAll?: () => void;
  onReadArticle: (id: string) => void;
}

export const News: React.FC<NewsProps> = ({ onSeeAll, onReadArticle }) => {
  const newsItems = [
    {
      id: 'article-1',
      date: '15 Mai 2024',
      title: 'Lancement de la Fibre à Am-Riguebe',
      excerpt: 'Sotel Tchad poursuit son déploiement avec l\'arrivée du très haut débit dans le quartier Am-Riguebe.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'article-2',
      date: '10 Mai 2024',
      title: 'Nouveaux forfaits Mobile Tawali',
      excerpt: 'Découvrez nos offres data 4G repensées pour vous offrir encore plus de gigas au meilleur prix.',
      image: 'https://images.unsplash.com/photo-1512428559083-a401c338e45e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'article-3',
      date: '02 Mai 2024',
      title: 'Sotel Tchad au forum de l\'innovation',
      excerpt: 'Retour sur notre participation au SITIC AFRICA 2024 et nos engagements pour l\'économie numérique.',
      image: 'https://images.unsplash.com/photo-1591115765373-520b7a21765b?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="actualités" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Actualités</h2>
            <p className="text-slate-500">Suivez l'évolution de la transformation numérique du pays.</p>
          </div>
          {onSeeAll && (
            <button 
              onClick={onSeeAll}
              className="text-primary font-bold hover:underline flex items-center"
            >
              Voir toutes les actualités <span className="material-symbols-outlined ml-1">arrow_right_alt</span>
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <NewsCard key={item.id} {...item} onRead={onReadArticle} />
          ))}
        </div>
      </div>
    </section>
  );
};
