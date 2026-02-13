import coverageMap from "@/assets/coverage-map.jpg";

const CoverageSection = () => (
  <section id="coverage" className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
          Area <span className="text-primary">Coverage</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Kami terus memperluas jaringan fiber untuk menjangkau lebih banyak wilayah.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <img
          src={coverageMap}
          alt="Coverage map Indonesia"
          className="rounded-2xl shadow-card w-full"
        />
        <div className="text-center mt-8">
          <a
            href="#coverage"
            className="inline-block px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-dark transition-all duration-300"
          >
            Cek Coverage
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CoverageSection;
