
import React from 'react';
import { ViewState } from '../App';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/profile.php?id=61553061617944',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/groupesoteltchad/',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/sotel-tchad/',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  const scrollToPointsDeVente = () => {
    onNavigate('coverage');
    setTimeout(() => {
      const element = document.getElementById('points-de-vente');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const scrollToServiceClient = () => {
    onNavigate('contact');
    setTimeout(() => {
      const element = document.getElementById('service-client');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="bg-white p-1 rounded-full">
                 <img 
                  src="https://i.imgur.com/1NH6njo.png" 
                  alt="Sotel Logo" 
                  className="h-8 w-8 object-contain"
                />
              </div>
              <span className="hidden md:inline text-2xl font-display font-bold text-white">SOTEL <span className="text-secondary">TCHAD</span></span>
            </div>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              L'opérateur national au service du développement socio-économique du Tchad par les technologies de l'information.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Entreprise</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-secondary transition-colors text-left">Accueil</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-secondary transition-colors text-left">À propos</button></li>
              <li><button onClick={() => onNavigate('offers')} className="hover:text-secondary transition-colors text-left">Nos Offres</button></li>
              <li><button onClick={() => onNavigate('coverage')} className="hover:text-secondary transition-colors text-left">Couverture Réseau</button></li>
              <li><button onClick={() => onNavigate('news')} className="hover:text-secondary transition-colors text-left">Actualités</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Assistance</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={scrollToServiceClient} className="hover:text-secondary transition-colors text-left">Service Client</button></li>
              <li><button onClick={scrollToPointsDeVente} className="hover:text-secondary transition-colors text-left">Points de vente</button></li>
              <li><button onClick={() => onNavigate('incident-network')} className="hover:text-secondary transition-colors text-left">Incident Réseau</button></li>
              <li><button onClick={() => onNavigate('faq')} className="hover:text-secondary transition-colors text-left">FAQ</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-secondary transition-colors text-left">Nous Contacter</button></li>
            </ul>
          </div>

          <div id="contact-info">
            <h4 className="text-lg font-bold mb-8 text-white">Contact</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3">phone</span>
                <span>+235 22 52 14 47</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3">mail</span>
                <span>contact@sotel.td</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3">location_on</span>
                <span>Avenue Charles de Gaulle, BP 1234,<br />N'Djamena, Tchad</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 Sotel Tchad. Tous droits réservés.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300">Mentions Légales</a>
            <a href="#" className="hover:text-slate-300">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
