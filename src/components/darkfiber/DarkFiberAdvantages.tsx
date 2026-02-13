import { Settings, Infinity, ShieldCheck, TrendingUp, Server, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const featureKeys = [
  { icon: Settings, titleKey: "df.adv.1.title", descKey: "df.adv.1.desc" },
  { icon: Infinity, titleKey: "df.adv.2.title", descKey: "df.adv.2.desc" },
  { icon: ShieldCheck, titleKey: "df.adv.3.title", descKey: "df.adv.3.desc" },
  { icon: TrendingUp, titleKey: "df.adv.4.title", descKey: "df.adv.4.desc" },
  { icon: Server, titleKey: "df.adv.5.title", descKey: "df.adv.5.desc" },
  { icon: MapPin, titleKey: "df.adv.6.title", descKey: "df.adv.6.desc" },
];

const DarkFiberAdvantages = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">{t("df.adv.heading1")} <span className="text-primary">{t("df.adv.heading2")}</span></h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">{t("df.adv.desc")}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureKeys.map(({ icon: Icon, titleKey, descKey }) => (
            <div key={titleKey} className="p-8 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"><Icon size={28} className="text-primary" /></div>
              <h3 className="text-xl font-bold text-foreground mb-3">{t(titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DarkFiberAdvantages;
