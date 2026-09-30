import { useState } from "react";
import heroVideo from "@/assets/artamedia-hero-background.mp4";
import heroVideoWebm from "@/assets/artamedia-hero-background.webm";
import heroPoster from "@/assets/artamedia-hero-poster.jpg";

const HeroSection = () => {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-foreground aspect-[4/3] sm:aspect-[16/9] lg:aspect-[12/5] max-h-[850px]"
    >
      <video
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Jaringan telekomunikasi Artamedia"
        onCanPlay={() => setVideoReady(true)}
      >
        <source src={heroVideoWebm} type="video/webm" />
        <source src={heroVideo} type="video/mp4" />
      </video>

      {!videoReady && (
        <img
          src={heroPoster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.50) 35%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0) 100%)",
        }}
      />

      <div className="absolute inset-0 z-20 flex items-center pb-16 sm:pb-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
          <div className="max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl pt-10 sm:pt-8 md:pt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.05] drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]">
              Trusted Network.
              <br />
              Trusted Business.
            </h1>
            <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] max-w-xl">
              Delivering high-performance internet, enterprise connectivity, cloud networking, and digital infrastructure for businesses across Indonesia.
            </p>
            <div className="mt-6 sm:mt-7 md:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg px-5 sm:px-7 py-3 sm:py-3.5 text-sm md:text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-black/25 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5 backdrop-blur-sm"
              >
                Explore Services
              </a>
              <a
                href="https://wa.me/6281517667777"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-5 sm:px-7 py-3 sm:py-3.5 text-sm md:text-base font-semibold border-2 border-white/70 bg-white/10 text-white hover:bg-white/20 hover:border-white transition-all duration-200 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5 backdrop-blur-md"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;