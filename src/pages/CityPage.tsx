import { useParams, Navigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/seo/SEOHead";
import FAQSection from "@/components/seo/FAQSection";
import { cities, services, WA_LINK, type CityInfo } from "@/data/seoData";
import { MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";

const CityPage = () => {
  const location = useLocation();
  const citySlug = location.pathname.replace(/^\/lokasi\//, "");
  const city = cities.find(c => c.slug === citySlug);
  if (!city) return <Navigate to="/" />;

  const getServicePath = (serviceSlug: string) => {
    const prefix = serviceSlug === "dedicated" ? "internet-dedicated" :
                   serviceSlug === "broadband" ? "internet-broadband" :
                   serviceSlug === "backup-on-demand" ? "backup-on-demand" :
                   serviceSlug;
    return `/${prefix}-${city.slug}`;
  };

  const metaTitle = `ISP Fiber Optik ${city.name} | Internet Terpercaya - Artamedia`;
  const metaDesc = `Layanan internet fiber optik di ${city.name}: Broadband, Dedicated, Metro-E, DWDM, Dark Fiber. ISP berlisensi resmi.`;

  const faqItems = [
    { question: `Layanan internet apa saja yang tersedia di ${city.name}?`, answer: `Artamedia menyediakan layanan Broadband, Dedicated Internet, Metro-E, DWDM, Dark Fiber, dan Backup on Demand di ${city.name}. Semua layanan berbasis fiber optik berkualitas tinggi.` },
    { question: `Bagaimana cara berlangganan internet Artamedia di ${city.name}?`, answer: `Hubungi tim sales kami melalui WhatsApp atau telepon. Tim kami akan melakukan survey lokasi dan memberikan penawaran terbaik sesuai kebutuhan Anda di ${city.name}.` },
    { question: `Apakah Artamedia menyediakan layanan enterprise di ${city.name}?`, answer: `Ya, Artamedia menyediakan layanan enterprise seperti Dedicated Internet, Metro-E, dan DWDM di ${city.name} dengan SLA tertulis dan dukungan teknis 24/7.` },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Artamedia ${city.name}`,
      "description": metaDesc,
      "url": `https://arisaja.lovable.app/lokasi/${city.slug}`,
      "telephone": "+6282280257572",
      "address": { "@type": "PostalAddress", "addressLocality": city.name, "addressCountry": "ID" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer }
      }))
    }
  ];

  const otherCities = cities.filter(c => c.slug !== city.slug).slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={metaTitle} description={metaDesc} canonical={`/lokasi/${city.slug}`} jsonLd={jsonLd} />
      <Navbar />
      <div className="pt-16 lg:pt-20">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-foreground via-foreground/95 to-primary/20 py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(var(--primary)/0.15),transparent_60%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">{city.region}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Layanan Internet Fiber Optik di {city.name}
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mb-8 leading-relaxed">{city.localContext}</p>
            <a href={`${WA_LINK}?text=${encodeURIComponent(`Halo, saya ingin tahu layanan internet Artamedia di ${city.name}`)}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary-dark transition-all shadow-lg">
              <Phone size={20} /> Hubungi Kami
            </a>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-10 text-center">
              Semua Layanan di {city.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(service => (
                <Link key={service.slug} to={getServicePath(service.slug)}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.shortName}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{service.description}</p>
                  <ul className="space-y-1.5 mb-4">
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Lihat Detail <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other Cities */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">Layanan di Kota Lain</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {otherCities.map(c => (
                <Link key={c.slug} to={`/lokasi/${c.slug}`}
                  className="block p-4 rounded-xl bg-card border border-border text-center hover:border-primary/30 hover:shadow-md transition-all">
                  <MapPin className="w-4 h-4 text-primary mx-auto mb-1" />
                  <span className="text-foreground font-medium text-sm">{c.name}</span>
                  <span className="block text-muted-foreground text-xs">{c.region}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQSection items={faqItems} />
      </div>
      <Footer />
    </div>
  );
};

export default CityPage;
