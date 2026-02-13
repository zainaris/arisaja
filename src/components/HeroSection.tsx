import { CheckCircle } from "lucide-react";
import heroFiber from "@/assets/hero-fiber-new.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const badges = [
    t("hero.badge.fiber"),
    t("hero.badge.sla"),
    t("hero.badge.support"),
    t("hero.badge.monitoring"),
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-hero-gradient min-h-[90vh] flex items-center">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${heroFiber})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(145,60%,5%)]/90 via-[hsl(145,60%,5%)]/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
              {t("hero.title1")}{" "}
              <span className="text-gradient-green">{t("hero.title2")}</span>
            </h1>
            <p className="text-lg text-white/90 max-w-xl leading-relaxed drop-shadow-md">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#coverage" className="px-8 py-4 rounded-2xl border-2 border-white/40 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                {t("hero.btn.coverage")}
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 backdrop-blur-sm bg-black/20 rounded-lg px-3 py-2">
                  <CheckCircle size={18} className="text-primary-light shrink-0" />
                  <span className="text-sm text-white/90">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
