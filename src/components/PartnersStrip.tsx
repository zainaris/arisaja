import { useLanguage } from "@/contexts/LanguageContext";

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
import quantum from "@/assets/partners/quantum.png";
import pc24 from "@/assets/partners/pc24.png";
import primacom from "@/assets/partners/primacom.png";
import setiajaya from "@/assets/partners/setiajaya.png";
import snsGroup from "@/assets/partners/sns-group.jpg";
import brownSpirits from "@/assets/partners/brown-spirits.jpg";
import timah from "@/assets/partners/timah.png";
import swissBelhotel from "@/assets/partners/swiss-belhotel.png";
import umBabel from "@/assets/partners/um-babel.png";
import dcconnect from "@/assets/partners/dcconnect.png";
import asyana from "@/assets/partners/asyana.png";
import ibis from "@/assets/partners/ibis.png";
import megaAnggrek from "@/assets/partners/mega-anggrek.png";
import mercure from "@/assets/partners/mercure.png";
import santika from "@/assets/partners/santika.png";
import ibisBudget from "@/assets/partners/ibis-budget.png";
import leafLogo from "@/assets/partners/leaf-logo.png";
import maxone from "@/assets/partners/maxone.png";
import ninjaXpress from "@/assets/partners/ninja-xpress.jpg";
import aep from "@/assets/partners/aep.png";
import afIndonesia from "@/assets/partners/af-indonesia.png";
import angelsWing from "@/assets/partners/angels-wing.jpg";
import ciptaKridatama from "@/assets/partners/cipta-kridatama.png";
import euronet from "@/assets/partners/euronet.jpg";
import evansIndonesia from "@/assets/partners/evans-indonesia.jpg";
import indosatOoredoo from "@/assets/partners/indosat-ooredoo.png";
import istanaAgung from "@/assets/partners/istana-agung.png";

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

const customers = [
  { name: "Quantum", logo: quantum },
  { name: "PC24 Telekomunikasi", logo: pc24 },
  { name: "Primacom", logo: primacom },
  { name: "PT. Setiajaya Makmurindo", logo: setiajaya },
  { name: "SNS Group", logo: snsGroup },
  { name: "Brown & Spirits", logo: brownSpirits },
  { name: "Timah", logo: timah },
  { name: "Swiss-Belhotel International", logo: swissBelhotel },
  { name: "Universitas Muhammadiyah Bangka Belitung", logo: umBabel },
  { name: "DC Connect Technology", logo: dcconnect },
  { name: "Asyana Hotel", logo: asyana },
  { name: "Ibis Hotels", logo: ibis },
  { name: "Mega Anggrek", logo: megaAnggrek },
  { name: "Mercure Hotels", logo: mercure },
  { name: "Santika Indonesia", logo: santika },
  { name: "Ibis Budget", logo: ibisBudget },
  { name: "Leaf Logo", logo: leafLogo },
  { name: "MaxOne Hotels", logo: maxone },
  { name: "Ninja Xpress", logo: ninjaXpress },
  { name: "AEP", logo: aep },
  { name: "AF Indonesia", logo: afIndonesia },
  { name: "Angel's Wing Bangka", logo: angelsWing },
  { name: "Cipta Kridatama", logo: ciptaKridatama },
  { name: "Euronet", logo: euronet },
  { name: "PT Evans Indonesia", logo: evansIndonesia },
  { name: "Indosat Ooredoo", logo: indosatOoredoo },
  { name: "Istana Agung Babel", logo: istanaAgung },
];

const MarqueeRow = ({ items, speed = "30s" }: { items: typeof partners; speed?: string }) => (
  <div className="relative">
    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
    <div
      className="flex animate-marquee gap-16 items-center w-max"
      style={{ animationDuration: speed }}
    >
      {[...items, ...items].map(({ name, logo }, i) => (
        <div
          key={`${name}-${i}`}
          className="flex-shrink-0 h-16 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        >
          <img src={logo} alt={name} className="h-12 max-w-[140px] object-contain" />
        </div>
      ))}
    </div>
  </div>
);

const PartnersStrip = () => {
  const { t } = useLanguage();
  return (
    <>
      <section className="py-16 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">
            {t("partners.heading1")} <span className="text-primary">{t("partners.heading2")}</span>
          </h2>
        </div>
        <MarqueeRow items={partners} speed="30s" />
      </section>

      <section className="py-16 bg-muted/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">
            {t("partners.customers1")} <span className="text-primary">{t("partners.customers2")}</span>
          </h2>
        </div>
        <MarqueeRow items={customers} speed="35s" />
      </section>
    </>
  );
};

export default PartnersStrip;
