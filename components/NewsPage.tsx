
import React, { useState, useEffect } from 'react';
import { NewsCardProps } from '../types';
import { sanityClient, urlFor } from '../services/sanity';

type Category = 'Tous' | 'Infrastructure' | 'Innovation' | 'Entreprise' | 'Communauté';

interface NewsPageProps {
  onReadArticle: (id: string) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onReadArticle }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('Tous');
  const [allNews, setAllNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const categories: Category[] = ['Tous', 'Infrastructure', 'Innovation', 'Entreprise', 'Communauté'];

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        const query = '*[_type == "article"] | order(date desc) { _id, title, date, excerpt, image, category }';
        const result = await sanityClient.fetch(query);
        
        const formatted = result.map((item: any) => ({
          id: item._id,
          title: item.title,
          date: item.date ? new Date(item.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Date inconnue',
          excerpt: item.excerpt,
          image: item.image ? urlFor(item.image).url() : 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=800',
          category: item.category || 'Infrastructure'
        }));

        setAllNews(formatted);
      } catch (error) {
        console.error('Erreur NewsPage Sanity:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllNews();
  }, []);

  const filteredNews = activeCategory === 'Tous' 
    ? allNews 
    : allNews.filter(item => item.category === activeCategory);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full mb-6 uppercase tracking-widest">Le Mag Sotel</div>
          <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 mb-6">Restez au cœur de <br/><span className="text-primary">l'actualité numérique</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Décryptage, annonces officielles et coulisses de l'opérateur national.
          </p>
        </div>
      </section>

      {/* Categories & Filter */}
      <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News Grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredNews.map((article) => (
                <article 
                  key={article.id} 
                  className="group cursor-pointer"
                  onClick={() => onReadArticle(article.id)}
                >
                  <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 relative">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                       <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase text-primary">
                         {article.category}
                       </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                      <span className="material-symbols-outlined text-sm mr-2">calendar_month</span>
                      {article.date}
                    </div>
                    <h2 className="text-2xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                      {article.title}
                    </h2>
                    <p className="text-slate-500 leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="pt-2">
                       <span className="text-primary font-black text-sm uppercase tracking-tighter flex items-center group-hover:translate-x-1 transition-transform">
                         Lire la suite <span className="material-symbols-outlined ml-1">trending_flat</span>
                       </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">search_off</span>
              <p className="text-slate-500 font-bold">Aucun article trouvé pour cette catégorie.</p>
            </div>
          )}

          {/* Newsletter Box */}
          <div className="mt-24 bg-slate-900 rounded-[3rem] p-10 lg:p-20 text-white relative overflow-hidden">
             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div>
                 <h3 className="text-3xl font-display font-bold mb-6">Ne manquez plus aucune mise à jour.</h3>
                 <p className="text-slate-400 mb-8 max-w-md">Inscrivez-vous à notre newsletter mensuelle pour recevoir les dernières innovations et offres de Sotel Tchad directement dans votre boîte mail.</p>
                 <form className="flex flex-col sm:flex-row gap-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="email" 
                      placeholder="Votre adresse email" 
                      className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none focus:border-secondary transition-colors"
                    />
                    <button className="px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-green-600 transition-all shadow-lg shadow-secondary/20">
                      S'abonner
                    </button>
                 </form>
               </div>
               <div className="hidden lg:flex justify-center">
                 <div className="w-48 h-48 border-2 border-white/5 rounded-full flex items-center justify-center animate-spin-slow">
                    <span className="material-symbols-outlined text-8xl text-white/10">mail</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
};
