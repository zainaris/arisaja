import { Link } from "react-router-dom";
import { Wifi, Server, Network, Layers, Cable, Database } from "lucide-react";

const services = [
  {
    title: "Broadband",
    icon: Wifi,
    href: "/broadband",
    iconBg: "from-green-400 to-green-600",
  },
  {
    title: "Dedicated",
    icon: Server,
    href: "/dedicated",
    iconBg: "from-green-400 to-green-600",
  },
  {
    title: "Metro E",
    icon: Network,
    href: "/metro-e",
    iconBg: "from-green-400 to-green-600",
  },
  {
    title: "DWDM",
    icon: Layers,
    href: "/dwdm",
    iconBg: "from-green-400 to-green-600",
  },
  {
    title: "Dark Fiber",
    icon: Cable,
    href: "/dark-fiber",
    iconBg: "from-green-400 to-green-600",
  },
  {
    title: "Backup On Demand",
    icon: Database,
    href: "/backup-on-demand",
    iconBg: "from-green-400 to-green-600",
  },
];

const ServiceCards = () => {
  return (
    <section className="bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map(({ title, icon: Icon, href }) => (
            <Link
              key={title}
              to={href}
              className="group flex flex-col items-center gap-3 p-5 bg-card border border-border rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Icon size={32} className="text-primary" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <span className="text-sm font-bold text-foreground text-center leading-tight">
                {title}
              </span>

              {/* Lihat Paket */}
              <span className="text-xs text-primary font-semibold group-hover:underline">
                Lihat Paket →
              </span>

              {/* Bottom button */}
              <div className="w-full mt-1 py-2 px-3 rounded-xl bg-green-gradient-cta text-primary-foreground text-xs font-bold text-center truncate group-hover:opacity-90 transition-opacity duration-200">
                {title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
