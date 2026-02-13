import { CheckCircle, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Plan {
  name: string;
  speed: string;
  price: string;
  yearly: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
}

const plans: Plan[] = [
  { name: "Starter", speed: "30 Mbps", price: "Rp 177.600", yearly: "Rp 1.776.600 /tahun", features: ["Unlimited Quota", "Free Router WiFi", "Support 24/7", "Instalasi Gratis"] },
  { name: "Basic", speed: "50 Mbps", price: "Rp 222.000", yearly: "Rp 2.222.000 /tahun", features: ["Unlimited Quota", "Dual Band Router", "Support 24/7", "Instalasi Gratis", "No FUP"] },
  { name: "Standard", speed: "75 Mbps", price: "Rp 266.400", yearly: "Rp 2.666.400 /tahun", features: ["Unlimited Quota", "Dual Band Router", "Support 24/7", "Instalasi Gratis", "No FUP", "Stabil & Simetris"], highlight: true, badge: "BEST VALUE" },
  { name: "Premium", speed: "100 Mbps", price: "Rp 333.000", yearly: "Rp 3.333.000 /tahun", features: ["Unlimited Quota", "Priority Support", "Instalasi Gratis", "No FUP", "Stabil & Simetris"] },
  { name: "Ultra", speed: "200 Mbps", price: "Rp 466.200", yearly: "Rp 4.666.200 /tahun", features: ["Dedicated 1:1", "Enterprise Router", "Priority Support", "Static IP", "Stabil & Simetris"] },
];

const PricingCard = ({ plan, monthLabel }: { plan: Plan; monthLabel: string }) => (
  <div className={`relative rounded-2xl p-8 transition-all duration-300 flex flex-col ${plan.highlight ? "bg-primary text-primary-foreground shadow-xl scale-[1.03] border-2 border-primary z-10" : "bg-card text-card-foreground shadow-card hover:shadow-card-hover border-2 border-transparent hover:border-primary/30"}`}>
    {plan.badge && (
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-lg">
          <Star size={12} fill="currentColor" /> {plan.badge}
        </span>
      </div>
    )}
    <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? "text-primary-foreground" : "text-foreground"}`}>{plan.name}</h3>
    <p className={`text-3xl font-extrabold mb-1 ${plan.highlight ? "text-primary-foreground" : "text-primary"}`}>{plan.speed}</p>
    <div className="my-4">
      <p className={`text-2xl font-bold ${plan.highlight ? "text-primary-foreground" : "text-foreground"}`}>
        {plan.price}
        <span className={`text-sm font-normal ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}> {monthLabel}</span>
      </p>
      <p className={`text-xs mt-1 ${plan.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{plan.yearly}</p>
    </div>
    <ul className="space-y-3 flex-1 mb-8">
      {plan.features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm">
          <CheckCircle size={16} className={`shrink-0 mt-0.5 ${plan.highlight ? "text-primary-foreground/80" : "text-primary"}`} />
          <span className={plan.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}>{f}</span>
        </li>
      ))}
    </ul>
    <a href={`https://wa.me/6282280257572?text=Halo%20Artamedia%2C%20saya%20tertarik%20paket%20${encodeURIComponent(plan.name)}%20${encodeURIComponent(plan.speed)}`} target="_blank" rel="noopener noreferrer"
      className={`block text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${plan.highlight ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : "bg-primary text-primary-foreground hover:bg-primary-dark"}`}>
      Order Now
    </a>
  </div>
);

const BroadbandPricing = () => {
  const { t } = useLanguage();
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
          {t("bb.pricing.heading1")} <span className="text-primary">{t("bb.pricing.heading2")}</span>
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">{t("bb.pricing.desc")}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} monthLabel={t("bb.pricing.month")} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BroadbandPricing;
