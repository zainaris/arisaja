const FinalCTA = () => (
  <section id="order" className="py-20 lg:py-28 bg-green-gradient-cta">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
        Siap Menggunakan Internet yang Lebih Stabil?
      </h2>
      <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
        Hubungi tim kami hari ini dan dapatkan solusi terbaik untuk kebutuhan Anda.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#order"
          className="px-8 py-4 rounded-2xl bg-primary-foreground text-primary font-bold text-lg hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg"
        >
          Order Now
        </a>
        <a
          href="#contact"
          className="px-8 py-4 rounded-2xl border-2 border-primary-foreground/40 text-primary-foreground font-bold text-lg hover:bg-primary-foreground/10 transition-all duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  </section>
);

export default FinalCTA;
