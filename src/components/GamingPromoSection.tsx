import { useEffect, useRef, useState } from "react";
import { ArrowRight, Wifi, Zap, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import gamingImage from "@/assets/gaming-promo.jpg";

const features = [
  { icon: Zap, label: "Latency Rendah" },
  { icon: Wifi, label: "Koneksi Stabil" },
  { icon: Monitor, label: "Streaming 4K" },
];

const GamingPromoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-background py-0 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row min-h-[440px] lg:min-h-[520px]">
        {/* LEFT — Image */}
        <div
          className={`relative w-full lg:w-1/2 min-h-[280px] lg:min-h-full overflow-hidden transition-all duration-1000 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <img
            src={gamingImage}
            alt="Gamer menikmati internet cepat Artamedianet"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Gradient fade into right side */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background hidden lg:block" style={{ background: "linear-gradient(to right, transparent 50%, hsl(0 0% 100%) 100%)" }} />
          {/* Bottom fade for mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background lg:hidden" style={{ background: "linear-gradient(to bottom, transparent 60%, hsl(0 0% 100%) 100%)" }} />
        </div>

        {/* RIGHT — Content */}
        <div
          className={`w-full lg:w-1/2 flex items-center px-6 sm:px-10 lg:px-16 py-12 lg:py-16 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="max-w-lg">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
              <Zap size={11} /> Internet Fiber Optic
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-foreground leading-tight mb-4">
              Solusi Internet Cepat untuk{" "}
              <span className="text-gradient-green">Streaming & Gaming</span>
            </h2>

            {/* Subheadline */}
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-3">
              Nikmati pengalaman tanpa lag, tanpa buffering, dan koneksi stabil setiap saat bersama Artamedianet.
            </p>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Kami menghadirkan jaringan fiber optic berkecepatan tinggi dengan latency rendah, cocok untuk gamer, streamer, dan pecinta hiburan digital.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/60 text-foreground text-sm font-medium"
                >
                  <Icon size={14} className="text-primary" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/broadband"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5 hover:gap-3 transition-all duration-300"
            >
              Lihat Paket Sekarang
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingPromoSection;
