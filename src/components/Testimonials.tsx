import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "CEO, PT Digital Nusantara",
    text: "Layanan dedicated internet dari Artamedia sangat stabil. Uptime hampir 100% dan respon tim support sangat cepat.",
  },
  {
    name: "Siti Rahayu",
    role: "IT Manager, Bank Regional",
    text: "Kami menggunakan Metro-E untuk menghubungkan 15 cabang. Performanya luar biasa, latency sangat rendah.",
  },
  {
    name: "Ahmad Wijaya",
    role: "CTO, Startup Teknologi",
    text: "Broadband FTTH-nya cepat dan reliable. Cocok untuk tim kami yang bekerja remote. Harga kompetitif dengan kualitas premium.",
  },
];

const Testimonials = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-16">
        Apa Kata <span className="text-primary">Pelanggan Kami</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-8 shadow-card">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-primary fill-primary" />
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-semibold text-card-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
