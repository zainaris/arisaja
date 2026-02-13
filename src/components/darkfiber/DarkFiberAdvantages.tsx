import { Settings, Infinity, ShieldCheck, TrendingUp, Server, MapPin } from "lucide-react";

const features = [
  { icon: Settings, title: "Full Control", desc: "Anda mengelola sendiri perangkat dan kapasitas transmisi." },
  { icon: Infinity, title: "Unlimited Bandwidth Potential", desc: "Kapasitas ditentukan oleh teknologi perangkat Anda." },
  { icon: ShieldCheck, title: "Secure & Private", desc: "Jalur fiber eksklusif tanpa sharing dengan pihak lain." },
  { icon: TrendingUp, title: "Long-Term Scalability", desc: "Mudah upgrade kapasitas tanpa perubahan fisik jaringan." },
  { icon: Server, title: "Carrier-Grade Infrastructure", desc: "Backbone fiber berkualitas tinggi." },
  { icon: MapPin, title: "Flexible Deployment", desc: "Cocok untuk metro, intercity, hingga backbone nasional." },
];

const DarkFiberAdvantages = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
        Keunggulan <span className="text-primary">Dark Fiber Kami</span>
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
        Kontrol penuh atas infrastruktur fiber dengan fleksibilitas maksimal.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="p-8 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Icon size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DarkFiberAdvantages;
