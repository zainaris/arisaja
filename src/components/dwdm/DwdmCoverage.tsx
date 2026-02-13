import coverageSea from "@/assets/metro-coverage-sea.jpg";

const DwdmCoverage = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Backbone <span className="text-primary">Nasional & Regional</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Jaringan DWDM kami mendukung backbone nasional dan interkoneksi regional Asia Tenggara
          untuk kebutuhan operator dan enterprise skala besar.
        </p>
      </div>

      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
        <img
          src={coverageSea}
          alt="DWDM backbone network coverage"
          className="w-full object-cover"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/80 to-transparent h-20" />
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-foreground/60 text-sm font-medium">
          Nationwide & Southeast Asia DWDM Connectivity
        </p>
      </div>

      <div className="text-center">
        <a
          href="#contact"
          className="inline-block px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg"
        >
          Check Network Availability
        </a>
      </div>
    </div>
  </section>
);

export default DwdmCoverage;
