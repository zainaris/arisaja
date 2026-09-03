import { useEffect, useRef, useState } from "react";

/**
 * NOTE: values below are placeholders and easy to replace with actual data.
 * `value: null` renders the placeholder string instead of a counter.
 */
type Stat = {
  value: number | null;
  suffix: string;
  decimals?: number;
  placeholder?: string;
  label: string;
  note: string;
};

const stats: Stat[] = [
  { value: 99.9, suffix: "%", decimals: 1, label: "Network Availability", note: "Target service availability" },
  { value: 24, suffix: "/7", label: "Network Operation Center", note: "Monitoring & incident response" },
  { value: null, placeholder: "XX+", suffix: "", label: "Network POP", note: "Points of presence" },
  { value: null, placeholder: "XX+", suffix: "", label: "Cities Connected", note: "Coverage across Indonesia" },
  { value: null, placeholder: "XX+", suffix: "", label: "Enterprise Customers", note: "Business & institution" },
  { value: null, placeholder: "Multi-Gbps", suffix: "", label: "Network Capacity", note: "Aggregated backbone capacity" },
];

const Counter = ({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1600;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(target * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const NetworkNumbers = () => (
  <section className="border-y border-border bg-background py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          Our Network by the Numbers
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Infrastructure measured in uptime, not promises
        </h2>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="group bg-card p-7 transition-colors duration-300 hover:bg-secondary lg:p-8"
          >
            <div className="font-display text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl">
              {s.value === null ? (
                <span className="text-muted-foreground">{s.placeholder}</span>
              ) : (
                <Counter target={s.value} suffix={s.suffix} decimals={s.decimals} />
              )}
            </div>
            <p className="mt-3 text-sm font-semibold text-foreground">{s.label}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
            <div className="mt-5 h-px w-10 bg-primary transition-all duration-300 group-hover:w-20" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NetworkNumbers;
