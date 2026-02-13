import { Gauge, ShieldCheck, Timer, Globe, MonitorCheck, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const featureKeys = [
  { icon: Gauge, titleKey: "ded.adv.1.title", descKey: "ded.adv.1.desc" },
  { icon: ShieldCheck, titleKey: "ded.adv.2.title", descKey: "ded.adv.2.desc" },
  { icon: Timer, titleKey: "ded.adv.3.title", descKey: "ded.adv.3.desc" },
  { icon: Globe, titleKey: "ded.adv.4.title", descKey: "ded.adv.4.desc" },
  { icon: MonitorCheck, titleKey: "ded.adv.5.title", descKey: "ded.adv.5.desc" },
  { icon: Headphones, titleKey: "ded.adv.6.title", descKey: "ded.adv.6.desc" },
];

const DedicatedAdvantages = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
          {t("ded.adv.heading1")} <span className="text-primary">{t("ded.adv.heading2")}</span>
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">{t("ded.adv.desc")}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureKeys.map(({ icon: Icon, titleKey, descKey }) => (
            <div key={titleKey} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover border-2 border-transparent hover:border-primary/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{t(titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DedicatedAdvantages;
