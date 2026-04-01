import { Link } from "react-router-dom";
import { services, cities, type ServiceInfo, type CityInfo } from "@/data/seoData";

interface InternalLinksProps {
  currentService?: string;
  currentCity?: string;
  maxCities?: number;
  maxServices?: number;
}

const InternalLinks = ({ currentService, currentCity, maxCities = 8, maxServices = 6 }: InternalLinksProps) => {
  const getServicePath = (s: ServiceInfo, c: CityInfo) => {
    const prefix = s.slug === "dedicated" ? "internet-dedicated" :
                   s.slug === "broadband" ? "internet-broadband" :
                   s.slug === "backup-on-demand" ? "backup-on-demand" :
                   s.slug;
    return `/${prefix}-${c.slug}`;
  };

  const otherCities = cities.filter(c => c.slug !== currentCity).slice(0, maxCities);
  const otherServices = services.filter(s => s.slug !== currentService).slice(0, maxServices);
  const currentCityObj = cities.find(c => c.slug === currentCity);
  const currentServiceObj = services.find(s => s.slug === currentService);

  return (
    <section className="py-16 lg:py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10">Layanan Artamedia di Kota Lain</h2>
        
        {currentServiceObj && (
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {currentServiceObj.shortName} di Kota Lain
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {otherCities.map(city => (
                <Link
                  key={city.slug}
                  to={getServicePath(currentServiceObj, city)}
                  className="block p-3 rounded-xl bg-secondary text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors font-medium"
                >
                  {currentServiceObj.shortName} {city.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {currentCityObj && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Layanan Lain di {currentCityObj.name}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {otherServices.map(service => (
                <Link
                  key={service.slug}
                  to={getServicePath(service, currentCityObj)}
                  className="block p-3 rounded-xl bg-secondary text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors font-medium"
                >
                  {service.shortName} {currentCityObj.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InternalLinks;
