import { Layers, Gauge, MapPin, Timer, Settings, ShieldCheck } from "lucide-react";
import dwdmMultiplexer from "@/assets/dwdm-multiplexer.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const featureKeys = [
  { icon: Layers, titleKey: "dwdm.feat.1.title", descKey: "dwdm.feat.1.desc" },
  { icon: Gauge, titleKey: "dwdm.feat.2.title", descKey: "dwdm.feat.2.desc" },
  { icon: MapPin, titleKey: "dwdm.feat.3.title", descKey: "dwdm.feat.3.desc" },
  { icon: Timer, titleKey: "dwdm.feat.4.title", descKey: "dwdm.feat.4.desc" },
  { icon: Settings, titleKey: "dwdm.feat.5.title", descKey: "dwdm.feat.5.desc" },
  { icon: ShieldCheck, titleKey: "dwdm.feat.6.title", descKey: "dwdm.feat.6.desc" },
];

const DwdmFeatures = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">{t("dwdm.feat.heading1")} <span className="text-primary">{t("dwdm.feat.heading2")}</span></h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">{t("dwdm.feat.desc")}</p>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16">
          <img src={dwdmMultiplexer} alt="DWDM optical multiplexer equipment" className="w-full h-64 lg:h-80 object-cover" />
          {/* Strong overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-8 right-8">
            <p className="text-primary font-bold text-xl drop-shadow-lg">{t("dwdm.feat.banner.title")}</p>
            <p className="text-white/90 text-sm mt-1 drop-shadow-md font-medium">{t("dwdm.feat.banner.desc")}</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureKeys.map(({ icon: Icon, titleKey, descKey }) => (
            <div key={titleKey} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover border-2 border-transparent hover:border-primary/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"><Icon size={28} className="text-primary" /></div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{t(titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DwdmFeatures;
