import { CheckCircle } from "lucide-react";
import fiberInfra from "@/assets/fiber-infrastructure.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const bulletKeys = ["bb.infra.1", "bb.infra.2", "bb.infra.3", "bb.infra.4"];

const BroadbandInfrastructure = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <img src={fiberInfra} alt="Fiber optic backbone infrastructure" className="rounded-2xl shadow-card w-full object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              {t("bb.infra.heading1")} <span className="text-primary">{t("bb.infra.heading2")}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{t("bb.infra.desc")}</p>
            <ul className="space-y-4">
              {bulletKeys.map((key) => (
                <li key={key} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary shrink-0" />
                  <span className="text-foreground font-medium">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BroadbandInfrastructure;
