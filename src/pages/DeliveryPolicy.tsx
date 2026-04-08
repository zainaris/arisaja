import SEOHead from "@/components/seo/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DeliveryPolicy = () => {
  return (
    <>
      <SEOHead
        title="Kebijakan Pengiriman Layanan — PT Artamedia Citra Telematika Indonesia"
        description="Kebijakan pengiriman dan aktivasi layanan internet PT Artamedia Citra Telematika Indonesia. Estimasi waktu instalasi, tahapan, dan area cakupan."
        canonical="/delivery-policy"
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-foreground">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Kebijakan Pengiriman Layanan</h1>
            <p className="text-muted-foreground text-sm mb-8">Terakhir diperbarui: 1 April 2026</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">1. Definisi Pengiriman Layanan</h2>
              <p className="text-foreground/80 leading-relaxed">
                Sebagai perusahaan penyedia layanan internet (ISP), "pengiriman" dalam konteks PT Artamedia Citra Telematika Indonesia ("Perusahaan") merujuk pada proses <strong>aktivasi dan penyediaan layanan internet</strong> di lokasi pelanggan. Pengiriman layanan mencakup seluruh tahapan mulai dari verifikasi pendaftaran, survei lokasi, instalasi infrastruktur jaringan (penarikan kabel fiber optik, pemasangan perangkat), hingga aktivasi dan serah terima layanan kepada pelanggan.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Perusahaan tidak mengirimkan produk fisik secara konvensional. Seluruh layanan bersifat digital dan dikirimkan melalui infrastruktur jaringan fiber optik Perusahaan langsung ke lokasi pelanggan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">2. Estimasi Waktu Aktivasi Layanan</h2>
              <p className="text-foreground/80 leading-relaxed">
                Waktu aktivasi layanan bervariasi tergantung pada jenis layanan, lokasi pelanggan, dan kesiapan infrastruktur. Berikut estimasi waktu untuk masing-masing layanan:
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Jenis Layanan</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Estimasi Aktivasi</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-4 py-3 text-foreground/80">Broadband</td>
                      <td className="border border-border px-4 py-3 text-foreground/80">1–3 hari kerja</td>
                      <td className="border border-border px-4 py-3 text-foreground/80">Setelah verifikasi dan pembayaran, untuk area yang sudah tercover jaringan</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border px-4 py-3 text-foreground/80">Dedicated Internet</td>
                      <td className="border border-border px-4 py-3 text-foreground/80">5–14 hari kerja</td>
                      <td className="border border-border px-4 py-3 text-foreground/80">Tergantung hasil survei lokasi dan ketersediaan infrastruktur</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3 text-foreground/80">Metro Ethernet</td>
                      <td className="border border-border px-4 py-3 text-foreground/80">7–21 hari kerja</td>
                      <td className="border border-border px-4 py-3 text-foreground/80">Sesuai kompleksitas topologi jaringan dan jumlah titik koneksi</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border px-4 py-3 text-foreground/80">DWDM</td>
                      <td className="border border-border px-4 py-3 text-foreground/80">14–30 hari kerja</td>
                      <td className="border border-border px-4 py-3 text-foreground/80">Memerlukan perencanaan kapasitas dan konfigurasi perangkat khusus</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3 text-foreground/80">Dark Fiber</td>
                      <td className="border border-border px-4 py-3 text-foreground/80">14–45 hari kerja</td>
                      <td className="border border-border px-4 py-3 text-foreground/80">Tergantung jarak rute, ketersediaan core fiber, dan izin pihak ketiga</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border px-4 py-3 text-foreground/80">Backup on Demand</td>
                      <td className="border border-border px-4 py-3 text-foreground/80">1–5 hari kerja</td>
                      <td className="border border-border px-4 py-3 text-foreground/80">Aktivasi cepat untuk pelanggan yang sudah memiliki layanan utama</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-foreground/80 leading-relaxed mt-4">
                <strong>Catatan:</strong> Estimasi waktu di atas merupakan perkiraan dan dapat bervariasi tergantung kondisi di lapangan. Perusahaan akan menginformasikan jadwal aktivasi yang lebih spesifik setelah proses survei selesai dilakukan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">3. Tahapan Instalasi dan Aktivasi</h2>
              <p className="text-foreground/80 leading-relaxed">Proses pengiriman layanan meliputi tahapan-tahapan berikut:</p>
              <ol className="list-decimal pl-6 text-foreground/80 space-y-3">
                <li>
                  <strong>Pendaftaran dan Verifikasi:</strong> Pelanggan melakukan pendaftaran melalui situs web, WhatsApp, atau menghubungi tim sales. Tim kami akan memverifikasi data dan dokumen yang diperlukan (KTP, NPWP untuk korporasi).
                </li>
                <li>
                  <strong>Survei Lokasi:</strong> Tim teknis akan melakukan survei ke lokasi pelanggan untuk memastikan kelayakan teknis, jarak ke node terdekat, dan rute penarikan kabel. Untuk layanan Broadband di area yang sudah tercover, survei dapat dilakukan secara remote.
                </li>
                <li>
                  <strong>Penawaran dan Persetujuan:</strong> Berdasarkan hasil survei, Perusahaan akan memberikan penawaran resmi yang mencakup biaya instalasi, biaya berlangganan, dan spesifikasi layanan. Pelanggan menandatangani kontrak atau formulir persetujuan.
                </li>
                <li>
                  <strong>Pembayaran:</strong> Pelanggan melakukan pembayaran biaya instalasi dan/atau biaya berlangganan bulan pertama melalui metode pembayaran yang tersedia (transfer bank, virtual account BCA, dll.).
                </li>
                <li>
                  <strong>Instalasi Fisik:</strong> Tim teknisi melakukan penarikan kabel fiber optik dari node terdekat ke lokasi pelanggan, pemasangan Optical Network Terminal (ONT)/router, dan pengujian konektivitas.
                </li>
                <li>
                  <strong>Aktivasi Layanan:</strong> Setelah instalasi selesai dan pengujian berhasil, layanan diaktifkan. Pelanggan akan menerima konfirmasi aktivasi beserta informasi akses (username, password Wi-Fi, IP address jika berlaku).
                </li>
                <li>
                  <strong>Serah Terima:</strong> Tim teknisi melakukan serah terima layanan kepada pelanggan, memastikan layanan berfungsi dengan baik, dan memberikan panduan penggunaan dasar.
                </li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">4. Area Cakupan Layanan</h2>
              <p className="text-foreground/80 leading-relaxed">
                Perusahaan menyediakan layanan di berbagai wilayah di Indonesia. Area cakupan utama meliputi:
              </p>
              <h3 className="text-xl font-medium text-foreground mt-4">Sumatera</h3>
              <p className="text-foreground/80">Medan, Pekanbaru, Jambi, Palembang, Lampung, Bangka Belitung</p>
              <h3 className="text-xl font-medium text-foreground mt-4">Jawa</h3>
              <p className="text-foreground/80">DKI Jakarta (Hub), Cilegon, Denpasar</p>
              <h3 className="text-xl font-medium text-foreground mt-4">Kalimantan</h3>
              <p className="text-foreground/80">Pontianak, Banjarmasin, Balikpapan</p>
              <h3 className="text-xl font-medium text-foreground mt-4">Sulawesi & Nusa Tenggara</h3>
              <p className="text-foreground/80">Makassar, Lombok</p>
              <h3 className="text-xl font-medium text-foreground mt-4">Internasional</h3>
              <p className="text-foreground/80">Singapore</p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Ketersediaan layanan di setiap lokasi dapat bervariasi tergantung jenis layanan. Untuk memastikan ketersediaan layanan di lokasi Anda, silakan hubungi tim sales kami untuk dilakukan pengecekan coverage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">5. Kendala Teknis dan Lapangan</h2>
              <p className="text-foreground/80 leading-relaxed">
                Proses aktivasi layanan dapat mengalami keterlambatan akibat kendala teknis dan lapangan yang berada di luar kendali Perusahaan, antara lain:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Kondisi geografis yang menyulitkan penarikan kabel (sungai, jalan tol, jalur kereta api)</li>
                <li>Keterlambatan perizinan dari pihak ketiga (pengelola gedung, pemerintah daerah, PLN)</li>
                <li>Cuaca buruk yang menghalangi pekerjaan instalasi outdoor</li>
                <li>Ketersediaan material dan perangkat yang terbatas</li>
                <li>Kondisi infrastruktur eksisting yang memerlukan perbaikan terlebih dahulu</li>
                <li>Koordinasi dengan kontraktor atau vendor pihak ketiga</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                Dalam hal terjadi keterlambatan, Perusahaan akan menginformasikan kepada pelanggan mengenai penyebab keterlambatan dan estimasi waktu penyelesaian yang diperbarui.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">6. Notifikasi dan Komunikasi</h2>
              <p className="text-foreground/80 leading-relaxed">
                Perusahaan akan menginformasikan setiap tahapan proses aktivasi kepada pelanggan melalui:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li><strong>Email:</strong> Konfirmasi pendaftaran, jadwal survei, jadwal instalasi, dan konfirmasi aktivasi</li>
                <li><strong>WhatsApp:</strong> Koordinasi jadwal survei dan instalasi, serta informasi real-time mengenai status aktivasi</li>
                <li><strong>Telepon:</strong> Untuk koordinasi teknis yang memerlukan komunikasi langsung</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                Pelanggan diharapkan memastikan bahwa nomor telepon dan alamat email yang terdaftar selalu aktif dan dapat dihubungi selama proses aktivasi berlangsung.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">7. Penjadwalan Instalasi</h2>
              <p className="text-foreground/80 leading-relaxed">
                Instalasi dilaksanakan pada hari kerja (Senin–Jumat) pukul 08.00–17.00 waktu setempat. Penjadwalan instalasi di luar jam kerja atau pada hari libur dapat diatur berdasarkan kesepakatan dan mungkin dikenakan biaya tambahan. Pelanggan atau perwakilan pelanggan wajib hadir di lokasi instalasi pada waktu yang telah dijadwalkan. Apabila pelanggan tidak hadir, instalasi akan dijadwalkan ulang dan dapat mempengaruhi estimasi waktu aktivasi.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">8. Perangkat dan Peralatan</h2>
              <p className="text-foreground/80 leading-relaxed">
                Perusahaan akan menyediakan perangkat yang diperlukan untuk layanan, termasuk ONT (Optical Network Terminal), router, dan peralatan pendukung lainnya sesuai dengan paket layanan yang dipilih. Perangkat tersebut merupakan milik Perusahaan dan dipinjamkan kepada pelanggan selama masa berlangganan. Pelanggan wajib menjaga dan merawat perangkat tersebut dan mengembalikannya dalam kondisi baik apabila layanan dihentikan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">9. Kontak</h2>
              <p className="text-foreground/80 leading-relaxed">
                Untuk pertanyaan mengenai status aktivasi atau proses pengiriman layanan, silakan hubungi:
              </p>
              <div className="bg-muted/50 rounded-lg p-6 mt-4">
                <p className="font-semibold text-foreground">PT Artamedia Citra Telematika Indonesia</p>
                <p className="text-foreground/80">Email: <a href="mailto:support@artamedianet.co.id" className="text-primary hover:underline">support@artamedianet.co.id</a></p>
                <p className="text-foreground/80">WhatsApp: <a href="https://wa.me/6282280257572" className="text-primary hover:underline">+62 822-8025-7572</a></p>
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

export default DeliveryPolicy;
