
import React, { useEffect, useState } from 'react';
import { ViewState } from '../App';

interface NewsArticlePageProps {
  articleId: string;
  onNavigate: (view: ViewState) => void;
}

const STATIC_ARTICLES: Record<string, any> = {
  'article-1': {
    id: 'article-1',
    date: '15 Mai 2024',
    title: 'Lancement de la Fibre à Am-Riguebe',
    category: 'Infrastructure',
    excerpt: 'Sotel Tchad poursuit son déploiement avec l\'arrivée du très haut débit dans le quartier Am-Riguebe.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    content: 'Sotel Tchad est fier d\'annoncer le lancement officiel de ses services de fibre optique dans le quartier Am-Riguebe. Cette initiative s\'inscrit dans notre vision de connecter chaque foyer et entreprise aux opportunités infinies du haut débit.\n\nLes résidents peuvent désormais profiter de vitesses de téléchargement allant jusqu\'à 100 Mbps, permettant un télétravail fluide, une éducation en ligne de qualité et un divertissement sans interruption.'
  },
  'article-2': {
    id: 'article-2',
    date: '10 Mai 2024',
    title: 'Nouveaux forfaits Mobile Tawali',
    category: 'Innovation',
    excerpt: 'Découvrez nos offres data 4G repensées pour vous offrir encore plus de gigas au meilleur prix.',
    image: 'https://images.unsplash.com/photo-1512428559083-a401c338e45e?auto=format&fit=crop&q=80&w=800',
    content: 'La gamme Tawali évolue pour s\'adapter aux nouveaux usages numériques. En écoutant nos clients, nous avons augmenté les volumes de données tout en conservant les tarifs attractifs qui font notre succès.\n\nQue vous soyez un utilisateur occasionnel ou un adepte du streaming intensif, vous trouverez forcément le forfait qui vous correspond parmi nos nouvelles options quotidiennes, hebdomadaires et mensuelles.'
  },
  'article-3': {
    id: 'article-3',
    date: '02 Mai 2024',
    title: 'Sotel Tchad au forum de l\'innovation',
    category: 'Entreprise',
    excerpt: 'Retour sur notre participation au SITIC AFRICA 2024 et nos engagements pour l\'économie numérique.',
    image: 'https://images.unsplash.com/photo-1591115765373-520b7a21765b?auto=format&fit=crop&q=80&w=800',
    content: 'Lors de la dernière édition du SITIC AFRICA, Sotel Tchad a réaffirmé son rôle de moteur de l\'innovation technologique au pays. Nos représentants ont présenté les futures avancées en matière de connectivité régionale et de services cloud pour les entreprises.\n\nNotre engagement reste le même : bâtir l\'infrastructure qui soutiendra la croissance économique et sociale des prochaines décennies.'
  }
};

export const NewsArticlePage: React.FC<NewsArticlePageProps> = ({ articleId, onNavigate }) => {
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate loading
    const timer = setTimeout(() => {
      setArticle(STATIC_ARTICLES[articleId] || null);
      setLoading(false);
    }, 300);
    
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, [articleId]);

  if (loading) {
    return (
      <div className="pt-40 pb-24 text-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-slate-500">Chargement de l'article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="pt-40 pb-24 text-center min-h-screen">
        <h1 className="text-2xl font-bold text-slate-900">Article non trouvé</h1>
        <button 
          onClick={() => onNavigate('news')}
          className="mt-6 text-primary font-bold hover:underline"
        >
          Retour aux actualités
        </button>
      </div>
    );
  }

  const suggestedNews = Object.values(STATIC_ARTICLES).filter(a => a.id !== articleId).slice(0, 3);

  return (
    <div className="animate-in fade-in duration-700">
      <article className="pt-24 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => onNavigate('news')}
            className="flex items-center text-slate-500 hover:text-primary mb-12 font-bold text-sm transition-colors"
          >
            <span className="material-symbols-outlined mr-2">arrow_back</span>
            Retour aux actualités
          </button>

          <header className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                {article.category || 'Information'}
              </span>
              <span className="text-slate-400 text-sm flex items-center">
                <span className="material-symbols-outlined text-sm mr-2">calendar_month</span>
                {article.date}
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-900 leading-tight mb-8">
              {article.title}
            </h1>
            <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
            <p className="whitespace-pre-line">{article.content}</p>
          </div>

          <footer className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
             <div className="flex items-center space-x-4">
               <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Partager</span>
               <div className="flex space-x-2">
                 <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                   <span className="material-symbols-outlined text-lg">share</span>
                 </button>
                 <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                   <span className="material-symbols-outlined text-lg">link</span>
                 </button>
               </div>
             </div>
             <button 
               onClick={() => onNavigate('contact')}
               className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-primary transition-all shadow-lg"
             >
               Plus d'informations
             </button>
          </footer>
        </div>
      </article>

      {/* Suggested News Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-12">À lire aussi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {suggestedNews.map(item => (
                <div 
                  key={item.id} 
                  onClick={() => {
                    onNavigate('news'); // In a real app we'd trigger selection again
                  }}
                  className="bg-white p-4 rounded-3xl border border-slate-200 cursor-pointer hover:shadow-lg transition-all text-left"
                >
                  <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                     <img src={item.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-slate-900 line-clamp-2 mb-2">{item.title}</h4>
                  <span className="text-xs text-slate-400 uppercase font-black">{item.date}</span>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};
