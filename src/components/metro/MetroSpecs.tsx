import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const specs = ["Ethernet Over Fiber", "Point-to-Point & Point-to-Multipoint", "VLAN & MPLS Support", "IPv4 & IPv6", "BGP Ready", "Redundant Path Option", "SLA Hingga 99.9%"];

const MetroSpecs = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">{t("metro.specs.heading1")} <span className="text-primary">{t("metro.specs.heading2")}</span></h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">{t("metro.specs.desc")}</p>
        <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-card overflow-hidden">
          {specs.map((spec, i) => (
            <div key={spec} className={`flex items-center gap-4 px-8 py-5 ${i !== specs.length - 1 ? "border-b border-border" : ""}`}>
              <CheckCircle size={20} className="text-primary shrink-0" />
              <span className="text-foreground font-medium">{spec}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetroSpecs;
