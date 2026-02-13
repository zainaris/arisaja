const WA_LINK = "https://wa.me/6282280257572?text=Halo%20Artamedia%2C%20saya%20tertarik%20dengan%20layanan%20Backup%20on%20Demand";

const BackupCTA = () => (
  <section className="py-20 lg:py-28 bg-green-gradient-cta">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
        Pastikan Bisnis Anda Tetap Online
      </h2>
      <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
        Diskusikan kebutuhan backup koneksi Anda bersama tim kami hari ini.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-2xl bg-primary-foreground text-primary font-bold text-lg hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg">
          Request Proposal
        </a>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-2xl border-2 border-primary-foreground/40 text-primary-foreground font-bold text-lg hover:bg-primary-foreground/10 transition-all duration-300">
          Contact Sales
        </a>
      </div>
    </div>
  </section>
);

export default BackupCTA;
