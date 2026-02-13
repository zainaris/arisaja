import { useLanguage } from "@/contexts/LanguageContext";

const DedicatedPricing = () => {
  const { t } = useLanguage();
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          {t("ded.pricing.heading1")} <span className="text-primary">{t("ded.pricing.heading2")}</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">{t("ded.pricing.desc")}</p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href="#order" className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg">{t("ded.pricing.btn1")}</a>
          <a href="#contact" className="px-8 py-4 rounded-2xl border-2 border-primary text-primary font-semibold text-lg hover:bg-primary/10 transition-all duration-300">{t("ded.pricing.btn2")}</a>
        </div>
        <p className="text-sm text-muted-foreground">{t("ded.pricing.note")}</p>
      </div>
    </section>
  );
};

export default DedicatedPricing;
