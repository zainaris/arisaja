import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const highlights = [
  "1:1 Dedicated Bandwidth",
  "Enterprise SLA",
  "24/7 NOC",
  "Static Public IP",
  "BGP Ready",
  "Redundant Connectivity",
];

const FeaturedSolution = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy py-20 text-navy-foreground lg:py-28">
      <div className="absolute inset-0 network-grid opacity-50" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="reveal">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Featured Solution
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Dedicated Internet</h2>
          <p className="mt-5 max-w-xl text-navy-muted">
            Symmetric, uncontended bandwidth delivered over our own fiber infrastructure —
            engineered for organisations where connectivity is a production dependency, not a
            convenience.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2.5 text-sm text-white/90">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check size={12} strokeWidth={3} />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <Link
            to="/dedicated"
            className="group mt-10 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            View Dedicated Internet
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Topology visual */}
        <div className="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <svg viewBox="0 0 400 260" className="h-auto w-full" role="img" aria-label="Diagram koneksi dedicated internet redundan">
            <defs>
              <linearGradient id="fsLine" x1="0" x2="1">
                <stop offset="0%" stopColor="hsl(219 100% 52%)" />
                <stop offset="100%" stopColor="hsl(202 100% 50%)" />
              </linearGradient>
            </defs>

            <g stroke="url(#fsLine)" strokeWidth="1.5" fill="none" strokeDasharray="6 6" className="animate-dash-flow">
              <path d="M70 130 C 140 60, 200 60, 260 90" />
              <path d="M70 130 C 140 200, 200 200, 260 170" />
              <path d="M260 90 L 330 130" />
              <path d="M260 170 L 330 130" />
            </g>

            {[
              { x: 70, y: 130, label: "Customer", r: 9 },
              { x: 260, y: 90, label: "POP A", r: 7 },
              { x: 260, y: 170, label: "POP B", r: 7 },
              { x: 330, y: 130, label: "Core", r: 10 },
            ].map((n, i) => (
              <g key={n.label}>
                <circle cx={n.x} cy={n.y} r={n.r + 8} fill="hsl(202 100% 50% / 0.12)" className="animate-node-pulse" style={{ animationDelay: `${i * 0.4}s` }} />
                <circle cx={n.x} cy={n.y} r={n.r} fill="hsl(202 100% 55%)" />
                <text x={n.x} y={n.y + n.r + 20} textAnchor="middle" fontSize="11" fill="hsl(215 20% 70%)">
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
          <p className="mt-4 text-center text-xs text-navy-muted">
            Dual-path delivery with automatic failover between points of presence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolution;
