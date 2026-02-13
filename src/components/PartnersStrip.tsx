import cpanel from "@/assets/partners/cpanel.png";
import lintasarta from "@/assets/partners/lintasarta.png";
import ubiquiti from "@/assets/partners/ubiquiti.png";
import moratelindo from "@/assets/partners/moratelindo.png";
import kominfo from "@/assets/partners/kominfo.png";
import mikrotik from "@/assets/partners/mikrotik.png";
import indosat from "@/assets/partners/indosat.png";
import mncplay from "@/assets/partners/mncplay.png";
import biznet from "@/assets/partners/biznet.png";
import telkom from "@/assets/partners/telkom.png";

const partners = [
  { name: "Telkom Indonesia", logo: telkom },
  { name: "Indosat Ooredoo", logo: indosat },
  { name: "Biznet", logo: biznet },
  { name: "MNC Play", logo: mncplay },
  { name: "Lintasarta", logo: lintasarta },
  { name: "Moratelindo", logo: moratelindo },
  { name: "KOMINFO", logo: kominfo },
  { name: "Ubiquiti", logo: ubiquiti },
  { name: "MikroTik", logo: mikrotik },
  { name: "cPanel", logo: cpanel },
];

const PartnersStrip = () => (
  <section className="py-16 bg-background overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-foreground text-center mb-12">
        Trusted by <span className="text-primary">Businesses</span>
      </h2>
    </div>

    <div className="relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Marquee */}
      <div className="flex animate-marquee gap-16 items-center w-max">
        {[...partners, ...partners].map(({ name, logo }, i) => (
          <div
            key={`${name}-${i}`}
            className="flex-shrink-0 h-16 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <img src={logo} alt={name} className="h-12 max-w-[140px] object-contain" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersStrip;
