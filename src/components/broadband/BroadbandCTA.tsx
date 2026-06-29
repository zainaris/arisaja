import { useLanguage } from "@/contexts/LanguageContext";

const BroadbandCTA = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-green-gradient-cta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">{t("bb.cta.heading")}</h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">{t("bb.cta.desc")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/6281517667777?text=Halo%20Artamedia%2C%20saya%20tertarik%20dengan%20layanan%20Broadband" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-2xl bg-primary-foreground text-primary font-bold text-lg hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg">
            {t("bb.cta.btn1")}
          </a>
          <a href="https://wa.me/6281517667777?text=Halo%20Artamedia%2C%20saya%20ingin%20konsultasi%20layanan%20Broadband" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-2xl border-2 border-primary-foreground/40 text-primary-foreground font-bold text-lg hover:bg-primary-foreground/10 transition-all duration-300">
            {t("bb.cta.btn2")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default BroadbandCTA;
