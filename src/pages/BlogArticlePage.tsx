import { useParams, Navigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/seo/SEOHead";
import { blogArticles, services, WA_LINK } from "@/data/seoData";
import { ArrowLeft, Phone, Calendar, Tag } from "lucide-react";

const BlogArticlePage = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const article = blogArticles.find(a => a.slug === articleSlug);
  if (!article) return <Navigate to="/blog" />;

  const relatedServices = services.filter(s => article.relatedServices.includes(s.slug));
  const otherArticles = blogArticles.filter(a => a.slug !== article.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.h1,
    "author": { "@type": "Organization", "name": "PT Artamedia Citra Telematika Indonesia" },
    "publisher": {
      "@type": "Organization",
      "name": "Artamedia",
      "logo": { "@type": "ImageObject", "url": "https://landing.artamedianet.co.id/assets/artamedia-logo-CGIKotfT.png" }
    },
    "description": article.metaDescription
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={article.metaTitle} description={article.metaDescription} canonical={`/blog/${article.slug}`} jsonLd={jsonLd} ogType="article" />
      <Navbar />
      <div className="pt-16 lg:pt-20">
        {/* Header */}
        <section className="bg-secondary py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center gap-1 text-primary text-sm font-medium mb-6 hover:gap-2 transition-all">
              <ArrowLeft size={16} /> Semua Artikel
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <Tag size={12} /> {article.category}
              </span>
              <span className="inline-flex items-center gap-1 text-muted-foreground text-xs">
                <Calendar size={12} /> 2025
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">{article.h1}</h1>
          </div>
        </section>

        {/* Content */}
        <article className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {article.content.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-6 text-base lg:text-lg">{para}</p>
              ))}
            </div>

            {/* Related services */}
            {relatedServices.length > 0 && (
              <div className="mt-12 p-6 rounded-2xl bg-secondary border border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">Layanan Terkait</h3>
                <div className="flex flex-wrap gap-3">
                  {relatedServices.map(s => (
                    <Link key={s.slug} to={s.href} className="px-4 py-2 rounded-xl bg-card border border-border text-sm font-medium text-foreground hover:border-primary/30 hover:text-primary transition-colors">
                      {s.shortName}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-center">
              <h3 className="text-xl font-bold text-primary-foreground mb-3">Butuh Konsultasi?</h3>
              <p className="text-primary-foreground/80 mb-6">Hubungi tim kami untuk solusi internet terbaik untuk bisnis Anda.</p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-all">
                <Phone size={18} /> Hubungi Kami
              </a>
            </div>
          </div>
        </article>

        {/* Other articles */}
        <section className="py-12 lg:py-16 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Artikel Lainnya</h2>
            <div className="space-y-4">
              {otherArticles.map(a => (
                <Link key={a.slug} to={`/blog/${a.slug}`} className="block p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all">
                  <span className="text-xs text-primary font-semibold">{a.category}</span>
                  <h3 className="text-foreground font-semibold mt-1">{a.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{a.metaDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BlogArticlePage;
