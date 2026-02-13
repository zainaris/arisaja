import { Radio, Server, Wifi, Landmark, Cloud, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const useCases = [
  { icon: Radio, title: "National & Regional ISP" },
  { icon: Server, title: "Data Center Interconnection" },
  { icon: Wifi, title: "Telecom Operator Backbone" },
  { icon: Landmark, title: "Government Infrastructure" },
  { icon: Cloud, title: "Cloud Provider Network" },
  { icon: Building2, title: "Financial Network Backbone" },
];

const DarkFiberUseCase = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">{t("df.usecase.heading1")} <span className="text-primary">{t("df.usecase.heading2")}</span></h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">{t("df.usecase.desc")}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map(({ icon: Icon, title }) => (
            <div key={title} className="flex items-center gap-4 p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Icon size={24} className="text-primary" /></div>
              <h3 className="font-semibold text-foreground text-lg">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DarkFiberUseCase;
