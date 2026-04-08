import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock, ChevronRight, BookOpen, X } from 'lucide-react';

interface Post {
  id: number;
  category: string;
  date: string;
  author: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
}

interface BlogProps {
  lang: 'fr' | 'en';
}

const Blog: React.FC<BlogProps> = ({ lang }) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const t = {
    fr: {
      badge: "BLOG",
      title: "Conseils & Analyses ",
      span: "pour Exportateurs",
      subtitle: "Optimisez vos ventes transfrontalières avec nos analyses du marché béninois.",
      readMore: "Lire l'article",
      viewAll: "Tous les articles",
      close: "Fermer",
      posts: [
        {
          id: 1,
          category: "Ventes",
          date: "18 Mai 2024",
          author: "Admin TrustLink",
          readTime: "6 min",
          title: "Top 10 des produits les plus demandés au Bénin en 2024.",
          excerpt: "Découvrez quels articles de mode et d'électronique dominent les commandes à Cotonou pour ajuster votre stock.",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
          content: `Le marché béninois connaît une demande croissante pour certaines catégories de produits en provenance du Nigeria. Voici les 10 produits les plus recherchés à Cotonou en 2024 :\n\n1. Vêtements et textiles (mode nigériane)\n2. Téléphones et accessoires électroniques\n3. Cosmétiques et produits de beauté\n4. Chaussures de qualité\n5. Sacs et maroquinerie\n6. Appareils électroménagers\n7. Pièces automobiles\n8. Produits alimentaires transformés\n9. Articles de décoration intérieure\n10. Jouets et articles pour enfants\n\nCes catégories représentent plus de 70% des commandes passées via les réseaux informels actuels. En alignant votre stock sur cette demande, vous maximisez vos chances de vendre rapidement via TrustLink.`
        },
        {
          id: 2,
          category: "Paiements",
          date: "12 Mai 2024",
          author: "Finance Team",
          readTime: "4 min",
          title: "Comment TrustLink sécurise vos paiements malgré l'inflation.",
          excerpt: "Comprendre notre système d'escrow et de conversion pour protéger vos revenus d'exportation.",
          image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800",
          content: `L'inflation et l'instabilité monétaire sont des préoccupations majeures pour les vendeurs qui opèrent entre le Nigeria et le Bénin. TrustLink a conçu un système pour y répondre.\n\nLe principe du séquestre (Escrow)\n\nLorsqu'un acheteur béninois passe commande, son paiement en CFA est immédiatement sécurisé dans un compte séquestre. Ces fonds ne sont ni accessibles à l'acheteur ni versés au vendeur tant que la transaction n'est pas confirmée.\n\nLe vendeur est payé en Naira une fois que :\n- Le client confirme la réception du produit\n- Le délai de réclamation de 48h est expiré sans litige\n\nPourquoi c'est important ?\n\nCe système élimine le risque d'impayé pour le vendeur et le risque de fraude pour l'acheteur. Les deux parties sont protégées par un tiers de confiance — TrustLink.`
        }
      ] as Post[]
    },
    en: {
      badge: "BLOG",
      title: "Tips & Market ",
      span: "for Exporters",
      subtitle: "Optimize your cross-border sales with our Beninese market insights.",
      readMore: "Read article",
      viewAll: "View all articles",
      close: "Close",
      posts: [
        {
          id: 1,
          category: "Sales",
          date: "May 18, 2024",
          author: "TrustLink Admin",
          readTime: "6 min",
          title: "Top 10 most demanded products in Benin for 2024.",
          excerpt: "Discover which fashion and electronics items dominate orders in Cotonou to adjust your inventory.",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
          content: `The Beninese market is seeing growing demand for specific product categories from Nigeria. Here are the top 10 most sought-after products in Cotonou in 2024:\n\n1. Clothing and textiles (Nigerian fashion)\n2. Phones and electronics accessories\n3. Cosmetics and beauty products\n4. Quality footwear\n5. Bags and leather goods\n6. Home appliances\n7. Auto parts\n8. Processed food products\n9. Home decoration items\n10. Toys and children's products\n\nThese categories represent over 70% of orders placed through current informal networks. Aligning your inventory with this demand maximizes your chances of selling quickly through TrustLink.`
        },
        {
          id: 2,
          category: "Payments",
          date: "May 12, 2024",
          author: "Finance Team",
          readTime: "4 min",
          title: "How TrustLink secures your payments despite inflation.",
          excerpt: "Understand our escrow system to protect your export earnings.",
          image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800",
          content: `Inflation and monetary instability are major concerns for sellers operating between Nigeria and Benin. TrustLink has designed a system to address this.\n\nThe Escrow Principle\n\nWhen a Beninese buyer places an order, their CFA payment is immediately secured in an escrow account. These funds are neither accessible to the buyer nor paid to the seller until the transaction is confirmed.\n\nThe seller is paid in Naira once:\n- The customer confirms receipt of the product\n- The 48h claim window expires without a dispute\n\nWhy does this matter?\n\nThis system eliminates the risk of non-payment for the seller and the risk of fraud for the buyer. Both parties are protected by a trusted third party — TrustLink.`
        }
      ] as Post[]
    }
  }[lang];

  return (
    <>
      {/* Article Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full p-2 text-slate-700 hover:text-slate-900 transition-colors"
              >
                <X size={18} />
              </button>
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-tighter">
                {selectedPost.category}
              </span>
            </div>

            <div className="px-8 py-6">
              <div className="flex items-center gap-6 text-[11px] font-bold text-slate-400 mb-4 uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Calendar size={14} className="text-blue-500" /> {selectedPost.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} className="text-blue-500" /> {selectedPost.readTime}</span>
              </div>

              <h2 className="text-2xl font-black text-slate-900 mb-4 leading-tight">{selectedPost.title}</h2>

              <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                {selectedPost.content}
              </div>

              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-100">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-[10px] font-bold uppercase">TL</div>
                <span className="text-xs font-bold text-slate-700">{selectedPost.author}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="blog" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black tracking-widest mb-6">
                <ChevronRight size={12} /> {t.badge}
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
                {t.title} <span className="text-blue-600">{t.span}</span>
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed">{t.subtitle}</p>
            </div>
            <button className="flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 transition-colors underline decoration-2 underline-offset-8">
              <BookOpen size={20} /> {t.viewAll}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {t.posts.map((post) => (
              <article key={post.id} className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="relative aspect-[16/9] overflow-hidden rounded-3xl mb-8 bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-3 py-1.5 rounded-lg shadow-sm uppercase tracking-tighter">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-[11px] font-bold text-slate-400 mb-4 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-blue-500" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-blue-500" /> {post.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-[10px] font-bold uppercase">TL</div>
                    <span className="text-xs font-bold text-slate-700">{post.author}</span>
                  </div>
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="flex items-center gap-2 text-sm font-black text-slate-900 hover:gap-4 transition-all group-hover:text-blue-600"
                  >
                    {t.readMore} <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;