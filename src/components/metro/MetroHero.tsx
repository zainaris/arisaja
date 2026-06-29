import { CheckCircle } from "lucide-react";
import metroHero from "@/assets/metro-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const badges = ["Dedicated Point-to-Point", "SLA Hingga 99.9%", "Low Latency", "24/7 NOC Support"];
const WA_LINK = "https://wa.me/6281517667777?text=Halo%20Artamedia%2C%20saya%20tertarik%20dengan%20layanan%20Metro-E";

const MetroHero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0" style={{ backgroundImage: `url(${metroHero})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(145,60%,5%)]/90 via-[hsl(145,60%,5%)]/70 to-[hsl(145,60%,5%)]/30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-primary-light text-sm font-semibold border border-white/10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Enterprise Connectivity
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
            {t("metro.hero.title1")}{" "}<span className="text-gradient-green">{t("metro.hero.title2")}</span>
          </h1>
          <p className="text-lg text-white/90 max-w-xl leading-relaxed drop-shadow-md">{t("metro.hero.desc")}</p>
          <div className="flex flex-wrap gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl">{t("metro.hero.btn1")}</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-2xl border-2 border-white/40 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">{t("metro.hero.btn2")}</a>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 backdrop-blur-sm bg-black/20 rounded-lg px-3 py-2">
                <CheckCircle size={18} className="text-primary-light shrink-0" />
                <span className="text-sm text-white/90">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetroHero;
