import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "id" | "en";

type Translations = Record<string, Record<Lang, string>>;

const t: Translations = {
  // Navbar
  "nav.home": { id: "Home", en: "Home" },
  "nav.services": { id: "Layanan", en: "Services" },
  "nav.coverage": { id: "Coverage", en: "Coverage" },
  "nav.about": { id: "About Us", en: "About Us" },
  "nav.contact": { id: "Contact Us", en: "Contact Us" },
  "nav.order": { id: "Order Now", en: "Order Now" },

  // Hero
  "hero.title1": { id: "Get Connected,", en: "Get Connected," },
  "hero.title2": { id: "Always Connected", en: "Always Connected" },
  "hero.subtitle": {
    id: "Internet Service Provider, IT Consultant, Networking & Communication",
    en: "Internet Service Provider, IT Consultant, Networking & Communication",
  },
  "hero.btn.services": { id: "Lihat Layanan", en: "Our Services" },
  "hero.btn.coverage": { id: "Cek Coverage", en: "Check Coverage" },
  "hero.badge.fiber": { id: "100% Fiber Optik", en: "100% Fiber Optic" },
  "hero.badge.sla": { id: "SLA Tinggi", en: "High SLA" },
  "hero.badge.support": { id: "24/7 Support", en: "24/7 Support" },
  "hero.badge.monitoring": { id: "Network Monitoring", en: "Network Monitoring" },

  // About
  "about.heading1": { id: "About", en: "About" },
  "about.heading2": { id: "Us", en: "Us" },
  "about.desc1": {
    id: "Berawal dari CV E-Media Indonesia pada tahun 2006 sebagai penyedia perangkat IT, kami terus berkembang hingga menjadi",
    en: "Starting from CV E-Media Indonesia in 2006 as an IT equipment provider, we have grown into",
  },
  "about.company": { id: "PT Artamedia Citra Telematika Indonesia", en: "PT Artamedia Citra Telematika Indonesia" },
  "about.desc1b": {
    id: " — penyedia layanan internet fiber optik terpercaya dengan izin ISP resmi dan anggota APJII.",
    en: " — a trusted fiber optic internet service provider with official ISP license and APJII member.",
  },
  "about.desc2": {
    id: "Dengan pengalaman lebih dari 18 tahun, kami menyediakan solusi koneksi internet, IT consultant, networking, dan komunikasi untuk kebutuhan residensial hingga enterprise.",
    en: "With over 18 years of experience, we provide internet connectivity solutions, IT consulting, networking, and communication for residential to enterprise needs.",
  },
  "about.years": { id: "Tahun Pengalaman", en: "Years of Experience" },
  "about.tl.2006.title": { id: "Awal Berdiri", en: "Founded" },
  "about.tl.2006.desc": { id: "CV E-Media Indonesia sebagai penyedia perangkat IT", en: "CV E-Media Indonesia as an IT equipment provider" },
  "about.tl.2014.title": { id: "System Integrator", en: "System Integrator" },
  "about.tl.2014.desc": { id: "Manage service network telekomunikasi celluler fix network", en: "Managed telecom cellular and fixed network services" },
  "about.tl.2017.title": { id: "Berubah PT", en: "Incorporated" },
  "about.tl.2017.desc": { id: "PT Artamedia Citra Telematika Indonesia berdiri", en: "PT Artamedia Citra Telematika Indonesia established" },
  "about.tl.2018.title": { id: "Izin ISP", en: "ISP License" },
  "about.tl.2018.desc": { id: "Internet Service Provider, anggota APJII", en: "Internet Service Provider, APJII member" },
  "about.tl.2019.title": { id: "Izin Jartup", en: "Network License" },
  "about.tl.2019.desc": { id: "Penyediaan akses FO dan radio license", en: "Fiber optic access and radio license provision" },
  "about.purpose": { id: "Our Purpose", en: "Our Purpose" },
  "about.vision": { id: "Visi", en: "Vision" },
  "about.mission": { id: "Misi", en: "Mission" },
  "about.vision.text": { id: "Menjadi pemain utama dalam bisnis solusi informasi dan komunikasi di regional.", en: "Being a major player in business information and communication solutions in the region." },
  "about.mission.text": { id: "Mendukung kegiatan bisnis bagi perusahaan dengan solusi informasi dan komunikasi yang murah dan handal.", en: "Supporting business activities for enterprises with affordable and reliable information and communication solutions." },
  "about.growth": { id: "Company Growth", en: "Company Growth" },
  "about.growth.heading1": { id: "Pertumbuhan", en: "Company" },
  "about.growth.heading2": { id: "Perusahaan", en: "Growth" },
  "about.growth.revenue": { id: "Revenue di 2022 (Rupiah)", en: "Revenue in 2022 (Rupiah)" },
  "about.growth.desc": { id: "Sejak berdiri sebagai PT di tahun 2017, pendapatan perusahaan terus meningkat secara konsisten dari 1.873 juta rupiah hingga mencapai 9.062 juta rupiah di tahun 2022 — pertumbuhan hampir", en: "Since incorporation in 2017, company revenue has consistently increased from 1,873 million rupiah to 9,062 million rupiah in 2022 — almost" },
  "about.growth.times": { id: "5x lipat", en: "5x growth" },
  "about.growth.period": { id: "dalam 6 tahun.", en: "in 6 years." },

  // Coverage
  "coverage.heading1": { id: "Area", en: "Area" },
  "coverage.heading2": { id: "Coverage", en: "Coverage" },
  "coverage.desc": { id: "Jaringan fiber optik kami menjangkau kota-kota besar di seluruh Indonesia hingga Asia Tenggara.", en: "Our fiber optic network reaches major cities across Indonesia and Southeast Asia." },
  "coverage.btn": { id: "Cek Coverage", en: "Check Coverage" },

  // Stats
  "stats.experience": { id: "Tahun Pengalaman", en: "Years of Experience" },
  "stats.customers": { id: "Pelanggan Aktif", en: "Active Customers" },
  "stats.uptime": { id: "Uptime SLA", en: "Uptime SLA" },
  "stats.monitoring": { id: "Monitoring", en: "Monitoring" },

  // FinalCTA
  "cta.heading": { id: "Siap Menggunakan Internet yang Lebih Stabil?", en: "Ready for a More Stable Internet?" },
  "cta.desc": { id: "Hubungi tim kami hari ini dan dapatkan solusi terbaik untuk kebutuhan Anda.", en: "Contact our team today and get the best solution for your needs." },
  "cta.order": { id: "Order Now", en: "Order Now" },
  "cta.contact": { id: "Contact Us", en: "Contact Us" },

  // Contact
  "contact.heading1": { id: "Contact", en: "Contact" },
  "contact.heading2": { id: "Us", en: "Us" },
  "contact.desc": { id: "Hubungi kami untuk konsultasi, penawaran, atau pertanyaan seputar layanan internet fiber optik kami.", en: "Contact us for consultation, quotes, or questions about our fiber optic internet services." },
  "contact.sales": { id: "Sales", en: "Sales" },
  "contact.sales.desc": { id: "Untuk penawaran dan konsultasi layanan", en: "For quotes and service consultation" },
  "contact.support": { id: "Technical Support", en: "Technical Support" },
  "contact.support.desc": { id: "Untuk bantuan teknis dan gangguan layanan", en: "For technical assistance and service issues" },
  "contact.wa": { id: "WhatsApp", en: "WhatsApp" },
  "contact.wa.link": { id: "Chat via WhatsApp", en: "Chat via WhatsApp" },
  "contact.wa.desc": { id: "Fast response untuk konsultasi langsung", en: "Fast response for direct consultation" },
  "contact.hours": { id: "Jam Operasional", en: "Operating Hours" },
  "contact.hours.time": { id: "Senin – Jumat: 08.00 – 17.00 WIB", en: "Mon – Fri: 08:00 – 17:00 WIB" },
  "contact.hours.support": { id: "Support teknis tersedia 24/7", en: "Technical support available 24/7" },
  "contact.form.title": { id: "Kirim Pesan", en: "Send Message" },
  "contact.form.desc": { id: "Isi form di bawah dan tim kami akan segera menghubungi Anda.", en: "Fill in the form below and our team will contact you soon." },
  "contact.form.name": { id: "Nama Lengkap", en: "Full Name" },
  "contact.form.email": { id: "Email", en: "Email" },
  "contact.form.company": { id: "Perusahaan", en: "Company" },
  "contact.form.service": { id: "Layanan yang Diminati", en: "Service of Interest" },
  "contact.form.service.placeholder": { id: "Pilih layanan...", en: "Select service..." },
  "contact.form.other": { id: "Lainnya", en: "Other" },
  "contact.form.message": { id: "Pesan", en: "Message" },
  "contact.form.message.placeholder": { id: "Ceritakan kebutuhan Anda...", en: "Tell us about your needs..." },
  "contact.form.submit": { id: "Kirim via WhatsApp", en: "Send via WhatsApp" },

  // Footer
  "footer.desc": { id: "Penyedia layanan internet fiber optik terpercaya di Indonesia.", en: "Trusted fiber optic internet service provider in Indonesia." },
  "footer.services": { id: "Layanan", en: "Services" },
  "footer.company": { id: "Company", en: "Company" },
  "footer.support": { id: "Support", en: "Support" },
  "footer.email.support": { id: "Email Support", en: "Email Support" },
  "footer.chat.support": { id: "Chat Support", en: "Chat Support" },
  "footer.24.support": { id: "24/7 Technical Support", en: "24/7 Technical Support" },
  "footer.24.desc": { id: "Tim teknis kami siap membantu kapan saja", en: "Our technical team is ready to help anytime" },

  // Services Section (Home)
  "services.heading1": { id: "Layanan", en: "Our" },
  "services.heading2": { id: "Kami", en: "Services" },
  "services.desc": { id: "Solusi konektivitas lengkap untuk segala kebutuhan Anda", en: "Complete connectivity solutions for all your needs" },
  "services.broadband.desc": { id: "Internet unlimited untuk rumah dan UMKM.", en: "Unlimited internet for homes and SMEs." },
  "services.dedicated.desc": { id: "Bandwidth 1:1 dengan SLA tinggi untuk bisnis.", en: "1:1 bandwidth with high SLA for business." },
  "services.metro.desc": { id: "Koneksi antar kantor dengan performa tinggi.", en: "High-performance inter-office connectivity." },
  "services.dwdm.desc": { id: "Solusi transport kapasitas besar untuk operator dan enterprise.", en: "High-capacity transport solutions for carriers and enterprises." },
  "services.darkfiber.desc": { id: "Penyewaan core fiber untuk kebutuhan jaringan sendiri.", en: "Core fiber leasing for your own network needs." },
  "services.backup.desc": { id: "Solusi redundancy untuk menjaga bisnis tetap online.", en: "Redundancy solutions to keep your business online." },

  // Why Choose Us
  "why.heading1": { id: "Kenapa Memilih", en: "Why Choose" },
  "why.heading2": { id: "Artamedianet?", en: "Artamedianet?" },
  "why.subtitle": { id: "Koneksi cepat, stabil, dan terpercaya untuk rumah dan bisnis Anda.", en: "Fast, stable, and trusted connectivity for your home and business." },
  "why.card1.title": { id: "Internet Cepat & Stabil", en: "Fast & Stable Internet" },
  "why.card1.desc": { id: "Didukung jaringan fiber optic berkecepatan tinggi dengan koneksi yang konsisten tanpa buffering.", en: "Backed by high-speed fiber optic network with consistent connection and zero buffering." },
  "why.card2.title": { id: "100% Fiber Optic", en: "100% Fiber Optic" },
  "why.card2.desc": { id: "Teknologi terbaru untuk performa maksimal dan latency rendah.", en: "Latest technology for maximum performance and low latency." },
  "why.card3.title": { id: "Support 24 Jam", en: "24/7 Support" },
  "why.card3.desc": { id: "Tim teknis profesional siap membantu kapan saja Anda membutuhkan.", en: "Professional technical team ready to help whenever you need." },
  "why.card4.title": { id: "Hiburan Lengkap", en: "Full Entertainment" },
  "why.card4.desc": { id: "Nikmati 100+ Live TV dan 1000+ Video On Demand berkualitas HD.", en: "Enjoy 100+ Live TV channels and 1000+ HD Video On Demand." },

  // Testimonials
  "testimonials.heading1": { id: "Apa Kata", en: "What Our" },
  "testimonials.heading2": { id: "Pelanggan Kami", en: "Customers Say" },
  "testimonials.1.text": { id: "Layanan dedicated internet dari Artamedia sangat stabil. Uptime hampir 100% dan respon tim support sangat cepat.", en: "Artamedia's dedicated internet service is very stable. Almost 100% uptime and the support team response is very fast." },
  "testimonials.2.text": { id: "Kami menggunakan Metro-E untuk menghubungkan 15 cabang. Performanya luar biasa, latency sangat rendah.", en: "We use Metro-E to connect 15 branches. The performance is outstanding, latency is very low." },
  "testimonials.3.text": { id: "Broadband FTTH-nya cepat dan reliable. Cocok untuk tim kami yang bekerja remote. Harga kompetitif dengan kualitas premium.", en: "The Broadband FTTH is fast and reliable. Perfect for our remote-working team. Competitive pricing with premium quality." },

  // Partners
  "partners.heading1": { id: "Trusted by", en: "Trusted by" },
  "partners.heading2": { id: "Businesses", en: "Businesses" },
  "partners.customers1": { id: "Our", en: "Our" },
  "partners.customers2": { id: "Customers", en: "Customers" },

  // ===== BROADBAND PAGE =====
  "bb.hero.title1": { id: "Internet Fiber Cepat, Stabil,", en: "Fast, Stable Fiber Internet," },
  "bb.hero.title2": { id: "Tanpa Batas", en: "Unlimited" },
  "bb.hero.desc": { id: "Broadband FTTH dengan koneksi fiber optik langsung ke rumah dan bisnis Anda. Nikmati kecepatan tinggi, latensi rendah, dan dukungan teknis 24/7.", en: "Broadband FTTH with fiber optic connection directly to your home and business. Enjoy high speed, low latency, and 24/7 technical support." },
  "bb.hero.btn1": { id: "Cek Ketersediaan", en: "Check Availability" },
  "bb.hero.badge1": { id: "Unlimited", en: "Unlimited" },
  "bb.hero.badge2": { id: "No FUP", en: "No FUP" },
  "bb.hero.badge3": { id: "Instalasi Gratis", en: "Free Installation" },
  "bb.hero.badge4": { id: "Support 24/7", en: "24/7 Support" },

  "bb.feat.heading1": { id: "Kenapa Memilih", en: "Why Choose Our" },
  "bb.feat.heading2": { id: "Broadband Kami?", en: "Broadband?" },
  "bb.feat.desc": { id: "Teknologi fiber optik terdepan untuk pengalaman internet terbaik", en: "Leading fiber optic technology for the best internet experience" },
  "bb.feat.1.title": { id: "100% Fiber Optik", en: "100% Fiber Optic" },
  "bb.feat.1.desc": { id: "Koneksi langsung ke rumah tanpa kabel tembaga. Lebih cepat dan stabil.", en: "Direct connection to home without copper cables. Faster and more stable." },
  "bb.feat.2.title": { id: "Unlimited Tanpa FUP", en: "Unlimited No FUP" },
  "bb.feat.2.desc": { id: "Tidak ada batas pemakaian dan tidak ada penurunan kecepatan.", en: "No usage limits and no speed throttling." },
  "bb.feat.3.title": { id: "Stabil & Simetris", en: "Stable & Symmetric" },
  "bb.feat.3.desc": { id: "Upload dan download optimal untuk meeting, CCTV, dan cloud.", en: "Optimal upload and download for meetings, CCTV, and cloud." },
  "bb.feat.4.title": { id: "Support 24/7", en: "24/7 Support" },
  "bb.feat.4.desc": { id: "Tim teknis siap membantu kapan saja.", en: "Technical team ready to help anytime." },
  "bb.feat.5.title": { id: "Monitoring Network 24 Jam", en: "24H Network Monitoring" },
  "bb.feat.5.desc": { id: "Infrastruktur dipantau real-time untuk menjaga kualitas koneksi.", en: "Infrastructure monitored in real-time to maintain connection quality." },

  "bb.pricing.heading1": { id: "Pilih Paket Broadband", en: "Choose a Broadband Plan" },
  "bb.pricing.heading2": { id: "Sesuai Kebutuhan Anda", en: "That Suits Your Needs" },
  "bb.pricing.desc": { id: "Semua paket termasuk instalasi gratis dan dukungan teknis 24/7", en: "All plans include free installation and 24/7 technical support" },
  "bb.pricing.month": { id: "/bulan", en: "/month" },

  "bb.infra.heading1": { id: "Infrastruktur Fiber", en: "High Quality Fiber" },
  "bb.infra.heading2": { id: "Berkualitas Tinggi", en: "Infrastructure" },
  "bb.infra.desc": { id: "Kami menggunakan backbone fiber optik modern dengan sistem monitoring 24 jam untuk memastikan koneksi tetap stabil dan minim gangguan.", en: "We use modern fiber optic backbone with 24-hour monitoring system to ensure stable connection with minimal disruption." },
  "bb.infra.1": { id: "Redundant Network System", en: "Redundant Network System" },
  "bb.infra.2": { id: "Monitoring Real-Time", en: "Real-Time Monitoring" },
  "bb.infra.3": { id: "Tim Network Engineer Berpengalaman", en: "Experienced Network Engineers" },
  "bb.infra.4": { id: "SLA Tinggi untuk Pelanggan Bisnis", en: "High SLA for Business Customers" },

  "bb.cta.heading": { id: "Siap Beralih ke Internet yang Lebih Stabil?", en: "Ready to Switch to More Stable Internet?" },
  "bb.cta.desc": { id: "Nikmati koneksi tanpa batas untuk streaming, gaming, meeting, dan bisnis Anda.", en: "Enjoy unlimited connection for streaming, gaming, meetings, and your business." },
  "bb.cta.btn1": { id: "Daftar Sekarang", en: "Register Now" },
  "bb.cta.btn2": { id: "Hubungi Sales", en: "Contact Sales" },

  // ===== DEDICATED PAGE =====
  "ded.hero.title1": { id: "Dedicated Internet untuk Bisnis", en: "Dedicated Internet for Business" },
  "ded.hero.title2": { id: "Tanpa Kompromi", en: "Without Compromise" },
  "ded.hero.desc": { id: "Koneksi internet 1:1 dedicated bandwidth dengan performa stabil, latency rendah, dan SLA tinggi untuk kebutuhan bisnis mission-critical.", en: "1:1 dedicated bandwidth internet connection with stable performance, low latency, and high SLA for mission-critical business needs." },
  "ded.hero.btn1": { id: "Konsultasi Sekarang", en: "Consult Now" },

  "ded.what.heading1": { id: "Apa Itu", en: "What Is" },
  "ded.what.heading2": { id: "Dedicated Internet?", en: "Dedicated Internet?" },
  "ded.what.desc": { id: "Dedicated Internet adalah layanan koneksi internet eksklusif dengan bandwidth 1:1 tanpa sharing dengan pelanggan lain. Memberikan performa maksimal, stabilitas tinggi, dan latency rendah untuk kebutuhan bisnis profesional.", en: "Dedicated Internet is an exclusive internet connection service with 1:1 bandwidth without sharing with other customers. Providing maximum performance, high stability, and low latency for professional business needs." },
  "ded.what.quote": { id: "Berbeda dengan broadband, Dedicated Internet memberikan bandwidth murni tanpa kontensi.", en: "Unlike broadband, Dedicated Internet provides pure bandwidth without contention." },

  "ded.adv.heading1": { id: "Keunggulan", en: "Advantages of Our" },
  "ded.adv.heading2": { id: "Dedicated Internet Kami", en: "Dedicated Internet" },
  "ded.adv.desc": { id: "Performa enterprise-grade untuk bisnis mission-critical", en: "Enterprise-grade performance for mission-critical business" },
  "ded.adv.1.title": { id: "Bandwidth 1:1", en: "1:1 Bandwidth" },
  "ded.adv.1.desc": { id: "Tidak berbagi jalur dengan pelanggan lain.", en: "No sharing with other customers." },
  "ded.adv.2.title": { id: "SLA Hingga 99.9%", en: "SLA Up to 99.9%" },
  "ded.adv.2.desc": { id: "Jaminan uptime tinggi dengan kompensasi layanan.", en: "High uptime guarantee with service compensation." },
  "ded.adv.3.title": { id: "Latency Rendah", en: "Low Latency" },
  "ded.adv.3.desc": { id: "Ideal untuk VoIP, VPN, trading system, dan cloud.", en: "Ideal for VoIP, VPN, trading systems, and cloud." },
  "ded.adv.4.title": { id: "Static Public IP", en: "Static Public IP" },
  "ded.adv.4.desc": { id: "Mendukung server, CCTV, VPN, dan remote access.", en: "Supports server, CCTV, VPN, and remote access." },
  "ded.adv.5.title": { id: "24/7 NOC Monitoring", en: "24/7 NOC Monitoring" },
  "ded.adv.5.desc": { id: "Dipantau nonstop oleh tim network engineer.", en: "Monitored nonstop by network engineering team." },
  "ded.adv.6.title": { id: "Prioritas Support", en: "Priority Support" },
  "ded.adv.6.desc": { id: "Respon cepat dan teknisi dedicated untuk pelanggan enterprise.", en: "Fast response and dedicated technicians for enterprise customers." },

  "ded.specs.heading1": { id: "Spesifikasi Teknis", en: "Technical" },
  "ded.specs.heading2": { id: "Layanan", en: "Specifications" },
  "ded.specs.desc": { id: "Detail teknis layanan Dedicated Internet kami", en: "Technical details of our Dedicated Internet service" },

  "ded.industry.heading1": { id: "Cocok Untuk", en: "Suitable For" },
  "ded.industry.heading2": { id: "Berbagai Industri", en: "Various Industries" },
  "ded.industry.desc": { id: "Solusi konektivitas enterprise untuk setiap sektor", en: "Enterprise connectivity solutions for every sector" },
  "ded.industry.1.title": { id: "Perkantoran & Corporate", en: "Office & Corporate" },
  "ded.industry.1.desc": { id: "Koneksi stabil untuk operasional tanpa gangguan.", en: "Stable connection for uninterrupted operations." },
  "ded.industry.2.title": { id: "Data Center & ISP", en: "Data Center & ISP" },
  "ded.industry.2.desc": { id: "Bandwidth besar untuk kebutuhan upstream dan peering.", en: "Large bandwidth for upstream and peering needs." },
  "ded.industry.3.title": { id: "Perbankan & Finansial", en: "Banking & Financial" },
  "ded.industry.3.desc": { id: "Keamanan dan kestabilan untuk transaksi real-time.", en: "Security and stability for real-time transactions." },
  "ded.industry.4.title": { id: "Rumah Sakit", en: "Hospital" },
  "ded.industry.4.desc": { id: "Koneksi andal untuk sistem medis dan telemedicine.", en: "Reliable connection for medical systems and telemedicine." },
  "ded.industry.5.title": { id: "Pemerintahan", en: "Government" },
  "ded.industry.5.desc": { id: "Infrastruktur jaringan untuk layanan publik digital.", en: "Network infrastructure for digital public services." },
  "ded.industry.6.title": { id: "Sekolah & Universitas", en: "Schools & Universities" },
  "ded.industry.6.desc": { id: "Internet cepat untuk e-learning dan riset.", en: "Fast internet for e-learning and research." },

  "ded.infra.heading1": { id: "Infrastruktur dan", en: "Infrastructure and" },
  "ded.infra.heading2": { id: "Monitoring 24 Jam", en: "24H Monitoring" },
  "ded.infra.desc": { id: "Jaringan kami didukung oleh backbone fiber berkualitas tinggi dengan sistem monitoring real-time untuk memastikan kestabilan layanan.", en: "Our network is supported by high-quality fiber backbone with real-time monitoring system to ensure service stability." },

  "ded.pricing.heading1": { id: "Solusi Fleksibel", en: "Flexible Solutions" },
  "ded.pricing.heading2": { id: "Sesuai Kebutuhan Bisnis Anda", en: "For Your Business Needs" },
  "ded.pricing.desc": { id: "Harga Dedicated Internet disesuaikan dengan kebutuhan bandwidth, lokasi, dan SLA yang dipilih.", en: "Dedicated Internet pricing is customized based on bandwidth, location, and chosen SLA." },
  "ded.pricing.btn1": { id: "Minta Penawaran", en: "Request Quote" },
  "ded.pricing.btn2": { id: "Hubungi Sales", en: "Contact Sales" },
  "ded.pricing.note": { id: "Hubungi tim kami untuk konsultasi dan survey lokasi gratis.", en: "Contact our team for free consultation and site survey." },

  "ded.cta.heading": { id: "Pastikan Bisnis Anda Selalu Online", en: "Ensure Your Business Stays Online" },
  "ded.cta.desc": { id: "Gunakan Dedicated Internet dengan performa tinggi dan dukungan profesional.", en: "Use Dedicated Internet with high performance and professional support." },
  "ded.cta.btn1": { id: "Konsultasi Sekarang", en: "Consult Now" },
  "ded.cta.btn2": { id: "Minta Penawaran", en: "Request Quote" },

  // ===== METRO-E PAGE =====
  "metro.hero.title1": { id: "Metro-E & Leased Line untuk Koneksi Antar Lokasi", en: "Metro-E & Leased Line for Inter-Location Connectivity" },
  "metro.hero.title2": { id: "Tanpa Batas", en: "Without Limits" },
  "metro.hero.desc": { id: "Solusi konektivitas dedicated antar kantor, data center, dan lokasi bisnis Anda dengan performa stabil, latency rendah, dan SLA tinggi.", en: "Dedicated connectivity solution between offices, data centers, and your business locations with stable performance, low latency, and high SLA." },
  "metro.hero.btn1": { id: "Order Now", en: "Order Now" },
  "metro.hero.btn2": { id: "Konsultasi Sekarang", en: "Consult Now" },

  "metro.what.heading1": { id: "Apa Itu", en: "What Is" },
  "metro.what.heading2": { id: "Metro-E / Leased Line?", en: "Metro-E / Leased Line?" },
  "metro.what.desc1": { id: "Metro Ethernet (Metro-E) adalah layanan konektivitas point-to-point atau point-to-multipoint yang menghubungkan antar lokasi bisnis menggunakan jaringan fiber optik dedicated.", en: "Metro Ethernet (Metro-E) is a point-to-point or point-to-multipoint connectivity service connecting business locations using dedicated fiber optic network." },
  "metro.what.desc2": { id: "Leased Line memberikan jalur privat yang aman dan stabil untuk komunikasi data antar kantor, data center, maupun cabang perusahaan.", en: "Leased Line provides a secure and stable private path for data communication between offices, data centers, and company branches." },
  "metro.what.quote": { id: "Tidak melalui internet publik. Lebih aman, lebih stabil, dan lebih cepat.", en: "Does not go through public internet. More secure, more stable, and faster." },

  "metro.adv.heading1": { id: "Keunggulan", en: "Advantages of Our" },
  "metro.adv.heading2": { id: "Metro-E Kami", en: "Metro-E" },
  "metro.adv.desc": { id: "Konektivitas enterprise-grade untuk bisnis mission-critical", en: "Enterprise-grade connectivity for mission-critical business" },
  "metro.adv.noc.title": { id: "Tim kami memantau jaringan Anda setiap saat", en: "Our team monitors your network at all times" },
  "metro.adv.1.title": { id: "Dedicated Bandwidth 1:1", en: "Dedicated Bandwidth 1:1" },
  "metro.adv.1.desc": { id: "Bandwidth eksklusif tanpa sharing.", en: "Exclusive bandwidth without sharing." },
  "metro.adv.2.title": { id: "Low Latency & High Stability", en: "Low Latency & High Stability" },
  "metro.adv.2.desc": { id: "Performa optimal untuk aplikasi real-time.", en: "Optimal performance for real-time applications." },
  "metro.adv.3.title": { id: "Secure Private Network", en: "Secure Private Network" },
  "metro.adv.3.desc": { id: "Jalur privat tanpa internet publik.", en: "Private path without public internet." },
  "metro.adv.4.title": { id: "Flexible Bandwidth", en: "Flexible Bandwidth" },
  "metro.adv.4.desc": { id: "Tersedia mulai 10 Mbps hingga 100 Gbps.", en: "Available from 10 Mbps to 100 Gbps." },
  "metro.adv.5.title": { id: "Multi-Branch Connectivity", en: "Multi-Branch Connectivity" },
  "metro.adv.5.desc": { id: "Hubungkan semua cabang dalam satu jaringan.", en: "Connect all branches in one network." },
  "metro.adv.6.title": { id: "24/7 Monitoring & SLA", en: "24/7 Monitoring & SLA" },
  "metro.adv.6.desc": { id: "Dipantau nonstop dengan jaminan SLA.", en: "Monitored nonstop with SLA guarantee." },

  "metro.specs.heading1": { id: "Spesifikasi", en: "Technical" },
  "metro.specs.heading2": { id: "Teknis", en: "Specifications" },
  "metro.specs.desc": { id: "Detail teknis layanan Metro-E / Leased Line", en: "Technical details of Metro-E / Leased Line service" },

  "metro.usecase.heading1": { id: "Cocok", en: "Suitable" },
  "metro.usecase.heading2": { id: "Untuk", en: "For" },
  "metro.usecase.desc": { id: "Solusi ideal untuk bisnis yang membutuhkan koneksi antar lokasi dengan performa tinggi dan keamanan maksimal.", en: "Ideal solution for businesses needing high-performance and maximum-security inter-location connectivity." },
  "metro.usecase.infra.title": { id: "Infrastruktur fiber optik kelas enterprise untuk keandalan maksimal", en: "Enterprise-class fiber optic infrastructure for maximum reliability" },
  "metro.usecase.1.title": { id: "Perusahaan Multi Cabang", en: "Multi-Branch Companies" },
  "metro.usecase.1.desc": { id: "Hubungkan seluruh cabang dengan jaringan privat berkecepatan tinggi.", en: "Connect all branches with high-speed private network." },
  "metro.usecase.2.title": { id: "Data Center Interconnection", en: "Data Center Interconnection" },
  "metro.usecase.2.desc": { id: "Koneksi antar DC dengan latensi ultra rendah.", en: "Inter-DC connection with ultra-low latency." },
  "metro.usecase.3.title": { id: "ISP Interconnection", en: "ISP Interconnection" },
  "metro.usecase.3.desc": { id: "Peering dan transit antar operator telekomunikasi.", en: "Peering and transit between telecom operators." },
  "metro.usecase.4.title": { id: "Financial & Banking System", en: "Financial & Banking System" },
  "metro.usecase.4.desc": { id: "Jalur aman untuk transaksi perbankan real-time.", en: "Secure path for real-time banking transactions." },
  "metro.usecase.5.title": { id: "Enterprise VPN Backbone", en: "Enterprise VPN Backbone" },
  "metro.usecase.5.desc": { id: "Backbone VPN korporat dengan performa terjamin.", en: "Corporate VPN backbone with guaranteed performance." },
  "metro.usecase.6.title": { id: "Cloud & Disaster Recovery", en: "Cloud & Disaster Recovery" },
  "metro.usecase.6.desc": { id: "Replikasi data ke cloud dan site cadangan.", en: "Data replication to cloud and backup sites." },

  "metro.coverage.heading1": { id: "Jangkauan", en: "Network" },
  "metro.coverage.heading2": { id: "Jaringan Kami", en: "Coverage" },
  "metro.coverage.desc": { id: "Terhubung ke 10 datacenter utama di area Jabodetabek & Cikarang melalui jaringan Metro Ethernet berkecepatan tinggi.", en: "Connected to 10 major datacenters in Jabodetabek & Cikarang via high-speed Metro Ethernet network." },
  "metro.coverage.btn": { id: "Check Coverage", en: "Check Coverage" },

  "metro.infra.heading1": { id: "Infrastruktur Fiber", en: "National & Regional Fiber" },
  "metro.infra.heading2": { id: "Nasional & Regional", en: "Infrastructure" },
  "metro.infra.desc": { id: "Didukung backbone fiber nasional dan interkoneksi regional Asia Tenggara, jaringan kami dirancang untuk memastikan konektivitas cepat, stabil, dan aman bagi bisnis Anda.", en: "Supported by national fiber backbone and Southeast Asian regional interconnection, our network is designed to ensure fast, stable, and secure connectivity for your business." },

  "metro.cta.heading": { id: "Hubungkan Semua Lokasi Bisnis Anda dengan Stabil", en: "Connect All Your Business Locations Stably" },
  "metro.cta.desc": { id: "Percayakan konektivitas antar cabang dan data center Anda kepada jaringan fiber profesional kami.", en: "Trust the connectivity between your branches and data centers to our professional fiber network." },
  "metro.cta.btn1": { id: "Order Now", en: "Order Now" },
  "metro.cta.btn2": { id: "Hubungi Sales", en: "Contact Sales" },

  // ===== DWDM PAGE =====
  "dwdm.hero.title": { id: "DWDM Carrier-Grade Transport Solution", en: "DWDM Carrier-Grade Transport Solution" },
  "dwdm.hero.desc": { id: "Solusi transmisi kapasitas besar berbasis Dense Wavelength Division Multiplexing untuk backbone nasional, data center interconnect, dan operator network.", en: "High-capacity transmission solution based on Dense Wavelength Division Multiplexing for national backbone, data center interconnect, and operator networks." },
  "dwdm.hero.btn1": { id: "Consult Our Team", en: "Consult Our Team" },
  "dwdm.hero.btn2": { id: "Request Proposal", en: "Request Proposal" },

  "dwdm.what.heading1": { id: "Apa Itu", en: "What Is" },
  "dwdm.what.heading2": { id: "DWDM?", en: "DWDM?" },
  "dwdm.what.desc": { id: "DWDM (Dense Wavelength Division Multiplexing) adalah teknologi transmisi fiber optik yang memungkinkan multiple wavelength berjalan dalam satu core fiber, sehingga menghasilkan kapasitas transmisi data sangat besar dalam satu jalur fiber.", en: "DWDM (Dense Wavelength Division Multiplexing) is a fiber optic transmission technology that allows multiple wavelengths to travel in a single fiber core, producing very large data transmission capacity in a single fiber path." },
  "dwdm.what.quote": { id: "Satu fiber, multi-channel, multi-terabit capacity.", en: "One fiber, multi-channel, multi-terabit capacity." },

  "dwdm.feat.heading1": { id: "Keunggulan", en: "Advantages of Our" },
  "dwdm.feat.heading2": { id: "DWDM Kami", en: "DWDM" },
  "dwdm.feat.desc": { id: "Teknologi transport optik terdepan untuk kapasitas maksimal", en: "Leading optical transport technology for maximum capacity" },
  "dwdm.feat.banner.title": { id: "Optical Transport Equipment", en: "Optical Transport Equipment" },
  "dwdm.feat.banner.desc": { id: "Perangkat DWDM kelas carrier untuk kapasitas multi-terabit", en: "Carrier-class DWDM equipment for multi-terabit capacity" },
  "dwdm.feat.1.title": { id: "Multi-Channel Wavelength", en: "Multi-Channel Wavelength" },
  "dwdm.feat.1.desc": { id: "Mendukung multiple lambda dalam satu fiber.", en: "Supports multiple lambdas in a single fiber." },
  "dwdm.feat.2.title": { id: "High Capacity up to Terabit", en: "High Capacity up to Terabit" },
  "dwdm.feat.2.desc": { id: "100G / 200G / 400G scalable.", en: "100G / 200G / 400G scalable." },
  "dwdm.feat.3.title": { id: "Long Distance Transmission", en: "Long Distance Transmission" },
  "dwdm.feat.3.desc": { id: "Ideal untuk backbone antar kota dan antar negara.", en: "Ideal for inter-city and international backbone." },
  "dwdm.feat.4.title": { id: "Low Latency", en: "Low Latency" },
  "dwdm.feat.4.desc": { id: "Cocok untuk DCI dan inter-operator traffic.", en: "Suitable for DCI and inter-operator traffic." },
  "dwdm.feat.5.title": { id: "Scalable Architecture", en: "Scalable Architecture" },
  "dwdm.feat.5.desc": { id: "Mudah upgrade tanpa penarikan fiber baru.", en: "Easy to upgrade without new fiber deployment." },
  "dwdm.feat.6.title": { id: "Carrier-Grade Reliability", en: "Carrier-Grade Reliability" },
  "dwdm.feat.6.desc": { id: "Infrastruktur dengan monitoring 24/7 dan SLA tinggi.", en: "Infrastructure with 24/7 monitoring and high SLA." },

  "dwdm.specs.heading1": { id: "Spesifikasi", en: "Technical" },
  "dwdm.specs.heading2": { id: "Teknis", en: "Specifications" },
  "dwdm.specs.desc": { id: "Detail teknis layanan DWDM carrier-grade", en: "Technical details of carrier-grade DWDM service" },

  "dwdm.usecase.heading1": { id: "Cocok", en: "Suitable" },
  "dwdm.usecase.heading2": { id: "Untuk", en: "For" },
  "dwdm.usecase.desc": { id: "Solusi ideal untuk transport data skala besar dengan efisiensi tinggi.", en: "Ideal solution for large-scale data transport with high efficiency." },
  "dwdm.usecase.banner.title": { id: "Carrier-Grade Data Center", en: "Carrier-Grade Data Center" },
  "dwdm.usecase.banner.desc": { id: "Fasilitas interkoneksi data center dengan standar carrier-grade", en: "Data center interconnection facility with carrier-grade standards" },
  "dwdm.usecase.1.title": { id: "Data Center Interconnect (DCI)", en: "Data Center Interconnect (DCI)" },
  "dwdm.usecase.1.desc": { id: "Interkoneksi antar data center dengan kapasitas terabit.", en: "Inter-data center interconnection with terabit capacity." },
  "dwdm.usecase.2.title": { id: "National Backbone Operator", en: "National Backbone Operator" },
  "dwdm.usecase.2.desc": { id: "Backbone nasional untuk operator telekomunikasi.", en: "National backbone for telecom operators." },
  "dwdm.usecase.3.title": { id: "ISP Aggregation Network", en: "ISP Aggregation Network" },
  "dwdm.usecase.3.desc": { id: "Agregasi trafik ISP dengan efisiensi tinggi.", en: "ISP traffic aggregation with high efficiency." },
  "dwdm.usecase.4.title": { id: "Cloud Provider Connectivity", en: "Cloud Provider Connectivity" },
  "dwdm.usecase.4.desc": { id: "Konektivitas langsung ke cloud provider.", en: "Direct connectivity to cloud providers." },
  "dwdm.usecase.5.title": { id: "Inter-City Transport", en: "Inter-City Transport" },
  "dwdm.usecase.5.desc": { id: "Transport data antar kota berkapasitas besar.", en: "High-capacity inter-city data transport." },
  "dwdm.usecase.6.title": { id: "International Gateway", en: "International Gateway" },
  "dwdm.usecase.6.desc": { id: "Gerbang konektivitas internasional.", en: "International connectivity gateway." },

  "dwdm.coverage.heading1": { id: "Backbone", en: "National & Regional" },
  "dwdm.coverage.heading2": { id: "Nasional & Regional", en: "Backbone" },
  "dwdm.coverage.desc": { id: "Terhubung ke 10 datacenter utama di area Jabodetabek & Cikarang melalui jaringan DWDM berkapasitas tinggi.", en: "Connected to 10 major datacenters in Jabodetabek & Cikarang via high-capacity DWDM network." },
  "dwdm.coverage.btn": { id: "Check Network Availability", en: "Check Network Availability" },

  "dwdm.infra.heading1": { id: "Infrastruktur Transport", en: "Modern Optical" },
  "dwdm.infra.heading2": { id: "Optik Modern", en: "Transport Infrastructure" },
  "dwdm.infra.desc": { id: "Didukung backbone fiber optik modern dengan teknologi DWDM terbaru untuk memastikan kapasitas besar, stabilitas tinggi, dan skalabilitas jangka panjang.", en: "Supported by modern fiber optic backbone with latest DWDM technology to ensure large capacity, high stability, and long-term scalability." },

  "dwdm.cta.heading1": { id: "Bangun Backbone Berkapasitas Besar", en: "Build a High-Capacity Backbone" },
  "dwdm.cta.heading2": { id: "Bersama Kami", en: "With Us" },
  "dwdm.cta.desc": { id: "Hubungi tim engineering kami untuk solusi DWDM carrier-grade yang scalable dan future-ready.", en: "Contact our engineering team for scalable and future-ready carrier-grade DWDM solutions." },
  "dwdm.cta.btn1": { id: "Request Proposal", en: "Request Proposal" },
  "dwdm.cta.btn2": { id: "Contact Engineering Team", en: "Contact Engineering Team" },

  // ===== DARK FIBER PAGE =====
  "df.hero.title1": { id: "Dark Fiber untuk", en: "Dark Fiber for" },
  "df.hero.title2": { id: "Kontrol Penuh", en: "Full Control" },
  "df.hero.title3": { id: "Infrastruktur Anda", en: "of Your Infrastructure" },
  "df.hero.desc": { id: "Sewa core fiber optik eksklusif untuk membangun jaringan backbone sendiri dengan fleksibilitas, kapasitas, dan keamanan maksimal.", en: "Lease exclusive fiber optic cores to build your own backbone network with maximum flexibility, capacity, and security." },
  "df.hero.btn1": { id: "Consult Our Team", en: "Consult Our Team" },
  "df.hero.btn2": { id: "Request Proposal", en: "Request Proposal" },

  "df.what.heading1": { id: "Apa Itu", en: "What Is" },
  "df.what.heading2": { id: "Dark Fiber?", en: "Dark Fiber?" },
  "df.what.desc1": { id: "Dark Fiber adalah layanan penyewaan core fiber optik tanpa perangkat aktif. Pelanggan memiliki kontrol penuh untuk mengoperasikan dan mengatur perangkat transmisi sendiri sesuai kebutuhan.", en: "Dark Fiber is a fiber optic core leasing service without active equipment. Customers have full control to operate and manage their own transmission equipment as needed." },
  "df.what.quote": { id: "Infrastruktur fisik kami, kontrol jaringan sepenuhnya milik Anda.", en: "Our physical infrastructure, your complete network control." },
  "df.what.desc2": { id: "Ideal untuk operator, ISP, data center, dan enterprise skala besar yang membutuhkan fleksibilitas maksimum.", en: "Ideal for operators, ISPs, data centers, and large-scale enterprises needing maximum flexibility." },

  "df.adv.heading1": { id: "Keunggulan", en: "Advantages of Our" },
  "df.adv.heading2": { id: "Dark Fiber Kami", en: "Dark Fiber" },
  "df.adv.desc": { id: "Kontrol penuh atas infrastruktur fiber dengan fleksibilitas maksimal.", en: "Full control over fiber infrastructure with maximum flexibility." },
  "df.adv.1.title": { id: "Full Control", en: "Full Control" },
  "df.adv.1.desc": { id: "Anda mengelola sendiri perangkat dan kapasitas transmisi.", en: "You manage your own equipment and transmission capacity." },
  "df.adv.2.title": { id: "Unlimited Bandwidth Potential", en: "Unlimited Bandwidth Potential" },
  "df.adv.2.desc": { id: "Kapasitas ditentukan oleh teknologi perangkat Anda.", en: "Capacity determined by your equipment technology." },
  "df.adv.3.title": { id: "Secure & Private", en: "Secure & Private" },
  "df.adv.3.desc": { id: "Jalur fiber eksklusif tanpa sharing dengan pihak lain.", en: "Exclusive fiber path without sharing with others." },
  "df.adv.4.title": { id: "Long-Term Scalability", en: "Long-Term Scalability" },
  "df.adv.4.desc": { id: "Mudah upgrade kapasitas tanpa perubahan fisik jaringan.", en: "Easy capacity upgrade without physical network changes." },
  "df.adv.5.title": { id: "Carrier-Grade Infrastructure", en: "Carrier-Grade Infrastructure" },
  "df.adv.5.desc": { id: "Backbone fiber berkualitas tinggi.", en: "High-quality fiber backbone." },
  "df.adv.6.title": { id: "Flexible Deployment", en: "Flexible Deployment" },
  "df.adv.6.desc": { id: "Cocok untuk metro, intercity, hingga backbone nasional.", en: "Suitable for metro, intercity, to national backbone." },

  "df.specs.heading1": { id: "Spesifikasi", en: "Infrastructure" },
  "df.specs.heading2": { id: "Infrastruktur", en: "Specifications" },
  "df.specs.desc": { id: "Detail teknis layanan Dark Fiber", en: "Technical details of Dark Fiber service" },

  "df.usecase.heading1": { id: "Cocok", en: "Suitable" },
  "df.usecase.heading2": { id: "Untuk", en: "For" },
  "df.usecase.desc": { id: "Solusi tepat untuk organisasi yang membutuhkan kontrol dan skalabilitas maksimal.", en: "The right solution for organizations needing maximum control and scalability." },

  "df.process.heading1": { id: "Proses", en: "Implementation" },
  "df.process.heading2": { id: "Implementasi", en: "Process" },
  "df.process.desc": { id: "Dari konsultasi hingga aktivasi dalam proses yang terstruktur.", en: "From consultation to activation in a structured process." },
  "df.process.1": { id: "Konsultasi & Perencanaan Jalur", en: "Consultation & Route Planning" },
  "df.process.2": { id: "Survey & Engineering Design", en: "Survey & Engineering Design" },
  "df.process.3": { id: "Provisioning Core Fiber", en: "Core Fiber Provisioning" },
  "df.process.4": { id: "Activation & Handover", en: "Activation & Handover" },

  "df.infra.heading1": { id: "Infrastruktur Fiber", en: "National Fiber" },
  "df.infra.heading2": { id: "Nasional", en: "Infrastructure" },
  "df.infra.desc": { id: "Jaringan fiber kami dibangun dengan standar carrier-grade untuk memastikan kualitas fisik jaringan yang stabil dan siap mendukung kebutuhan operator dan enterprise skala besar.", en: "Our fiber network is built with carrier-grade standards to ensure stable physical network quality and readiness to support large-scale operator and enterprise needs." },

  "df.cta.heading": { id: "Bangun Jaringan Sendiri dengan Infrastruktur Profesional", en: "Build Your Own Network with Professional Infrastructure" },
  "df.cta.desc": { id: "Diskusikan kebutuhan dark fiber Anda bersama tim engineering kami hari ini.", en: "Discuss your dark fiber needs with our engineering team today." },
  "df.cta.btn1": { id: "Request Proposal", en: "Request Proposal" },
  "df.cta.btn2": { id: "Contact Engineering Team", en: "Contact Engineering Team" },

  // ===== BACKUP ON DEMAND PAGE =====
  "bk.hero.title1": { id: "Backup On Demand untuk", en: "Backup On Demand for" },
  "bk.hero.title2": { id: "Koneksi Tanpa Gangguan", en: "Uninterrupted Connectivity" },
  "bk.hero.desc": { id: "Solusi koneksi cadangan otomatis yang aktif saat link utama mengalami gangguan, memastikan bisnis Anda tetap online 24/7.", en: "Automatic backup connection solution that activates when the primary link experiences disruption, ensuring your business stays online 24/7." },
  "bk.hero.btn1": { id: "Consult Our Team", en: "Consult Our Team" },
  "bk.hero.btn2": { id: "Request Proposal", en: "Request Proposal" },

  "bk.what.heading1": { id: "Apa Itu", en: "What Is" },
  "bk.what.heading2": { id: "Backup On Demand?", en: "Backup On Demand?" },
  "bk.what.desc": { id: "Scalable International Connectivity, Delivered On Demand — koneksi cadangan otomatis yang memastikan bisnis Anda tetap online 24/7.", en: "Scalable International Connectivity, Delivered On Demand — automatic backup connection ensuring your business stays online 24/7." },
  "bk.what.1.title": { id: "Instant, Flexible Scalability", en: "Instant, Flexible Scalability" },
  "bk.what.1.desc": { id: "Scale bandwidth internasional naik-turun secara instan sesuai kebutuhan, tanpa delay atau waktu provisioning lama.", en: "Scale international bandwidth up and down instantly as needed, without delay or long provisioning time." },
  "bk.what.2.title": { id: "Cost-Efficient Bandwidth", en: "Cost-Efficient Bandwidth" },
  "bk.what.2.desc": { id: "Bayar hanya kapasitas yang digunakan, mengurangi biaya overprovisioning dan bandwidth yang tidak terpakai.", en: "Pay only for capacity used, reducing overprovisioning costs and unused bandwidth." },
  "bk.what.3.title": { id: "No Long-Term Lock-in", en: "No Long-Term Lock-in" },
  "bk.what.3.desc": { id: "Tanpa kontrak jangka panjang. Nikmati kebebasan untuk mengatur bandwidth kapan saja sesuai kebutuhan.", en: "No long-term contracts. Enjoy the freedom to adjust bandwidth anytime as needed." },
  "bk.what.intl": { id: "Infrastruktur koneksi Jakarta – Singapore untuk redundansi maksimal", en: "Jakarta – Singapore connection infrastructure for maximum redundancy" },

  "bk.adv.heading1": { id: "Keunggulan", en: "Advantages of" },
  "bk.adv.heading2": { id: "Backup On Demand", en: "Backup On Demand" },
  "bk.adv.desc": { id: "Perlindungan koneksi menyeluruh untuk bisnis mission-critical Anda.", en: "Comprehensive connection protection for your mission-critical business." },
  "bk.adv.1.title": { id: "Automatic Failover", en: "Automatic Failover" },
  "bk.adv.1.desc": { id: "Peralihan koneksi tanpa intervensi manual.", en: "Connection switching without manual intervention." },
  "bk.adv.2.title": { id: "Zero Downtime Protection", en: "Zero Downtime Protection" },
  "bk.adv.2.desc": { id: "Mengurangi risiko gangguan operasional.", en: "Reduces risk of operational disruption." },
  "bk.adv.3.title": { id: "Flexible Bandwidth", en: "Flexible Bandwidth" },
  "bk.adv.3.desc": { id: "Kapasitas backup disesuaikan kebutuhan.", en: "Backup capacity customized to needs." },
  "bk.adv.4.title": { id: "Multi-Technology Option", en: "Multi-Technology Option" },
  "bk.adv.4.desc": { id: "Fiber, Wireless, atau Hybrid Backup.", en: "Fiber, Wireless, or Hybrid Backup." },
  "bk.adv.5.title": { id: "SLA Supported", en: "SLA Supported" },
  "bk.adv.5.desc": { id: "Didukung monitoring dan jaminan layanan.", en: "Supported by monitoring and service guarantee." },
  "bk.adv.6.title": { id: "Enterprise-Ready", en: "Enterprise-Ready" },
  "bk.adv.6.desc": { id: "Cocok untuk sistem mission-critical.", en: "Suitable for mission-critical systems." },

  "bk.specs.heading1": { id: "Spesifikasi", en: "Service" },
  "bk.specs.heading2": { id: "Layanan", en: "Specifications" },
  "bk.specs.desc": { id: "Detail teknis layanan Backup On Demand", en: "Technical details of Backup On Demand service" },

  "bk.usecase.heading1": { id: "Cocok", en: "Suitable" },
  "bk.usecase.heading2": { id: "Untuk", en: "For" },
  "bk.usecase.desc": { id: "Pastikan operasional bisnis tetap berjalan meskipun terjadi gangguan jaringan.", en: "Ensure business operations continue despite network disruptions." },
  "bk.usecase.banner.title": { id: "Enterprise Connectivity", en: "Enterprise Connectivity" },
  "bk.usecase.banner.desc": { id: "Koneksi backup untuk gedung perkantoran, rumah sakit, dan perbankan", en: "Backup connection for office buildings, hospitals, and banking" },
  "bk.usecase.1.title": { id: "Perbankan & Finansial", en: "Banking & Financial" },
  "bk.usecase.1.desc": { id: "Jaminan koneksi untuk transaksi perbankan real-time.", en: "Connection guarantee for real-time banking transactions." },
  "bk.usecase.2.title": { id: "Rumah Sakit", en: "Hospital" },
  "bk.usecase.2.desc": { id: "Konektivitas vital untuk sistem rekam medis dan telemedicine.", en: "Vital connectivity for medical records and telemedicine systems." },
  "bk.usecase.3.title": { id: "Data Center", en: "Data Center" },
  "bk.usecase.3.desc": { id: "Redundansi koneksi untuk uptime data center maksimal.", en: "Connection redundancy for maximum data center uptime." },
  "bk.usecase.4.title": { id: "E-Commerce Platform", en: "E-Commerce Platform" },
  "bk.usecase.4.desc": { id: "Pastikan platform belanja online selalu tersedia.", en: "Ensure online shopping platform is always available." },
  "bk.usecase.5.title": { id: "Corporate Office", en: "Corporate Office" },
  "bk.usecase.5.desc": { id: "Produktivitas kantor tetap terjaga tanpa downtime.", en: "Office productivity maintained without downtime." },
  "bk.usecase.6.title": { id: "ISP & Operator", en: "ISP & Operator" },
  "bk.usecase.6.desc": { id: "Backup upstream untuk keandalan layanan ISP.", en: "Upstream backup for ISP service reliability." },

  "bk.how.heading1": { id: "Bagaimana", en: "How Does It" },
  "bk.how.heading2": { id: "Cara Kerjanya?", en: "Work?" },
  "bk.how.desc": { id: "Proses failover otomatis yang menjaga bisnis Anda tetap online.", en: "Automatic failover process that keeps your business online." },
  "bk.how.banner.title": { id: "Automatic Failover System", en: "Automatic Failover System" },
  "bk.how.banner.desc": { id: "Peralihan koneksi otomatis tanpa intervensi manual", en: "Automatic connection switching without manual intervention" },
  "bk.how.1.title": { id: "Primary Link Active", en: "Primary Link Active" },
  "bk.how.1.desc": { id: "Koneksi utama berjalan normal.", en: "Primary connection running normally." },
  "bk.how.2.title": { id: "Link Failure Detected", en: "Link Failure Detected" },
  "bk.how.2.desc": { id: "Sistem mendeteksi gangguan secara otomatis.", en: "System detects disruption automatically." },
  "bk.how.3.title": { id: "Automatic Failover", en: "Automatic Failover" },
  "bk.how.3.desc": { id: "Backup link aktif dalam hitungan detik.", en: "Backup link activates within seconds." },
  "bk.how.4.title": { id: "Primary Link Restored", en: "Primary Link Restored" },
  "bk.how.4.desc": { id: "Koneksi kembali ke jalur utama secara otomatis.", en: "Connection returns to primary path automatically." },

  "bk.arch.heading1": { id: "Product", en: "Product" },
  "bk.arch.heading2": { id: "Architecture", en: "Architecture" },
  "bk.arch.desc": { id: "Dua opsi arsitektur untuk memenuhi kebutuhan konektivitas backup Anda.", en: "Two architecture options to meet your backup connectivity needs." },

  "bk.infra.heading1": { id: "Monitoring dan Infrastruktur", en: "Monitoring and" },
  "bk.infra.heading2": { id: "Andal", en: "Reliable Infrastructure" },
  "bk.infra.desc": { id: "Didukung sistem monitoring 24 jam dan infrastruktur fiber profesional untuk memastikan transisi koneksi berlangsung cepat dan stabil.", en: "Supported by 24-hour monitoring system and professional fiber infrastructure to ensure fast and stable connection transition." },

  "bk.cta.heading": { id: "Pastikan Bisnis Anda Tetap Online", en: "Ensure Your Business Stays Online" },
  "bk.cta.desc": { id: "Diskusikan kebutuhan backup koneksi Anda bersama tim kami hari ini.", en: "Discuss your backup connection needs with our team today." },
  "bk.cta.btn1": { id: "Request Proposal", en: "Request Proposal" },
  "bk.cta.btn2": { id: "Contact Sales", en: "Contact Sales" },

  // Common
  "common.order": { id: "Order Now", en: "Order Now" },
  "common.wa": { id: "Order via WhatsApp", en: "Order via WhatsApp" },
  "common.step": { id: "Step", en: "Step" },
};

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  setLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    return saved && ["id", "en"].includes(saved) ? saved : "id";
  });

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const translate = (key: string): string => {
    return t[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
