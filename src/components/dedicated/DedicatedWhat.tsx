import dedicatedFiberWork from "@/assets/dedicated-fiber-work.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const DedicatedWhat = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img src={dedicatedFiberWork} alt="Fiber optic technician working" className="rounded-2xl shadow-card w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-6 py-3 shadow-lg font-bold text-lg">1:1 Bandwidth</div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              {t("ded.what.heading1")} <span className="text-primary">{t("ded.what.heading2")}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{t("ded.what.desc")}</p>
            <div className="p-6 rounded-2xl bg-primary/5 border-l-4 border-primary">
              <p className="text-foreground font-medium">"{t("ded.what.quote")}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DedicatedWhat;
