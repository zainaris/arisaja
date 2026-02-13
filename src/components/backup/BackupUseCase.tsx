import { Landmark, HeartPulse, Server, ShoppingCart, Building2, Wifi } from "lucide-react";
import backupEnterprise from "@/assets/backup-enterprise-use.jpg";

const useCases = [
  { icon: Landmark, title: "Perbankan & Finansial", desc: "Jaminan koneksi untuk transaksi perbankan real-time." },
  { icon: HeartPulse, title: "Rumah Sakit", desc: "Konektivitas vital untuk sistem rekam medis dan telemedicine." },
  { icon: Server, title: "Data Center", desc: "Redundansi koneksi untuk uptime data center maksimal." },
  { icon: ShoppingCart, title: "E-Commerce Platform", desc: "Pastikan platform belanja online selalu tersedia." },
  { icon: Building2, title: "Corporate Office", desc: "Produktivitas kantor tetap terjaga tanpa downtime." },
  { icon: Wifi, title: "ISP & Operator", desc: "Backup upstream untuk keandalan layanan ISP." },
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

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={backupEnterprise}
            alt="Enterprise buildings connected with backup network"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,5%)]/90 via-[hsl(0,0%,5%)]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-primary font-bold text-lg drop-shadow-lg">Enterprise Connectivity</p>
            <p className="text-white/90 text-sm drop-shadow-md">Koneksi backup untuk gedung perkantoran, rumah sakit, dan perbankan</p>
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

export default BackupUseCase;
