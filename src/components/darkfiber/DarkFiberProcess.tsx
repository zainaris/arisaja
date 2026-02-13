import { MessageSquare, Search, Cable, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stepKeys = [
  { icon: MessageSquare, step: "01", titleKey: "df.process.1" },
  { icon: Search, step: "02", titleKey: "df.process.2" },
  { icon: Cable, step: "03", titleKey: "df.process.3" },
  { icon: Zap, step: "04", titleKey: "df.process.4" },
];

const DarkFiberProcess = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">{t("df.process.heading1")} <span className="text-primary">{t("df.process.heading2")}</span></h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">{t("df.process.desc")}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stepKeys.map(({ icon: Icon, step, titleKey }, i) => (
            <div key={step} className="relative text-center">
              {i < stepKeys.length - 1 && <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/20" />}
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 relative z-10"><Icon size={32} className="text-primary" /></div>
              <span className="text-primary font-bold text-sm mb-2 block">{t("common.step")} {step}</span>
              <h3 className="font-semibold text-foreground text-lg">{t(titleKey)}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DarkFiberProcess;
