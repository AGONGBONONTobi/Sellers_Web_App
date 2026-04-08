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
      subtitle: "Un système conçu pour que vous vendiez plus, sans risque et sans tracas , du stock à l'encaissement.",
      cards: [
        {
          icon: <BarChart3 className="text-blue-600" size={32} />,
          t: "Paiement Naira Garanti",
          d: "Vos fonds sont sécurisés en séquestre dès la commande. Vous êtes payé en Naira dès que nos agents collectent vos marchandises , zéro risque de change, zéro impayé."
        },
        {
          icon: <ShieldCheck className="text-blue-600" size={32} />,
          t: "Protection Vendeur Intégrée",
          d: "Chaque commande est documentée avec une preuve vidéo/photo avant expédition. En cas de litige, votre conformité est votre bouclier , vous n'êtes responsable que si l'écart est prouvé."
        },
        {
          icon: <Truck className="text-blue-600" size={32} />,
          t: "Zéro Logistique pour Vous",
          d: "Collecte gratuite dans votre boutique à Lagos, douane, transport et livraison finale au Bénin , tout est géré par TrustLink. Vous restez concentré sur votre stock."
        },
        {
          icon: <Globe className="text-blue-600" size={32} />,
          t: "Un Nouveau Marché de Millions d'Acheteurs",
          d: "Accédez à des distributeurs et acheteurs béninois qui n'ont aucun moyen de vous trouver sans TrustLink. Commandes groupées, clients récurrents, sans quitter Lagos."
        }
      ]
    },
    en: {
      title: "Why Sell with ",
      span: "TrustLink?",
      subtitle: "A system built so you sell more, with zero risk and zero hassle , from inventory to payout.",
      cards: [
        {
          icon: <BarChart3 className="text-blue-600" size={32} />,
          t: "Guaranteed Naira Payout",
          d: "Your funds are held in escrow from the moment an order is placed. You get paid in Naira as soon as our agents pick up your goods , no currency risk, no bad debt."
        },
        {
          icon: <ShieldCheck className="text-blue-600" size={32} />,
          t: "Built-in Vendor Protection",
          d: "Every order is documented with photo/video proof before shipping. In case of a dispute, your compliance is your shield , you're only liable if a discrepancy is proven."
        },
        {
          icon: <Truck className="text-blue-600" size={32} />,
          t: "Zero Logistics for You",
          d: "Free pickup from your Lagos shop, customs clearance, transport, and final delivery in Benin , all handled by TrustLink. You stay focused on your inventory."
        },
        {
          icon: <Globe className="text-blue-600" size={32} />,
          t: "A New Market of Millions of Buyers",
          d: "Reach Beninese distributors and buyers who have no way to find you without TrustLink. Bulk orders, repeat customers , all without leaving Lagos."
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
