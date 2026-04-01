import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/seo/SEOHead";
import { blogArticles } from "@/data/seoData";
import { ArrowRight, Tag } from "lucide-react";

const BlogIndex = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Blog Artamedia - Artikel Internet & Teknologi Jaringan"
      description="Baca artikel seputar internet fiber optik, dedicated internet, Metro-E, DWDM, dan teknologi jaringan dari Artamedia."
      canonical="/blog"
    />
    <Navbar />
    <div className="pt-16 lg:pt-20">
      <section className="bg-gradient-to-br from-foreground via-foreground/95 to-primary/20 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Blog & Artikel</h1>
          <p className="text-white/80 text-lg max-w-2xl">Informasi terkini seputar internet fiber optik, teknologi jaringan, dan solusi konektivitas untuk bisnis Indonesia.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map(article => (
              <Link key={article.slug} to={`/blog/${article.slug}`}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                  <Tag size={12} /> {article.category}
                </span>
                <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{article.title}</h2>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.metaDescription}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Baca Selengkapnya <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default BlogIndex;
