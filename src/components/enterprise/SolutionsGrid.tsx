import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Server,
  Wifi,
  Network,
  Cable,
  Database,
  Share2,
  MonitorCheck,
  Globe,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const solutions = [
  {
    title: "Dedicated Internet",
    desc: "Dedicated bandwidth for mission-critical business connectivity.",
    icon: Server,
    href: "/dedicated",
    span: "lg:col-span-2",
  },
  {
    title: "Business Internet",
    desc: "Reliable fiber connectivity for business operations.",
    icon: Wifi,
    href: "/broadband",
  },
  {
    title: "Metro Ethernet",
    desc: "High-performance point-to-point and multipoint connectivity.",
    icon: Network,
    href: "/metro-e",
  },
  {
    title: "Dark Fiber",
    desc: "Dedicated fiber infrastructure for high-capacity requirements.",
    icon: Cable,
    href: "/dark-fiber",
  },
  {
    title: "Data Center Interconnection",
    desc: "Connect your infrastructure to strategic data centers.",
    icon: Database,
    href: "/dwdm",
    span: "lg:col-span-2",
  },
  {
    title: "Cross Connect",
    desc: "Direct connectivity between networks and infrastructure.",
    icon: Share2,
    href: "/backup-on-demand",
  },
  {
    title: "Managed Network",
    desc: "24/7 network monitoring and professional network management.",
    icon: MonitorCheck,
    href: "#contact",
  },
  {
    title: "IP Transit",
    desc: "Reliable internet backbone connectivity for network operators and enterprises.",
    icon: Globe,
    href: "#contact",
  },
];

const SolutionsGrid = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="solutions" className="bg-background py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Connectivity for Every Business
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Solutions engineered around your network requirements
          </h2>
          <p className="mt-4 text-muted-foreground">
            From single-site business internet to national backbone capacity — designed,
            delivered and operated by our own engineering team.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ title, desc, icon: Icon, href, span }, i) => {
            const inner = (
              <>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary text-primary transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </>
            );

            const classes = `reveal group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover ${span ?? ""}`;

            return href.startsWith("#") ? (
              <a key={title} href={href} className={classes} style={{ transitionDelay: `${i * 40}ms` }}>
                {inner}
              </a>
            ) : (
              <Link key={title} to={href} className={classes} style={{ transitionDelay: `${i * 40}ms` }}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;
