import SEOHead from "@/components/seo/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <>
      <SEOHead
        title="Kebijakan Pengembalian Dana — PT Artamedia Citra Telematika Indonesia"
        description="Kebijakan pengembalian dana (refund) layanan internet PT Artamedia Citra Telematika Indonesia. Ketentuan, proses, dan estimasi waktu pengembalian."
        canonical="/refund-policy"
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-foreground">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Kebijakan Pengembalian Dana</h1>
            <p className="text-muted-foreground text-sm mb-8">Terakhir diperbarui: 1 April 2026</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">1. Ketentuan Umum</h2>
              <p className="text-foreground/80 leading-relaxed">
                PT Artamedia Citra Telematika Indonesia ("Perusahaan") menerapkan kebijakan pengembalian dana (refund) yang transparan dan adil bagi seluruh pelanggan. Secara umum, pembayaran atas layanan internet yang telah diaktifkan bersifat <strong>non-refundable</strong> (tidak dapat dikembalikan), kecuali dalam kondisi-kondisi tertentu yang diuraikan dalam kebijakan ini.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Kebijakan ini berlaku untuk seluruh layanan yang disediakan oleh Perusahaan, termasuk Broadband, Dedicated Internet, Metro Ethernet, DWDM, Dark Fiber, dan Backup on Demand.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">2. Kondisi yang Memenuhi Syarat Pengembalian Dana</h2>
              <p className="text-foreground/80 leading-relaxed">Pengembalian dana dapat dipertimbangkan dalam kondisi-kondisi berikut:</p>
              <h3 className="text-xl font-medium text-foreground mt-4">2.1. Kegagalan Aktivasi Layanan</h3>
              <p className="text-foreground/80 leading-relaxed">
                Apabila Perusahaan tidak dapat mengaktifkan layanan sesuai dengan jadwal yang telah disepakati karena kendala teknis di sisi Perusahaan (bukan di sisi pelanggan), pelanggan berhak mengajukan pengembalian dana penuh atas biaya yang telah dibayarkan, termasuk biaya instalasi dan biaya berlangganan bulan pertama.
              </p>
              <h3 className="text-xl font-medium text-foreground mt-4">2.2. Gangguan Layanan Berkepanjangan</h3>
              <p className="text-foreground/80 leading-relaxed">
                Apabila terjadi gangguan layanan yang berlangsung secara terus-menerus selama lebih dari 3x24 jam (tiga kali dua puluh empat jam) dan disebabkan oleh kesalahan atau kelalaian Perusahaan, pelanggan berhak mengajukan pengembalian dana secara proporsional sesuai dengan durasi gangguan yang dialami.
              </p>
              <h3 className="text-xl font-medium text-foreground mt-4">2.3. Pembayaran Ganda (Double Payment)</h3>
              <p className="text-foreground/80 leading-relaxed">
                Apabila terjadi pembayaran ganda atau kelebihan pembayaran yang terverifikasi oleh sistem keuangan Perusahaan, kelebihan dana akan dikembalikan secara penuh kepada pelanggan.
              </p>
              <h3 className="text-xl font-medium text-foreground mt-4">2.4. Ketidaksesuaian Layanan</h3>
              <p className="text-foreground/80 leading-relaxed">
                Apabila layanan yang diberikan tidak sesuai dengan spesifikasi yang tercantum dalam kontrak layanan dan Perusahaan tidak dapat memperbaiki ketidaksesuaian tersebut dalam jangka waktu yang wajar (maksimal 14 hari kerja), pelanggan berhak mengajukan pengembalian dana.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">3. Kondisi yang Tidak Memenuhi Syarat Pengembalian Dana</h2>
              <p className="text-foreground/80 leading-relaxed">Pengembalian dana <strong>tidak berlaku</strong> dalam kondisi-kondisi berikut:</p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Pelanggan membatalkan layanan secara sepihak setelah layanan berhasil diaktifkan</li>
                <li>Penangguhan atau pemutusan layanan akibat tunggakan pembayaran oleh pelanggan</li>
                <li>Pemutusan layanan akibat pelanggaran Syarat dan Ketentuan oleh pelanggan</li>
                <li>Gangguan layanan yang disebabkan oleh kerusakan perangkat di sisi pelanggan</li>
                <li>Gangguan layanan akibat force majeure (bencana alam, gangguan listrik massal, kebijakan pemerintah, dll.)</li>
                <li>Perbedaan kecepatan internet yang disebabkan oleh keterbatasan perangkat atau konfigurasi jaringan internal pelanggan</li>
                <li>Biaya instalasi yang telah dilaksanakan (penarikan kabel, pemasangan perangkat)</li>
                <li>Biaya survei lokasi yang telah dilakukan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">4. Proses Pengajuan Pengembalian Dana</h2>
              <p className="text-foreground/80 leading-relaxed">Untuk mengajukan pengembalian dana, pelanggan wajib mengikuti prosedur berikut:</p>
              <ol className="list-decimal pl-6 text-foreground/80 space-y-2">
                <li>
                  <strong>Pengajuan Permohonan:</strong> Kirimkan permohonan pengembalian dana secara tertulis melalui email ke <a href="mailto:support@artamedianet.co.id" className="text-primary hover:underline">support@artamedianet.co.id</a> dengan menyertakan:
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>Nama lengkap dan nomor pelanggan (Customer ID)</li>
                    <li>Nomor invoice atau bukti pembayaran</li>
                    <li>Alasan pengajuan pengembalian dana</li>
                    <li>Nomor rekening bank untuk transfer pengembalian</li>
                  </ul>
                </li>
                <li><strong>Verifikasi:</strong> Tim Perusahaan akan melakukan verifikasi dan investigasi atas permohonan dalam waktu 3–5 hari kerja</li>
                <li><strong>Keputusan:</strong> Perusahaan akan menginformasikan keputusan persetujuan atau penolakan beserta alasannya melalui email</li>
                <li><strong>Proses Transfer:</strong> Apabila disetujui, pengembalian dana akan diproses sesuai ketentuan pada Pasal 5</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">5. Estimasi Waktu Pengembalian Dana</h2>
              <p className="text-foreground/80 leading-relaxed">
                Pengembalian dana yang telah disetujui akan diproses dalam jangka waktu sebagai berikut:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li><strong>Transfer bank:</strong> 7–14 hari kerja setelah persetujuan</li>
                <li><strong>Potongan tagihan:</strong> Akan diterapkan pada invoice periode berikutnya</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                Waktu pemrosesan dapat bervariasi tergantung pada kebijakan bank penerima dan kompleksitas kasus. Perusahaan akan menginformasikan status proses pengembalian kepada pelanggan secara berkala.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">6. Metode Pengembalian Dana</h2>
              <p className="text-foreground/80 leading-relaxed">Pengembalian dana akan dilakukan melalui salah satu metode berikut:</p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li><strong>Transfer bank:</strong> Ke rekening atas nama pelanggan yang terdaftar. Pengembalian hanya dapat dilakukan ke rekening dengan nama yang sama dengan data pelanggan</li>
                <li><strong>Potongan tagihan (credit note):</strong> Dikreditkan ke akun pelanggan dan dipotong dari tagihan bulan berikutnya</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                Perusahaan tidak melakukan pengembalian dana secara tunai atau ke rekening pihak ketiga demi keamanan dan kepatuhan regulasi.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">7. Pembatalan dalam Masa Cooling-Off</h2>
              <p className="text-foreground/80 leading-relaxed">
                Pelanggan baru memiliki hak untuk membatalkan layanan dalam waktu 7 (tujuh) hari kalender setelah tanggal aktivasi layanan (masa cooling-off), dengan ketentuan sebagai berikut:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Pelanggan berhak mendapatkan pengembalian biaya berlangganan bulan pertama secara penuh</li>
                <li>Biaya instalasi yang telah dilaksanakan tidak dapat dikembalikan</li>
                <li>Perangkat milik Perusahaan wajib dikembalikan dalam kondisi baik</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">8. Kontak</h2>
              <p className="text-foreground/80 leading-relaxed">
                Untuk pertanyaan atau pengajuan pengembalian dana, silakan hubungi:
              </p>
              <div className="bg-muted/50 rounded-lg p-6 mt-4">
                <p className="font-semibold text-foreground">PT Artamedia Citra Telematika Indonesia</p>
                <p className="text-foreground/80">Email: <a href="mailto:support@artamedianet.co.id" className="text-primary hover:underline">support@artamedianet.co.id</a></p>
                <p className="text-foreground/80">WhatsApp: <a href="https://wa.me/6281517667777" className="text-primary hover:underline">+62 815-1766-7777</a></p>
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

export default RefundPolicy;
