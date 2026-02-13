import dedicatedFiberWork from "@/assets/dedicated-fiber-work.jpg";

const DedicatedWhat = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <img
            src={dedicatedFiberWork}
            alt="Fiber optic technician working"
            className="rounded-2xl shadow-card w-full object-cover aspect-[4/3]"
          />
          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-6 py-3 shadow-lg font-bold text-lg">
            1:1 Bandwidth
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Apa Itu <span className="text-primary">Dedicated Internet?</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Dedicated Internet adalah layanan koneksi internet eksklusif dengan bandwidth 1:1
            tanpa sharing dengan pelanggan lain. Memberikan performa maksimal, stabilitas tinggi,
            dan latency rendah untuk kebutuhan bisnis profesional.
          </p>
          <div className="p-6 rounded-2xl bg-primary/5 border-l-4 border-primary">
            <p className="text-foreground font-medium">
              "Berbeda dengan broadband, Dedicated Internet memberikan bandwidth murni tanpa kontensi."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DedicatedWhat;
