
import React, { useEffect, useState } from 'react';
import { ViewState } from '../App';
import { fetchSanity, urlFor } from '../services/sanity';
import { PortableText } from '@portabletext/react';

interface NewsArticlePageProps {
  articleId: string;
  onNavigate: (view: ViewState) => void;
}

export const NewsArticlePage: React.FC<NewsArticlePageProps> = ({ articleId, onNavigate }) => {
  const [article, setArticle] = useState<any>(null);
  const [suggestedNews, setSuggestedNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        // Fetch current article
        const articleQuery = `*[_type == "article" && _id == $id][0]`;
        const result = await fetchSanity(articleQuery, { id: articleId });
        
        if (result) {
          setArticle({
            ...result,
            date: result.date ? new Date(result.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Date inconnue',
            image: result.image ? urlFor(result.image).url() : 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&q=80&w=1200'
          });
        }

        // Fetch suggested news
        const suggestionsQuery = `*[_type == "article" && _id != $id][0...3] { _id, title, date, image }`;
        const suggestions = await fetchSanity(suggestionsQuery, { id: articleId });
        setSuggestedNews(suggestions.map((s: any) => ({
          _id: s._id,
          title: s.title,
          date: s.date ? new Date(s.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Date inconnue',
          image: s.image ? urlFor(s.image).url() : 'https://via.placeholder.com/400x300'
        })));

      } catch (error) {
        console.error('Erreur NewsArticlePage Sanity:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
    window.scrollTo(0, 0);
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
            {article.content ? (
              <div className="prose-p:mb-6">
                <PortableText value={article.content} />
              </div>
            ) : (
              <p>{article.excerpt}</p>
            )}
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
                 key={item._id} 
                 onClick={() => {
                   // In this app structure, we update articleId via parent state usually
                   // but here we can just go back to news for simplicity or trigger a read
                   onNavigate('news');
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
