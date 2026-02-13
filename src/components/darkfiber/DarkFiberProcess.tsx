import { MessageSquare, Search, Cable, Zap } from "lucide-react";

const steps = [
  { icon: MessageSquare, step: "01", title: "Konsultasi & Perencanaan Jalur" },
  { icon: Search, step: "02", title: "Survey & Engineering Design" },
  { icon: Cable, step: "03", title: "Provisioning Core Fiber" },
  { icon: Zap, step: "04", title: "Activation & Handover" },
];

const DarkFiberProcess = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
        Proses <span className="text-primary">Implementasi</span>
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
        Dari konsultasi hingga aktivasi dalam proses yang terstruktur.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map(({ icon: Icon, step, title }, i) => (
          <div key={step} className="relative text-center">
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/20" />
            )}
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 relative z-10">
              <Icon size={32} className="text-primary" />
            </div>
            <span className="text-primary font-bold text-sm mb-2 block">Step {step}</span>
            <h3 className="font-semibold text-foreground text-lg">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DarkFiberProcess;
