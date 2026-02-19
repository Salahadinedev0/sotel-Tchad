
import React, { useState } from 'react';

type FAQCategory = 'General' | 'Fiber' | 'Mobile' | 'Billing';

interface FAQItem {
  question: string;
  answer: string;
  category: FAQCategory;
}

export const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FAQCategory | 'All'>('All');

  const faqs: FAQItem[] = [
    {
      category: 'General',
      question: "Qu'est-ce que Sotel Tchad ?",
      answer: "Sotel Tchad est l'opérateur historique national de télécommunications au Tchad. Nous fournissons des services de téléphonie fixe, de mobile (via Tawali), d'internet haut débit par fibre optique et des solutions sur mesure pour les entreprises."
    },
    {
      category: 'Fiber',
      question: "Comment savoir si mon quartier est éligible à la Fibre ?",
      answer: "Vous pouvez vérifier votre éligibilité directement sur notre page 'Couverture' ou en contactant notre service commercial au 22 52 14 47. Nous déployons actuellement la fibre dans de nombreux quartiers de N'Djamena."
    },
    {
      category: 'Fiber',
      question: "Quels sont les frais d'installation pour la Fibre ?",
      answer: "Les frais d'installation varient selon le type d'offre. Actuellement, pour toute nouvelle souscription à un forfait annuel, les frais d'installation et l'équipement (modem/routeur) sont offerts."
    },
    {
      category: 'Mobile',
      question: "Où puis-je acheter une carte SIM Tawali ?",
      answer: "Les cartes SIM Tawali sont disponibles dans toutes les agences Sotel Tchad et chez nos revendeurs agréés partout dans le pays. Munissez-vous d'une pièce d'identité valide pour l'identification obligatoire."
    },
    {
      category: 'Mobile',
      question: "Comment activer mon forfait internet 4G ?",
      answer: "Composez le code USSD *123# depuis votre mobile Tawali et suivez les instructions du menu pour choisir le forfait data (Jour, Semaine, Mois) qui vous convient."
    },
    {
      category: 'Billing',
      question: "Comment payer ma facture internet ?",
      answer: "Plusieurs options s'offrent à vous : en agence Sotel, via Tawali Mobile Money, par virement bancaire ou par chèque à l'ordre de Sotel Tchad."
    },
    {
      category: 'General',
      question: "Quels sont les horaires d'ouverture des agences ?",
      answer: "Nos agences vous accueillent du lundi au jeudi de 07h30 à 15h30, et le vendredi de 07h30 à 12h00. Le support technique pour les entreprises est disponible 24h/24."
    },
    {
      category: 'Billing',
      question: "Que faire en cas de coupure de service ?",
      answer: "Vérifiez d'abord l'état de vos branchements et redémarrez votre équipement. Si le problème persiste, contactez notre support technique au 123 (depuis Tawali) ou au +235 22 52 14 47."
    }
  ];

  const categories: { label: string; value: FAQCategory | 'All' }[] = [
    { label: 'Toutes les questions', value: 'All' },
    { label: 'Général', value: 'General' },
    { label: 'Fibre Optique', value: 'Fiber' },
    { label: 'Mobile & 4G', value: 'Mobile' },
    { label: 'Paiement', value: 'Billing' },
  ];

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(f => f.category === activeCategory);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Header */}
      <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-4">Questions Fréquentes</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Trouvez rapidement des réponses à vos interrogations sur nos services et offres.</p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat.value 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-primary hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Content */}
      <section className="py-20 bg-white min-h-[500px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredFaqs.map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 rounded-2xl border border-slate-100 open:bg-white open:border-primary/20 transition-all duration-300">
                <summary className="list-none flex justify-between items-center p-6 cursor-pointer outline-none">
                  <h3 className="text-lg font-bold text-slate-900 pr-4 group-open:text-primary transition-colors">{faq.question}</h3>
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-open:bg-primary group-open:text-white group-open:rotate-180 transition-all">
                    <span className="material-symbols-outlined text-xl">expand_more</span>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed animate-in slide-in-from-top-2">
                  <div className="pt-2 border-t border-slate-200/50">
                    {faq.answer}
                  </div>
                </div>
              </details>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="py-20 text-center">
              <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">help_center</span>
              <p className="text-slate-500 font-bold">Aucune question trouvée dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-3xl">support_agent</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
          <p className="text-slate-500 mb-10">Nos conseillers sont disponibles pour vous répondre personnellement et vous guider dans vos démarches.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:22521447" className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-800 transition-all flex items-center justify-center">
              <span className="material-symbols-outlined mr-2">phone_in_talk</span>
              Appeler le 22 52 14 47
            </a>
            <button 
              onClick={() => (window as any).location.href = '#contact-info'} 
              className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-primary hover:text-primary transition-all flex items-center justify-center"
            >
              <span className="material-symbols-outlined mr-2">mail</span>
              Nous envoyer un email
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
