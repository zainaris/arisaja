import logo from "@/assets/artamedia-logo.png";
import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [
      { name: "About Us", to: "/about" },
      { name: "Network Coverage", to: "/#coverage" },
      { name: "Contact", to: "/#contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Dedicated Internet", to: "/dedicated" },
      { name: "Business Internet", to: "/broadband" },
      { name: "Metro Ethernet", to: "/metro-e" },
      { name: "DWDM", to: "/dwdm" },
      { name: "Dark Fiber", to: "/dark-fiber" },
      { name: "Backup on Demand", to: "/backup-on-demand" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Insights & Blog", to: "/blog" },
      { name: "Privacy Policy", to: "/privacy-policy" },
      { name: "Terms & Conditions", to: "/terms" },
      { name: "Refund Policy", to: "/refund-policy" },
      { name: "Delivery Policy", to: "/delivery-policy" },
    ],
  },
];

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-white/10 bg-navy pb-8 pt-16 text-navy-foreground">
    <div className="absolute inset-0 network-grid opacity-30" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Artamedia" className="h-10 w-10 object-contain" />
            <span className="font-display text-sm font-bold leading-tight text-white">
              Artamedia Citra
              <br />
              Telematika Indonesia
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-navy-muted">
            Enterprise connectivity and network infrastructure built for businesses that cannot
            afford downtime.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              {col.title}
            </h4>
            <ul className="mt-5 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.name}>
                  {l.to.startsWith("/#") ? (
                    <a href={l.to} className="text-sm text-navy-muted transition-colors hover:text-white">
                      {l.name}
                    </a>
                  ) : (
                    <Link to={l.to} className="text-sm text-navy-muted transition-colors hover:text-white">
                      {l.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Contact</h4>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href="mailto:sales@artamedianet.co.id"
                className="flex items-center gap-2 text-sm text-navy-muted transition-colors hover:text-white"
              >
                <Mail size={14} /> sales@artamedianet.co.id
              </a>
            </li>
            <li>
              <a
                href="mailto:support@artamedianet.co.id"
                className="flex items-center gap-2 text-sm text-navy-muted transition-colors hover:text-white"
              >
                <Mail size={14} /> support@artamedianet.co.id
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/6281517667777"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-navy-muted transition-colors hover:text-white"
              >
                <MessageCircle size={14} /> WhatsApp Support
              </a>
            </li>
          </ul>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-sm font-semibold text-white">24/7 NOC Support</p>
            <p className="mt-1 text-xs text-navy-muted">
              Monitoring dan eskalasi gangguan sepanjang waktu.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-white/10 pt-7">
        <p className="text-center text-xs text-navy-muted">
          © 2026 PT Artamedia Citra Telematika Indonesia. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
