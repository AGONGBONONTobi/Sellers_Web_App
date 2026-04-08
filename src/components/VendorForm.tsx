import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Zap, Building2, ShieldCheck, Globe, Truck } from 'lucide-react';

interface VendorFormProps {
  lang: 'fr' | 'en';
}

const VendorForm: React.FC<VendorFormProps> = ({ lang }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
const t = {
  fr: {
    badge: "INFRASTRUCTURE D'EXPORTATION : NIGERIA → BÉNIN",
    title: "Vendez au Bénin. ",
    span: "Augmentez votre clientèle.",
    desc: "TrustLink connecte les vendeurs nigérians au marché béninois , sans réseau privé, sans barrière logistique. Vous êtes payé une fois la commande confirmée et le client satisfait, via notre système de séquestre sécurisé.",
    benefit1_t: "Paiement via Séquestre",
    benefit1_d: "Vos fonds sont sécurisés dès la commande. Le paiement est libéré une fois que le client confirme la réception et sa satisfaction , un système transparent pour les deux parties.",
    benefit2_t: "Logistique Transfrontalière Gérée",
    benefit2_d: "Douane, transport et livraison finale au Bénin sont coordonnés par TrustLink. Vous vous concentrez sur votre stock, nous gérons le reste.",
    benefit3_t: "Un Marché accessible Avec Nous",
    benefit3_d: "Le marché béninois est verrouillé derrière des réseaux privés. TrustLink vous y connecte directement , des acheteurs à Cotonou et Porto-Novo qui cherchent vos produits sans pouvoir vous trouver.",
    form_title: "Devenez un Vendeur Certifié",
    form_subtitle: "Rejoignez TrustLink et accédez au marché béninois. Nous vérifions chaque vendeur avant activation pour garantir la confiance des acheteurs.",
    label_biz: "Nom de l'entreprise / Boutique",
    label_whatsapp: "Numéro WhatsApp",
    label_location: "Emplacement au Nigeria",
    label_cat: "Que vendez-vous ?",
    label_exported: "Avez-vous déjà vendu au Bénin ?",
    btn: "REJOINDRE LA LISTE D'ATTENTE",
    success_t: "Demande Reçue !",
    success_d: "Un agent TrustLink vous contactera sur WhatsApp sous 24h pour la prochaine étape.",
    disclaimer: "En rejoignant, vous acceptez de fournir des produits authentiques et conformes aux commandes. TrustLink vérifie chaque vendeur avant certification."
  },
  en: {
    badge: "EXPORT INFRASTRUCTURE: NIGERIA → BENIN",
    title: "Sell to Benin. ",
    span: "Grow your customer base.",
    desc: "TrustLink connects Nigerian sellers to the Beninese market , no private network, no logistical barriers. You get paid once the order is confirmed and the customer is satisfied, through our secure escrow system.",
    benefit1_t: "Escrow-Based Payment",
    benefit1_d: "Your funds are secured from the moment an order is placed. Payment is released once the customer confirms receipt and satisfaction , a transparent system for both sides.",
    benefit2_t: "Cross-Border Logistics Handled",
    benefit2_d: "Customs, transport, and final delivery in Benin are coordinated by TrustLink. You focus on your inventory, we handle the rest.",
    benefit3_t: "An Accessible Market With Us",
    benefit3_d: "The Beninese market is locked behind private networks. TrustLink connects you directly , buyers in Cotonou and Porto-Novo who are looking for your products but have no way to find you.",
    form_title: "Become a Verified Vendor",
    form_subtitle: "Join TrustLink and access the Beninese market. We verify every vendor before activation to guarantee buyer trust.",
    label_biz: "Business / Shop Name",
    label_whatsapp: "WhatsApp Number",
    label_location: "Location in Nigeria",
    label_cat: "What do you sell?",
    label_exported: "Have you sold to Benin Republic before?",
    btn: "JOIN VENDOR WAITLIST",
    success_t: "Application Received!",
    success_d: "A TrustLink agent will contact you on WhatsApp within 24 hours for the next step.",
    disclaimer: "By joining, you agree to supply genuine products that match order specifications. TrustLink verifies every vendor before certification."
  }
}[lang];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    
    const formData = {
      businessName: (form.elements.namedItem('businessName') as HTMLInputElement)?.value,
      whatsapp: (form.elements.namedItem('whatsapp') as HTMLInputElement)?.value,
      location: (form.elements.namedItem('location') as HTMLSelectElement)?.value,
      category: (form.elements.namedItem('category') as HTMLSelectElement)?.value,
      exported: (form.elements.namedItem('exported') as HTMLInputElement)?.value,
    };
    
    try {
      const response = await fetch('/api/vendors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        const error = await response.json();
        alert(error.error || 'Erreur lors de l\'envoi');
      }
    } catch (error) {
       console.error('Fetch error:', error); // <-- Ajoutez ceci pour voir l'erreur dans la console
      alert('Erreur réseau. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Selling points for vendors */}
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-6">
              {t.badge}
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              {t.title} <span className="text-blue-600">{t.span}</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              {t.desc}
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t.benefit1_t}</h3>
                  <p className="text-slate-500">{t.benefit1_d}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                  <Truck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t.benefit2_t}</h3>
                  <p className="text-slate-500">{t.benefit2_d}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-orange-600 shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t.benefit3_t}</h3>
                  <p className="text-slate-500">{t.benefit3_d}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
              {isSuccess ? (
                <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{t.success_t}</h2>
                  <p className="text-slate-500 mb-8">{t.success_d}</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    {lang === 'fr' ? "Soumettre une autre entreprise" : "Submit another business"}
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">{t.form_title}</h2>
                    <p className="text-slate-500">{t.form_subtitle}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{t.label_biz}</label>
                        <input 
                          name="businessName"
                          required
                          type="text" 
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                          placeholder="e.g. Ade Wholesale Ventures"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{t.label_whatsapp}</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">+234</span>
                          <input 
                            name="whatsapp"
                            required
                            type="tel" 
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-14 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            placeholder="8012345678"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{t.label_location}</label>
                      <select 
                        name="location"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
                      >
                        <option value="Balogun Market (Lagos)">Balogun Market (Lagos)</option>
                        <option value="Alaba International (Lagos)">Alaba International (Lagos)</option>
                        <option value="Trade Fair (Lagos)">Trade Fair (Lagos)</option>
                        <option value="Onitsha Main Market">Onitsha Main Market</option>
                        <option value="Kano Market">Kano Market</option>
                        <option value="Other / Private Warehouse">Other / Private Warehouse</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{t.label_cat}</label>
                      <select 
                        name="category"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
                      >
                        <option value="Fashion & Textiles">Fashion & Textiles</option>
                        <option value="Electronics & Gadgets">Electronics & Gadgets</option>
                        <option value="Beauty & Cosmetics">Beauty & Cosmetics</option>
                        <option value="Auto Parts">Auto Parts</option>
                        <option value="Home Goods">Home Goods</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{t.label_exported}</label>
                      <div className="flex gap-6 mt-2">
                        <label className="flex items-center gap-2 cursor-pointer group">
                          <input type="radio" name="exported" value="yes" className="w-4 h-4 accent-blue-600" />
                          <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors">{lang === 'fr' ? 'Oui' : 'Yes'}</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer group">
                          <input type="radio" name="exported" value="no" defaultChecked className="w-4 h-4 accent-blue-600" />
                          <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors">{lang === 'fr' ? 'Non, je veux commencer' : 'No, I want to start'}</span>
                        </label>
                      </div>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-blue-600 text-white font-black py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
                    >
                      {isSubmitting ? "..." : t.btn} <ArrowRight size={20} />
                    </button>

                    <p className="text-[10px] text-center text-slate-400 mt-4 italic">
                      {t.disclaimer}
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorForm;