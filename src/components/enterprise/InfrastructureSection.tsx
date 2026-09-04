import { useReveal } from "@/hooks/use-reveal";

const layers = [
  { title: "Internet / Upstream", desc: "Multiple international transit and peering partners." },
  { title: "Core Network", desc: "Redundant core routing in Jakarta with diverse paths." },
  { title: "Backbone", desc: "National transport across Sumatera, Jawa, Kalimantan and beyond." },
  { title: "POP", desc: "Regional points of presence close to your operations." },
  { title: "Enterprise Customer", desc: "Managed last-mile delivery to your premises." },
];

const InfrastructureSection = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy-elevated py-20 text-navy-foreground lg:py-28">
      <div className="absolute inset-0 network-grid opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Built for Reliability
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            A layered architecture with no single point of failure
          </h2>
        </div>

        <div className="reveal mt-14 grid gap-4 lg:grid-cols-5">
          {layers.map((l, i) => (
            <div key={l.title} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="font-display text-xs font-bold tracking-[0.18em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-white">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-muted">{l.desc}</p>
              {i < layers.length - 1 && (
                <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-gradient-to-r from-accent/70 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>

        <svg viewBox="0 0 1000 40" className="reveal mt-8 h-10 w-full" aria-hidden="true">
          <line
            x1="0" y1="20" x2="1000" y2="20"
            stroke="hsl(202 100% 50%)" strokeOpacity="0.35" strokeWidth="2"
            strokeDasharray="10 10" className="animate-dash-flow"
          />
        </svg>
        <p className="text-center text-xs uppercase tracking-[0.2em] text-navy-muted">
          Traffic flow — upstream to customer edge
        </p>
      </div>
    </section>
  );
};

export default InfrastructureSection;
