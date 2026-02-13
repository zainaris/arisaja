import coreImg from "@/assets/darkfiber-core-closeup.jpg";

const DarkFiberWhat = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <img src={coreImg} alt="Fiber optic core close-up" className="rounded-2xl shadow-card w-full object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Apa Itu <span className="text-primary">Dark Fiber?</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Dark Fiber adalah layanan penyewaan core fiber optik tanpa perangkat aktif.
            Pelanggan memiliki kontrol penuh untuk mengoperasikan dan mengatur perangkat
            transmisi sendiri sesuai kebutuhan.
          </p>
          <div className="p-6 rounded-2xl bg-primary/5 border-l-4 border-primary">
            <p className="text-foreground font-medium">
              "Infrastruktur fisik kami, kontrol jaringan sepenuhnya milik Anda."
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Ideal untuk operator, ISP, data center, dan enterprise skala besar yang
            membutuhkan fleksibilitas maksimum.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default DarkFiberWhat;
