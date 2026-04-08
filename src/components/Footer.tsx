import logo from "@/assets/artamedia-logo.png";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark-green pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Artamedia" className="h-10 w-10 object-contain" />
              <span className="font-bold text-primary-foreground text-sm leading-tight">
                Artamedia Citra<br />Telematika Indonesia
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">{t("footer.desc")}</p>
            <div className="space-y-1 pt-2">
              <a href="mailto:sales@artamedianet.co.id" className="block text-sm text-primary-foreground/60 hover:text-primary transition-colors">sales@artamedianet.co.id</a>
              <a href="mailto:support@artamedianet.co.id" className="block text-sm text-primary-foreground/60 hover:text-primary transition-colors">support@artamedianet.co.id</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2">
              {[
                { name: "Broadband", href: "/broadband" },
                { name: "Dedicated", href: "/dedicated" },
                { name: "Metro-E", href: "/metro-e" },
                { name: "DWDM", href: "/dwdm" },
                { name: "Dark Fiber", href: "/dark-fiber" },
                { name: "Backup On Demand", href: "/backup-on-demand" },
              ].map((s) => (
                <li key={s.name}><Link to={s.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{s.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{t("nav.about")}</Link></li>
              <li><a href="/#coverage" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{t("nav.coverage")}</a></li>
              <li><a href="/#contact" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{t("nav.contact")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">{t("footer.support")}</h4>
            <ul className="space-y-2">
              <li><a href="mailto:support@artamedianet.co.id" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{t("footer.email.support")}</a></li>
              <li><a href="https://wa.me/6282280257572" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{t("footer.chat.support")}</a></li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-primary-foreground text-sm font-semibold">{t("footer.24.support")}</p>
              <p className="text-primary-foreground/60 text-xs mt-1">{t("footer.24.desc")}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link to="/privacy-policy" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <span className="text-primary-foreground/20">|</span>
            <Link to="/terms" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Terms & Conditions</Link>
            <span className="text-primary-foreground/20">|</span>
            <Link to="/refund-policy" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Refund Policy</Link>
            <span className="text-primary-foreground/20">|</span>
            <Link to="/delivery-policy" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Delivery Policy</Link>
          </div>
          <p className="text-center text-primary-foreground/50 text-sm">
            © 2026 Artamedia Citra Telematika Indonesia. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
