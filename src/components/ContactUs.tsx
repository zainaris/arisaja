import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const WA_LINK = "https://wa.me/6282280257572?text=Halo%20Artamedia%2C%20saya%20ingin%20konsultasi%20layanan%20internet";

const ContactUs = () => (
  <section id="contact" className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Contact <span className="text-primary">Us</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Hubungi kami untuk konsultasi, penawaran, atau pertanyaan seputar layanan internet fiber optik kami.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="space-y-6">
            {/* Sales Email */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-lg">Sales</h4>
                <a href="mailto:sales@artamedianet.co.id" className="text-primary hover:underline font-medium">
                  sales@artamedianet.co.id
                </a>
                <p className="text-muted-foreground text-sm mt-1">Untuk penawaran dan konsultasi layanan</p>
              </div>
            </div>

            {/* Support Email */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-lg">Technical Support</h4>
                <a href="mailto:support@artamedianet.co.id" className="text-primary hover:underline font-medium">
                  support@artamedianet.co.id
                </a>
                <p className="text-muted-foreground text-sm mt-1">Untuk bantuan teknis dan gangguan layanan</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-lg">WhatsApp</h4>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  Chat via WhatsApp
                </a>
                <p className="text-muted-foreground text-sm mt-1">Fast response untuk konsultasi langsung</p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-lg">Jam Operasional</h4>
                <p className="text-foreground font-medium">Senin – Jumat: 08.00 – 17.00 WIB</p>
                <p className="text-muted-foreground text-sm mt-1">Support teknis tersedia 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card rounded-2xl shadow-card p-8 lg:p-10 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-2">Kirim Pesan</h3>
          <p className="text-muted-foreground mb-8">Isi form di bawah dan tim kami akan segera menghubungi Anda.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const email = (form.elements.namedItem("email") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
              const waText = `Halo Artamedia, saya ${name} (${email}).%0A%0A${message}`;
              window.open(`https://wa.me/6282280257572?text=${encodeURIComponent(waText)}`, "_blank");
            }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nama Lengkap</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Perusahaan</label>
              <input
                name="company"
                type="text"
                placeholder="PT. Contoh Indonesia"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Layanan yang Diminati</label>
              <select
                name="service"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              >
                <option value="">Pilih layanan...</option>
                <option value="Broadband">Broadband</option>
                <option value="Dedicated Internet">Dedicated Internet</option>
                <option value="Metro-E / Leased Line">Metro-E / Leased Line</option>
                <option value="DWDM">DWDM</option>
                <option value="Dark Fiber">Dark Fiber</option>
                <option value="Backup on Demand">Backup on Demand</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Pesan</label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Ceritakan kebutuhan Anda..."
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Kirim via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactUs;
