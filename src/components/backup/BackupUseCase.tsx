import { Landmark, HeartPulse, Server, ShoppingCart, Building2, Wifi } from "lucide-react";
import backupEnterprise from "@/assets/backup-enterprise-use.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const useCaseKeys = [
  { icon: Landmark, titleKey: "bk.usecase.1.title", descKey: "bk.usecase.1.desc" },
  { icon: HeartPulse, titleKey: "bk.usecase.2.title", descKey: "bk.usecase.2.desc" },
  { icon: Server, titleKey: "bk.usecase.3.title", descKey: "bk.usecase.3.desc" },
  { icon: ShoppingCart, titleKey: "bk.usecase.4.title", descKey: "bk.usecase.4.desc" },
  { icon: Building2, titleKey: "bk.usecase.5.title", descKey: "bk.usecase.5.desc" },
  { icon: Wifi, titleKey: "bk.usecase.6.title", descKey: "bk.usecase.6.desc" },
];

const BackupUseCase = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">{t("bk.usecase.heading1")} <span className="text-primary">{t("bk.usecase.heading2")}</span></h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">{t("bk.usecase.desc")}</p>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={backupEnterprise} alt="Enterprise buildings connected with backup network" className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,5%)]/90 via-[hsl(0,0%,5%)]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6"><p className="text-primary font-bold text-lg drop-shadow-lg">{t("bk.usecase.banner.title")}</p><p className="text-white/90 text-sm drop-shadow-md">{t("bk.usecase.banner.desc")}</p></div>
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

export default BackupUseCase;
