import { CheckCircle } from "lucide-react";
import nocCenter from "@/assets/noc-center.jpg";

const bullets = [
  "Nationwide Fiber Backbone",
  "Regional Interconnection SEA",
  "Multi Upstream Provider",
  "24/7 NOC",
];

const MetroInfrastructure = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-6 order-2 lg:order-1">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Infrastruktur Fiber <span className="text-primary">Nasional & Regional</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Didukung backbone fiber nasional dan interkoneksi regional Asia Tenggara,
            jaringan kami dirancang untuk memastikan konektivitas cepat, stabil, dan aman bagi bisnis Anda.
          </p>
          <ul className="space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <CheckCircle size={20} className="text-primary shrink-0" />
                <span className="text-foreground font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src={nocCenter}
            alt="Network Operation Center"
            className="rounded-2xl shadow-card w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default MetroInfrastructure;
