import React, { useState } from 'react';
import { MessageSquare, Mail, MapPin, X, ShieldCheck, AlertTriangle, Clock } from 'lucide-react';
import logo from "./trustlink_logo.png"

interface FooterProps {
  lang: 'fr' | 'en';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lien communautaire WhatsApp
  const whatsappCommunityLink = "https://chat.whatsapp.com/HSI5gcoVRAiLJSLSU9QXn6?mode=gi_t";
  
  // Email de support
  const supportEmail = "trustlink.avat@gmail.com";

  const handleWhatsAppClick = () => {
    window.open(whatsappCommunityLink, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${supportEmail}`;
  };

  const t = {
    fr: {
      desc: "L'infrastructure d'exportation de confiance reliant les vendeurs nigérians au marché béninois.",
      lagos: "Lagos",
      cotonou: "Cotonou",
      links: "Liens Rapides",
      contact: "Contactez-nous",
      rights: "Tous droits réservés.",
      refundPolicy: "Politique de Retour et Remboursement",
      whatsappSupport: "WhatsApp Support",
      joinCommunity: "Rejoindre la communauté"
    },
    en: {
      desc: "The trusted export infrastructure connecting Nigerian sellers to the Beninese market.",
      lagos: "Lagos",
      cotonou: "Cotonou",
      links: "Quick Links",
      contact: "Contact Us",
      rights: "All rights reserved.",
      refundPolicy: "Refund & Return Policy",
      whatsappSupport: "WhatsApp Support",
      joinCommunity: "Join the community"
    }
  }[lang];

  return (
    <>
      <footer className="bg-slate-900 text-slate-400 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-white">
                <img 
                  src={logo} 
                  alt="TrustLink Logo" 
                  className="h-auto w-42 brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                {t.desc}
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">{t.links}</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><a href="#how" className="hover:text-blue-500 transition-colors">{lang === 'fr' ? 'Infrastructure' : 'Infrastructure'}</a></li>
                <li><a href="#features" className="hover:text-blue-500 transition-colors">{lang === 'fr' ? 'Avantages' : 'Benefits'}</a></li>
                <li><a href="#blog" className="hover:text-blue-500 transition-colors">{lang === 'fr' ? 'Intelligence' : 'Intelligence'}</a></li>
                <li><a href="#waitlist" className="hover:text-blue-500 transition-colors">{lang === 'fr' ? 'S\'inscrire' : 'Register'}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">{t.contact}</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-blue-500" /> 
                  <button 
                    onClick={handleEmailClick}
                    className="hover:text-blue-500 transition-colors cursor-pointer"
                  >
                    {supportEmail}
                  </button>
                </li>
                <li className="flex items-center gap-3">
                  <MessageSquare size={16} className="text-blue-500" /> 
                  <button 
                    onClick={handleWhatsAppClick}
                    className="hover:text-blue-500 transition-colors cursor-pointer"
                  >
                    {t.whatsappSupport}
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Locations</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li className="flex items-start gap-3"><MapPin size={16} className="text-blue-500 shrink-0" /> {t.lagos}</li>
                <li className="flex items-start gap-3"><MapPin size={16} className="text-blue-500 shrink-0" /> {t.cotonou}</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} TRUSTLINK TECHNOLOGIES. {t.rights}
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {t.refundPolicy}
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="hover:text-white transition-colors cursor-pointer bg-blue-600/20 px-3 py-1 rounded-full text-blue-400 hover:bg-blue-600/30"
              >
                {t.joinCommunity}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-blue-600" size={28} />
                <h2 className="text-xl font-black text-slate-900">
                  {lang === 'fr' ? 'Politique de Retour et Remboursement' : 'Refund & Return Policy'}
                </h2>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full"
              >
                <X size={20} className="text-slate-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm text-slate-700">
                  {lang === 'fr' 
                    ? "TrustLink exploite la proximité continentale entre le Nigeria et le Bénin pour offrir une sécurité d'achat supérieure. En responsabilisant le vendeur et en garantissant le remboursement via un système de séquestre, nous transformons le commerce transfrontalier en une expérience locale sécurisée."
                    : "TrustLink leverages continental proximity between Nigeria and Benin to offer superior purchasing security. By holding sellers accountable and guaranteeing refunds through escrow, we transform cross-border commerce into a secure local experience."}
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-4">
                <h3 className="font-bold text-slate-900 mb-2">{lang === 'fr' ? 'Séquestre (Escrow)' : 'Escrow'}</h3>
                <p className="text-sm text-slate-600">
                  {lang === 'fr'
                    ? "Les paiements sont conservés sur un compte séquestre. Les fonds sont libérés au vendeur uniquement après confirmation du client."
                    : "Payments are held in escrow. Funds are released to the seller only after customer confirmation."}
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-4">
                <h3 className="font-bold text-slate-900 mb-2">{lang === 'fr' ? 'Conversion automatique' : 'Automatic Conversion'}</h3>
                <p className="text-sm text-slate-600">
                  {lang === 'fr'
                    ? "Le paiement en FCFA est automatiquement converti en Naira."
                    : "FCFA payment is automatically converted to Naira."}
                </p>
                <div className="mt-3 bg-amber-50 p-3 rounded-lg">
                  <p className="text-sm text-amber-800">
                    {lang === 'fr'
                      ? '⚠️ En cas de remboursement, la conversion inverse se fera au taux en vigueur. L\'acheteur accepte que le montant remboursé puisse être inférieur. Exemple : 5 000 FCFA → 4 500 FCFA.'
                      : '⚠️ In case of refund, reverse conversion applies at current rate. Buyer accepts that refunded amount may be lower. Example: 5,000 FCFA → 4,500 FCFA.'}
                  </p>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl p-4">
                <h3 className="font-bold text-slate-900 mb-2">{lang === 'fr' ? 'Responsabilité du Vendeur' : 'Vendor Responsibility'}</h3>
                <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                  <li>{lang === 'fr' ? 'Preuve vidéo/photo avant expédition' : 'Video/photo proof before shipping'}</li>
                  <li>{lang === 'fr' ? 'Frais de retour à charge vendeur en cas de non-conformité' : 'Return costs borne by seller if non-compliant'}</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-xl">
                <h3 className="font-bold text-red-800 text-sm mb-2">{lang === 'fr' ? 'Exclusions' : 'Exclusions'}</h3>
                <ul className="text-xs text-red-700 space-y-1 list-disc list-inside">
                  <li>{lang === 'fr' ? 'Absence de vidéo d\'unboxing' : 'No unboxing video'}</li>
                  <li>{lang === 'fr' ? 'Délai de 48h dépassé' : '48h deadline exceeded'}</li>
                </ul>
              </div>
            </div>

            <div className="sticky bottom-0 bg-slate-50 border-t px-6 py-4 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700"
              >
                {lang === 'fr' ? 'Fermer' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;