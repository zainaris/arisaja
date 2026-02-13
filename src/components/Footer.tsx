import logo from "@/assets/artamedia-logo.png";

const Footer = () => (
  <footer id="contact" className="bg-dark-green pt-16 pb-8">
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
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
          <ul className="space-y-2">
            {["About Us", "Career", "News"].map((l) => (
              <li key={l}><a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Services</h4>
          <ul className="space-y-2">
            {["Broadband", "Dedicated", "Metro-E", "DWDM", "Dark Fiber", "Backup On Demand"].map((l) => (
              <li key={l}><a href="#layanan" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Support</h4>
          <ul className="space-y-2">
            {["Coverage", "Contact Us", "FAQ"].map((l) => (
              <li key={l}><a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
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
