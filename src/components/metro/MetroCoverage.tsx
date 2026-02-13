import coverageSea from "@/assets/metro-coverage-sea.jpg";

const MetroCoverage = () => (
  <section className="py-20 lg:py-28 bg-dark-green">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
          Jangkauan <span className="text-gradient-green">Jaringan Kami</span>
        </h2>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Layanan Metro-E kami tersedia di seluruh Indonesia dan mendukung konektivitas hingga Asia Tenggara.
        </p>
      </div>

      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
        <img
          src={coverageSea}
          alt="Southeast Asia network coverage map"
          className="w-full object-cover"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[hsl(145,60%,10%)] to-transparent h-24" />
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-foreground/60 text-sm font-medium">
          Nationwide & Southeast Asia Connectivity
        </p>
      </div>

      <div className="text-center">
        <a
          href="#coverage"
          className="inline-block px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg"
        >
          Check Coverage
        </a>
      </div>
    </div>
  </section>
);

export default MetroCoverage;
