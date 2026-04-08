import SEOHead from "@/components/seo/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <SEOHead
        title="Syarat & Ketentuan — PT Artamedia Citra Telematika Indonesia"
        description="Syarat dan ketentuan layanan internet PT Artamedia Citra Telematika Indonesia meliputi Broadband, Dedicated Internet, Metro Ethernet, dan layanan lainnya."
        canonical="/terms"
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-foreground">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Syarat dan Ketentuan</h1>
            <p className="text-muted-foreground text-sm mb-8">Terakhir diperbarui: 1 April 2026</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">1. Ketentuan Umum</h2>
              <p className="text-foreground/80 leading-relaxed">
                Syarat dan Ketentuan ini ("S&K") mengatur hubungan hukum antara PT Artamedia Citra Telematika Indonesia ("Perusahaan", "Kami") dan pelanggan ("Pelanggan", "Anda") sehubungan dengan penggunaan seluruh layanan internet dan telekomunikasi yang disediakan oleh Perusahaan. Dengan mendaftar, mengaktifkan, atau menggunakan layanan kami, Anda menyatakan telah membaca, memahami, dan menyetujui seluruh ketentuan yang tercantum dalam dokumen ini.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Perusahaan merupakan penyedia layanan internet (ISP) yang beroperasi berdasarkan izin resmi dari Kementerian Komunikasi dan Informatika Republik Indonesia dan terdaftar sebagai anggota Asosiasi Penyelenggara Jasa Internet Indonesia (APJII).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">2. Lingkup Layanan</h2>
              <p className="text-foreground/80 leading-relaxed">Perusahaan menyediakan layanan internet dan telekomunikasi yang meliputi:</p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li><strong>Broadband Internet:</strong> Layanan internet berbasis fiber optik untuk kebutuhan rumah tangga dan bisnis kecil-menengah dengan bandwidth sharing</li>
                <li><strong>Dedicated Internet:</strong> Layanan internet dengan bandwidth dedicated (1:1) untuk kebutuhan korporasi yang memerlukan kecepatan dan stabilitas terjamin</li>
                <li><strong>Metro Ethernet (Metro-E):</strong> Layanan konektivitas jaringan privat antar lokasi menggunakan teknologi Ethernet over Fiber</li>
                <li><strong>DWDM (Dense Wavelength Division Multiplexing):</strong> Layanan transmisi data kapasitas tinggi melalui multiplexing panjang gelombang</li>
                <li><strong>Dark Fiber:</strong> Penyewaan kabel serat optik tanpa perangkat aktif untuk kebutuhan infrastruktur jaringan mandiri</li>
                <li><strong>Backup on Demand:</strong> Layanan jalur cadangan otomatis untuk menjamin ketersediaan konektivitas</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                Detail spesifikasi teknis, cakupan area, dan harga masing-masing layanan tersedia pada halaman layanan di situs web kami atau dapat dikonsultasikan dengan tim sales kami.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">3. Kewajiban Pelanggan</h2>
              <p className="text-foreground/80 leading-relaxed">Pelanggan berkewajiban untuk:</p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Memberikan informasi yang benar, akurat, dan lengkap pada saat pendaftaran layanan</li>
                <li>Menjaga kerahasiaan kredensial akun (username, password, dan informasi akses lainnya)</li>
                <li>Membayar tagihan layanan tepat waktu sesuai dengan jadwal penagihan yang telah ditentukan</li>
                <li>Menjaga dan merawat perangkat milik Perusahaan yang dipasang di lokasi pelanggan (router, ONT, dan perangkat lainnya)</li>
                <li>Memberitahukan Perusahaan apabila terjadi perubahan data pribadi, alamat, atau informasi kontak</li>
                <li>Menggunakan layanan sesuai dengan peraturan perundang-undangan yang berlaku di Republik Indonesia</li>
                <li>Tidak mengalihkan atau menjual kembali layanan kepada pihak ketiga tanpa persetujuan tertulis dari Perusahaan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">4. Ketentuan Pembayaran</h2>
              <p className="text-foreground/80 leading-relaxed">
                Pelanggan wajib membayar biaya layanan sesuai dengan paket yang dipilih. Ketentuan pembayaran adalah sebagai berikut:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Tagihan diterbitkan setiap bulan dan wajib dibayar paling lambat pada tanggal jatuh tempo yang tertera pada invoice</li>
                <li>Pembayaran dapat dilakukan melalui transfer bank, virtual account (termasuk BCA Virtual Account), atau metode pembayaran lain yang disediakan oleh Perusahaan</li>
                <li>Keterlambatan pembayaran akan dikenakan denda sebesar 2% (dua persen) per bulan dari total tagihan tertunggak</li>
                <li>Apabila pembayaran tertunggak lebih dari 14 (empat belas) hari kalender setelah tanggal jatuh tempo, Perusahaan berhak melakukan penangguhan (suspensi) layanan</li>
                <li>Apabila pembayaran tertunggak lebih dari 30 (tiga puluh) hari kalender, Perusahaan berhak melakukan pemutusan layanan secara permanen</li>
                <li>Biaya instalasi dan biaya aktivasi bersifat satu kali (one-time) dan tidak dapat dikembalikan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">5. Service Level Agreement (SLA)</h2>
              <p className="text-foreground/80 leading-relaxed">
                Perusahaan berkomitmen untuk menyediakan layanan dengan standar kualitas tinggi. Ketentuan SLA meliputi:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li><strong>Uptime layanan:</strong> Perusahaan menjamin ketersediaan layanan (uptime) minimum 99,5% per bulan untuk layanan Dedicated Internet dan Metro Ethernet, serta 99% untuk layanan Broadband</li>
                <li><strong>Waktu respons gangguan:</strong> Perusahaan akan merespons laporan gangguan dalam waktu maksimal 1 (satu) jam dan melakukan eskalasi penanganan sesuai tingkat severitas</li>
                <li><strong>Pemeliharaan terjadwal:</strong> Perusahaan berhak melakukan pemeliharaan jaringan (scheduled maintenance) dengan pemberitahuan minimal 24 jam sebelumnya melalui email atau media komunikasi resmi lainnya</li>
                <li><strong>Kompensasi SLA:</strong> Apabila uptime layanan berada di bawah jaminan SLA, pelanggan berhak mengajukan klaim kompensasi berupa potongan tagihan sesuai dengan ketentuan dalam kontrak layanan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">6. Larangan Penggunaan</h2>
              <p className="text-foreground/80 leading-relaxed">
                Pelanggan dilarang menggunakan layanan Perusahaan untuk kegiatan-kegiatan berikut:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Aktivitas yang melanggar hukum Republik Indonesia, termasuk namun tidak terbatas pada penyebaran konten ilegal, pornografi anak, terorisme, atau ujaran kebencian</li>
                <li>Pengiriman spam, email massal yang tidak diminta, atau pesan komersial yang melanggar ketentuan</li>
                <li>Upaya peretasan (hacking), serangan DDoS, penyebaran malware, atau aktivitas yang mengganggu keamanan jaringan</li>
                <li>Pelanggaran hak kekayaan intelektual, termasuk pembajakan perangkat lunak atau konten digital</li>
                <li>Penggunaan layanan untuk menjalankan server publik tanpa persetujuan tertulis (khusus layanan Broadband)</li>
                <li>Segala aktivitas yang dapat merugikan Perusahaan, pelanggan lain, atau pihak ketiga</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                Pelanggaran terhadap ketentuan ini dapat mengakibatkan penangguhan atau pemutusan layanan tanpa pemberitahuan terlebih dahulu.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">7. Gangguan Layanan</h2>
              <p className="text-foreground/80 leading-relaxed">
                Perusahaan akan berupaya sebaik mungkin untuk menyediakan layanan secara berkelanjutan. Namun, gangguan layanan dapat terjadi karena faktor-faktor berikut:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Pemeliharaan jaringan terjadwal (scheduled maintenance)</li>
                <li>Gangguan pada infrastruktur pihak ketiga (upstream provider, PLN, dll.)</li>
                <li>Kerusakan fisik pada jaringan akibat faktor eksternal (konstruksi, bencana alam, vandalisme)</li>
                <li>Gangguan perangkat di sisi pelanggan</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                Perusahaan akan menginformasikan gangguan yang diketahui melalui saluran komunikasi resmi dan berupaya memulihkan layanan dalam waktu sesingkat mungkin.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">8. Penghentian Layanan</h2>
              <p className="text-foreground/80 leading-relaxed">Penghentian layanan dapat terjadi dalam kondisi berikut:</p>
              <h3 className="text-xl font-medium text-foreground mt-4">8.1. Penghentian oleh Pelanggan</h3>
              <p className="text-foreground/80 leading-relaxed">
                Pelanggan dapat mengajukan penghentian layanan dengan memberikan pemberitahuan tertulis minimal 30 (tiga puluh) hari kalender sebelum tanggal penghentian yang diinginkan. Seluruh tunggakan pembayaran harus dilunasi sebelum proses penghentian dilakukan.
              </p>
              <h3 className="text-xl font-medium text-foreground mt-4">8.2. Penghentian oleh Perusahaan</h3>
              <p className="text-foreground/80 leading-relaxed">
                Perusahaan berhak menghentikan layanan apabila pelanggan melanggar S&K ini, memiliki tunggakan pembayaran yang melampaui batas waktu, atau melakukan aktivitas yang dilarang sebagaimana tercantum pada Pasal 6.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">9. Batasan Tanggung Jawab</h2>
              <p className="text-foreground/80 leading-relaxed">
                Perusahaan tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan menggunakan layanan kami, termasuk namun tidak terbatas pada kehilangan pendapatan, data, atau peluang bisnis. Tanggung jawab maksimal Perusahaan terbatas pada jumlah biaya layanan yang telah dibayarkan oleh pelanggan dalam periode tagihan terakhir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">10. Force Majeure</h2>
              <p className="text-foreground/80 leading-relaxed">
                Perusahaan tidak bertanggung jawab atas kegagalan atau keterlambatan dalam penyediaan layanan yang disebabkan oleh keadaan di luar kendali yang wajar (force majeure), termasuk namun tidak terbatas pada bencana alam, kebakaran, banjir, gempa bumi, pandemi, perang, kerusuhan, kebijakan pemerintah, gangguan listrik massal, kerusakan kabel bawah laut, atau gangguan infrastruktur telekomunikasi nasional.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">11. Perubahan Syarat dan Ketentuan</h2>
              <p className="text-foreground/80 leading-relaxed">
                Perusahaan berhak untuk mengubah atau memperbarui S&K ini sewaktu-waktu. Perubahan akan dipublikasikan pada halaman ini dan berlaku efektif sejak tanggal publikasi. Pelanggan yang terus menggunakan layanan setelah perubahan dianggap telah menyetujui S&K yang telah diperbarui. Untuk perubahan material, Perusahaan akan memberikan pemberitahuan melalui email atau saluran komunikasi resmi.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">12. Hukum yang Berlaku</h2>
              <p className="text-foreground/80 leading-relaxed">
                S&K ini diatur dan ditafsirkan berdasarkan hukum Republik Indonesia. Segala sengketa yang timbul sehubungan dengan S&K ini akan diselesaikan secara musyawarah terlebih dahulu. Apabila musyawarah tidak mencapai kesepakatan, sengketa akan diselesaikan melalui Pengadilan Negeri Jakarta Pusat.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">13. Kontak</h2>
              <p className="text-foreground/80 leading-relaxed">
                Untuk pertanyaan atau klarifikasi mengenai Syarat dan Ketentuan ini, silakan hubungi:
              </p>
              <div className="bg-muted/50 rounded-lg p-6 mt-4">
                <p className="font-semibold text-foreground">PT Artamedia Citra Telematika Indonesia</p>
                <p className="text-foreground/80">Email: <a href="mailto:support@artamedianet.co.id" className="text-primary hover:underline">support@artamedianet.co.id</a></p>
                <p className="text-foreground/80">Website: <a href="https://artamedianet.co.id" className="text-primary hover:underline">https://artamedianet.co.id</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
