import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  { name: "Budi Santoso", role: "CEO, PT Digital Nusantara", key: "testimonials.1.text" },
  { name: "Siti Rahayu", role: "IT Manager, Bank Regional", key: "testimonials.2.text" },
  { name: "Ahmad Wijaya", role: "CTO, Startup Teknologi", key: "testimonials.3.text" },
];

const Testimonials = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-16">
          {t("testimonials.heading1")} <span className="text-primary">{t("testimonials.heading2")}</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.name} className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">"{t(item.key)}"</p>
              <div>
                <p className="font-semibold text-card-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
