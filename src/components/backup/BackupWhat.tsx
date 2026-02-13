import { Zap, DollarSign, Unlock, MapPin } from "lucide-react";
import backupJktSgp from "@/assets/backup-jkt-sgp-link.jpg";

const highlights = [
  {
    icon: Zap,
    title: "Instant, Flexible Scalability",
    desc: "Scale bandwidth internasional naik-turun secara instan sesuai kebutuhan, tanpa delay atau waktu provisioning lama.",
  },
  {
    icon: DollarSign,
    title: "Cost-Efficient Bandwidth",
    desc: "Bayar hanya kapasitas yang digunakan, mengurangi biaya overprovisioning dan bandwidth yang tidak terpakai.",
  },
  {
    icon: Unlock,
    title: "No Long-Term Lock-in",
    desc: "Tanpa kontrak jangka panjang. Nikmati kebebasan untuk mengatur bandwidth kapan saja sesuai kebutuhan.",
  },
];

const BackupWhat = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Apa Itu <span className="text-primary">Backup On Demand?</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Scalable International Connectivity, Delivered On Demand — koneksi cadangan otomatis
          yang memastikan bisnis Anda tetap online 24/7.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Feature highlights */}
        <div className="space-y-8">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}

          {/* Jakarta - Singapore indicator */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin size={18} className="text-primary" />
              </div>
              <span className="font-bold text-foreground">Jakarta</span>
            </div>
            <div className="flex-1 border-t-2 border-dashed border-primary/40" />
            <div className="flex items-center gap-3">
              <span className="font-bold text-foreground">Singapore</span>
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin size={18} className="text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={backupJktSgp}
            alt="Jakarta-Singapore backup connectivity infrastructure"
            className="w-full h-[480px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,5%)]/90 via-[hsl(0,0%,5%)]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-primary font-bold text-lg drop-shadow-lg">International Connectivity</p>
            <p className="text-white/90 text-sm drop-shadow-md">Infrastruktur koneksi Jakarta – Singapore untuk redundansi maksimal</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BackupWhat;
