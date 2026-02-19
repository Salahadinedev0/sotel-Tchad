
import React from 'react';
import { ViewState } from '../App';

interface NewsArticlePageProps {
  articleId: string;
  onNavigate: (view: ViewState) => void;
}

const newsData: Record<string, any> = {
  'article-1': {
    title: 'Lancement de la Fibre à Am-Riguebe',
    date: '15 Mai 2024',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
    content: `
      Sotel Tchad est fier d'annoncer l'extension de son réseau de fibre optique au quartier Am-Riguebe. Cette initiative s'inscrit dans notre plan stratégique de modernisation des infrastructures numériques de la capitale.
      
      Le déploiement de la technologie FTTH (Fiber to the Home) à Am-Riguebe permettra aux résidents et aux entreprises locales de bénéficier d'une connexion internet stable, rapide et illimitée. Les équipes techniques ont travaillé sans relâche pour assurer une installation respectant les plus hauts standards internationaux.
      
      Monsieur Mahamat, directeur technique, souligne : "C'est une étape cruciale pour réduire la fracture numérique au sein même de N'Djamena. Nous ne nous arrêterons pas là." Les résidents peuvent dès aujourd'hui souscrire aux forfaits Sotel Fibre dans l'agence la plus proche.
    `
  },
  'article-2': {
    title: 'Nouveaux forfaits Mobile Tawali',
    date: '10 Mai 2024',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1512428559083-a401c338e45e?auto=format&fit=crop&q=80&w=1200',
    content: `
      Restez connectés avec les toutes nouvelles offres Tawali ! Sotel Tchad a repensé ses forfaits mobiles pour offrir plus de flexibilité et de volume data aux utilisateurs tchadiens.
      
      Face à l'augmentation de la consommation de contenus vidéo et des réseaux sociaux, nos nouveaux forfaits "Max" doublent le volume data sans augmenter les tarifs. Que vous soyez étudiant, professionnel ou particulier, il y a forcément un pack Tawali qui répond à vos besoins quotidiens.
      
      En plus du volume, nous avons amélioré la qualité du réseau 4G LTE dans les zones denses pour garantir une expérience de navigation fluide même aux heures de pointe.
    `
  },
  'article-3': {
    title: 'Sotel Tchad au forum de l\'innovation',
    date: '02 Mai 2024',
    category: 'Entreprise',
    image: 'https://images.unsplash.com/photo-1591115765373-520b7a21765b?auto=format&fit=crop&q=80&w=1200',
    content: `
      La participation de Sotel Tchad au forum de l'innovation SITIC AFRICA 2024 a été marquée par la présentation de nos solutions Cloud souveraines. 
      
      En tant qu'opérateur national, nous avons réaffirmé notre engagement à héberger les données stratégiques du Tchad sur le sol national, garantissant ainsi sécurité et souveraineté. Le forum a été l'occasion d'échanger avec des partenaires technologiques internationaux pour préparer les services de demain : IoT, Big Data et Intelligence Artificielle au service de l'administration tchadienne.
      
      "Le numérique est le moteur de la croissance de demain, et Sotel en est le carburant", a déclaré la direction générale lors de la conférence de clôture.
    `
  }
};

export const NewsArticlePage: React.FC<NewsArticlePageProps> = ({ articleId, onNavigate }) => {
  const article = newsData[articleId] || {
    title: 'Article non trouvé',
    date: '',
    category: 'Information',
    image: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&q=80&w=1200',
    content: 'Désolé, le contenu de cet article est indisponible pour le moment.'
  };

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
                {article.category}
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
            {article.content.split('\n').map((paragraph: string, i: number) => (
              paragraph.trim() && <p key={i}>{paragraph.trim()}</p>
            ))}
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
             {Object.keys(newsData).filter(id => id !== articleId).slice(0, 3).map(id => (
               <div 
                 key={id} 
                 onClick={() => onNavigate('news')}
                 className="bg-white p-4 rounded-3xl border border-slate-200 cursor-pointer hover:shadow-lg transition-all text-left"
               >
                 <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                    <img src={newsData[id].image} alt="" className="w-full h-full object-cover" />
                 </div>
                 <h4 className="font-bold text-slate-900 line-clamp-2 mb-2">{newsData[id].title}</h4>
                 <span className="text-xs text-slate-400 uppercase font-black">{newsData[id].date}</span>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};
