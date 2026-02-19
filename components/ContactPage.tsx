
import React, { useState } from 'react';

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full mb-6 uppercase tracking-widest">Support & Relation Client</div>
          <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 mb-6">Parlons de votre <span className="text-primary">connexion</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Nos équipes sont à votre écoute pour vous accompagner dans tous vos projets numériques.
          </p>
        </div>
      </section>

      {/* Service Client Section */}
      <section id="service-client" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900">Service Client Dédié</h2>
            <p className="text-slate-500 mt-4">Plusieurs canaux pour vous répondre rapidement, où que vous soyez.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 rounded-3xl bg-primary text-white shadow-xl shadow-primary/20 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">phone_forwarded</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Numéro Court</h3>
              <p className="text-blue-100 text-sm mb-6">Composez le numéro gratuit depuis votre mobile Tawali pour une assistance immédiate.</p>
              <span className="text-4xl font-display font-black text-secondary">123</span>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-secondary">
                <span className="material-symbols-outlined text-4xl">chat</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Support WhatsApp</h3>
              <p className="text-slate-400 text-sm mb-6">Envoyez-nous un message pour vos questions de facturation ou d'éligibilité.</p>
              <a href="https://wa.me/23522521447" target="_blank" rel="noreferrer" className="px-6 py-2 bg-secondary text-white rounded-full font-bold text-sm">Discuter maintenant</a>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">contact_support</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Espace Client</h3>
              <p className="text-slate-500 text-sm mb-6">Gérez vos forfaits, payez vos factures et ouvrez un ticket d'incident en ligne.</p>
              <button className="px-6 py-2 border-2 border-primary text-primary rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all">Se connecter</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Nos Coordonnées</h2>
                <div className="space-y-8">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mr-6 group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Téléphone</h4>
                      <p className="text-slate-500 text-sm font-medium">+235 22 52 14 47</p>
                      <p className="text-slate-400 text-xs">Appel gratuit depuis un fixe Sotel</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mr-6 group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined">alternate_email</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">E-mail</h4>
                      <p className="text-slate-500 text-sm font-medium">contact@sotel.td</p>
                      <p className="text-slate-500 text-sm font-medium">support@sotel.td</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mr-6 group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Siège Social</h4>
                      <p className="text-slate-500 text-sm font-medium">
                        Avenue Charles de Gaulle<br />
                        BP 1234, N'Djamena, Tchad
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-6 flex items-center">
                  <span className="material-symbols-outlined text-secondary mr-2">schedule</span>
                  Horaires d'ouverture
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between text-slate-600">
                    <span className="font-medium">Lundi - Jeudi</span>
                    <span className="font-bold">07:30 - 15:30</span>
                  </li>
                  <li className="flex justify-between text-slate-600">
                    <span className="font-medium">Vendredi</span>
                    <span className="font-bold">07:30 - 12:00</span>
                  </li>
                  <li className="flex justify-between text-slate-400 italic">
                    <span>Samedi - Dimanche</span>
                    <span>Fermé</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                {formState === 'success' ? (
                  <div className="py-20 text-center animate-in zoom-in-95 duration-500">
                    <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-8">
                      <span className="material-symbols-outlined text-5xl">check_circle</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Message envoyé !</h3>
                    <p className="text-slate-500 mb-8 max-w-sm mx-auto">
                      Merci de nous avoir contactés. Nos équipes reviendront vers vous dans les plus brefs délais.
                    </p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="px-8 py-3 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Formulaire de Contact</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Nom complet</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="Ex: Mahamat Ali"
                            className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Adresse E-mail</label>
                          <input 
                            type="email" 
                            required 
                            placeholder="votre@email.com"
                            className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Sujet de votre demande</label>
                        <select className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all appearance-none">
                          <option>Informations sur les offres Fibre</option>
                          <option>Support technique & Incidents</option>
                          <option>Devenir revendeur Tawali</option>
                          <option>Service Entreprise & Cloud</option>
                          <option>Autre demande</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Votre message</label>
                        <textarea 
                          required 
                          rows={6}
                          placeholder="Dites-nous comment nous pouvons vous aider..."
                          className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                        ></textarea>
                      </div>

                      <div className="pt-4">
                        <button 
                          type="submit" 
                          disabled={formState === 'submitting'}
                          className="w-full py-5 rounded-xl bg-primary text-white font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center shadow-lg shadow-primary/20 disabled:opacity-50"
                        >
                          {formState === 'submitting' ? (
                            <span className="animate-spin material-symbols-outlined">progress_activity</span>
                          ) : (
                            <>
                              Envoyer le message
                              <span className="material-symbols-outlined ml-2">send</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-slate-900 p-4 rounded-[3rem] border border-slate-800 shadow-sm overflow-hidden h-[400px] relative">
              <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                 <div className="text-center p-8">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                       <span className="material-symbols-outlined text-4xl text-secondary">location_away</span>
                    </div>
                    <p className="font-display font-bold text-white">Nos agences à N'Djamena</p>
                    <p className="text-sm text-slate-400 mt-2">Retrouvez-nous à Sabangali, Bololo, Chagoua et Moursal.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
