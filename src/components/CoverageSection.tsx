import coverageMap from "@/assets/coverage-map.jpg";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const popAreas = [
  { region: "Sumatera", cities: ["Medan", "Pekanbaru", "Jambi", "Palembang", "Lampung", "Bangka Belitung"] },
  { region: "Jawa", cities: ["DKI Jakarta (Hub)", "Cilegon", "Denpasar"] },
  { region: "Kalimantan", cities: ["Pontianak", "Banjarmasin", "Balikpapan"] },
  { region: "Sulawesi & Nusa Tenggara", cities: ["Makasar", "Lombok"] },
  { region: "Internasional", cities: ["Singapore"] },
];

const CoverageSection = () => {
  const { t } = useLanguage();

  return (
    <section id="coverage" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            {t("coverage.heading1")} <span className="text-primary">{t("coverage.heading2")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("coverage.desc")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img src={coverageMap} alt="Coverage map Indonesia & Southeast Asia" className="w-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-10">
            {popAreas.map(({ region, cities }) => (
              <div key={region} className="p-4 rounded-2xl bg-card shadow-card">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-primary shrink-0" />
                  <h3 className="font-semibold text-foreground text-sm">{region}</h3>
                </div>
                <ul className="space-y-1">
                  {cities.map((c) => (
                    <li key={c} className="text-muted-foreground text-xs">{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="#coverage" className="inline-block px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-dark transition-all duration-300">
              {t("coverage.btn")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
