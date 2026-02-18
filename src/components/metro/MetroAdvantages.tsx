import { Gauge, Timer, ShieldCheck, Settings, Network, MonitorCheck } from "lucide-react";
import metroNoc from "@/assets/metro-noc-monitoring.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const featureKeys = [
  { icon: Gauge, titleKey: "metro.adv.1.title", descKey: "metro.adv.1.desc" },
  { icon: Timer, titleKey: "metro.adv.2.title", descKey: "metro.adv.2.desc" },
  { icon: ShieldCheck, titleKey: "metro.adv.3.title", descKey: "metro.adv.3.desc" },
  { icon: Settings, titleKey: "metro.adv.4.title", descKey: "metro.adv.4.desc" },
  { icon: Network, titleKey: "metro.adv.5.title", descKey: "metro.adv.5.desc" },
  { icon: MonitorCheck, titleKey: "metro.adv.6.title", descKey: "metro.adv.6.desc" },
];

const MetroAdvantages = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">{t("metro.adv.heading1")} <span className="text-primary">{t("metro.adv.heading2")}</span></h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">{t("metro.adv.desc")}</p>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16">
          <img src={metroNoc} alt="Network Operations Center monitoring Metro-E" className="w-full h-64 lg:h-80 object-cover" />
          {/* Strong dark overlay — left side for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
          {/* Bottom fade for extra contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-8 right-8">
            <p className="text-primary font-bold text-xl drop-shadow-lg">24/7 NOC Monitoring</p>
            <p className="text-white/90 text-sm mt-1 drop-shadow-md font-medium">{t("metro.adv.noc.title")}</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureKeys.map(({ icon: Icon, titleKey, descKey }) => (
            <div key={titleKey} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover border-2 border-transparent hover:border-primary/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"><Icon size={28} className="text-primary" /></div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{t(titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetroAdvantages;
