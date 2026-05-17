
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { PricingBanner } from './components/PricingBanner';
import { ValueProps } from './components/ValueProps';
import { Coverage } from './components/Coverage';
import { News } from './components/News';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Offers } from './components/Offers';
import { CoveragePage } from './components/CoveragePage';
import { NewsPage } from './components/NewsPage';
import { ContactPage } from './components/ContactPage';
import { ServiceDetailsPage } from './components/ServiceDetailsPage';
import { FAQPage } from './components/FAQPage';
import { NewsArticlePage } from './components/NewsArticlePage';
import { IncidentNetworkPage } from './components/IncidentNetworkPage';
import { analytics } from './services/analytics';

export type ViewState = 'home' | 'about' | 'offers' | 'coverage' | 'news' | 'contact' | 'service-details' | 'faq' | 'news-article' | 'incident-network';

const MainSite: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Tracking automatique de la vue
    analytics.track('page_view', currentView, { 
      service: selectedServiceId, 
      article: selectedArticleId 
    });
  }, [currentView, selectedServiceId, selectedArticleId]);

  const handleNavigateToService = (serviceId: string) => {
    analytics.track('cta_click', `View Service: ${serviceId}`);
    setSelectedServiceId(serviceId);
    setCurrentView('service-details');
  };

  const handleReadArticle = (articleId: string) => {
    analytics.track('cta_click', `Read Article: ${articleId}`);
    setSelectedArticleId(articleId);
    setCurrentView('news-article');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero onNavigate={setCurrentView} />
            <Services onNavigateToService={handleNavigateToService} />
            <PricingBanner onNavigate={setCurrentView} />
            <ValueProps />
            <Coverage onNavigate={setCurrentView} />
            <News 
              onSeeAll={() => setCurrentView('news')} 
              onReadArticle={handleReadArticle}
            />
          </>
        )}
        {currentView === 'about' && <About />}
        {currentView === 'offers' && <Offers onNavigate={setCurrentView} />}
        {currentView === 'coverage' && <CoveragePage />}
        {currentView === 'news' && <NewsPage onReadArticle={handleReadArticle} />}
        {currentView === 'contact' && <ContactPage />}
        {currentView === 'faq' && <FAQPage />}
        {currentView === 'incident-network' && <IncidentNetworkPage />}
        {currentView === 'news-article' && selectedArticleId && (
          <NewsArticlePage 
            articleId={selectedArticleId} 
            onNavigate={setCurrentView} 
          />
        )}
        {currentView === 'service-details' && selectedServiceId && (
          <ServiceDetailsPage 
            serviceId={selectedServiceId} 
            onNavigate={setCurrentView}
          />
        )}
      </main>
      <Footer onNavigate={setCurrentView} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainSite />
    </BrowserRouter>
  );
};

export default App;
