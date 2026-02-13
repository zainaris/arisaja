import { CheckCircle } from "lucide-react";
import heroImg from "@/assets/darkfiber-hero.jpg";

const badges = [
  "Exclusive Fiber Core",
  "Full Infrastructure Control",
  "Scalable Capacity",
  "Carrier-Grade Ready",
];

const DarkFiberHero = () => (
  <section className="relative overflow-hidden bg-background min-h-[90vh] flex items-center">
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 70% 40%, hsl(145 100% 39% / 0.25), transparent 70%)" }}
    />
    <div className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-10 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 20% 80%, hsl(150 100% 68% / 0.2), transparent 70%)" }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Exclusive Infrastructure
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Dark Fiber untuk <span className="text-gradient-green">Kontrol Penuh</span> Infrastruktur Anda
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Sewa core fiber optik eksklusif untuk membangun jaringan backbone sendiri
            dengan fleksibilitas, kapasitas, dan keamanan maksimal.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl">
              Consult Our Team
            </a>
            <a href="#contact" className="px-8 py-4 rounded-2xl border-2 border-primary text-primary font-semibold text-lg hover:bg-primary/10 transition-all duration-300">
              Request Proposal
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <img src={heroImg} alt="Underground fiber optic cable installation" className="rounded-3xl shadow-2xl glow-green animate-glow-pulse" />
        </div>
      </div>
    </div>
  </section>
);

export default DarkFiberHero;
