import React from 'react';
import { BarChart3, ShieldCheck, Truck, Globe } from 'lucide-react';

interface FeaturesProps {
  lang: 'fr' | 'en';
}

const Features: React.FC<FeaturesProps> = ({ lang }) => {
  const t = {
  fr: {
    title: "Pourquoi Vendre avec ",
    span: "TrustLink ?",
    subtitle: "Une infrastructure pensée pour vous connecter à un marché que vous ne pouviez pas atteindre seul.",
    cards: [
      {
        icon: <Globe className="text-blue-600" size={32} />,
        t: "Un Nouveau Marché à Portée",
        d: "Le marché béninois est inaccessible sans réseau privé. TrustLink vous y connecte directement , des acheteurs qui cherchent vos produits sans pouvoir vous trouver."
      },
      {
        icon: <ShieldCheck className="text-blue-600" size={32} />,
        t: "Paiement via Séquestre",
        d: "Vos fonds sont sécurisés dès la commande. Le paiement est libéré une fois que le client confirme la réception et sa satisfaction , un système transparent pour les deux parties."
      },
      {
        icon: <BarChart3 className="text-blue-600" size={32} />,
        t: "Protection Vendeur Documentée",
        d: "Chaque commande est documentée avec une preuve photo/vidéo avant expédition. En cas de litige, votre conformité est vérifiable , vous n'êtes responsable que si l'écart est prouvé."
      },
      {
        icon: <Truck className="text-blue-600" size={32} />,
        t: "Logistique Transfrontalière Gérée",
        d: "Douane, transport et livraison finale au Bénin sont coordonnés par TrustLink. Vous vous concentrez sur votre stock, nous gérons le reste."
      }
    ]
  },
  en: {
    title: "Why Sell with ",
    span: "TrustLink?",
    subtitle: "An infrastructure built to connect you to a market you couldn't reach on your own.",
    cards: [
      {
        icon: <Globe className="text-blue-600" size={32} />,
        t: "A New Market Within Reach",
        d: "The Beninese market is locked behind private networks. TrustLink connects you directly , buyers who are looking for your products but have no way to find you."
      },
      {
        icon: <ShieldCheck className="text-blue-600" size={32} />,
        t: "Escrow-Based Payment",
        d: "Your funds are secured from the moment an order is placed. Payment is released once the customer confirms receipt and satisfaction , a transparent system for both sides."
      },
      {
        icon: <BarChart3 className="text-blue-600" size={32} />,
        t: "Documented Vendor Protection",
        d: "Every order is documented with photo/video proof before shipping. In case of a dispute, your compliance is verifiable , you're only liable if a discrepancy is proven."
      },
      {
        icon: <Truck className="text-blue-600" size={32} />,
        t: "Cross-Border Logistics Handled",
        d: "Customs, transport, and final delivery in Benin are coordinated by TrustLink. You focus on your inventory, we handle the rest."
      }
    ]
  }
}[lang];
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            {t.title} <span className="text-blue-600">{t.span}</span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.cards.map((card: any, i: number) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{card.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{card.t}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{card.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
