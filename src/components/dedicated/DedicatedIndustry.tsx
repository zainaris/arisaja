import { Building2, Server, Landmark, Hospital, Building, GraduationCap } from "lucide-react";

const industries = [
  { icon: Building2, title: "Perkantoran & Corporate", desc: "Koneksi stabil untuk operasional tanpa gangguan." },
  { icon: Server, title: "Data Center & ISP", desc: "Bandwidth besar untuk kebutuhan upstream dan peering." },
  { icon: Landmark, title: "Perbankan & Finansial", desc: "Keamanan dan kestabilan untuk transaksi real-time." },
  { icon: Hospital, title: "Rumah Sakit", desc: "Koneksi andal untuk sistem medis dan telemedicine." },
  { icon: Building, title: "Pemerintahan", desc: "Infrastruktur jaringan untuk layanan publik digital." },
  { icon: GraduationCap, title: "Sekolah & Universitas", desc: "Internet cepat untuk e-learning dan riset." },
];

const DedicatedIndustry = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
        Cocok Untuk <span className="text-primary">Berbagai Industri</span>
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
        Solusi konektivitas enterprise untuk setiap sektor
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-4 p-6 rounded-2xl hover:bg-secondary transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Icon size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DedicatedIndustry;
