import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Globe, ArrowUpRight } from "lucide-react";
import logo from "@/assets/artamedia-logo.png";
import { useLanguage, Lang } from "@/contexts/LanguageContext";

const solutions = [
  { name: "Dedicated Internet", desc: "1:1 dedicated bandwidth", href: "/dedicated" },
  { name: "Business Internet", desc: "Fiber for business operations", href: "/broadband" },
  { name: "Metro Ethernet", desc: "Point-to-point connectivity", href: "/metro-e" },
  { name: "DWDM", desc: "High-capacity transport", href: "/dwdm" },
  { name: "Dark Fiber", desc: "Dedicated fiber infrastructure", href: "/dark-fiber" },
  { name: "Backup on Demand", desc: "Redundancy & failover", href: "/backup-on-demand" },
];

const langLabels: Record<Lang, string> = { id: "ID", en: "EN" };
const langOptions: Lang[] = ["id", "en"];

const WA_QUOTE =
  "https://wa.me/6281517667777?text=Halo%20Artamedia%2C%20saya%20ingin%20meminta%20penawaran%20layanan";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHashLink = (hash: string) => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + hash);
    }
  };

  const isTransparent = !scrolled && !mobileOpen;

  const cycleLang = () => {
    const idx = langOptions.indexOf(lang);
    setLang(langOptions[(idx + 1) % langOptions.length]);
  };

  const linkClass = `text-sm font-medium transition-colors ${
    isTransparent ? "text-white/80 hover:text-white" : "text-navy-foreground/80 hover:text-white"
  }`;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-white/10 bg-navy/85 shadow-lg backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <img src={logo} alt="Artamedia" className="h-9 w-9 object-contain" />
            <span className="font-display text-sm font-bold leading-tight text-white lg:text-[0.95rem]">
              Artamedia Citra
              <br className="hidden sm:block" /> Telematika Indonesia
            </span>
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            <div className="group relative">
              <button className={`flex items-center gap-1.5 ${linkClass}`}>
                Solutions <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-popover p-3 shadow-2xl">
                  {solutions.map((s) => (
                    <Link
                      key={s.name}
                      to={s.href}
                      className="group/item rounded-xl px-4 py-3 transition-colors hover:bg-secondary"
                    >
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-popover-foreground">
                        {s.name}
                        <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover/item:opacity-100" />
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">{s.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <button onClick={() => handleHashLink("#network")} className={linkClass}>Network</button>
            <Link to="/about" className={linkClass}>Company</Link>
            <Link to="/blog" className={linkClass}>Resources</Link>
            <button onClick={() => handleHashLink("#contact")} className={linkClass}>Contact</button>

            <button
              onClick={cycleLang}
              className="flex items-center gap-1.5 rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10"
            >
              <Globe size={13} />
              {langLabels[lang]}
            </button>

            <a
              href={WA_QUOTE}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Get a Quote
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={cycleLang}
              className="flex items-center gap-1 rounded-lg border border-white/20 px-2.5 py-1.5 text-xs font-semibold text-white/85"
            >
              <Globe size={12} />
              {langLabels[lang]}
            </button>
            <button className="text-white" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy px-4 pb-6 pt-2 lg:hidden">
          <div>
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="flex w-full items-center gap-1.5 py-3 font-medium text-white"
            >
              Solutions <ChevronDown size={14} className={`transition-transform ${serviceOpen ? "rotate-180" : ""}`} />
            </button>
            {serviceOpen && (
              <div className="border-l border-white/10 pb-2 pl-4">
                {solutions.map((s) => (
                  <Link
                    key={s.name}
                    to={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-navy-muted"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => handleHashLink("#network")} className="block py-3 font-medium text-white">Network</button>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-3 font-medium text-white">Company</Link>
          <Link to="/blog" onClick={() => setMobileOpen(false)} className="block py-3 font-medium text-white">Resources</Link>
          <button onClick={() => handleHashLink("#contact")} className="block py-3 font-medium text-white">Contact</button>
          <a
            href={WA_QUOTE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block w-full rounded-lg bg-primary px-5 py-3 text-center font-semibold text-primary-foreground"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
