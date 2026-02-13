import { useLanguage } from "@/contexts/LanguageContext";

const DwdmCTA = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(145 100% 39% / 0.08), transparent 70%)" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">{t("dwdm.cta.heading1")} <span className="text-primary">{t("dwdm.cta.heading2")}</span></h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">{t("dwdm.cta.desc")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg">{t("dwdm.cta.btn1")}</a>
          <a href="#contact" className="px-8 py-4 rounded-2xl border-2 border-primary text-primary font-bold text-lg hover:bg-primary/10 transition-all duration-300">{t("dwdm.cta.btn2")}</a>
        </div>
      </div>
    </section>
  );
};

export default DwdmCTA;
