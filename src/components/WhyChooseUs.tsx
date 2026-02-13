import { Network, RefreshCw, MonitorCheck, Users, Zap, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const reasons = [
  { icon: Network, key: "why.fiber" },
  { icon: RefreshCw, key: "why.redundant" },
  { icon: MonitorCheck, key: "why.noc" },
  { icon: Users, key: "why.engineer" },
  { icon: Zap, key: "why.fast" },
  { icon: Shield, key: "why.sla" },
];

const WhyChooseUs = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-16">
          {t("why.heading1")} <span className="text-primary">{t("why.heading2")}</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ icon: Icon, key }) => (
            <div key={key} className="flex items-start gap-4 p-6 rounded-2xl hover:bg-secondary transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">{t(key)}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
