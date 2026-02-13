import { Wifi, AlertTriangle, RefreshCw, CheckCircle2 } from "lucide-react";
import backupFailoverImg from "@/assets/backup-auto-failover.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const stepKeys = [
  { icon: Wifi, step: "01", titleKey: "bk.how.1.title", descKey: "bk.how.1.desc" },
  { icon: AlertTriangle, step: "02", titleKey: "bk.how.2.title", descKey: "bk.how.2.desc" },
  { icon: RefreshCw, step: "03", titleKey: "bk.how.3.title", descKey: "bk.how.3.desc" },
  { icon: CheckCircle2, step: "04", titleKey: "bk.how.4.title", descKey: "bk.how.4.desc" },
];

const BackupHowItWorks = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">{t("bk.how.heading1")} <span className="text-primary">{t("bk.how.heading2")}</span></h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">{t("bk.how.desc")}</p>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16">
          <img src={backupFailoverImg} alt="Network engineer performing failover testing" className="w-full h-64 lg:h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0,0%,5%)]/90 via-[hsl(0,0%,5%)]/50 to-[hsl(0,0%,5%)]/20" />
          <div className="absolute bottom-6 left-8"><p className="text-primary font-bold text-xl drop-shadow-lg">{t("bk.how.banner.title")}</p><p className="text-white/90 text-sm drop-shadow-md">{t("bk.how.banner.desc")}</p></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stepKeys.map(({ icon: Icon, step, titleKey, descKey }, i) => (
            <div key={step} className="relative text-center">
              {i < stepKeys.length - 1 && <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/20" />}
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 relative z-10"><Icon size={32} className="text-primary" /></div>
              <span className="text-primary font-bold text-sm mb-2 block">{t("common.step")} {step}</span>
              <h3 className="font-semibold text-foreground text-lg mb-2">{t(titleKey)}</h3>
              <p className="text-muted-foreground text-sm">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackupHowItWorks;
