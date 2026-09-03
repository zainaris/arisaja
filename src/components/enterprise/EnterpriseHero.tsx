import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import NetworkCanvas from "./NetworkCanvas";

const WA_LINK =
  "https://wa.me/6281517667777?text=Halo%20Artamedia%2C%20saya%20ingin%20berbicara%20dengan%20network%20expert";

const badges = [
  "99.9% Availability",
  "24/7 Network Operation Center",
  "Enterprise SLA",
];

const EnterpriseHero = () => (
  <section
    id="home"
    className="relative isolate overflow-hidden bg-navy text-navy-foreground"
  >
    {/* structural grid + particles */}
    <div className="absolute inset-0 network-grid radial-fade" aria-hidden="true" />
    <NetworkCanvas className="absolute inset-0 h-full w-full opacity-70" />
    <div
      className="absolute -right-40 top-0 h-[42rem] w-[42rem] rounded-full blur-3xl"
      style={{ background: "radial-gradient(circle, hsl(219 100% 52% / 0.28), transparent 62%)" }}
      aria-hidden="true"
    />
    <div
      className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy"
      aria-hidden="true"
    />

    <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-28 lg:pt-40">
      <div className="lg:col-span-7">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-muted backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-node-pulse" />
          Network Infrastructure Provider
        </span>

        <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[4.25rem]">
          Connected by infrastructure.
          <span className="block text-gradient-blue">Powered by Artamedia.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-muted sm:text-lg">
          Enterprise connectivity and network infrastructure built for businesses that
          cannot afford downtime.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#solutions"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-dark sm:text-base"
          >
            Explore Solutions
            <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-200 hover:border-white/60 hover:bg-white/10 sm:text-base"
          >
            Talk to Network Expert
            <ArrowUpRight size={17} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-7">
          {badges.map((b) => (
            <li key={b} className="text-xs font-medium uppercase tracking-[0.14em] text-navy-muted">
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Backbone path diagram */}
      <div className="lg:col-span-5">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Network Path
          </p>
          <ol className="mt-6 space-y-0">
            {[
              { label: "Singapore", note: "International Upstream" },
              { label: "Jakarta Core Network", note: "Core Routing & Peering" },
              { label: "Indonesia Backbone", note: "National Transport" },
              { label: "Regional POP", note: "Distribution Layer" },
              { label: "Your Business", note: "Last Mile Delivery" },
            ].map((n, i, arr) => (
              <li key={n.label} className="relative flex gap-4 pb-6 last:pb-0">
                {i < arr.length - 1 && (
                  <span className="absolute left-[7px] top-4 h-full w-px bg-gradient-to-b from-accent/60 to-accent/5" />
                )}
                <span className="relative mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border border-accent/60 bg-navy">
                  <span className="absolute inset-1 rounded-full bg-accent animate-node-pulse" style={{ animationDelay: `${i * 0.35}s` }} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-white">{n.label}</span>
                  <span className="block text-xs text-navy-muted">{n.note}</span>
                </span>
              </li>
            ))}
          </ol>
          <Link
            to="/dedicated"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
          >
            See dedicated connectivity <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default EnterpriseHero;
