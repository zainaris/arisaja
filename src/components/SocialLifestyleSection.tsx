import { useEffect, useRef, useState } from "react";
import { ArrowRight, Heart, MessageCircle, Video, Bell, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import socialImage from "@/assets/social-lifestyle.jpg";

const floatingBadges = [
  { icon: Heart,         label: "1.2k Likes",     color: "text-rose-500",   bg: "bg-rose-50",   delay: "0s",    top: "12%",  right: "8%"  },
  { icon: MessageCircle, label: "42 Pesan",        color: "text-primary",    bg: "bg-primary/10",delay: "0.4s",  top: "30%",  right: "4%"  },
  { icon: Video,         label: "Video Call",      color: "text-blue-500",   bg: "bg-blue-50",   delay: "0.8s",  top: "52%",  right: "10%" },
  { icon: Bell,          label: "3 Notifikasi",    color: "text-amber-500",  bg: "bg-amber-50",  delay: "1.2s",  top: "70%",  right: "5%"  },
  { icon: Share2,        label: "Share",           color: "text-violet-500", bg: "bg-violet-50", delay: "1.6s",  top: "20%",  right: "28%" },
];

const SocialLifestyleSection = () => {
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
    <section ref={sectionRef} className="w-full bg-background overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row min-h-[460px] lg:min-h-[540px]">

        {/* LEFT — Text */}
        <div
          className={`w-full lg:w-1/2 flex items-center px-6 sm:px-12 lg:px-20 py-14 lg:py-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="max-w-lg">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              <Share2 size={11} /> Koneksi Sosial
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-foreground leading-tight mb-4">
              Konektivitas{" "}
              <span className="text-gradient-green">Tanpa Batas</span>
            </h2>

            {/* Subheadline */}
            <p className="text-foreground/80 text-base sm:text-lg font-medium leading-relaxed mb-3">
              Akses ke semua jejaring sosial lebih cepat dan stabil bersama Artamedia.
            </p>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Nikmati internet fiber optic berkecepatan tinggi untuk browsing, streaming, video call, dan media sosial tanpa buffering. Tetap terhubung kapan saja dan di mana saja.
            </p>

            {/* Social icons strip */}
            <div className="flex items-center gap-3 mb-8">
              {[Heart, MessageCircle, Video, Bell, Share2].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200 cursor-default"
                  style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
                >
                  <Icon size={16} className="text-muted-foreground hover:text-primary" />
                </div>
              ))}
              <span className="text-xs text-muted-foreground ml-1">& lebih banyak lagi</span>
            </div>

            {/* CTA */}
            <Link
              to="/broadband"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5 hover:gap-3 transition-all duration-300"
            >
              Lihat Paket Internet
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* RIGHT — Image with floating badges */}
        <div
          className={`relative w-full lg:w-1/2 min-h-[300px] lg:min-h-full overflow-hidden transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <img
            src={socialImage}
            alt="Perempuan menikmati internet cepat Artamedianet"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Gradient fade to left (into white text area) — desktop only */}
          <div
            className="absolute inset-0 hidden lg:block pointer-events-none"
            style={{ background: "linear-gradient(to right, hsl(0 0% 100%) 0%, transparent 30%)" }}
          />
          {/* Bottom fade — mobile only */}
          <div
            className="absolute inset-0 lg:hidden pointer-events-none"
            style={{ background: "linear-gradient(to top, hsl(0 0% 100%) 0%, transparent 30%)" }}
          />

          {/* Floating social badges — desktop only */}
          {floatingBadges.map(({ icon: Icon, label, color, bg, delay, top, right }) => (
            <div
              key={label}
              className={`absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-full ${bg} border border-white/60 shadow-md backdrop-blur-sm text-xs font-medium ${color} transition-all duration-700`}
              style={{
                top,
                right,
                animationDelay: delay,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0) scale(1)" : "translateY(8px) scale(0.9)",
                transitionDelay: visible ? delay : "0s",
              }}
            >
              <Icon size={13} />
              {label}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialLifestyleSection;
