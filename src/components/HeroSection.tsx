import { useState } from "react";
import heroVideo from "@/assets/artamedia-hero-background.mp4";
import heroVideoWebm from "@/assets/artamedia-hero-background.webm";
import heroPoster from "@/assets/artamedia-hero-poster.jpg";

const HeroSection = () => {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-foreground aspect-video"
    >
      <video
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
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
          className="absolute inset-0 h-full w-full object-contain"
        />
      )}

      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-foreground/90 via-foreground/50 to-transparent" />

      <div className="absolute inset-0 z-20 flex items-start pt-[4.5rem] sm:items-center sm:pt-16 lg:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
          <div className="max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl">
            <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground leading-[1.05] [text-shadow:0_3px_5px_hsl(var(--foreground)),0_8px_24px_hsl(var(--foreground))]">
              Trusted Network.
              <br />
              Trusted Business.
            </h1>
            <p className="mt-1.5 sm:mt-5 md:mt-6 max-w-[94%] text-[10px] sm:max-w-xl sm:text-base md:text-lg lg:text-xl text-primary-foreground leading-relaxed [text-shadow:0_2px_4px_hsl(var(--foreground)),0_5px_16px_hsl(var(--foreground))]">
              Delivering high-performance internet, enterprise connectivity, cloud networking, and digital infrastructure for businesses across Indonesia.
            </p>
            <div className="mt-2.5 sm:mt-7 md:mt-10 flex items-center gap-2 sm:gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg px-4 sm:px-7 py-2 sm:py-3.5 text-xs sm:text-sm md:text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-foreground/25 hover:shadow-xl hover:shadow-foreground/30 hover:-translate-y-0.5 backdrop-blur-sm"
              >
                Explore Services
              </a>
              <a
                href="https://wa.me/6281517667777"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-4 sm:px-7 py-2 sm:py-3.5 text-xs sm:text-sm md:text-base font-semibold border-2 border-primary-foreground/70 bg-background/10 text-primary-foreground hover:bg-background/20 hover:border-primary-foreground transition-all duration-200 shadow-lg shadow-foreground/20 hover:shadow-xl hover:shadow-foreground/30 hover:-translate-y-0.5 backdrop-blur-md"
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