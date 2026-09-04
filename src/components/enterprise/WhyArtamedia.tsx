import { useReveal } from "@/hooks/use-reveal";

const reasons = [
  {
    title: "Network Reliability",
    desc: "Redundant paths, diverse routing and carrier-grade equipment across the backbone.",
  },
  {
    title: "24/7 NOC Monitoring",
    desc: "Continuous monitoring with defined escalation paths and incident response.",
  },
  {
    title: "Enterprise SLA",
    desc: "Contractual availability, latency and restoration commitments per service.",
  },
  {
    title: "Nationwide Connectivity",
    desc: "Coverage across Sumatera, Jawa, Kalimantan, Sulawesi, Bali and Singapore.",
  },
  {
    title: "Experienced Network Engineers",
    desc: "In-house engineering team designing, deploying and operating the network.",
  },
  {
    title: "Scalable Infrastructure",
    desc: "Capacity upgrades without re-architecting your connectivity.",
  },
];

const WhyArtamedia = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="reveal lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Why Artamedia
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Infrastructure discipline, not just bandwidth
            </h2>
            <p className="mt-5 text-muted-foreground">
              We operate the network we sell. That means design decisions, monitoring and
              restoration all sit with the same team accountable to your business.
            </p>
          </div>

          <dl className="lg:col-span-8">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="reveal group grid gap-2 border-t border-border py-7 last:border-b sm:grid-cols-12 sm:gap-8"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <dt className="sm:col-span-5">
                  <span className="mr-3 font-display text-xs font-bold text-primary/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg font-bold text-foreground">{r.title}</span>
                </dt>
                <dd className="text-sm leading-relaxed text-muted-foreground sm:col-span-7">
                  {r.desc}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default WhyArtamedia;
