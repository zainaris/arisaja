import SEOHead from "@/components/seo/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Kebijakan Privasi — PT Artamedia Citra Telematika Indonesia"
        description="Kebijakan privasi PT Artamedia Citra Telematika Indonesia mengenai pengumpulan, penggunaan, dan perlindungan data pribadi pelanggan layanan internet."
        canonical="/privacy-policy"
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-foreground">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Kebijakan Privasi</h1>
            <p className="text-muted-foreground text-sm mb-8">Terakhir diperbarui: 1 April 2026</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">1. Pendahuluan</h2>
              <p className="text-foreground/80 leading-relaxed">
                PT Artamedia Citra Telematika Indonesia ("Perusahaan", "Kami") berkomitmen untuk melindungi privasi dan keamanan data pribadi seluruh pelanggan, calon pelanggan, dan pengunjung situs web kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda sehubungan dengan penggunaan layanan internet dan telekomunikasi yang kami sediakan, termasuk namun tidak terbatas pada layanan Broadband, Dedicated Internet, Metro Ethernet, DWDM, Dark Fiber, dan Backup on Demand.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Dengan mengakses situs web <a href="https://artamedianet.co.id" className="text-primary hover:underline">https://artamedianet.co.id</a> atau menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam Kebijakan Privasi ini. Kami menyarankan Anda untuk membaca kebijakan ini secara saksama.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">2. Jenis Data yang Dikumpulkan</h2>
              <p className="text-foreground/80 leading-relaxed">Kami mengumpulkan beberapa jenis data pribadi untuk keperluan penyediaan dan peningkatan layanan, antara lain:</p>
              <h3 className="text-xl font-medium text-foreground mt-4">2.1. Data Identitas Pribadi</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Nama lengkap sesuai identitas resmi</li>
                <li>Nomor Kartu Tanda Penduduk (KTP) atau identitas resmi lainnya</li>
                <li>Alamat tempat tinggal atau alamat instalasi</li>
                <li>Nomor telepon dan/atau nomor ponsel</li>
                <li>Alamat surat elektronik (email)</li>
                <li>Nomor Pokok Wajib Pajak (NPWP) untuk pelanggan korporasi</li>
              </ul>
              <h3 className="text-xl font-medium text-foreground mt-4">2.2. Data Teknis</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Alamat IP (Internet Protocol)</li>
                <li>Informasi perangkat dan browser yang digunakan</li>
                <li>Data log akses dan aktivitas jaringan</li>
                <li>Informasi lokasi geografis (berdasarkan IP)</li>
                <li>Data penggunaan bandwidth dan traffic</li>
              </ul>
              <h3 className="text-xl font-medium text-foreground mt-4">2.3. Data Transaksi</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Riwayat pembayaran dan metode pembayaran</li>
                <li>Nomor rekening atau informasi virtual account</li>
                <li>Detail paket layanan yang digunakan</li>
                <li>Riwayat perubahan langganan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">3. Tujuan Penggunaan Data</h2>
              <p className="text-foreground/80 leading-relaxed">Data pribadi yang kami kumpulkan digunakan untuk tujuan-tujuan berikut:</p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Memproses pendaftaran dan aktivasi layanan internet</li>
                <li>Memverifikasi identitas pelanggan sesuai ketentuan perundang-undangan yang berlaku</li>
                <li>Mengelola akun pelanggan dan menyediakan layanan pelanggan</li>
                <li>Memproses pembayaran, penagihan, dan administrasi keuangan</li>
                <li>Mengirimkan pemberitahuan terkait layanan, termasuk gangguan, pemeliharaan, dan pembaruan</li>
                <li>Meningkatkan kualitas layanan dan pengalaman pengguna</li>
                <li>Memenuhi kewajiban hukum dan regulasi telekomunikasi di Indonesia</li>
                <li>Menangani keluhan, permintaan, dan pertanyaan pelanggan</li>
                <li>Keperluan audit internal dan kepatuhan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">4. Perlindungan Data</h2>
              <p className="text-foreground/80 leading-relaxed">
                Kami menerapkan langkah-langkah keamanan teknis dan organisasional yang sesuai untuk melindungi data pribadi Anda dari akses yang tidak sah, pengungkapan, perubahan, atau penghancuran. Langkah-langkah tersebut meliputi:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Enkripsi data menggunakan protokol SSL/TLS pada seluruh transmisi data</li>
                <li>Sistem firewall dan intrusion detection/prevention system (IDS/IPS)</li>
                <li>Pembatasan akses data hanya kepada personel yang berwenang</li>
                <li>Pemantauan keamanan jaringan selama 24 jam oleh tim Network Operations Center (NOC)</li>
                <li>Penyimpanan data pada infrastruktur yang aman dan terawat</li>
                <li>Pelatihan berkala kepada karyawan mengenai perlindungan data pribadi</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">5. Penggunaan Cookies</h2>
              <p className="text-foreground/80 leading-relaxed">
                Situs web kami menggunakan cookies dan teknologi pelacakan serupa untuk meningkatkan pengalaman pengguna. Cookies adalah berkas kecil yang disimpan pada perangkat Anda saat mengunjungi situs web kami. Kami menggunakan cookies untuk:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Mengingat preferensi dan pengaturan Anda</li>
                <li>Menganalisis pola penggunaan situs web untuk peningkatan layanan</li>
                <li>Menyediakan konten yang relevan dengan kebutuhan Anda</li>
                <li>Memastikan keamanan dan integritas sesi pengguna</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda. Namun, menonaktifkan cookies tertentu dapat memengaruhi fungsionalitas situs web kami.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">6. Berbagi Data dengan Pihak Ketiga</h2>
              <p className="text-foreground/80 leading-relaxed">
                Kami tidak menjual, memperdagangkan, atau menyewakan data pribadi Anda kepada pihak ketiga. Namun, kami dapat membagikan data Anda dalam kondisi berikut:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li><strong>Mitra pembayaran:</strong> Bank, payment gateway (termasuk BCA Virtual Account), dan penyedia layanan pembayaran lainnya untuk memproses transaksi</li>
                <li><strong>Vendor teknis:</strong> Mitra instalasi dan pemeliharaan jaringan yang bekerja atas nama kami</li>
                <li><strong>Otoritas pemerintah:</strong> Apabila diwajibkan oleh peraturan perundang-undangan, termasuk Kementerian Komunikasi dan Informatika (Kominfo) dan aparat penegak hukum</li>
                <li><strong>Auditor:</strong> Untuk keperluan audit keuangan dan kepatuhan regulasi</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                Seluruh pihak ketiga yang menerima data pribadi Anda diwajibkan untuk menjaga kerahasiaan dan keamanan data tersebut sesuai dengan perjanjian kerahasiaan yang berlaku.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">7. Hak Pengguna</h2>
              <p className="text-foreground/80 leading-relaxed">Sebagai pemilik data, Anda memiliki hak-hak berikut:</p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li><strong>Hak akses:</strong> Meminta salinan data pribadi yang kami simpan tentang Anda</li>
                <li><strong>Hak koreksi:</strong> Meminta perbaikan data yang tidak akurat atau tidak lengkap</li>
                <li><strong>Hak penghapusan:</strong> Meminta penghapusan data pribadi Anda, dengan mempertimbangkan kewajiban hukum yang berlaku</li>
                <li><strong>Hak pembatasan:</strong> Meminta pembatasan pemrosesan data pribadi Anda dalam kondisi tertentu</li>
                <li><strong>Hak keberatan:</strong> Mengajukan keberatan terhadap pemrosesan data untuk tujuan pemasaran</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                Untuk menggunakan hak-hak tersebut, silakan hubungi kami melalui email di <a href="mailto:support@artamedianet.co.id" className="text-primary hover:underline">support@artamedianet.co.id</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">8. Retensi Data</h2>
              <p className="text-foreground/80 leading-relaxed">
                Kami menyimpan data pribadi Anda selama diperlukan untuk memenuhi tujuan pengumpulan data, termasuk untuk memenuhi kewajiban hukum, menyelesaikan sengketa, dan menegakkan perjanjian kami. Secara umum, data pelanggan aktif disimpan selama masa berlangganan dan hingga 5 (lima) tahun setelah berakhirnya layanan, sesuai dengan ketentuan peraturan perundang-undangan di bidang telekomunikasi dan perpajakan.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Data yang tidak lagi diperlukan akan dihapus atau dianonimkan secara aman.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">9. Perubahan Kebijakan Privasi</h2>
              <p className="text-foreground/80 leading-relaxed">
                Kami berhak untuk memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan dipublikasikan pada halaman ini dengan tanggal pembaruan terbaru. Kami menyarankan Anda untuk meninjau kebijakan ini secara berkala. Penggunaan layanan kami yang berkelanjutan setelah perubahan dianggap sebagai persetujuan terhadap kebijakan yang telah diperbarui.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">10. Kontak</h2>
              <p className="text-foreground/80 leading-relaxed">
                Apabila Anda memiliki pertanyaan, permintaan, atau keluhan terkait Kebijakan Privasi ini atau pengelolaan data pribadi Anda, silakan hubungi kami:
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

export default PrivacyPolicy;
