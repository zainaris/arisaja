import { Server, Radio, Network, Cloud, MapPin, Globe } from "lucide-react";
import dwdmDci from "@/assets/dwdm-datacenter-interconnect.jpg";

const useCases = [
  { icon: Server, title: "Data Center Interconnect (DCI)", desc: "Interkoneksi antar data center dengan kapasitas terabit." },
  { icon: Radio, title: "National Backbone Operator", desc: "Backbone nasional untuk operator telekomunikasi." },
  { icon: Network, title: "ISP Aggregation Network", desc: "Agregasi trafik ISP dengan efisiensi tinggi." },
  { icon: Cloud, title: "Cloud Provider Connectivity", desc: "Konektivitas langsung ke cloud provider." },
  { icon: MapPin, title: "Inter-City Transport", desc: "Transport data antar kota berkapasitas besar." },
  { icon: Globe, title: "International Gateway", desc: "Gerbang konektivitas internasional." },
];

const DwdmUseCase = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
        Cocok <span className="text-primary">Untuk</span>
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
        Solusi ideal untuk transport data skala besar dengan efisiensi tinggi.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={dwdmDci}
            alt="Data center interconnection facility"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-primary font-bold text-lg">Carrier-Grade Data Center</p>
            <p className="text-foreground/70 text-sm">Fasilitas interkoneksi data center dengan standar carrier-grade</p>
          </div>
        </div>

        {/* Use cases */}
        <div className="grid gap-4">
          {useCases.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4 p-5 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">{title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DwdmUseCase;
