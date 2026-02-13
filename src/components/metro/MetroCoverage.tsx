import datacenterMap from "@/assets/metro-datacenter-map.png";
import { MapPin } from "lucide-react";

const datacenters = [
  { id: 1, name: "NDC Moratel Jatinegara", area: "Jakarta Timur" },
  { id: 2, name: "EDGE DC1", area: "Jakarta Selatan" },
  { id: 3, name: "EDGE DC2", area: "Jakarta Pusat" },
  { id: 4, name: "Neucentrix Karet", area: "Jakarta Barat" },
  { id: 5, name: "NTT JKT2 Kuningan", area: "Jakarta Selatan" },
  { id: 6, name: "NTT JKT3 Cibitung", area: "Bekasi" },
  { id: 7, name: "IDC 3D", area: "Jakarta Selatan" },
  { id: 8, name: "DCI Cibitung", area: "Bekasi" },
  { id: 9, name: "DHC DC GIIC Cikarang", area: "Cikarang" },
  { id: 10, name: "APJII Cyber 1", area: "Jakarta Selatan" },
];

const MetroCoverage = () => (
  <section className="py-20 lg:py-28 bg-dark-green">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
          Jangkauan <span className="text-gradient-green">Jaringan Kami</span>
        </h2>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Terhubung ke 10 datacenter utama di area Jabodetabek & Cikarang melalui jaringan Metro Ethernet berkecepatan tinggi.
        </p>
      </div>

      {/* Map with green-tinted overlay */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 border border-primary/20">
        <img
          src={datacenterMap}
          alt="Peta lokasi datacenter Metro-E Artamedia"
          className="w-full object-cover"
          style={{
            filter: "hue-rotate(140deg) saturate(1.4) brightness(0.85) contrast(1.1)",
          }}
        />
        {/* Green overlay for brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(145,60%,10%)]/40 via-transparent to-[hsl(145,60%,10%)]/60 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[hsl(145,60%,10%)] to-transparent h-20" />
        <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-primary-foreground/60 text-sm font-medium tracking-wide">
          Jabodetabek & Cikarang Datacenter Coverage
        </p>
      </div>

      {/* Datacenter Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {datacenters.map((dc) => (
          <div
            key={dc.id}
            className="group relative bg-[hsl(145,40%,12%)] border border-primary/15 rounded-xl p-4 hover:border-primary/40 hover:bg-[hsl(145,40%,14%)] transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary/30 transition-colors">
                {dc.id}
              </div>
              <div className="min-w-0">
                <h4 className="text-primary-foreground font-semibold text-sm leading-tight">
                  {dc.name}
                </h4>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 text-primary/60" />
                  <span className="text-primary-foreground/50 text-xs">{dc.area}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://wa.me/6282280257572?text=Halo%2C%20saya%20ingin%20mengetahui%20jangkauan%20Metro-E%20di%20area%20saya"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg"
        >
          Check Coverage
        </a>
      </div>
    </div>
  </section>
);

export default MetroCoverage;
