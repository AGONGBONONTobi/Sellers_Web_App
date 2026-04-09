import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

interface HeroProps {
  lang: 'fr' | 'en';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = {
  fr: {
    badge: "INFRASTRUCTURE D'EXPORTATION : NIGERIA → BÉNIN",
    h1: "Vendez du Nigéria au Bénin en toute simplicité.",
    h1Span: "Élargissez votre clientèle.",
    p: "Accédez à des acheteurs potentiels. Développez votre activité à l'international.",
    cta: "Commencez à vendre",
    users: "+500 vendeurs nigérians déjà certifiés"
  },
  en: {
    badge: "EXPORT INFRASTRUCTURE: NIGERIA → BENIN",
    h1: "Sell from Nigeria to Benin — Seamlessly. ",
    h1Span: "Expand your reach.",
    p: "Access ready buyers. Grow your business across borders.",
    cta: "Start Selling Now",
    users: "+500 Nigerian sellers already certified"
  }
}[lang];

  return (
    <section className="relative pt-48 pb-32 bg-gradient-to-br from-blue-50 via-white to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black mb-8 animate-pulse">
              <Zap size={14} /> {t.badge}
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-8">
              {t.h1} <span className="text-blue-600">{t.h1Span}</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
              {t.p}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#waitlist" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-3 group">
                {t.cta} <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            <p className="mt-8 text-sm font-bold text-slate-400 uppercase tracking-widest">{t.users}</p>
          </div>
          
          <div className="flex-1 hidden lg:block">
            <div className="relative bg-white p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 max-w-md ml-auto">
               <div className="flex justify-between items-center mb-10 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <span>TrustLink Hub Control</span>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
               </div>
               <div className="space-y-6">
                  <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-blue-500">
                     <p className="text-[10px] font-black text-slate-400 mb-1">LAGOS GATEWAY</p>
                     <p className="font-bold text-slate-900 text-lg">Inventory Secured</p>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-blue-600">
                     <p className="text-[10px] font-black text-slate-400 mb-1">TRANSIT STATUS</p>
                     <p className="font-bold text-slate-900 text-lg">Cleared Sèmè-Kraké</p>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-orange-500">
                     <p className="text-[10px] font-black text-slate-400 mb-1">SETTLEMENT</p>
                     <p className="font-bold text-slate-900 text-lg">Naira Payout Confirmed</p>
                  </div>
               </div>
               
               {/* Floating decorative card */}
               <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 animate-bounce duration-[3000ms]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <BarChart3 size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400">ROI INCREASE</p>
                      <p className="font-bold text-blue-600">+24% Monthly</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper for the floating card icon
const BarChart3 = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
  </svg>
);

export default Hero;
