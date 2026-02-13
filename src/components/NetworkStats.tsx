import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Tahun Pengalaman" },
  { value: 5000, suffix: "+", label: "Pelanggan Aktif" },
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 24, suffix: "/7", label: "Monitoring" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current * 10) / 10);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-bold text-primary-foreground">
        {Number.isInteger(target) ? Math.floor(count).toLocaleString() : count.toFixed(1)}
        {suffix}
      </div>
    </div>
  );
};

const NetworkStats = () => (
  <section className="py-20 lg:py-24 bg-dark-green">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center space-y-3">
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="text-primary-foreground/70 font-medium text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NetworkStats;
