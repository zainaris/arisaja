import { CheckCircle } from "lucide-react";
import dwdmTransport from "@/assets/dwdm-transport.jpg";

const bullets = [
  "Nationwide Fiber Backbone",
  "Regional SEA Interconnection",
  "Redundant Core Network",
  "24/7 NOC Monitoring",
];

const DwdmInfrastructure = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-6 order-2 lg:order-1">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Infrastruktur Transport <span className="text-primary">Optik Modern</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Didukung backbone fiber optik modern dengan teknologi DWDM terbaru untuk memastikan
            kapasitas besar, stabilitas tinggi, dan skalabilitas jangka panjang.
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
            src={dwdmTransport}
            alt="DWDM optical transport equipment"
            className="rounded-2xl shadow-card w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default DwdmInfrastructure;
