import { Cable, Infinity, ArrowUpDown, Headphones, MonitorCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const featureKeys = [
  { icon: Cable, titleKey: "bb.feat.1.title", descKey: "bb.feat.1.desc" },
  { icon: Infinity, titleKey: "bb.feat.2.title", descKey: "bb.feat.2.desc" },
  { icon: ArrowUpDown, titleKey: "bb.feat.3.title", descKey: "bb.feat.3.desc" },
  { icon: Headphones, titleKey: "bb.feat.4.title", descKey: "bb.feat.4.desc" },
  { icon: MonitorCheck, titleKey: "bb.feat.5.title", descKey: "bb.feat.5.desc" },
];

const BroadbandFeatures = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
          {t("bb.feat.heading1")} <span className="text-primary">{t("bb.feat.heading2")}</span>
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">{t("bb.feat.desc")}</p>

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

export default BroadbandFeatures;
