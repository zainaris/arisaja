import { Server, Radio, Network, Cloud, MapPin, Globe } from "lucide-react";
import dwdmDci from "@/assets/dwdm-datacenter-interconnect.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const useCaseKeys = [
  { icon: Server, titleKey: "dwdm.usecase.1.title", descKey: "dwdm.usecase.1.desc" },
  { icon: Radio, titleKey: "dwdm.usecase.2.title", descKey: "dwdm.usecase.2.desc" },
  { icon: Network, titleKey: "dwdm.usecase.3.title", descKey: "dwdm.usecase.3.desc" },
  { icon: Cloud, titleKey: "dwdm.usecase.4.title", descKey: "dwdm.usecase.4.desc" },
  { icon: MapPin, titleKey: "dwdm.usecase.5.title", descKey: "dwdm.usecase.5.desc" },
  { icon: Globe, titleKey: "dwdm.usecase.6.title", descKey: "dwdm.usecase.6.desc" },
];

const DwdmUseCase = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">{t("dwdm.usecase.heading1")} <span className="text-primary">{t("dwdm.usecase.heading2")}</span></h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">{t("dwdm.usecase.desc")}</p>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={dwdmDci} alt="Data center interconnection facility" className="w-full h-[400px] object-cover" />
            {/* Strong overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-primary font-bold text-lg drop-shadow-lg">{t("dwdm.usecase.banner.title")}</p>
              <p className="text-white/90 text-sm mt-1 drop-shadow-md font-medium">{t("dwdm.usecase.banner.desc")}</p>
            </div>
          </div>
          <div className="grid gap-4">
            {useCaseKeys.map(({ icon: Icon, titleKey, descKey }) => (
              <div key={titleKey} className="flex items-start gap-4 p-5 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Icon size={24} className="text-primary" /></div>
                <div><h3 className="font-semibold text-foreground text-lg">{t(titleKey)}</h3><p className="text-muted-foreground text-sm mt-1">{t(descKey)}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DwdmUseCase;
