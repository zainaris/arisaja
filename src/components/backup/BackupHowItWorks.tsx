import { Wifi, AlertTriangle, RefreshCw, CheckCircle2 } from "lucide-react";
import backupFailoverImg from "@/assets/backup-auto-failover.jpg";

const steps = [
  { icon: Wifi, step: "01", title: "Primary Link Active", desc: "Koneksi utama berjalan normal." },
  { icon: AlertTriangle, step: "02", title: "Link Failure Detected", desc: "Sistem mendeteksi gangguan secara otomatis." },
  { icon: RefreshCw, step: "03", title: "Automatic Failover", desc: "Backup link aktif dalam hitungan detik." },
  { icon: CheckCircle2, step: "04", title: "Primary Link Restored", desc: "Koneksi kembali ke jalur utama secara otomatis." },
];

const BackupHowItWorks = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
        Bagaimana <span className="text-primary">Cara Kerjanya?</span>
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
        Proses failover otomatis yang menjaga bisnis Anda tetap online.
      </p>

      {/* Image banner */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16">
        <img
          src={backupFailoverImg}
          alt="Network engineer performing failover testing"
          className="w-full h-64 lg:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0,0%,5%)]/90 via-[hsl(0,0%,5%)]/50 to-[hsl(0,0%,5%)]/20" />
        <div className="absolute bottom-6 left-8">
          <p className="text-primary font-bold text-xl drop-shadow-lg">Automatic Failover System</p>
          <p className="text-white/90 text-sm drop-shadow-md">Peralihan koneksi otomatis tanpa intervensi manual</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map(({ icon: Icon, step, title, desc }, i) => (
          <div key={step} className="relative text-center">
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/20" />
            )}
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 relative z-10">
              <Icon size={32} className="text-primary" />
            </div>
            <span className="text-primary font-bold text-sm mb-2 block">Step {step}</span>
            <h3 className="font-semibold text-foreground text-lg mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BackupHowItWorks;
