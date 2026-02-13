import { RefreshCw, ShieldCheck, Sliders, Radio, FileCheck, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const featureKeys = [
  { icon: RefreshCw, titleKey: "bk.adv.1.title", descKey: "bk.adv.1.desc" },
  { icon: ShieldCheck, titleKey: "bk.adv.2.title", descKey: "bk.adv.2.desc" },
  { icon: Sliders, titleKey: "bk.adv.3.title", descKey: "bk.adv.3.desc" },
  { icon: Radio, titleKey: "bk.adv.4.title", descKey: "bk.adv.4.desc" },
  { icon: FileCheck, titleKey: "bk.adv.5.title", descKey: "bk.adv.5.desc" },
  { icon: Building2, titleKey: "bk.adv.6.title", descKey: "bk.adv.6.desc" },
];

const BackupAdvantages = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">{t("bk.adv.heading1")} <span className="text-primary">{t("bk.adv.heading2")}</span></h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">{t("bk.adv.desc")}</p>
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

export default BackupAdvantages;
