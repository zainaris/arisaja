import { CheckCircle } from "lucide-react";
import metroHero from "@/assets/metro-hero.jpg";

const badges = [
  "Dedicated Point-to-Point",
  "SLA Hingga 99.9%",
  "Low Latency",
  "24/7 NOC Support",
];

const MetroHero = () => (
  <section className="relative overflow-hidden bg-hero-gradient min-h-[90vh] flex items-center">
    <div
      className="absolute inset-0 opacity-30"
      style={{ backgroundImage: `url(${metroHero})`, backgroundSize: "cover", backgroundPosition: "center" }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(145,60%,10%)] via-[hsl(145,60%,10%,0.85)] to-transparent" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Enterprise Connectivity
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
            Metro-E & Leased Line untuk Koneksi Antar Lokasi{" "}
            <span className="text-gradient-green">Tanpa Batas</span>
          </h1>

          <p className="text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
            Solusi konektivitas dedicated antar kantor, data center, dan lokasi bisnis Anda
            dengan performa stabil, latency rendah, dan SLA tinggi.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#order"
              className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Order Now
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Konsultasi Sekarang
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/80">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <img
            src={metroHero}
            alt="Metro Ethernet network connectivity"
            className="rounded-3xl shadow-2xl glow-green animate-glow-pulse"
          />
        </div>
      </div>
    </div>
  </section>
);

export default MetroHero;
