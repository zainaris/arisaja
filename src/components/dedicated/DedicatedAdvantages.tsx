import { Gauge, ShieldCheck, Timer, Globe, MonitorCheck, Headphones } from "lucide-react";

const features = [
  { icon: Gauge, title: "Bandwidth 1:1", desc: "Tidak berbagi jalur dengan pelanggan lain." },
  { icon: ShieldCheck, title: "SLA Hingga 99.9%", desc: "Jaminan uptime tinggi dengan kompensasi layanan." },
  { icon: Timer, title: "Latency Rendah", desc: "Ideal untuk VoIP, VPN, trading system, dan cloud." },
  { icon: Globe, title: "Static Public IP", desc: "Mendukung server, CCTV, VPN, dan remote access." },
  { icon: MonitorCheck, title: "24/7 NOC Monitoring", desc: "Dipantau nonstop oleh tim network engineer." },
  { icon: Headphones, title: "Prioritas Support", desc: "Respon cepat dan teknisi dedicated untuk pelanggan enterprise." },
];

const DedicatedAdvantages = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
        Keunggulan <span className="text-primary">Dedicated Internet Kami</span>
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
        Performa enterprise-grade untuk bisnis mission-critical
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover border-2 border-transparent hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Icon size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DedicatedAdvantages;
