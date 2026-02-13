import logo from "@/assets/artamedia-logo.png";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-dark-green pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Artamedia" className="h-10 w-10 object-contain" />
            <span className="font-bold text-primary-foreground text-sm leading-tight">
              Artamedia Citra<br />Telematika Indonesia
            </span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Penyedia layanan internet fiber optik terpercaya di Indonesia.
          </p>
          <div className="space-y-1 pt-2">
            <a href="mailto:sales@artamedianet.co.id" className="block text-sm text-primary-foreground/60 hover:text-primary transition-colors">
              sales@artamedianet.co.id
            </a>
            <a href="mailto:support@artamedianet.co.id" className="block text-sm text-primary-foreground/60 hover:text-primary transition-colors">
              support@artamedianet.co.id
            </a>
            <a href="https://wa.me/6282280257572" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary-foreground/60 hover:text-primary transition-colors">
              +62 822-8025-7572
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Layanan</h4>
          <ul className="space-y-2">
            {[
              { name: "Broadband", href: "/broadband" },
              { name: "Dedicated", href: "/dedicated" },
              { name: "Metro-E", href: "/metro-e" },
              { name: "DWDM", href: "/dwdm" },
              { name: "Dark Fiber", href: "/dark-fiber" },
              { name: "Backup On Demand", href: "/backup-on-demand" },
            ].map((s) => (
              <li key={s.name}>
                <Link to={s.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="/#about" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">About Us</a></li>
            <li><a href="/#coverage" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Coverage</a></li>
            <li><a href="/#contact" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="mailto:support@artamedianet.co.id" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Email Support
              </a>
            </li>
            <li>
              <a href="https://wa.me/6282280257572" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                WhatsApp Support
              </a>
            </li>
          </ul>
          <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
            <p className="text-primary-foreground text-sm font-semibold">24/7 Technical Support</p>
            <p className="text-primary-foreground/60 text-xs mt-1">Tim teknis kami siap membantu kapan saja</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8">
        <p className="text-center text-primary-foreground/50 text-sm">
          © 2026 Artamedia Citra Telematika Indonesia. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
