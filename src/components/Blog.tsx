import React from 'react';
import { ArrowRight, Calendar, Clock, ChevronRight, BookOpen } from 'lucide-react';

interface BlogProps {
  lang: 'fr' | 'en';
}

const Blog: React.FC<BlogProps> = ({ lang }) => {
  const t = {
    fr: {
      badge: "MARKET INTELLIGENCE",
      title: "Conseils & Analyses ",
      span: "pour Exportateurs",
      subtitle: "Optimisez vos ventes transfrontalières avec nos analyses du marché béninois.",
      readMore: "Lire l'article",
      viewAll: "Tous les articles",
      categories: ["Tout", "Ventes", "Logistique", "Paiements"],
      posts: [
        {
          id: 1,
          category: "Ventes",
          date: "18 Mai 2024",
          author: "Admin TrustLink",
          readTime: "6 min",
          title: "Top 10 des produits les plus demandés au Bénin en 2024.",
          excerpt: "Découvrez quels articles de mode et d'électronique dominent les commandes à Cotonou pour ajuster votre stock.",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 2,
          category: "Paiements",
          date: "12 Mai 2024",
          author: "Finance Team",
          readTime: "4 min",
          title: "Comment TrustLink sécurise vos paiements en Naira malgré l'inflation.",
          excerpt: "Comprendre notre système d'escrow et de conversion instantanée pour protéger vos revenus d'exportation.",
          image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    en: {
      badge: "MARKET INTELLIGENCE",
      title: "Tips & Market ",
      span: "for Exporters",
      subtitle: "Optimize your cross-border sales with our Beninese market insights.",
      readMore: "Read article",
      viewAll: "View all articles",
      categories: ["All", "Sales", "Logistics", "Payments"],
      posts: [
        {
          id: 1,
          category: "Sales",
          date: "May 18, 2024",
          author: "TrustLink Admin",
          readTime: "6 min",
          title: "Top 10 most demanded products in Benin for 2024.",
          excerpt: "Discover which fashion and electronics items dominate orders in Cotonou to adjust your inventory.",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 2,
          category: "Payments",
          date: "May 12, 2024",
          author: "Finance Team",
          readTime: "4 min",
          title: "How TrustLink secures your Naira payouts despite inflation.",
          excerpt: "Understand our escrow and instant conversion system to protect your export earnings.",
          image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800"
        }
      ]
    }
  }[lang];

  return (
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
            <p className="text-xl text-slate-500 leading-relaxed">
              {t.subtitle}
            </p>
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
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-[10px] font-bold uppercase">
                    TL
                  </div>
                  <span className="text-xs font-bold text-slate-700">{post.author}</span>
                </div>
                <button className="flex items-center gap-2 text-sm font-black text-slate-900 hover:gap-4 transition-all group-hover:text-blue-600">
                  {t.readMore} <ArrowRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
