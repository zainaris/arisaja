import datacenterMap from "@/assets/metro-datacenter-map.png";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const datacenters = [
  { id: 1, name: "NDC Moratel Jatinegara", area: "Jakarta Timur" },
  { id: 2, name: "EDGE DC1", area: "Jakarta Selatan" },
  { id: 3, name: "EDGE DC2", area: "Jakarta Pusat" },
  { id: 4, name: "Neucentrix Karet", area: "Jakarta Barat" },
  { id: 5, name: "NTT JKT2 Kuningan", area: "Jakarta Selatan" },
  { id: 6, name: "NTT JKT3 Cibitung", area: "Bekasi" },
  { id: 7, name: "IDC 3D", area: "Jakarta Selatan" },
  { id: 8, name: "DCI Cibitung", area: "Bekasi" },
  { id: 9, name: "DHC DC GIIC Cikarang", area: "Cikarang" },
  { id: 10, name: "APJII Cyber 1", area: "Jakarta Selatan" },
];

const DwdmCoverage = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t("dwdm.coverage.heading1")} <span className="text-primary">{t("dwdm.coverage.heading2")}</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("dwdm.coverage.desc")}</p>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 border border-primary/20">
          <img src={datacenterMap} alt="Peta lokasi datacenter DWDM Artamedia" className="w-full object-cover" style={{ filter: "hue-rotate(140deg) saturate(1.4) brightness(0.85) contrast(1.1)" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-secondary to-transparent h-20" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {datacenters.map((dc) => (
            <div key={dc.id} className="group relative bg-card border border-primary/10 rounded-xl p-4 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary/20 transition-colors">{dc.id}</div>
                <div className="min-w-0"><h4 className="text-card-foreground font-semibold text-sm leading-tight">{dc.name}</h4><div className="flex items-center gap-1 mt-1"><MapPin className="w-3 h-3 text-primary/60" /><span className="text-muted-foreground text-xs">{dc.area}</span></div></div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="https://wa.me/6282280257572?text=Halo%2C%20saya%20ingin%20mengetahui%20jangkauan%20DWDM%20di%20area%20saya" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg">{t("dwdm.coverage.btn")}</a>
        </div>
      </div>
    </section>
  );
};

export default DwdmCoverage;
