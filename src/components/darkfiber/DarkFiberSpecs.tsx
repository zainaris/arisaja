import { CheckCircle } from "lucide-react";

const specs = [
  "Single Mode Fiber",
  "Core-to-Core Leasing",
  "Available Multi-Core Options",
  "Long Distance Ready",
  "Underground & Aerial Deployment",
  "Redundant Route Option",
  "SLA & 24/7 Monitoring Infrastructure",
];

const DarkFiberSpecs = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
        Spesifikasi <span className="text-primary">Infrastruktur</span>
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
        Detail teknis layanan Dark Fiber
      </p>

      <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-card overflow-hidden">
        {specs.map((spec, i) => (
          <div key={spec} className={`flex items-center gap-4 px-8 py-5 ${i !== specs.length - 1 ? "border-b border-border" : ""}`}>
            <CheckCircle size={20} className="text-primary shrink-0" />
            <span className="text-foreground font-medium">{spec}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DarkFiberSpecs;
