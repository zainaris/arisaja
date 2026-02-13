import { Building2, Server, Landmark, Hospital, Building, GraduationCap } from "lucide-react";
import industryImg from "@/assets/dedicated-industry.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const industryKeys = [
  { icon: Building2, titleKey: "ded.industry.1.title", descKey: "ded.industry.1.desc" },
  { icon: Server, titleKey: "ded.industry.2.title", descKey: "ded.industry.2.desc" },
  { icon: Landmark, titleKey: "ded.industry.3.title", descKey: "ded.industry.3.desc" },
  { icon: Hospital, titleKey: "ded.industry.4.title", descKey: "ded.industry.4.desc" },
  { icon: Building, titleKey: "ded.industry.5.title", descKey: "ded.industry.5.desc" },
  { icon: GraduationCap, titleKey: "ded.industry.6.title", descKey: "ded.industry.6.desc" },
];

const DedicatedIndustry = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t("ded.industry.heading1")} <span className="text-primary">{t("ded.industry.heading2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">{t("ded.industry.desc")}</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {industryKeys.map(({ icon: Icon, titleKey, descKey }) => (
                <div key={titleKey} className="flex items-start gap-3 p-4 rounded-xl hover:bg-secondary transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{t(titleKey)}</h3>
                    <p className="text-muted-foreground text-xs">{t(descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <img src={industryImg} alt="Modern enterprise office environment" className="rounded-2xl shadow-card w-full object-cover aspect-[4/3]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DedicatedIndustry;
