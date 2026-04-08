import React, { useState } from 'react';
import { Building2, MessageSquare, Mail, Phone, MapPin, X, ShieldCheck, Truck, AlertTriangle, Clock } from 'lucide-react';
import logo from "./trustlink_logo.png"

interface FooterProps {
  lang: 'fr' | 'en';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const t = {
    fr: {
      desc: "L'infrastructure d'exportation de confiance reliant les vendeurs nigérians au marché béninois.",
      office_lagos: "Bureau Lagos : Ikeja",
      office_cotonou: "Bureau Cotonou : Ganhi",
      links: "Liens Rapides",
      contact: "Contactez-nous",
      rights: "Tous droits réservés.",
      refundPolicy: "Politique de Retour et Remboursement"
    },
    en: {
      desc: "The trusted export infrastructure connecting Nigerian sellers to the Beninese market.",
      office_lagos: "Lagos Office: Ikeja",
      office_cotonou: "Cotonou Office: Ganhi",
      links: "Quick Links",
      contact: "Contact Us",
      rights: "All rights reserved.",
      refundPolicy: "Refund & Return Policy"
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
                <li className="flex items-center gap-3"><Mail size={16} className="text-blue-500" /> contact@trustlink.africa</li>
                <li className="flex items-center gap-3"><Phone size={16} className="text-blue-500" /> +234 800 TRUSTLINK</li>
                <li className="flex items-center gap-3"><MessageSquare size={16} className="text-blue-500" /> WhatsApp Support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Locations</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li className="flex items-start gap-3"><MapPin size={16} className="text-blue-500 shrink-0" /> {t.office_lagos}</li>
                <li className="flex items-start gap-3"><MapPin size={16} className="text-blue-500 shrink-0" /> {t.office_cotonou}</li>
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
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-blue-600" size={28} />
                <h2 className="text-xl font-black text-slate-900">
                  {lang === 'fr' ? 'Politique de Retour et Remboursement' : 'Refund & Return Policy'}
                </h2>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={20} className="text-slate-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Introduction */}
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {lang === 'fr' 
                    ? "TrustLink exploite la proximité continentale entre le Nigeria et le Bénin pour offrir une sécurité d'achat supérieure aux plateformes asiatiques. En responsabilisant le vendeur et en garantissant le remboursement via un système de séquestre, nous transformons le commerce transfrontalier en une expérience locale sécurisée."
                    : "TrustLink leverages the continental proximity between Nigeria and Benin to offer superior purchasing security compared to Asian platforms. By holding sellers accountable and guaranteeing refunds through an escrow system, we transform cross-border commerce into a secure local experience."}
                </p>
              </div>

              {/* Escrow */}
              <div className="border border-slate-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-black text-sm">🔒</span>
                  </div>
                  <h3 className="font-bold text-slate-900">{lang === 'fr' ? 'Le Pilier de Confiance : Le Séquestre (Escrow)' : 'The Trust Pillar: Escrow'}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {lang === 'fr'
                    ? "Tous les paiements effectués sont conservés sur un compte de séquestre sécurisé. Les fonds ne sont libérés au vendeur que si :"
                    : "All payments are held in a secure escrow account. Funds are only released to the seller if:"}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
                  <li>{lang === 'fr' ? "Le client confirme la réception conforme via l'application" : "The customer confirms satisfactory receipt via the app"}</li>
                  <li>{lang === 'fr' ? "Le délai de réclamation de 48 heures après livraison est expiré sans litige ouvert" : "The 48-hour claim period after delivery has expired without an open dispute"}</li>
                </ul>
              </div>

              {/* Vendor Responsibility */}
              <div className="border border-slate-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-black text-sm">📦</span>
                  </div>
                  <h3 className="font-bold text-slate-900">{lang === 'fr' ? 'Responsabilité du Vendeur' : 'Vendor Responsibility'}</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2">• {lang === 'fr' ? 'Preuve numérique obligatoire : vidéo ou photo détaillée du produit avant expédition' : 'Mandatory digital proof: detailed video or photo of product before shipping'}</li>
                  <li className="flex gap-2">• {lang === 'fr' ? 'Responsabilité financière : en cas de non-conformité, le vendeur assume l\'annulation et les frais de retour' : 'Financial responsibility: in case of non-compliance, seller bears cancellation and return costs'}</li>
                </ul>
              </div>

              {/* Dispute Matrix Table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-800 px-4 py-3">
                  <h3 className="font-bold text-white text-sm">{lang === 'fr' ? 'Matrice de Résolution des Litiges' : 'Dispute Resolution Matrix'}</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-slate-700">{lang === 'fr' ? 'Scénario' : 'Scenario'}</th>
                        <th className="px-4 py-3 text-left font-bold text-slate-700">{lang === 'fr' ? 'Justification' : 'Justification'}</th>
                        <th className="px-4 py-3 text-left font-bold text-slate-700">{lang === 'fr' ? 'Action Logistique' : 'Logistic Action'}</th>
                        <th className="px-4 py-3 text-left font-bold text-slate-700">{lang === 'fr' ? 'Remboursement' : 'Refund'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">{lang === 'fr' ? 'Accident / Perte' : 'Accident / Loss'}</td>
                        <td className="px-4 py-3 text-slate-600">{lang === 'fr' ? 'Preuve du transporteur partenaire' : 'Partner carrier proof'}</td>
                        <td className="px-4 py-3 text-slate-600">{lang === 'fr' ? 'Aucune (perte totale)' : 'None (total loss)'}</td>
                        <td className="px-4 py-3 text-green-600 font-bold">100% {lang === 'fr' ? '(Prix + Port)' : '(Price + Shipping)'}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">{lang === 'fr' ? 'Non-Conformité' : 'Non-Compliance'}</td>
                        <td className="px-4 py-3 text-slate-600">{lang === 'fr' ? 'Écart avec la vidéo du vendeur' : 'Deviation from seller video'}</td>
                        <td className="px-4 py-3 text-slate-600">{lang === 'fr' ? 'Retour au Nigeria' : 'Return to Nigeria'}</td>
                        <td className="px-4 py-3 text-green-600 font-bold">100% {lang === 'fr' ? '(Prix + Port)' : '(Price + Shipping)'}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">{lang === 'fr' ? 'Dommage Mineur' : 'Minor Damage'}</td>
                        <td className="px-4 py-3 text-slate-600">{lang === 'fr' ? 'Défaut esthétique' : 'Aesthetic defect'}</td>
                        <td className="px-4 py-3 text-slate-600">{lang === 'fr' ? 'Conservation du produit' : 'Product kept'}</td>
                        <td className="px-4 py-3 text-orange-600 font-bold">{lang === 'fr' ? 'Avoir partiel' : 'Partial credit'}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">{lang === 'fr' ? 'Changement d\'Avis' : 'Change of Mind'}</td>
                        <td className="px-4 py-3 text-slate-600">{lang === 'fr' ? 'Souhait du client' : 'Customer request'}</td>
                        <td className="px-4 py-3 text-slate-600">{lang === 'fr' ? 'Retour à charge client' : 'Return at customer cost'}</td>
                        <td className="px-4 py-3 text-slate-600">{lang === 'fr' ? 'Prix produit (- frais)' : 'Product price (- fees)'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* How to Claim */}
              <div className="border border-slate-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-black text-sm">🎥</span>
                  </div>
                  <h3 className="font-bold text-slate-900">{lang === 'fr' ? 'Comment ouvrir un litige' : 'How to open a dispute'}</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2">• {lang === 'fr' ? 'Vidéo d\'unboxing obligatoire (continue, montrant l\'ouverture et l\'état du produit)' : 'Mandatory unboxing video (continuous, showing opening and product condition)'}</li>
                  <li className="flex gap-2">• {lang === 'fr' ? 'Délai : 48 heures maximum après réception' : 'Deadline: within 48 hours of receipt'}</li>
                  <li className="flex gap-2">• {lang === 'fr' ? 'Dépôt via l\'application uniquement (preuves WhatsApp irrecevables)' : 'File via app only (WhatsApp evidence not accepted)'}</li>
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={18} className="text-red-600" />
                  <h3 className="font-bold text-red-800 text-sm">{lang === 'fr' ? 'Exclusions' : 'Exclusions'}</h3>
                </div>
                <ul className="space-y-1 text-xs text-red-700">
                  <li>• {lang === 'fr' ? 'Absence de vidéo d\'unboxing' : 'Missing unboxing video'}</li>
                  <li>• {lang === 'fr' ? 'Délai de 48h dépassé' : '48-hour deadline exceeded'}</li>
                  <li>• {lang === 'fr' ? 'Dommage causé par mauvaise manipulation du client' : 'Damage caused by customer mishandling'}</li>
                </ul>
              </div>

              {/* Timeline */}
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-4 border-t border-slate-100">
                <Clock size={14} />
                <span>{lang === 'fr' ? 'Délai de traitement : 48 à 72h ouvrables' : 'Processing time: 48 to 72 business hours'}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>{lang === 'fr' ? 'Remboursement sur Mobile Money' : 'Refund to Mobile Money'}</span>
              </div>
            </div>

            {/* Footer Modal */}
            <div className="sticky bottom-0 bg-slate-50 border-t border-slate-100 px-6 py-4 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors text-sm"
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