const DedicatedPricing = () => (
  <section id="pricing" className="py-20 lg:py-28 bg-background">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
        Solusi Fleksibel <span className="text-primary">Sesuai Kebutuhan Bisnis Anda</span>
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
        Harga Dedicated Internet disesuaikan dengan kebutuhan bandwidth, lokasi, dan SLA yang dipilih.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a
          href="#order"
          className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg"
        >
          Minta Penawaran
        </a>
        <a
          href="#contact"
          className="px-8 py-4 rounded-2xl border-2 border-primary text-primary font-semibold text-lg hover:bg-primary/10 transition-all duration-300"
        >
          Hubungi Sales
        </a>
      </div>

      <p className="text-sm text-muted-foreground">
        Hubungi tim kami untuk konsultasi dan survey lokasi gratis.
      </p>
    </div>
  </section>
);

export default DedicatedPricing;
