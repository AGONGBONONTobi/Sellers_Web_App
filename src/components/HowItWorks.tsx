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
        title: "Enregistrement",
        desc: "Inscrivez votre boutique sur la plateforme et commencez à lister vos produits."
      },
      {
        icon: <Wallet className="text-blue-600" size={32} />,
        title: "Réception des Commandes",
        desc: "Recevez des demandes d'achat de clients béninois via notre plateforme sécurisée."
      },
      {
        icon: <ClipboardCheck className="text-blue-600" size={32} />,
        title: "Vérification des Produits",
        desc: "En tant que vendeur, vous vérifiez vous-même la conformité des produits avant l'expédition."
      },
      {
        icon: <Truck className="text-blue-600" size={32} />,
        title: "Expédition vers le Bénin",
        desc: "Les produits vérifiés sont acheminés vers le Bénin. Douane et transport sont gérés par TrustLink."
      },
      {
        icon: <CheckCircle2 className="text-blue-600" size={32} />,
        title: "Paiement Garanti via Séquestre",
desc: "Dès qu'une commande est passée, les fonds de l'acheteur sont sécurisés dans notre système de séquestre. Votre paiement est protégé et garanti avant même que vous expédiiez quoi que ce soit."}
    ]
  },
  en: {
    title: "Your Vendor ",
    span: "Journey",
    steps: [
      {
        icon: <Search className="text-blue-600" size={32} />,
        title: "Registration",
        desc: "Register your shop on the platform and start listing your products."
      },
      {
        icon: <Wallet className="text-blue-600" size={32} />,
        title: "Receive Orders",
        desc: "Get purchase requests from Beninese customers through our secure platform."
      },
      {
        icon: <ClipboardCheck className="text-blue-600" size={32} />,
        title: "Product Verification",
        desc: "As a seller, you verify the product compliance yourself before shipping."
      },
      {
        icon: <Truck className="text-blue-600" size={32} />,
        title: "Shipping to Benin",
        desc: "Verified products are shipped to Benin. Customs and transport are fully handled by TrustLink."
      },
      {
        icon: <CheckCircle2 className="text-blue-600" size={32} />,
        title: "Guaranteed Payment via Escrow",
        desc: "As soon as an order is placed, the buyer's funds are secured in our escrow system. Your payment is protected and guaranteed before you even ship anything."
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
