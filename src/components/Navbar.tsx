import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/artamedia-logo.png";

const services = [
  { name: "Broadband", href: "/broadband" },
  { name: "Dedicated", href: "/dedicated" },
  { name: "Metro-E", href: "/metro-e" },
  { name: "DWDM", href: "/#layanan" },
  { name: "Dark Fiber", href: "/#layanan" },
  { name: "Backup on Demand", href: "/#layanan" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashLink = (hash: string) => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + hash);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Artamedia" className="h-10 w-10 object-contain" />
            <span className="font-bold text-sm lg:text-base text-foreground leading-tight">
              Artamedia Citra<br className="hidden sm:block" /> Telematika Indonesia
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</Link>
            
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setServiceOpen(!serviceOpen)}
              >
                Layanan <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-popover border border-border rounded-xl shadow-lg py-2 min-w-[200px]">
                  {services.map((s) => (
                    s.href.startsWith("/") && !s.href.startsWith("/#") ? (
                      <Link key={s.name} to={s.href} className="block px-4 py-2.5 text-sm text-popover-foreground hover:bg-muted transition-colors">
                        {s.name}
                      </Link>
                    ) : (
                      <button key={s.name} onClick={() => handleHashLink(s.href.replace("/", ""))} className="block w-full text-left px-4 py-2.5 text-sm text-popover-foreground hover:bg-muted transition-colors">
                        {s.name}
                      </button>
                    )
                  ))}
                </div>
              </div>
            </div>

            <button onClick={() => handleHashLink("#coverage")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Coverage</button>
            <button onClick={() => handleHashLink("#about")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">About Us</button>
            <button onClick={() => handleHashLink("#contact")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact Us</button>

            <button
              onClick={() => handleHashLink("#order")}
              className="ml-2 px-5 py-2.5 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Order Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-6 pt-2">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-3 text-foreground font-medium">Home</Link>
          <div>
            <button onClick={() => setServiceOpen(!serviceOpen)} className="flex items-center gap-1 py-3 text-foreground font-medium w-full">
              Layanan <ChevronDown size={14} className={`transition-transform ${serviceOpen ? "rotate-180" : ""}`} />
            </button>
            {serviceOpen && (
              <div className="pl-4 pb-2">
                {services.map((s) => (
                  s.href.startsWith("/") && !s.href.startsWith("/#") ? (
                    <Link key={s.name} to={s.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-muted-foreground">{s.name}</Link>
                  ) : (
                    <button key={s.name} onClick={() => handleHashLink(s.href.replace("/", ""))} className="block py-2 text-sm text-muted-foreground">{s.name}</button>
                  )
                ))}
              </div>
            )}
          </div>
          <button onClick={() => handleHashLink("#coverage")} className="block py-3 text-foreground font-medium">Coverage</button>
          <button onClick={() => handleHashLink("#about")} className="block py-3 text-foreground font-medium">About Us</button>
          <button onClick={() => handleHashLink("#contact")} className="block py-3 text-foreground font-medium">Contact Us</button>
          <button onClick={() => handleHashLink("#order")} className="mt-3 block w-full text-center px-5 py-2.5 rounded-xl border-2 border-primary text-primary font-semibold">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
