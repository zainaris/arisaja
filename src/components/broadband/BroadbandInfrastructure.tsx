import { CheckCircle } from "lucide-react";
import fiberInfra from "@/assets/fiber-infrastructure.jpg";

const bullets = [
  "Redundant Network System",
  "Monitoring Real-Time",
  "Tim Network Engineer Berpengalaman",
  "SLA Tinggi untuk Pelanggan Bisnis",
];

const BroadbandInfrastructure = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <img
            src={fiberInfra}
            alt="Fiber optic backbone infrastructure"
            className="rounded-2xl shadow-card w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Infrastruktur Fiber <span className="text-primary">Berkualitas Tinggi</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Kami menggunakan backbone fiber optik modern dengan sistem monitoring 24 jam
            untuk memastikan koneksi tetap stabil dan minim gangguan.
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
      </div>
    </div>
  </section>
);

export default BroadbandInfrastructure;
