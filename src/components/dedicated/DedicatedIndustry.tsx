import { Building2, Server, Landmark, Hospital, Building, GraduationCap } from "lucide-react";
import industryImg from "@/assets/dedicated-industry.jpg";

const industries = [
  { icon: Building2, title: "Perkantoran & Corporate", desc: "Koneksi stabil untuk operasional tanpa gangguan." },
  { icon: Server, title: "Data Center & ISP", desc: "Bandwidth besar untuk kebutuhan upstream dan peering." },
  { icon: Landmark, title: "Perbankan & Finansial", desc: "Keamanan dan kestabilan untuk transaksi real-time." },
  { icon: Hospital, title: "Rumah Sakit", desc: "Koneksi andal untuk sistem medis dan telemedicine." },
  { icon: Building, title: "Pemerintahan", desc: "Infrastruktur jaringan untuk layanan publik digital." },
  { icon: GraduationCap, title: "Sekolah & Universitas", desc: "Internet cepat untuk e-learning dan riset." },
];

const DedicatedIndustry = () => (
  <section className="py-20 lg:py-28 bg-background overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Cocok Untuk <span className="text-primary">Berbagai Industri</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Solusi konektivitas enterprise untuk setiap sektor
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {industries.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3 p-4 rounded-xl hover:bg-secondary transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
                  <p className="text-muted-foreground text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <img
            src={industryImg}
            alt="Modern enterprise office environment"
            className="rounded-2xl shadow-card w-full object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default DedicatedIndustry;
