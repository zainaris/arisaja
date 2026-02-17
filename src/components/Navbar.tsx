import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import logo from "@/assets/artamedia-logo.png";
import { useLanguage, Lang } from "@/contexts/LanguageContext";

const services = [
  { name: "Broadband", href: "/broadband" },
  { name: "Dedicated", href: "/dedicated" },
  { name: "Metro-E", href: "/metro-e" },
  { name: "DWDM", href: "/dwdm" },
  { name: "Dark Fiber", href: "/dark-fiber" },
  { name: "Backup on Demand", href: "/backup-on-demand" },
];

const langLabels: Record<Lang, string> = { id: "ID", en: "EN", cn: "CN" };
const langOptions: Lang[] = ["id", "en", "cn"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHashLink = (hash: string) => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + hash);
    }
  };

  const isTransparent = false;

  const cycleLang = () => {
    const idx = langOptions.indexOf(lang);
    setLang(langOptions[(idx + 1) % langOptions.length]);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent border-b border-transparent"
          : "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Artamedia" className="h-10 w-10 object-contain" />
            <span className={`font-bold text-sm lg:text-base leading-tight transition-colors duration-300 ${
              isTransparent ? "text-white" : "text-foreground"
            }`}>
              Artamedia Citra<br className="hidden sm:block" /> Telematika Indonesia
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium transition-colors ${
              isTransparent ? "text-white/90 hover:text-white" : "text-foreground hover:text-primary"
            }`}>{t("nav.home")}</Link>
            
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isTransparent ? "text-white/90 hover:text-white" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setServiceOpen(!serviceOpen)}
              >
                {t("nav.services")} <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-popover border border-border rounded-xl shadow-lg py-2 min-w-[200px]">
                  {services.map((s) => (
                    <Link key={s.name} to={s.href} className="block px-4 py-2.5 text-sm text-popover-foreground hover:bg-muted transition-colors">
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <button onClick={() => handleHashLink("#coverage")} className={`text-sm font-medium transition-colors ${
              isTransparent ? "text-white/90 hover:text-white" : "text-foreground hover:text-primary"
            }`}>{t("nav.coverage")}</button>
            <button onClick={() => handleHashLink("#about")} className={`text-sm font-medium transition-colors ${
              isTransparent ? "text-white/90 hover:text-white" : "text-foreground hover:text-primary"
            }`}>{t("nav.about")}</button>
            <button onClick={() => handleHashLink("#contact")} className={`text-sm font-medium transition-colors ${
              isTransparent ? "text-white/90 hover:text-white" : "text-foreground hover:text-primary"
            }`}>{t("nav.contact")}</button>

            {/* Language Switcher */}
            <button
              onClick={cycleLang}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                isTransparent
                  ? "text-white/90 hover:bg-white/10 border border-white/20"
                  : "text-foreground hover:bg-muted border border-border"
              }`}
            >
              <Globe size={14} />
              {langLabels[lang]}
            </button>

            <button
              onClick={() => handleHashLink("#order")}
              className={`ml-1 px-5 py-2.5 rounded-xl border-2 font-semibold text-sm transition-all duration-300 ${
                isTransparent
                  ? "border-white/60 text-white hover:bg-white hover:text-foreground"
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {t("nav.order")}
            </button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile lang switcher */}
            <button
              onClick={cycleLang}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isTransparent
                  ? "text-white/90 border border-white/20"
                  : "text-foreground border border-border"
              }`}
            >
              <Globe size={12} />
              {langLabels[lang]}
            </button>
            <button className={`transition-colors ${isTransparent ? "text-white" : "text-foreground"}`} onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-6 pt-2">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-3 text-foreground font-medium">{t("nav.home")}</Link>
          <div>
            <button onClick={() => setServiceOpen(!serviceOpen)} className="flex items-center gap-1 py-3 text-foreground font-medium w-full">
              {t("nav.services")} <ChevronDown size={14} className={`transition-transform ${serviceOpen ? "rotate-180" : ""}`} />
            </button>
            {serviceOpen && (
              <div className="pl-4 pb-2">
                {services.map((s) => (
                  <Link key={s.name} to={s.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-muted-foreground">{s.name}</Link>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => handleHashLink("#coverage")} className="block py-3 text-foreground font-medium">{t("nav.coverage")}</button>
          <button onClick={() => handleHashLink("#about")} className="block py-3 text-foreground font-medium">{t("nav.about")}</button>
          <button onClick={() => handleHashLink("#contact")} className="block py-3 text-foreground font-medium">{t("nav.contact")}</button>
          <button onClick={() => handleHashLink("#order")} className="mt-3 block w-full text-center px-5 py-2.5 rounded-xl border-2 border-primary text-primary font-semibold">
            {t("nav.order")}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
