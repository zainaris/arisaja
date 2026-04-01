import { Navigate, Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/seo/SEOHead";
import FAQSection from "@/components/seo/FAQSection";
import InternalLinks from "@/components/seo/InternalLinks";
import { services, cities, generateServiceLocationContent, WA_LINK, type ServiceInfo, type CityInfo } from "@/data/seoData";
import { CheckCircle, Phone, ArrowRight, Shield, Clock, Zap, MapPin } from "lucide-react";

const ServiceLocationPage = () => {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, "");
  if (!slug) return <Navigate to="/" />;

  // Parse slug to find service + city
  let foundService: ServiceInfo | undefined;
  let foundCity: CityInfo | undefined;

  for (const service of services) {
    const prefix = service.slug === "dedicated" ? "internet-dedicated" :
                   service.slug === "broadband" ? "internet-broadband" :
                   service.slug === "backup-on-demand" ? "backup-on-demand" :
                   service.slug;
    for (const city of cities) {
      if (slug === `${prefix}-${city.slug}`) {
        foundService = service;
        foundCity = city;
        break;
      }
    }
    if (foundService) break;
  }

  if (!foundService || !foundCity) return <Navigate to="/" />;

  const content = generateServiceLocationContent(foundService, foundCity);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": content.h1,
      "provider": {
        "@type": "Organization",
        "name": "PT Artamedia Citra Telematika Indonesia",
        "url": "https://arisaja.lovable.app"
      },
      "areaServed": { "@type": "City", "name": foundCity.name },
      "description": content.metaDescription
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Artamedia - " + foundCity.name,
      "description": `Penyedia layanan ${foundService.shortName} di ${foundCity.name}`,
      "url": `https://arisaja.lovable.app/${slug}`,
      "telephone": "+6282280257572",
      "address": { "@type": "PostalAddress", "addressLocality": foundCity.name, "addressCountry": "ID" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": content.faqItems.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer }
      }))
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={content.metaTitle}
        description={content.metaDescription}
        canonical={`/${slug}`}
        jsonLd={jsonLd}
      />
      <Navbar />
      <div className="pt-16 lg:pt-20">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-foreground via-foreground/95 to-primary/20 py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.15),transparent_60%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">{foundCity.region} — {foundCity.name}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {content.h1}
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mb-8 leading-relaxed">{content.intro}</p>
            <div className="flex flex-wrap gap-4">
              <a href={`${WA_LINK}?text=${encodeURIComponent(`Halo, saya tertarik layanan ${foundService.shortName} di ${foundCity.name}`)}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary-dark transition-all shadow-lg">
                <Phone size={20} /> Hubungi Kami
              </a>
              <Link to={foundService.href} className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all">
                Detail {foundService.shortName} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Mengapa Memilih {foundService.shortName} di {foundCity.name}?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-3xl leading-relaxed">{content.whySection}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {foundService.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-border shadow-sm">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Cocok untuk Siapa?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-3xl leading-relaxed">{content.useCaseSection}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {foundService.useCases.map((uc, i) => (
                <div key={i} className="p-5 rounded-2xl bg-card border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</div>
                    <span className="text-foreground font-medium text-sm">{uc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">Spesifikasi Teknis</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {foundService.specs.map((spec, i) => {
                const icons = [Zap, Shield, Clock, CheckCircle];
                const Icon = icons[i % icons.length];
                return (
                  <div key={i} className="text-center p-6 rounded-2xl bg-card border border-border shadow-sm">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-foreground font-bold text-lg">{spec}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Jangkauan di {foundCity.name}
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">{content.coverageSection}</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-primary to-primary-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
              Dapatkan {foundService.shortName} Terbaik di {foundCity.name}
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">Hubungi tim kami sekarang untuk konsultasi gratis dan penawaran terbaik.</p>
            <a href={`${WA_LINK}?text=${encodeURIComponent(`Halo, saya ingin berlangganan ${foundService.shortName} di ${foundCity.name}`)}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-white text-primary font-bold text-lg hover:bg-white/90 transition-all shadow-lg">
              <Phone size={20} /> Hubungi Sekarang
            </a>
          </div>
        </section>

        <FAQSection items={content.faqItems} />
        <InternalLinks currentService={foundService.slug} currentCity={foundCity.slug} />
      </div>
      <Footer />
    </div>
  );
};

export default ServiceLocationPage;
