import { CheckCircle } from "lucide-react";
import monitoringImg from "@/assets/backup-monitoring.jpg";

const bullets = [
  "Real-Time Monitoring",
  "Fast Response Engineering Team",
  "Redundant Core Network",
  "Multi-Upstream Provider",
];

const BackupInfrastructure = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-6 order-2 lg:order-1">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Monitoring dan Infrastruktur <span className="text-primary">Andal</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Didukung sistem monitoring 24 jam dan infrastruktur fiber profesional untuk
            memastikan transisi koneksi berlangsung cepat dan stabil.
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
          <img src={monitoringImg} alt="Network monitoring operations center" className="rounded-2xl shadow-card w-full object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default BackupInfrastructure;
