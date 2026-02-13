import dwdmFiberDetail from "@/assets/dwdm-fiber-detail.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const DwdmWhat = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div><img src={dwdmFiberDetail} alt="DWDM fiber optic detail" className="rounded-2xl shadow-card w-full object-cover" /></div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{t("dwdm.what.heading1")} <span className="text-primary">{t("dwdm.what.heading2")}</span></h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{t("dwdm.what.desc")}</p>
            <div className="p-6 rounded-2xl bg-primary/5 border-l-4 border-primary"><p className="text-foreground font-medium">"{t("dwdm.what.quote")}"</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DwdmWhat;
