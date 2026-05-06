
import React, { useState } from 'react';
import { ViewState } from '../App';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (view: ViewState) => {
    onNavigate(view);
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Accueil', view: 'home' as const },
    { name: 'À propos', view: 'about' as const },
    { name: 'Offres', view: 'offers' as const },
    { name: 'Couverture', view: 'coverage' as const },
    { name: 'Actualités', view: 'news' as const },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-header border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNav('home');
            }}
            className="flex-shrink-0 flex items-center space-x-3 cursor-pointer group transition-transform hover:scale-[1.02] active:scale-95"
          >
            <div className="bg-white p-1 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
               <img 
                src="https://i.imgur.com/1NH6njo.png" 
                alt="Sotel Tchad Logo" 
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="hidden md:flex flex-col leading-none">
              <span className="text-xl font-display font-bold text-primary tracking-tight group-hover:text-blue-700 transition-colors">
                SOTEL <span className="text-secondary">TCHAD</span>
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Opérateur National</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.view);
                }}
                className={`text-sm font-semibold transition-colors ${
                  currentView === item.view
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-slate-700 hover:text-primary'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={() => handleNav('contact')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md ${
                currentView === 'contact' 
                ? 'bg-secondary text-white shadow-secondary/20' 
                : 'bg-primary text-white hover:bg-blue-800 shadow-primary/20'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-primary"
            >
              <span className="material-symbols-outlined text-3xl">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href="#"
                className={`block px-3 py-4 text-base font-bold rounded-lg ${
                   currentView === item.view ? 'text-primary bg-slate-50' : 'text-slate-700 hover:bg-slate-50 hover:text-primary'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.view);
                }}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#"
              className={`block px-3 py-4 text-base font-bold rounded-lg ${
                currentView === 'contact' ? 'text-secondary bg-slate-50' : 'text-primary'
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNav('contact');
              }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
