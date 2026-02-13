import { CheckCircle } from "lucide-react";
import dwdmHero from "@/assets/dwdm-hero.jpg";

const badges = [
  "Multi-Terabit Capacity",
  "100G / 200G / 400G Ready",
  "Carrier Grade Infrastructure",
  "Nationwide & Regional Backbone",
];

const DwdmHero = () => (
  <section className="relative overflow-hidden bg-background min-h-[90vh] flex items-center">
    {/* Subtle green glow effects */}
    <div className="absolute top-0 left-0 w-1/2 h-full opacity-15 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 30% 50%, hsl(145 100% 39% / 0.2), transparent 70%)" }}
    />
    <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-10 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 70% 80%, hsl(150 100% 68% / 0.3), transparent 70%)" }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Carrier-Grade Transport
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            DWDM <span className="text-gradient-green">Carrier-Grade</span> Transport Solution
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Solusi transmisi kapasitas besar berbasis Dense Wavelength Division Multiplexing
            untuk backbone nasional, data center interconnect, dan operator network.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Consult Our Team
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border-2 border-primary text-primary font-semibold text-lg hover:bg-primary/10 transition-all duration-300"
            >
              Request Proposal
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <img
            src={dwdmHero}
            alt="DWDM fiber optic wavelengths"
            className="rounded-3xl shadow-2xl glow-green animate-glow-pulse"
          />
        </div>
      </div>
    </div>
  </section>
);

export default DwdmHero;
