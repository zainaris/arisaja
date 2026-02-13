import { Wifi, Server, Network, Radio, Cable, ShieldCheck } from "lucide-react";

const services = [
  { icon: Wifi, title: "Broadband FTTH", desc: "Internet unlimited untuk rumah dan UMKM." },
  { icon: Server, title: "Dedicated Internet", desc: "Bandwidth 1:1 dengan SLA tinggi untuk bisnis." },
  { icon: Network, title: "Metro-E / Leased Line", desc: "Koneksi antar kantor dengan performa tinggi." },
  { icon: Radio, title: "DWDM", desc: "Solusi transport kapasitas besar untuk operator dan enterprise." },
  { icon: Cable, title: "Dark Fiber", desc: "Penyewaan core fiber untuk kebutuhan jaringan sendiri." },
  { icon: ShieldCheck, title: "Backup On Demand", desc: "Solusi redundancy untuk menjaga bisnis tetap online." },
];

const ServicesSection = () => (
  <section id="layanan" className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
          Layanan <span className="text-primary">Kami</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Solusi konektivitas lengkap untuk segala kebutuhan Anda
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:border-primary border-2 border-transparent transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Icon size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{desc}</p>
            <a
              href="#order"
              className="inline-block px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-dark transition-all duration-300"
            >
              Order Now
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
