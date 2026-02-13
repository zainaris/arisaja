import metroFiberSplice from "@/assets/metro-fiber-splice.jpg";

const MetroWhat = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <img
            src={metroFiberSplice}
            alt="Fiber optic splicing for Metro-E"
            className="rounded-2xl shadow-card w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Apa Itu <span className="text-primary">Metro-E / Leased Line?</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Metro Ethernet (Metro-E) adalah layanan konektivitas point-to-point atau point-to-multipoint
            yang menghubungkan antar lokasi bisnis menggunakan jaringan fiber optik dedicated.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Leased Line memberikan jalur privat yang aman dan stabil untuk komunikasi data antar kantor,
            data center, maupun cabang perusahaan.
          </p>
          <div className="p-6 rounded-2xl bg-primary/5 border-l-4 border-primary">
            <p className="text-foreground font-medium">
              "Tidak melalui internet publik. Lebih aman, lebih stabil, dan lebih cepat."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MetroWhat;
