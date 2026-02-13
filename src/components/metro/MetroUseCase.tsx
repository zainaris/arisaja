import { Building2, Server, Landmark, Network, Cloud, Building } from "lucide-react";
import metroEnterprise from "@/assets/metro-enterprise-connect.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const useCaseKeys = [
  { icon: Building2, titleKey: "metro.usecase.1.title", descKey: "metro.usecase.1.desc" },
  { icon: Server, titleKey: "metro.usecase.2.title", descKey: "metro.usecase.2.desc" },
  { icon: Network, titleKey: "metro.usecase.3.title", descKey: "metro.usecase.3.desc" },
  { icon: Landmark, titleKey: "metro.usecase.4.title", descKey: "metro.usecase.4.desc" },
  { icon: Building, titleKey: "metro.usecase.5.title", descKey: "metro.usecase.5.desc" },
  { icon: Cloud, titleKey: "metro.usecase.6.title", descKey: "metro.usecase.6.desc" },
];

const MetroUseCase = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">{t("metro.usecase.heading1")} <span className="text-primary">{t("metro.usecase.heading2")}</span></h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">{t("metro.usecase.desc")}</p>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={metroEnterprise} alt="Enterprise fiber optic network infrastructure" className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-primary font-bold text-lg">Enterprise-Grade Infrastructure</p>
              <p className="text-foreground/70 text-sm">{t("metro.usecase.infra.title")}</p>
            </div>
          </div>
          <div className="grid gap-4">
            {useCaseKeys.map(({ icon: Icon, titleKey, descKey }) => (
              <div key={titleKey} className="flex items-start gap-4 p-5 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Icon size={24} className="text-primary" /></div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{t(titleKey)}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{t(descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetroUseCase;
