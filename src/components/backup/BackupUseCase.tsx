import { Landmark, HeartPulse, Server, ShoppingCart, Building2, Wifi } from "lucide-react";

const useCases = [
  { icon: Landmark, title: "Perbankan & Finansial" },
  { icon: HeartPulse, title: "Rumah Sakit" },
  { icon: Server, title: "Data Center" },
  { icon: ShoppingCart, title: "E-Commerce Platform" },
  { icon: Building2, title: "Corporate Office" },
  { icon: Wifi, title: "ISP & Operator" },
];

const BackupUseCase = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
        Cocok <span className="text-primary">Untuk</span>
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
        Pastikan operasional bisnis tetap berjalan meskipun terjadi gangguan jaringan.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCases.map(({ icon: Icon, title }) => (
          <div key={title} className="flex items-center gap-4 p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Icon size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-lg">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BackupUseCase;
