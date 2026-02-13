import { Cable, Infinity, ArrowUpDown, Headphones, MonitorCheck } from "lucide-react";

const features = [
  {
    icon: Cable,
    title: "100% Fiber Optik",
    desc: "Koneksi langsung ke rumah tanpa kabel tembaga. Lebih cepat dan stabil.",
  },
  {
    icon: Infinity,
    title: "Unlimited Tanpa FUP",
    desc: "Tidak ada batas pemakaian dan tidak ada penurunan kecepatan.",
  },
  {
    icon: ArrowUpDown,
    title: "Stabil & Simetris",
    desc: "Upload dan download optimal untuk meeting, CCTV, dan cloud.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    desc: "Tim teknis siap membantu kapan saja.",
  },
  {
    icon: MonitorCheck,
    title: "Monitoring Network 24 Jam",
    desc: "Infrastruktur dipantau real-time untuk menjaga kualitas koneksi.",
  },
];

const BroadbandFeatures = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
        Kenapa Memilih <span className="text-primary">Broadband Kami?</span>
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
        Teknologi fiber optik terdepan untuk pengalaman internet terbaik
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover border-2 border-transparent hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Icon size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BroadbandFeatures;
