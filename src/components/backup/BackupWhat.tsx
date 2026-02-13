import redundancyImg from "@/assets/backup-redundancy.jpg";

const BackupWhat = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <img src={redundancyImg} alt="Redundant network connections" className="rounded-2xl shadow-card w-full object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Apa Itu <span className="text-primary">Backup On Demand?</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Backup On Demand adalah layanan koneksi cadangan yang akan aktif secara otomatis
            ketika jalur utama mengalami gangguan. Sistem ini memastikan operasional bisnis
            tetap berjalan tanpa downtime.
          </p>
          <div className="p-6 rounded-2xl bg-primary/5 border-l-4 border-primary">
            <p className="text-foreground font-medium">
              "Ketika link utama down, koneksi cadangan langsung aktif secara otomatis."
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Cocok untuk perusahaan yang tidak dapat menerima downtime seperti perbankan,
            rumah sakit, data center, dan perusahaan multi-cabang.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default BackupWhat;
