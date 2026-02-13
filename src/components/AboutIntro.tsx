import dataCenter from "@/assets/data-center.jpg";

const AboutIntro = () => (
  <section id="about" className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <img
            src={dataCenter}
            alt="Network backbone infrastructure"
            className="rounded-2xl shadow-card w-full object-cover"
          />
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Infrastruktur Fiber yang <span className="text-primary">Andal</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Kami adalah penyedia layanan internet berbasis fiber optik yang menghadirkan koneksi cepat, stabil, dan aman
            untuk kebutuhan residensial maupun enterprise. Dengan jaringan backbone modern dan sistem monitoring 24 jam,
            kami memastikan kualitas layanan terbaik untuk pelanggan.
          </p>
          <a
            href="#about"
            className="inline-block px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-dark transition-all duration-300"
          >
            About Us
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutIntro;
