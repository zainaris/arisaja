import { Layers, Network, MapPin } from "lucide-react";
import backupFailover from "@/assets/backup-failover-system.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const BackupArchitecture = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-dark-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">{t("bk.arch.heading1")} <span className="text-gradient-green">{t("bk.arch.heading2")}</span></h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">{t("bk.arch.desc")}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-[hsl(145,40%,12%)] border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6"><div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><Layers size={24} className="text-primary" /></div><div><span className="text-primary text-sm font-semibold tracking-wide">Option A</span><h3 className="text-xl font-bold text-primary-foreground">Layer 1 (DWDM)</h3></div></div>
              <ul className="space-y-3">{["Lambda Based", "10G / 40G / 100G", "Dedicated Wavelength", "Low latency & deterministik"].map((item) => (<li key={item} className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /><span className="text-primary-foreground/90 font-medium">{item}</span></li>))}</ul>
            </div>
            <div className="bg-[hsl(145,40%,12%)] border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6"><div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><Network size={24} className="text-primary" /></div><div><span className="text-primary text-sm font-semibold tracking-wide">Option B</span><h3 className="text-xl font-bold text-primary-foreground">Layer 2 (Metro E)</h3></div></div>
              <ul className="space-y-3">{["MPLS", "Flexible bandwidth profile", "Faster provisioning"].map((item) => (<li key={item} className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /><span className="text-primary-foreground/90 font-medium">{item}</span></li>))}</ul>
            </div>
            <div className="flex items-center justify-center gap-3 py-3">
              <div className="flex items-center gap-2"><MapPin size={16} className="text-primary" /><span className="text-primary-foreground/80 text-sm font-medium">Sumatera</span></div>
              <div className="w-8 border-t border-dashed border-primary/40" /><span className="text-primary-foreground/80 text-sm font-medium">Jawa</span>
              <div className="w-8 border-t border-dashed border-primary/40" /><span className="text-primary-foreground/80 text-sm font-medium">Kalimantan</span>
              <div className="w-8 border-t border-dashed border-primary/40" /><div className="flex items-center gap-2"><span className="text-primary-foreground/80 text-sm font-medium">Singapore</span><MapPin size={16} className="text-primary" /></div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={backupFailover} alt="Backup failover system infrastructure" className="w-full h-[560px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(145,60%,10%)]/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6"><p className="text-primary font-bold text-lg">Failover System</p><p className="text-primary-foreground/70 text-sm">Sistem failover otomatis dengan monitoring real-time</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackupArchitecture;
