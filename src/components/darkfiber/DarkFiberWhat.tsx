import coreImg from "@/assets/darkfiber-core-closeup.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const DarkFiberWhat = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div><img src={coreImg} alt="Fiber optic core close-up" className="rounded-2xl shadow-card w-full object-cover" /></div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{t("df.what.heading1")} <span className="text-primary">{t("df.what.heading2")}</span></h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{t("df.what.desc1")}</p>
            <div className="p-6 rounded-2xl bg-primary/5 border-l-4 border-primary"><p className="text-foreground font-medium">"{t("df.what.quote")}"</p></div>
            <p className="text-muted-foreground leading-relaxed text-lg">{t("df.what.desc2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkFiberWhat;
