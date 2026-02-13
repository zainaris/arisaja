import { CheckCircle } from "lucide-react";
import heroFiber from "@/assets/hero-fiber.jpg";

const badges = [
  "100% Fiber Optik",
  "SLA Tinggi",
  "24/7 Support",
  "Network Monitoring",
];

const HeroSection = () => (
  <section id="home" className="relative overflow-hidden bg-hero-gradient min-h-[90vh] flex items-center">
    {/* Background image overlay */}
    <div
      className="absolute inset-0 opacity-30"
      style={{ backgroundImage: `url(${heroFiber})`, backgroundSize: "cover", backgroundPosition: "center" }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(145,60%,10%)] via-[hsl(145,60%,10%,0.85)] to-transparent" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
            Solusi Internet Fiber untuk{" "}
            <span className="text-gradient-green">Rumah & Bisnis</span> Anda
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
            Kami menyediakan layanan Broadband, Dedicated Internet, Metro-E, hingga Dark Fiber
            dengan infrastruktur fiber optik modern dan dukungan 24/7.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#layanan"
              className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Lihat Layanan
            </a>
            <a
              href="#coverage"
              className="px-8 py-4 rounded-2xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Cek Coverage
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-primary-light shrink-0" />
                <span className="text-sm text-primary-foreground/80">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <img
            src={heroFiber}
            alt="Fiber optic technology"
            className="rounded-3xl shadow-2xl glow-green animate-glow-pulse"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
