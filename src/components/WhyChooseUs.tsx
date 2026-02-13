import { Network, RefreshCw, MonitorCheck, Users, Zap, Shield } from "lucide-react";

const reasons = [
  { icon: Network, title: "Infrastruktur Fiber Sendiri" },
  { icon: RefreshCw, title: "Redundant Network" },
  { icon: MonitorCheck, title: "24/7 NOC Monitoring" },
  { icon: Users, title: "Tim Engineer Profesional" },
  { icon: Zap, title: "Respon Cepat" },
  { icon: Shield, title: "SLA Enterprise" },
];

const WhyChooseUs = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-16">
        Kenapa Memilih <span className="text-primary">Kami?</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map(({ icon: Icon, title }) => (
          <div key={title} className="flex items-start gap-4 p-6 rounded-2xl hover:bg-secondary transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Icon size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
