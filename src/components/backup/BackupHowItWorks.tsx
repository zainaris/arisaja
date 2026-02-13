import { Wifi, AlertTriangle, RefreshCw, CheckCircle2 } from "lucide-react";

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
