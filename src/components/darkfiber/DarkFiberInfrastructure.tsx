import { CheckCircle } from "lucide-react";
import splicingImg from "@/assets/darkfiber-splicing.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const bullets = ["High Quality Fiber Deployment", "Protected Duct & Aerial Routes", "Redundant Path Available", "24/7 Infrastructure Monitoring"];

const DarkFiberInfrastructure = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{t("df.infra.heading1")} <span className="text-primary">{t("df.infra.heading2")}</span></h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{t("df.infra.desc")}</p>
            <ul className="space-y-4">{bullets.map((b) => (<li key={b} className="flex items-center gap-3"><CheckCircle size={20} className="text-primary shrink-0" /><span className="text-foreground font-medium">{b}</span></li>))}</ul>
          </div>
          <div className="order-1 lg:order-2"><img src={splicingImg} alt="Fiber splicing technician" className="rounded-2xl shadow-card w-full object-cover" /></div>
        </div>
      </div>
    </section>
  );
};

export default DarkFiberInfrastructure;
