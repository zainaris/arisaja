import { Zap, Cable, Headphones, Tv } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    icon: Zap,
    titleKey: "why.card1.title",
    descKey: "why.card1.desc",
  },
  {
    icon: Cable,
    titleKey: "why.card2.title",
    descKey: "why.card2.desc",
  },
  {
    icon: Headphones,
    titleKey: "why.card3.title",
    descKey: "why.card3.desc",
  },
  {
    icon: Tv,
    titleKey: "why.card4.title",
    descKey: "why.card4.desc",
  },
];

const WhyChooseUs = () => {
  const { t } = useLanguage();
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-secondary/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Artamedianet
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t("why.heading1")}{" "}
            <span className="relative inline-block text-primary">
              {t("why.heading2")}
              <span className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-primary/40 animate-[width-in_0.8s_ease-out_0.5s_forwards] origin-left scale-x-0" />
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            {t("why.subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, titleKey, descKey }, i) => (
            <div
              key={titleKey}
              className={`group bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 cursor-default ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: visible ? `${i * 100 + 150}ms` : "0ms" }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon size={22} className="text-primary" strokeWidth={1.75} />
              </div>

              {/* Content */}
              <h3 className="font-bold text-foreground text-[1.05rem] leading-snug mb-2">
                {t(titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(descKey)}
              </p>

              {/* Bottom accent line */}
              <div className="mt-6 h-[2px] w-8 rounded-full bg-primary/30 group-hover:w-full group-hover:bg-primary/60 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
