import { RefreshCw, ShieldCheck, Sliders, Radio, FileCheck, Building2 } from "lucide-react";

const features = [
  { icon: RefreshCw, title: "Automatic Failover", desc: "Peralihan koneksi tanpa intervensi manual." },
  { icon: ShieldCheck, title: "Zero Downtime Protection", desc: "Mengurangi risiko gangguan operasional." },
  { icon: Sliders, title: "Flexible Bandwidth", desc: "Kapasitas backup disesuaikan kebutuhan." },
  { icon: Radio, title: "Multi-Technology Option", desc: "Fiber, Wireless, atau Hybrid Backup." },
  { icon: FileCheck, title: "SLA Supported", desc: "Didukung monitoring dan jaminan layanan." },
  { icon: Building2, title: "Enterprise-Ready", desc: "Cocok untuk sistem mission-critical." },
];

const BackupAdvantages = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
        Keunggulan <span className="text-primary">Backup On Demand</span>
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
        Perlindungan koneksi menyeluruh untuk bisnis mission-critical Anda.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="p-8 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Icon size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BackupAdvantages;
