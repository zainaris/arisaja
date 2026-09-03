import { useState } from "react";
import { ArrowRight } from "lucide-react";

/**
 * Interactive network node visualisation.
 * Node list mirrors the coverage areas already published on the site.
 */
type Node = {
  id: string;
  label: string;
  region: string;
  type: "Core" | "POP" | "International";
  x: number; // % of viewport box
  y: number;
};

const nodes: Node[] = [
  { id: "sg", label: "Singapore", region: "International Gateway", type: "International", x: 30, y: 18 },
  { id: "mdn", label: "Medan", region: "Sumatera", type: "POP", x: 16, y: 30 },
  { id: "pkb", label: "Pekanbaru", region: "Sumatera", type: "POP", x: 24, y: 40 },
  { id: "plg", label: "Palembang", region: "Sumatera", type: "POP", x: 34, y: 55 },
  { id: "pgk", label: "Pangkalpinang", region: "Bangka Belitung", type: "POP", x: 44, y: 50 },
  { id: "jkt", label: "Jakarta", region: "Core Network", type: "Core", x: 45, y: 68 },
  { id: "bdg", label: "Bandung", region: "Jawa Barat", type: "POP", x: 52, y: 73 },
  { id: "sby", label: "Surabaya", region: "Jawa Timur", type: "POP", x: 63, y: 76 },
  { id: "bpn", label: "Balikpapan", region: "Kalimantan", type: "POP", x: 67, y: 47 },
  { id: "dps", label: "Denpasar", region: "Bali & Nusa Tenggara", type: "POP", x: 71, y: 82 },
  { id: "mks", label: "Makassar", region: "Sulawesi", type: "POP", x: 80, y: 66 },
];

const links: [string, string][] = [
  ["sg", "mdn"],
  ["sg", "jkt"],
  ["mdn", "pkb"],
  ["pkb", "plg"],
  ["plg", "jkt"],
  ["pgk", "jkt"],
  ["jkt", "bdg"],
  ["jkt", "sby"],
  ["jkt", "bpn"],
  ["sby", "dps"],
  ["sby", "mks"],
];

const byId = (id: string) => nodes.find((n) => n.id === id)!;

const NetworkMap = () => {
  const [active, setActive] = useState<Node | null>(null);

  return (
    <section id="network" className="relative overflow-hidden bg-navy-elevated py-20 lg:py-28">
      <div className="absolute inset-0 network-grid opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Our Network</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-foreground sm:text-4xl">
            One backbone, connected end to end
          </h2>
          <p className="mt-4 text-navy-muted">
            Traffic flows from international upstream in Singapore into our Jakarta core network,
            across the national backbone and out to regional points of presence.
          </p>
        </div>

        <div className="relative mt-12 aspect-[16/10] w-full rounded-2xl border border-white/10 bg-navy/60 sm:aspect-[16/8]">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
            {links.map(([a, b]) => {
              const p = byId(a);
              const q = byId(b);
              return (
                <line
                  key={`${a}-${b}`}
                  x1={p.x}
                  y1={p.y}
                  x2={q.x}
                  y2={q.y}
                  stroke="hsl(202 100% 50%)"
                  strokeOpacity={0.35}
                  strokeWidth={0.25}
                  strokeDasharray="2 2"
                  className="animate-dash-flow"
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>

          {nodes.map((n) => (
            <button
              key={n.id}
              type="button"
              onMouseEnter={() => setActive(n)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(n)}
              onBlur={() => setActive(null)}
              aria-label={`${n.label} — ${n.region}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 outline-none"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <span
                className={`block rounded-full ring-2 transition-all duration-200 ${
                  n.type === "Core"
                    ? "h-4 w-4 bg-accent ring-accent/30"
                    : n.type === "International"
                    ? "h-3 w-3 bg-primary ring-primary/30"
                    : "h-2.5 w-2.5 bg-white/80 ring-white/15"
                } ${active?.id === n.id ? "scale-150 ring-8 ring-accent/25" : ""}`}
              />
              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium uppercase tracking-wider text-navy-muted">
                {n.label}
              </span>
            </button>
          ))}

          {active && (
            <div
              className="pointer-events-none absolute z-10 w-52 -translate-x-1/2 rounded-xl border border-accent/30 bg-navy/95 p-3 shadow-xl backdrop-blur"
              style={{
                left: `${Math.min(Math.max(active.x, 16), 84)}%`,
                top: `calc(${active.y}% + 34px)`,
              }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                {active.type === "Core" ? "Core Network Node" : active.type === "International" ? "International Gateway" : "POP / Network Node"}
              </p>
              <p className="mt-1.5 text-sm font-semibold text-white">{active.label}</p>
              <p className="text-xs text-navy-muted">{active.region}</p>
              <dl className="mt-2 space-y-0.5 text-[11px] text-navy-muted">
                <div className="flex justify-between"><dt>Status</dt><dd className="text-emerald-400">Operational</dd></div>
                <div className="flex justify-between"><dt>Connectivity</dt><dd className="text-white/80">Fiber / Redundant</dd></div>
              </dl>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6 text-xs text-navy-muted">
            <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-accent" /> Core network</span>
            <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-primary" /> International gateway</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-white/80" /> Regional POP</span>
          </div>
          <a href="#coverage" className="group inline-flex items-center gap-2 text-sm font-semibold text-accent">
            Explore Our Network
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NetworkMap;
