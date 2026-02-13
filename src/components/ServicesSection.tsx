import { Wifi, Server, Network, Radio, Cable, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  { icon: Wifi, title: "Broadband FTTH", descKey: "services.broadband.desc" },
  { icon: Server, title: "Dedicated Internet", descKey: "services.dedicated.desc" },
  { icon: Network, title: "Metro-E / Leased Line", descKey: "services.metro.desc" },
  { icon: Radio, title: "DWDM", descKey: "services.dwdm.desc" },
  { icon: Cable, title: "Dark Fiber", descKey: "services.darkfiber.desc" },
  { icon: ShieldCheck, title: "Backup On Demand", descKey: "services.backup.desc" },
];

const ServicesSection = () => {
  const { t } = useLanguage();
  return (
    <section id="layanan" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            {t("services.heading1")} <span className="text-primary">{t("services.heading2")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("services.desc")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, descKey }) => (
            <div
              key={title}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:border-primary border-2 border-transparent transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{t(descKey)}</p>
              <a
                href="#order"
                className="inline-block px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-dark transition-all duration-300"
              >
                {t("common.order")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
