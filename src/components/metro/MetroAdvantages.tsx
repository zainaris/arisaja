import { Gauge, Timer, ShieldCheck, Settings, Network, MonitorCheck } from "lucide-react";
import metroNoc from "@/assets/metro-noc-monitoring.jpg";

const features = [
  { icon: Gauge, title: "Dedicated Bandwidth 1:1", desc: "Bandwidth eksklusif tanpa sharing." },
  { icon: Timer, title: "Low Latency & High Stability", desc: "Performa optimal untuk aplikasi real-time." },
  { icon: ShieldCheck, title: "Secure Private Network", desc: "Jalur privat tanpa internet publik." },
  { icon: Settings, title: "Flexible Bandwidth", desc: "Tersedia mulai 10 Mbps hingga 100 Gbps." },
  { icon: Network, title: "Multi-Branch Connectivity", desc: "Hubungkan semua cabang dalam satu jaringan." },
  { icon: MonitorCheck, title: "24/7 Monitoring & SLA", desc: "Dipantau nonstop dengan jaminan SLA." },
];

const MetroAdvantages = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
        Keunggulan <span className="text-primary">Metro-E Kami</span>
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
        Konektivitas enterprise-grade untuk bisnis mission-critical
      </p>

      {/* Hero image banner */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16">
        <img
          src={metroNoc}
          alt="Network Operations Center monitoring Metro-E"
          className="w-full h-64 lg:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        <div className="absolute bottom-6 left-8">
          <p className="text-primary font-bold text-xl">24/7 NOC Monitoring</p>
          <p className="text-muted-foreground text-sm">Tim kami memantau jaringan Anda setiap saat</p>
        </div>
      </div>

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

export default MetroAdvantages;
