import { Layers, Gauge, MapPin, Timer, Settings, ShieldCheck } from "lucide-react";
import dwdmMultiplexer from "@/assets/dwdm-multiplexer.jpg";

const features = [
  { icon: Layers, title: "Multi-Channel Wavelength", desc: "Mendukung multiple lambda dalam satu fiber." },
  { icon: Gauge, title: "High Capacity up to Terabit", desc: "100G / 200G / 400G scalable." },
  { icon: MapPin, title: "Long Distance Transmission", desc: "Ideal untuk backbone antar kota dan antar negara." },
  { icon: Timer, title: "Low Latency", desc: "Cocok untuk DCI dan inter-operator traffic." },
  { icon: Settings, title: "Scalable Architecture", desc: "Mudah upgrade tanpa penarikan fiber baru." },
  { icon: ShieldCheck, title: "Carrier-Grade Reliability", desc: "Infrastruktur dengan monitoring 24/7 dan SLA tinggi." },
];

const DwdmFeatures = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
        Keunggulan <span className="text-primary">DWDM Kami</span>
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
        Teknologi transport optik terdepan untuk kapasitas maksimal
      </p>

      {/* Hero image banner */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16">
        <img
          src={dwdmMultiplexer}
          alt="DWDM optical multiplexer equipment"
          className="w-full h-64 lg:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        <div className="absolute bottom-6 left-8">
          <p className="text-primary font-bold text-xl">Optical Transport Equipment</p>
          <p className="text-muted-foreground text-sm">Perangkat DWDM kelas carrier untuk kapasitas multi-terabit</p>
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

export default DwdmFeatures;
