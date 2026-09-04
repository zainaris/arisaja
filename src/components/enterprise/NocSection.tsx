import { Activity, ShieldCheck, Radio } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

/**
 * Demo dashboard mockup. Data below is illustrative only and is not a live feed.
 * Replace `demoLinks` / `demoMetrics` with a real Zabbix, Prometheus or Grafana
 * source when the monitoring API is available.
 */
const demoMetrics = [
  { label: "Core Latency", value: "— ms", icon: Activity },
  { label: "Packet Loss", value: "— %", icon: Radio },
  { label: "Active Alerts", value: "—", icon: ShieldCheck },
];

const demoLinks = [
  { name: "Jakarta Core ↔ Singapore", util: 62 },
  { name: "Jakarta Core ↔ Surabaya", util: 48 },
  { name: "Jakarta Core ↔ Palembang", util: 35 },
  { name: "Jakarta Core ↔ Balikpapan", util: 27 },
];

const NocSection = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="reveal">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Network Operation Center
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Always watching your network
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Our Network Operation Center monitors your connectivity and infrastructure 24/7 —
            proactive detection, escalation and resolution before it reaches your users.
          </p>
          <dl className="mt-8 grid gap-5 sm:grid-cols-3">
            {demoMetrics.map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-xl border border-border bg-card p-4">
                <Icon size={18} className="text-primary" strokeWidth={1.6} />
                <dd className="mt-3 font-display text-xl font-bold text-foreground">{value}</dd>
                <dt className="text-xs text-muted-foreground">{label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal overflow-hidden rounded-2xl border border-border bg-navy shadow-card">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-navy-muted">
              <span className="h-2 w-2 rounded-full bg-accent animate-node-pulse" />
              NOC Dashboard
            </div>
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
              Demo view
            </span>
          </div>

          <div className="space-y-5 p-5 sm:p-6">
            {demoLinks.map((l) => (
              <div key={l.name}>
                <div className="flex items-center justify-between text-xs text-navy-muted">
                  <span className="text-white/85">{l.name}</span>
                  <span>{l.util}% util</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    style={{ width: `${l.util}%` }}
                  />
                </div>
              </div>
            ))}

            <p className="border-t border-white/10 pt-4 text-[11px] leading-relaxed text-navy-muted">
              Illustrative interface. Live metrics will be sourced from our monitoring stack
              (Zabbix / Prometheus / Grafana) once the integration is enabled.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NocSection;
