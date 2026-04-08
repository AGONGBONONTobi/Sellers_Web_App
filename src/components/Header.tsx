import React, { useState } from 'react';
import { Building2, Languages, Zap } from 'lucide-react';
import logo from "./trustlink_logo.png"

interface HeaderProps {
  isScrolled: boolean;
  lang: 'fr' | 'en';
  setLang: (lang: 'fr' | 'en') => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const t = {
    fr: { 
      how: "Processus Vendeur", 
      features: "Avantages Export", 
      blog: "Intelligence Marché", 
      join: "Devenir Vendeur" 
    },
    en: { 
      how: "Vendor Process", 
      features: "Export Benefits", 
      blog: "Market Intelligence", 
      join: "Become a Vendor" 
    }
  }[lang];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="TrustLink Logo" 
            className="h-30 w-auto"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">{t.how}</a>
          <a href="#features" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">{t.features}</a>
          <a href="#blog" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">{t.blog}</a>
          
          <button 
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} 
            className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <Languages size={14} /> {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          
          <a href="#waitlist" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            {t.join}
          </a>
        </nav>
        
        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Zap size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-6 space-y-4 animate-in slide-in-from-top duration-300">
          <a href="#how" className="block text-lg font-bold text-slate-900" onClick={() => setIsMenuOpen(false)}>{t.how}</a>
          <a href="#features" className="block text-lg font-bold text-slate-900" onClick={() => setIsMenuOpen(false)}>{t.features}</a>
          <a href="#blog" className="block text-lg font-bold text-slate-900" onClick={() => setIsMenuOpen(false)}>{t.blog}</a>
          <div className="pt-4 flex flex-col gap-4">
            <button 
              onClick={() => { setLang(lang === 'fr' ? 'en' : 'fr'); setIsMenuOpen(false); }} 
              className="flex items-center justify-center gap-2 bg-slate-100 py-3 rounded-xl text-sm font-bold text-slate-600"
            >
              <Languages size={18} /> {lang === 'fr' ? 'English' : 'Français'}
            </button>
            <a href="#waitlist" className="bg-blue-600 text-white py-4 rounded-xl font-bold text-center shadow-lg" onClick={() => setIsMenuOpen(false)}>
              {t.join}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
