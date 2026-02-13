import { Building2, Server, Landmark, Network, Cloud, Building } from "lucide-react";
import metroEnterprise from "@/assets/metro-enterprise-connect.jpg";

const useCases = [
  { icon: Building2, title: "Perusahaan Multi Cabang", desc: "Hubungkan seluruh cabang dengan jaringan privat berkecepatan tinggi." },
  { icon: Server, title: "Data Center Interconnection", desc: "Koneksi antar DC dengan latensi ultra rendah." },
  { icon: Network, title: "ISP Interconnection", desc: "Peering dan transit antar operator telekomunikasi." },
  { icon: Landmark, title: "Financial & Banking System", desc: "Jalur aman untuk transaksi perbankan real-time." },
  { icon: Building, title: "Enterprise VPN Backbone", desc: "Backbone VPN korporat dengan performa terjamin." },
  { icon: Cloud, title: "Cloud & Disaster Recovery", desc: "Replikasi data ke cloud dan site cadangan." },
];

const MetroUseCase = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
        Cocok <span className="text-primary">Untuk</span>
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
        Solusi ideal untuk bisnis yang membutuhkan koneksi antar lokasi dengan performa tinggi dan keamanan maksimal.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={metroEnterprise}
            alt="Enterprise fiber optic network infrastructure"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-primary font-bold text-lg">Enterprise-Grade Infrastructure</p>
            <p className="text-foreground/70 text-sm">Infrastruktur fiber optik kelas enterprise untuk keandalan maksimal</p>
          </div>
        </div>

        {/* Use cases */}
        <div className="grid gap-4">
          {useCases.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4 p-5 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">{title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MetroUseCase;
