import React from 'react';
import { Search, Wallet, Truck, CheckCircle2, ClipboardCheck } from 'lucide-react';

interface HowItWorksProps {
  lang: 'fr' | 'en';
}

const HowItWorks: React.FC<HowItWorksProps> = ({ lang }) => {
    const t = {
    fr: {
      title: "Votre Parcours ",
      span: "Vendeur",
      steps: [
        {
          icon: <Search className="text-blue-600" size={32} />,
          title: "Enregistrement & Vérification",
          desc: "Inscrivez votre boutique. Nos agents à Lagos effectuent une vérification physique pour certifier votre stock."
        },
        {
          icon: <Wallet className="text-blue-600" size={32} />,
          title: "Réception des Commandes",
          desc: "Recevez des demandes d'achat groupées de distributeurs béninois via notre plateforme sécurisée."
        },
        {
          icon: <ClipboardCheck className="text-blue-600" size={32} />,
          title: "Vérification de la Commande",
          desc: "Avant la collecte, nos agents inspectent et confirment la conformité des produits avec la commande passée."
        },
        {
          icon: <Truck className="text-blue-600" size={32} />,
          title: "Collecte & Expédition",
          desc: "Nous récupérons les marchandises directement dans votre boutique. Vous n'avez pas à gérer le transport."
        },
        {
          icon: <CheckCircle2 className="text-blue-600" size={32} />,
          title: "Paiement Instantané",
          desc: "Recevez votre paiement en Naira sur votre compte bancaire dès que la collecte est confirmée."
        }
      ]
    },
    en: {
      title: "Your Vendor ",
      span: "Journey",
      steps: [
        {
          icon: <Search className="text-blue-600" size={32} />,
          title: "Registration & Verification",
          desc: "Register your shop. Our Lagos agents perform a physical check to certify your inventory."
        },
        {
          icon: <Wallet className="text-blue-600" size={32} />,
          title: "Receive Orders",
          desc: "Get bulk purchase requests from Beninese distributors through our secure platform."
        },
        {
          icon: <ClipboardCheck className="text-blue-600" size={32} />,
          title: "Order Verification",
          desc: "Before pickup, our agents inspect and confirm that the products match the order specifications."
        },
        {
          icon: <Truck className="text-blue-600" size={32} />,
          title: "Pickup & Shipping",
          desc: "We collect goods directly from your shop. You don't have to worry about logistics or customs."
        },
        {
          icon: <CheckCircle2 className="text-blue-600" size={32} />,
          title: "Instant Payout",
          desc: "Receive your payout in Naira to your bank account as soon as the pickup is confirmed."
        }
      ]
    }
  }[lang];
  return (
    <section id="how" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            {t.title} <span className="text-blue-600">{t.span}</span>
          </h2>
          <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-slate-100 -z-10"></div>

          {t.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white border-4 border-slate-50 rounded-3xl shadow-xl flex items-center justify-center mb-6 group-hover:border-blue-500 transition-all duration-500 group-hover:-translate-y-2">
                {step.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
              <div className="mt-6 w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
