import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "id" | "en" | "cn";

type Translations = Record<string, Record<Lang, string>>;

const t: Translations = {
  // Navbar
  "nav.home": { id: "Home", en: "Home", cn: "首页" },
  "nav.services": { id: "Layanan", en: "Services", cn: "服务" },
  "nav.coverage": { id: "Coverage", en: "Coverage", cn: "覆盖范围" },
  "nav.about": { id: "About Us", en: "About Us", cn: "关于我们" },
  "nav.contact": { id: "Contact Us", en: "Contact Us", cn: "联系我们" },
  "nav.order": { id: "Order Now", en: "Order Now", cn: "立即订购" },

  // Hero
  "hero.title1": { id: "Get Connected,", en: "Get Connected,", cn: "保持连接，" },
  "hero.title2": { id: "Always Connected", en: "Always Connected", cn: "永不断线" },
  "hero.subtitle": {
    id: "Internet Service Provider, IT Consultant, Networking & Communication",
    en: "Internet Service Provider, IT Consultant, Networking & Communication",
    cn: "互联网服务提供商、IT咨询、网络与通信",
  },
  "hero.btn.services": { id: "Lihat Layanan", en: "Our Services", cn: "查看服务" },
  "hero.btn.coverage": { id: "Cek Coverage", en: "Check Coverage", cn: "查看覆盖" },
  "hero.badge.fiber": { id: "100% Fiber Optik", en: "100% Fiber Optic", cn: "100% 光纤" },
  "hero.badge.sla": { id: "SLA Tinggi", en: "High SLA", cn: "高SLA" },
  "hero.badge.support": { id: "24/7 Support", en: "24/7 Support", cn: "全天候支持" },
  "hero.badge.monitoring": { id: "Network Monitoring", en: "Network Monitoring", cn: "网络监控" },

  // About
  "about.heading1": { id: "About", en: "About", cn: "关于" },
  "about.heading2": { id: "Us", en: "Us", cn: "我们" },
  "about.desc1": {
    id: "Berawal dari CV E-Media Indonesia pada tahun 2006 sebagai penyedia perangkat IT, kami terus berkembang hingga menjadi",
    en: "Starting from CV E-Media Indonesia in 2006 as an IT equipment provider, we have grown into",
    cn: "从2006年作为IT设备供应商的CV E-Media Indonesia开始，我们不断发展成为",
  },
  "about.company": { id: "PT Artamedia Citra Telematika Indonesia", en: "PT Artamedia Citra Telematika Indonesia", cn: "PT Artamedia Citra Telematika Indonesia" },
  "about.desc1b": {
    id: " — penyedia layanan internet fiber optik terpercaya dengan izin ISP resmi dan anggota APJII.",
    en: " — a trusted fiber optic internet service provider with official ISP license and APJII member.",
    cn: " — 一家拥有官方ISP许可证和APJII会员资格的值得信赖的光纤互联网服务提供商。",
  },
  "about.desc2": {
    id: "Dengan pengalaman lebih dari 18 tahun, kami menyediakan solusi koneksi internet, IT consultant, networking, dan komunikasi untuk kebutuhan residensial hingga enterprise.",
    en: "With over 18 years of experience, we provide internet connectivity solutions, IT consulting, networking, and communication for residential to enterprise needs.",
    cn: "凭借超过18年的经验，我们为住宅到企业需求提供互联网连接解决方案、IT咨询、网络和通信服务。",
  },
  "about.years": { id: "Tahun Pengalaman", en: "Years of Experience", cn: "年经验" },
  "about.tl.2006.title": { id: "Awal Berdiri", en: "Founded", cn: "成立" },
  "about.tl.2006.desc": { id: "CV E-Media Indonesia sebagai penyedia perangkat IT", en: "CV E-Media Indonesia as an IT equipment provider", cn: "CV E-Media Indonesia 作为IT设备供应商" },
  "about.tl.2014.title": { id: "System Integrator", en: "System Integrator", cn: "系统集成商" },
  "about.tl.2014.desc": { id: "Manage service network telekomunikasi celluler fix network", en: "Managed telecom cellular and fixed network services", cn: "管理电信蜂窝和固定网络服务" },
  "about.tl.2017.title": { id: "Berubah PT", en: "Incorporated", cn: "公司化" },
  "about.tl.2017.desc": { id: "PT Artamedia Citra Telematika Indonesia berdiri", en: "PT Artamedia Citra Telematika Indonesia established", cn: "PT Artamedia Citra Telematika Indonesia 成立" },
  "about.tl.2018.title": { id: "Izin ISP", en: "ISP License", cn: "ISP许可证" },
  "about.tl.2018.desc": { id: "Internet Service Provider, anggota APJII", en: "Internet Service Provider, APJII member", cn: "互联网服务提供商，APJII会员" },
  "about.tl.2019.title": { id: "Izin Jartup", en: "Network License", cn: "网络许可证" },
  "about.tl.2019.desc": { id: "Penyediaan akses FO dan radio license", en: "Fiber optic access and radio license provision", cn: "光纤接入和无线电许可证" },
  "about.purpose": { id: "Our Purpose", en: "Our Purpose", cn: "我们的使命" },
  "about.vision": { id: "Visi", en: "Vision", cn: "愿景" },
  "about.mission": { id: "Misi", en: "Mission", cn: "使命" },
  "about.vision.text": { id: "Menjadi pemain utama dalam bisnis solusi informasi dan komunikasi di regional.", en: "Being a major player in business information and communication solutions in the region.", cn: "成为区域信息和通信解决方案业务的主要参与者。" },
  "about.mission.text": { id: "Mendukung kegiatan bisnis bagi perusahaan dengan solusi informasi dan komunikasi yang murah dan handal.", en: "Supporting business activities for enterprises with affordable and reliable information and communication solutions.", cn: "以经济实惠且可靠的信息和通信解决方案支持企业业务活动。" },
  "about.growth": { id: "Company Growth", en: "Company Growth", cn: "公司增长" },
  "about.growth.heading1": { id: "Pertumbuhan", en: "Company", cn: "公司" },
  "about.growth.heading2": { id: "Perusahaan", en: "Growth", cn: "增长" },
  "about.growth.revenue": { id: "Revenue di 2022 (Rupiah)", en: "Revenue in 2022 (Rupiah)", cn: "2022年收入（卢比）" },
  "about.growth.desc": { id: "Sejak berdiri sebagai PT di tahun 2017, pendapatan perusahaan terus meningkat secara konsisten dari 1.873 juta rupiah hingga mencapai 9.062 juta rupiah di tahun 2022 — pertumbuhan hampir", en: "Since incorporation in 2017, company revenue has consistently increased from 1,873 million rupiah to 9,062 million rupiah in 2022 — almost", cn: "自2017年成立以来，公司收入从18.73亿卢比持续增长到2022年的90.62亿卢比——在6年内增长了近" },
  "about.growth.times": { id: "5x lipat", en: "5x growth", cn: "5倍" },
  "about.growth.period": { id: "dalam 6 tahun.", en: "in 6 years.", cn: "。" },

  // Coverage
  "coverage.heading1": { id: "Area", en: "Area", cn: "覆盖" },
  "coverage.heading2": { id: "Coverage", en: "Coverage", cn: "范围" },
  "coverage.desc": { id: "Jaringan fiber optik kami menjangkau kota-kota besar di seluruh Indonesia hingga Asia Tenggara.", en: "Our fiber optic network reaches major cities across Indonesia and Southeast Asia.", cn: "我们的光纤网络覆盖印度尼西亚和东南亚的主要城市。" },
  "coverage.btn": { id: "Cek Coverage", en: "Check Coverage", cn: "查看覆盖" },

  // Stats
  "stats.experience": { id: "Tahun Pengalaman", en: "Years of Experience", cn: "年经验" },
  "stats.customers": { id: "Pelanggan Aktif", en: "Active Customers", cn: "活跃客户" },
  "stats.uptime": { id: "Uptime SLA", en: "Uptime SLA", cn: "在线率SLA" },
  "stats.monitoring": { id: "Monitoring", en: "Monitoring", cn: "全天监控" },

  // FinalCTA
  "cta.heading": { id: "Siap Menggunakan Internet yang Lebih Stabil?", en: "Ready for a More Stable Internet?", cn: "准备好使用更稳定的互联网了吗？" },
  "cta.desc": { id: "Hubungi tim kami hari ini dan dapatkan solusi terbaik untuk kebutuhan Anda.", en: "Contact our team today and get the best solution for your needs.", cn: "立即联系我们的团队，获取最适合您需求的解决方案。" },
  "cta.order": { id: "Order Now", en: "Order Now", cn: "立即订购" },
  "cta.contact": { id: "Contact Us", en: "Contact Us", cn: "联系我们" },

  // Contact
  "contact.heading1": { id: "Contact", en: "Contact", cn: "联系" },
  "contact.heading2": { id: "Us", en: "Us", cn: "我们" },
  "contact.desc": { id: "Hubungi kami untuk konsultasi, penawaran, atau pertanyaan seputar layanan internet fiber optik kami.", en: "Contact us for consultation, quotes, or questions about our fiber optic internet services.", cn: "请联系我们进行咨询、报价或有关我们光纤互联网服务的问题。" },
  "contact.sales": { id: "Sales", en: "Sales", cn: "销售" },
  "contact.sales.desc": { id: "Untuk penawaran dan konsultasi layanan", en: "For quotes and service consultation", cn: "报价和服务咨询" },
  "contact.support": { id: "Technical Support", en: "Technical Support", cn: "技术支持" },
  "contact.support.desc": { id: "Untuk bantuan teknis dan gangguan layanan", en: "For technical assistance and service issues", cn: "技术援助和服务问题" },
  "contact.wa": { id: "WhatsApp", en: "WhatsApp", cn: "WhatsApp" },
  "contact.wa.link": { id: "Chat via WhatsApp", en: "Chat via WhatsApp", cn: "通过WhatsApp聊天" },
  "contact.wa.desc": { id: "Fast response untuk konsultasi langsung", en: "Fast response for direct consultation", cn: "快速响应直接咨询" },
  "contact.hours": { id: "Jam Operasional", en: "Operating Hours", cn: "营业时间" },
  "contact.hours.time": { id: "Senin – Jumat: 08.00 – 17.00 WIB", en: "Mon – Fri: 08:00 – 17:00 WIB", cn: "周一至周五: 08:00 – 17:00 WIB" },
  "contact.hours.support": { id: "Support teknis tersedia 24/7", en: "Technical support available 24/7", cn: "技术支持全天候可用" },
  "contact.form.title": { id: "Kirim Pesan", en: "Send Message", cn: "发送消息" },
  "contact.form.desc": { id: "Isi form di bawah dan tim kami akan segera menghubungi Anda.", en: "Fill in the form below and our team will contact you soon.", cn: "填写下面的表格，我们的团队将尽快与您联系。" },
  "contact.form.name": { id: "Nama Lengkap", en: "Full Name", cn: "全名" },
  "contact.form.email": { id: "Email", en: "Email", cn: "邮箱" },
  "contact.form.company": { id: "Perusahaan", en: "Company", cn: "公司" },
  "contact.form.service": { id: "Layanan yang Diminati", en: "Service of Interest", cn: "感兴趣的服务" },
  "contact.form.service.placeholder": { id: "Pilih layanan...", en: "Select service...", cn: "选择服务..." },
  "contact.form.other": { id: "Lainnya", en: "Other", cn: "其他" },
  "contact.form.message": { id: "Pesan", en: "Message", cn: "留言" },
  "contact.form.message.placeholder": { id: "Ceritakan kebutuhan Anda...", en: "Tell us about your needs...", cn: "告诉我们您的需求..." },
  "contact.form.submit": { id: "Kirim via WhatsApp", en: "Send via WhatsApp", cn: "通过WhatsApp发送" },

  // Footer
  "footer.desc": { id: "Penyedia layanan internet fiber optik terpercaya di Indonesia.", en: "Trusted fiber optic internet service provider in Indonesia.", cn: "印度尼西亚值得信赖的光纤互联网服务提供商。" },
  "footer.services": { id: "Layanan", en: "Services", cn: "服务" },
  "footer.company": { id: "Company", en: "Company", cn: "公司" },
  "footer.support": { id: "Support", en: "Support", cn: "支持" },
  "footer.email.support": { id: "Email Support", en: "Email Support", cn: "邮件支持" },
  "footer.chat.support": { id: "Chat Support", en: "Chat Support", cn: "在线支持" },
  "footer.24.support": { id: "24/7 Technical Support", en: "24/7 Technical Support", cn: "全天候技术支持" },
  "footer.24.desc": { id: "Tim teknis kami siap membantu kapan saja", en: "Our technical team is ready to help anytime", cn: "我们的技术团队随时准备提供帮助" },

  // Services Section (Home)
  "services.heading1": { id: "Layanan", en: "Our", cn: "我们的" },
  "services.heading2": { id: "Kami", en: "Services", cn: "服务" },
  "services.desc": { id: "Solusi konektivitas lengkap untuk segala kebutuhan Anda", en: "Complete connectivity solutions for all your needs", cn: "满足您所有需求的完整连接解决方案" },
  "services.broadband.desc": { id: "Internet unlimited untuk rumah dan UMKM.", en: "Unlimited internet for homes and SMEs.", cn: "家庭和中小企业的无限互联网。" },
  "services.dedicated.desc": { id: "Bandwidth 1:1 dengan SLA tinggi untuk bisnis.", en: "1:1 bandwidth with high SLA for business.", cn: "1:1带宽，高SLA，适合商业用途。" },
  "services.metro.desc": { id: "Koneksi antar kantor dengan performa tinggi.", en: "High-performance inter-office connectivity.", cn: "高性能办公室间连接。" },
  "services.dwdm.desc": { id: "Solusi transport kapasitas besar untuk operator dan enterprise.", en: "High-capacity transport solutions for carriers and enterprises.", cn: "面向运营商和企业的大容量传输解决方案。" },
  "services.darkfiber.desc": { id: "Penyewaan core fiber untuk kebutuhan jaringan sendiri.", en: "Core fiber leasing for your own network needs.", cn: "核心光纤租赁，满足您的网络需求。" },
  "services.backup.desc": { id: "Solusi redundancy untuk menjaga bisnis tetap online.", en: "Redundancy solutions to keep your business online.", cn: "冗余解决方案，保持您的业务在线。" },

  // Why Choose Us
  "why.heading1": { id: "Kenapa Memilih", en: "Why Choose", cn: "为什么选择" },
  "why.heading2": { id: "Kami?", en: "Us?", cn: "我们？" },
  "why.fiber": { id: "Infrastruktur Fiber Sendiri", en: "Own Fiber Infrastructure", cn: "自有光纤基础设施" },
  "why.redundant": { id: "Redundant Network", en: "Redundant Network", cn: "冗余网络" },
  "why.noc": { id: "24/7 NOC Monitoring", en: "24/7 NOC Monitoring", cn: "24/7网络运营中心监控" },
  "why.engineer": { id: "Tim Engineer Profesional", en: "Professional Engineers", cn: "专业工程师团队" },
  "why.fast": { id: "Respon Cepat", en: "Fast Response", cn: "快速响应" },
  "why.sla": { id: "SLA Enterprise", en: "Enterprise SLA", cn: "企业级SLA" },

  // Testimonials
  "testimonials.heading1": { id: "Apa Kata", en: "What Our", cn: "我们的" },
  "testimonials.heading2": { id: "Pelanggan Kami", en: "Customers Say", cn: "客户评价" },
  "testimonials.1.text": { id: "Layanan dedicated internet dari Artamedia sangat stabil. Uptime hampir 100% dan respon tim support sangat cepat.", en: "Artamedia's dedicated internet service is very stable. Almost 100% uptime and the support team response is very fast.", cn: "Artamedia的专线互联网服务非常稳定。正常运行时间接近100%，支持团队响应非常快。" },
  "testimonials.2.text": { id: "Kami menggunakan Metro-E untuk menghubungkan 15 cabang. Performanya luar biasa, latency sangat rendah.", en: "We use Metro-E to connect 15 branches. The performance is outstanding, latency is very low.", cn: "我们使用Metro-E连接15个分支机构。性能出色，延迟非常低。" },
  "testimonials.3.text": { id: "Broadband FTTH-nya cepat dan reliable. Cocok untuk tim kami yang bekerja remote. Harga kompetitif dengan kualitas premium.", en: "The Broadband FTTH is fast and reliable. Perfect for our remote-working team. Competitive pricing with premium quality.", cn: "宽带FTTH快速可靠。非常适合我们的远程工作团队。具有竞争力的价格和优质的质量。" },

  // Partners
  "partners.heading1": { id: "Trusted by", en: "Trusted by", cn: "受信赖的" },
  "partners.heading2": { id: "Businesses", en: "Businesses", cn: "合作伙伴" },
  "partners.customers1": { id: "Our", en: "Our", cn: "我们的" },
  "partners.customers2": { id: "Customers", en: "Customers", cn: "客户" },

  // ===== BROADBAND PAGE =====
  "bb.hero.title1": { id: "Internet Fiber Cepat, Stabil,", en: "Fast, Stable Fiber Internet,", cn: "快速、稳定的光纤互联网，" },
  "bb.hero.title2": { id: "Tanpa Batas", en: "Unlimited", cn: "无限制" },
  "bb.hero.desc": { id: "Broadband FTTH dengan koneksi fiber optik langsung ke rumah dan bisnis Anda. Nikmati kecepatan tinggi, latensi rendah, dan dukungan teknis 24/7.", en: "Broadband FTTH with fiber optic connection directly to your home and business. Enjoy high speed, low latency, and 24/7 technical support.", cn: "宽带FTTH光纤直连您的家庭和企业。享受高速、低延迟和全天候技术支持。" },
  "bb.hero.btn1": { id: "Cek Ketersediaan", en: "Check Availability", cn: "查看可用性" },
  "bb.hero.badge1": { id: "Unlimited", en: "Unlimited", cn: "无限" },
  "bb.hero.badge2": { id: "No FUP", en: "No FUP", cn: "无FUP" },
  "bb.hero.badge3": { id: "Instalasi Gratis", en: "Free Installation", cn: "免费安装" },
  "bb.hero.badge4": { id: "Support 24/7", en: "24/7 Support", cn: "全天候支持" },

  "bb.feat.heading1": { id: "Kenapa Memilih", en: "Why Choose Our", cn: "为什么选择我们的" },
  "bb.feat.heading2": { id: "Broadband Kami?", en: "Broadband?", cn: "宽带？" },
  "bb.feat.desc": { id: "Teknologi fiber optik terdepan untuk pengalaman internet terbaik", en: "Leading fiber optic technology for the best internet experience", cn: "领先的光纤技术，带来最佳互联网体验" },
  "bb.feat.1.title": { id: "100% Fiber Optik", en: "100% Fiber Optic", cn: "100%光纤" },
  "bb.feat.1.desc": { id: "Koneksi langsung ke rumah tanpa kabel tembaga. Lebih cepat dan stabil.", en: "Direct connection to home without copper cables. Faster and more stable.", cn: "直接光纤入户，无需铜缆。更快更稳定。" },
  "bb.feat.2.title": { id: "Unlimited Tanpa FUP", en: "Unlimited No FUP", cn: "无限无FUP" },
  "bb.feat.2.desc": { id: "Tidak ada batas pemakaian dan tidak ada penurunan kecepatan.", en: "No usage limits and no speed throttling.", cn: "无使用限制，无降速。" },
  "bb.feat.3.title": { id: "Stabil & Simetris", en: "Stable & Symmetric", cn: "稳定且对称" },
  "bb.feat.3.desc": { id: "Upload dan download optimal untuk meeting, CCTV, dan cloud.", en: "Optimal upload and download for meetings, CCTV, and cloud.", cn: "上传和下载优化，适合会议、监控和云服务。" },
  "bb.feat.4.title": { id: "Support 24/7", en: "24/7 Support", cn: "全天候支持" },
  "bb.feat.4.desc": { id: "Tim teknis siap membantu kapan saja.", en: "Technical team ready to help anytime.", cn: "技术团队随时准备提供帮助。" },
  "bb.feat.5.title": { id: "Monitoring Network 24 Jam", en: "24H Network Monitoring", cn: "24小时网络监控" },
  "bb.feat.5.desc": { id: "Infrastruktur dipantau real-time untuk menjaga kualitas koneksi.", en: "Infrastructure monitored in real-time to maintain connection quality.", cn: "实时监控基础设施以维护连接质量。" },

  "bb.pricing.heading1": { id: "Pilih Paket Broadband", en: "Choose a Broadband Plan", cn: "选择宽带套餐" },
  "bb.pricing.heading2": { id: "Sesuai Kebutuhan Anda", en: "That Suits Your Needs", cn: "满足您的需求" },
  "bb.pricing.desc": { id: "Semua paket termasuk instalasi gratis dan dukungan teknis 24/7", en: "All plans include free installation and 24/7 technical support", cn: "所有套餐包括免费安装和全天候技术支持" },
  "bb.pricing.month": { id: "/bulan", en: "/month", cn: "/月" },

  "bb.infra.heading1": { id: "Infrastruktur Fiber", en: "High Quality Fiber", cn: "高质量光纤" },
  "bb.infra.heading2": { id: "Berkualitas Tinggi", en: "Infrastructure", cn: "基础设施" },
  "bb.infra.desc": { id: "Kami menggunakan backbone fiber optik modern dengan sistem monitoring 24 jam untuk memastikan koneksi tetap stabil dan minim gangguan.", en: "We use modern fiber optic backbone with 24-hour monitoring system to ensure stable connection with minimal disruption.", cn: "我们使用现代光纤骨干网，配备24小时监控系统，确保连接稳定、中断最少。" },
  "bb.infra.1": { id: "Redundant Network System", en: "Redundant Network System", cn: "冗余网络系统" },
  "bb.infra.2": { id: "Monitoring Real-Time", en: "Real-Time Monitoring", cn: "实时监控" },
  "bb.infra.3": { id: "Tim Network Engineer Berpengalaman", en: "Experienced Network Engineers", cn: "经验丰富的网络工程师" },
  "bb.infra.4": { id: "SLA Tinggi untuk Pelanggan Bisnis", en: "High SLA for Business Customers", cn: "商业客户高SLA" },

  "bb.cta.heading": { id: "Siap Beralih ke Internet yang Lebih Stabil?", en: "Ready to Switch to More Stable Internet?", cn: "准备好切换到更稳定的互联网了吗？" },
  "bb.cta.desc": { id: "Nikmati koneksi tanpa batas untuk streaming, gaming, meeting, dan bisnis Anda.", en: "Enjoy unlimited connection for streaming, gaming, meetings, and your business.", cn: "享受无限连接，适用于流媒体、游戏、会议和您的业务。" },
  "bb.cta.btn1": { id: "Daftar Sekarang", en: "Register Now", cn: "立即注册" },
  "bb.cta.btn2": { id: "Hubungi Sales", en: "Contact Sales", cn: "联系销售" },

  // ===== DEDICATED PAGE =====
  "ded.hero.title1": { id: "Dedicated Internet untuk Bisnis", en: "Dedicated Internet for Business", cn: "企业专线互联网" },
  "ded.hero.title2": { id: "Tanpa Kompromi", en: "Without Compromise", cn: "毫不妥协" },
  "ded.hero.desc": { id: "Koneksi internet 1:1 dedicated bandwidth dengan performa stabil, latency rendah, dan SLA tinggi untuk kebutuhan bisnis mission-critical.", en: "1:1 dedicated bandwidth internet connection with stable performance, low latency, and high SLA for mission-critical business needs.", cn: "1:1专线带宽互联网连接，性能稳定，低延迟，高SLA，满足关键业务需求。" },
  "ded.hero.btn1": { id: "Konsultasi Sekarang", en: "Consult Now", cn: "立即咨询" },

  "ded.what.heading1": { id: "Apa Itu", en: "What Is", cn: "什么是" },
  "ded.what.heading2": { id: "Dedicated Internet?", en: "Dedicated Internet?", cn: "专线互联网？" },
  "ded.what.desc": { id: "Dedicated Internet adalah layanan koneksi internet eksklusif dengan bandwidth 1:1 tanpa sharing dengan pelanggan lain. Memberikan performa maksimal, stabilitas tinggi, dan latency rendah untuk kebutuhan bisnis profesional.", en: "Dedicated Internet is an exclusive internet connection service with 1:1 bandwidth without sharing with other customers. Providing maximum performance, high stability, and low latency for professional business needs.", cn: "专线互联网是一种独享的互联网连接服务，1:1带宽不与其他客户共享。为专业业务需求提供最大性能、高稳定性和低延迟。" },
  "ded.what.quote": { id: "Berbeda dengan broadband, Dedicated Internet memberikan bandwidth murni tanpa kontensi.", en: "Unlike broadband, Dedicated Internet provides pure bandwidth without contention.", cn: "与宽带不同，专线互联网提供无竞争的纯带宽。" },

  "ded.adv.heading1": { id: "Keunggulan", en: "Advantages of Our", cn: "我们的" },
  "ded.adv.heading2": { id: "Dedicated Internet Kami", en: "Dedicated Internet", cn: "专线互联网优势" },
  "ded.adv.desc": { id: "Performa enterprise-grade untuk bisnis mission-critical", en: "Enterprise-grade performance for mission-critical business", cn: "企业级性能，满足关键业务需求" },
  "ded.adv.1.title": { id: "Bandwidth 1:1", en: "1:1 Bandwidth", cn: "1:1带宽" },
  "ded.adv.1.desc": { id: "Tidak berbagi jalur dengan pelanggan lain.", en: "No sharing with other customers.", cn: "不与其他客户共享。" },
  "ded.adv.2.title": { id: "SLA Hingga 99.9%", en: "SLA Up to 99.9%", cn: "SLA高达99.9%" },
  "ded.adv.2.desc": { id: "Jaminan uptime tinggi dengan kompensasi layanan.", en: "High uptime guarantee with service compensation.", cn: "高正常运行时间保证，含服务补偿。" },
  "ded.adv.3.title": { id: "Latency Rendah", en: "Low Latency", cn: "低延迟" },
  "ded.adv.3.desc": { id: "Ideal untuk VoIP, VPN, trading system, dan cloud.", en: "Ideal for VoIP, VPN, trading systems, and cloud.", cn: "适用于VoIP、VPN、交易系统和云。" },
  "ded.adv.4.title": { id: "Static Public IP", en: "Static Public IP", cn: "静态公网IP" },
  "ded.adv.4.desc": { id: "Mendukung server, CCTV, VPN, dan remote access.", en: "Supports server, CCTV, VPN, and remote access.", cn: "支持服务器、监控、VPN和远程访问。" },
  "ded.adv.5.title": { id: "24/7 NOC Monitoring", en: "24/7 NOC Monitoring", cn: "24/7网络运营中心监控" },
  "ded.adv.5.desc": { id: "Dipantau nonstop oleh tim network engineer.", en: "Monitored nonstop by network engineering team.", cn: "网络工程团队不间断监控。" },
  "ded.adv.6.title": { id: "Prioritas Support", en: "Priority Support", cn: "优先支持" },
  "ded.adv.6.desc": { id: "Respon cepat dan teknisi dedicated untuk pelanggan enterprise.", en: "Fast response and dedicated technicians for enterprise customers.", cn: "快速响应和专属技术人员，服务企业客户。" },

  "ded.specs.heading1": { id: "Spesifikasi Teknis", en: "Technical", cn: "技术" },
  "ded.specs.heading2": { id: "Layanan", en: "Specifications", cn: "规格" },
  "ded.specs.desc": { id: "Detail teknis layanan Dedicated Internet kami", en: "Technical details of our Dedicated Internet service", cn: "我们专线互联网服务的技术细节" },

  "ded.industry.heading1": { id: "Cocok Untuk", en: "Suitable For", cn: "适合" },
  "ded.industry.heading2": { id: "Berbagai Industri", en: "Various Industries", cn: "各行各业" },
  "ded.industry.desc": { id: "Solusi konektivitas enterprise untuk setiap sektor", en: "Enterprise connectivity solutions for every sector", cn: "面向各行业的企业连接解决方案" },
  "ded.industry.1.title": { id: "Perkantoran & Corporate", en: "Office & Corporate", cn: "办公与企业" },
  "ded.industry.1.desc": { id: "Koneksi stabil untuk operasional tanpa gangguan.", en: "Stable connection for uninterrupted operations.", cn: "稳定的连接，确保运营不中断。" },
  "ded.industry.2.title": { id: "Data Center & ISP", en: "Data Center & ISP", cn: "数据中心和ISP" },
  "ded.industry.2.desc": { id: "Bandwidth besar untuk kebutuhan upstream dan peering.", en: "Large bandwidth for upstream and peering needs.", cn: "大带宽满足上行和对等需求。" },
  "ded.industry.3.title": { id: "Perbankan & Finansial", en: "Banking & Financial", cn: "银行与金融" },
  "ded.industry.3.desc": { id: "Keamanan dan kestabilan untuk transaksi real-time.", en: "Security and stability for real-time transactions.", cn: "实时交易的安全性和稳定性。" },
  "ded.industry.4.title": { id: "Rumah Sakit", en: "Hospital", cn: "医院" },
  "ded.industry.4.desc": { id: "Koneksi andal untuk sistem medis dan telemedicine.", en: "Reliable connection for medical systems and telemedicine.", cn: "医疗系统和远程医疗的可靠连接。" },
  "ded.industry.5.title": { id: "Pemerintahan", en: "Government", cn: "政府" },
  "ded.industry.5.desc": { id: "Infrastruktur jaringan untuk layanan publik digital.", en: "Network infrastructure for digital public services.", cn: "数字公共服务的网络基础设施。" },
  "ded.industry.6.title": { id: "Sekolah & Universitas", en: "Schools & Universities", cn: "学校和大学" },
  "ded.industry.6.desc": { id: "Internet cepat untuk e-learning dan riset.", en: "Fast internet for e-learning and research.", cn: "快速互联网，适用于电子学习和研究。" },

  "ded.infra.heading1": { id: "Infrastruktur dan", en: "Infrastructure and", cn: "基础设施和" },
  "ded.infra.heading2": { id: "Monitoring 24 Jam", en: "24H Monitoring", cn: "24小时监控" },
  "ded.infra.desc": { id: "Jaringan kami didukung oleh backbone fiber berkualitas tinggi dengan sistem monitoring real-time untuk memastikan kestabilan layanan.", en: "Our network is supported by high-quality fiber backbone with real-time monitoring system to ensure service stability.", cn: "我们的网络由高质量光纤骨干网支持，配备实时监控系统以确保服务稳定。" },

  "ded.pricing.heading1": { id: "Solusi Fleksibel", en: "Flexible Solutions", cn: "灵活解决方案" },
  "ded.pricing.heading2": { id: "Sesuai Kebutuhan Bisnis Anda", en: "For Your Business Needs", cn: "满足您的业务需求" },
  "ded.pricing.desc": { id: "Harga Dedicated Internet disesuaikan dengan kebutuhan bandwidth, lokasi, dan SLA yang dipilih.", en: "Dedicated Internet pricing is customized based on bandwidth, location, and chosen SLA.", cn: "专线互联网定价根据带宽、位置和所选SLA定制。" },
  "ded.pricing.btn1": { id: "Minta Penawaran", en: "Request Quote", cn: "请求报价" },
  "ded.pricing.btn2": { id: "Hubungi Sales", en: "Contact Sales", cn: "联系销售" },
  "ded.pricing.note": { id: "Hubungi tim kami untuk konsultasi dan survey lokasi gratis.", en: "Contact our team for free consultation and site survey.", cn: "联系我们的团队获取免费咨询和现场勘察。" },

  "ded.cta.heading": { id: "Pastikan Bisnis Anda Selalu Online", en: "Ensure Your Business Stays Online", cn: "确保您的业务始终在线" },
  "ded.cta.desc": { id: "Gunakan Dedicated Internet dengan performa tinggi dan dukungan profesional.", en: "Use Dedicated Internet with high performance and professional support.", cn: "使用高性能专线互联网和专业支持。" },
  "ded.cta.btn1": { id: "Konsultasi Sekarang", en: "Consult Now", cn: "立即咨询" },
  "ded.cta.btn2": { id: "Minta Penawaran", en: "Request Quote", cn: "请求报价" },

  // ===== METRO-E PAGE =====
  "metro.hero.title1": { id: "Metro-E & Leased Line untuk Koneksi Antar Lokasi", en: "Metro-E & Leased Line for Inter-Location Connectivity", cn: "Metro-E和专线，实现跨地点连接" },
  "metro.hero.title2": { id: "Tanpa Batas", en: "Without Limits", cn: "无限制" },
  "metro.hero.desc": { id: "Solusi konektivitas dedicated antar kantor, data center, dan lokasi bisnis Anda dengan performa stabil, latency rendah, dan SLA tinggi.", en: "Dedicated connectivity solution between offices, data centers, and your business locations with stable performance, low latency, and high SLA.", cn: "专用连接解决方案，连接办公室、数据中心和您的业务地点，性能稳定，低延迟，高SLA。" },
  "metro.hero.btn1": { id: "Order Now", en: "Order Now", cn: "立即订购" },
  "metro.hero.btn2": { id: "Konsultasi Sekarang", en: "Consult Now", cn: "立即咨询" },

  "metro.what.heading1": { id: "Apa Itu", en: "What Is", cn: "什么是" },
  "metro.what.heading2": { id: "Metro-E / Leased Line?", en: "Metro-E / Leased Line?", cn: "Metro-E / 专线？" },
  "metro.what.desc1": { id: "Metro Ethernet (Metro-E) adalah layanan konektivitas point-to-point atau point-to-multipoint yang menghubungkan antar lokasi bisnis menggunakan jaringan fiber optik dedicated.", en: "Metro Ethernet (Metro-E) is a point-to-point or point-to-multipoint connectivity service connecting business locations using dedicated fiber optic network.", cn: "城域以太网（Metro-E）是一种点对点或点对多点连接服务，使用专用光纤网络连接业务地点。" },
  "metro.what.desc2": { id: "Leased Line memberikan jalur privat yang aman dan stabil untuk komunikasi data antar kantor, data center, maupun cabang perusahaan.", en: "Leased Line provides a secure and stable private path for data communication between offices, data centers, and company branches.", cn: "专线提供安全稳定的私有通道，用于办公室、数据中心和公司分支机构之间的数据通信。" },
  "metro.what.quote": { id: "Tidak melalui internet publik. Lebih aman, lebih stabil, dan lebih cepat.", en: "Does not go through public internet. More secure, more stable, and faster.", cn: "不通过公共互联网。更安全、更稳定、更快速。" },

  "metro.adv.heading1": { id: "Keunggulan", en: "Advantages of Our", cn: "我们的" },
  "metro.adv.heading2": { id: "Metro-E Kami", en: "Metro-E", cn: "Metro-E优势" },
  "metro.adv.desc": { id: "Konektivitas enterprise-grade untuk bisnis mission-critical", en: "Enterprise-grade connectivity for mission-critical business", cn: "企业级连接，满足关键业务需求" },
  "metro.adv.noc.title": { id: "Tim kami memantau jaringan Anda setiap saat", en: "Our team monitors your network at all times", cn: "我们的团队全天候监控您的网络" },
  "metro.adv.1.title": { id: "Dedicated Bandwidth 1:1", en: "Dedicated Bandwidth 1:1", cn: "1:1专用带宽" },
  "metro.adv.1.desc": { id: "Bandwidth eksklusif tanpa sharing.", en: "Exclusive bandwidth without sharing.", cn: "独享带宽，无共享。" },
  "metro.adv.2.title": { id: "Low Latency & High Stability", en: "Low Latency & High Stability", cn: "低延迟和高稳定性" },
  "metro.adv.2.desc": { id: "Performa optimal untuk aplikasi real-time.", en: "Optimal performance for real-time applications.", cn: "实时应用的最佳性能。" },
  "metro.adv.3.title": { id: "Secure Private Network", en: "Secure Private Network", cn: "安全的私有网络" },
  "metro.adv.3.desc": { id: "Jalur privat tanpa internet publik.", en: "Private path without public internet.", cn: "私有通道，不经过公共互联网。" },
  "metro.adv.4.title": { id: "Flexible Bandwidth", en: "Flexible Bandwidth", cn: "灵活带宽" },
  "metro.adv.4.desc": { id: "Tersedia mulai 10 Mbps hingga 100 Gbps.", en: "Available from 10 Mbps to 100 Gbps.", cn: "可提供10 Mbps至100 Gbps。" },
  "metro.adv.5.title": { id: "Multi-Branch Connectivity", en: "Multi-Branch Connectivity", cn: "多分支连接" },
  "metro.adv.5.desc": { id: "Hubungkan semua cabang dalam satu jaringan.", en: "Connect all branches in one network.", cn: "将所有分支连接在一个网络中。" },
  "metro.adv.6.title": { id: "24/7 Monitoring & SLA", en: "24/7 Monitoring & SLA", cn: "24/7监控和SLA" },
  "metro.adv.6.desc": { id: "Dipantau nonstop dengan jaminan SLA.", en: "Monitored nonstop with SLA guarantee.", cn: "不间断监控，SLA保证。" },

  "metro.specs.heading1": { id: "Spesifikasi", en: "Technical", cn: "技术" },
  "metro.specs.heading2": { id: "Teknis", en: "Specifications", cn: "规格" },
  "metro.specs.desc": { id: "Detail teknis layanan Metro-E / Leased Line", en: "Technical details of Metro-E / Leased Line service", cn: "Metro-E / 专线服务技术细节" },

  "metro.usecase.heading1": { id: "Cocok", en: "Suitable", cn: "适合" },
  "metro.usecase.heading2": { id: "Untuk", en: "For", cn: "用途" },
  "metro.usecase.desc": { id: "Solusi ideal untuk bisnis yang membutuhkan koneksi antar lokasi dengan performa tinggi dan keamanan maksimal.", en: "Ideal solution for businesses needing high-performance and maximum-security inter-location connectivity.", cn: "需要高性能和最大安全性跨地点连接的企业的理想解决方案。" },
  "metro.usecase.infra.title": { id: "Infrastruktur fiber optik kelas enterprise untuk keandalan maksimal", en: "Enterprise-class fiber optic infrastructure for maximum reliability", cn: "企业级光纤基础设施，实现最大可靠性" },
  "metro.usecase.1.title": { id: "Perusahaan Multi Cabang", en: "Multi-Branch Companies", cn: "多分支公司" },
  "metro.usecase.1.desc": { id: "Hubungkan seluruh cabang dengan jaringan privat berkecepatan tinggi.", en: "Connect all branches with high-speed private network.", cn: "通过高速私有网络连接所有分支机构。" },
  "metro.usecase.2.title": { id: "Data Center Interconnection", en: "Data Center Interconnection", cn: "数据中心互联" },
  "metro.usecase.2.desc": { id: "Koneksi antar DC dengan latensi ultra rendah.", en: "Inter-DC connection with ultra-low latency.", cn: "超低延迟的数据中心间连接。" },
  "metro.usecase.3.title": { id: "ISP Interconnection", en: "ISP Interconnection", cn: "ISP互联" },
  "metro.usecase.3.desc": { id: "Peering dan transit antar operator telekomunikasi.", en: "Peering and transit between telecom operators.", cn: "电信运营商之间的对等和中转。" },
  "metro.usecase.4.title": { id: "Financial & Banking System", en: "Financial & Banking System", cn: "金融和银行系统" },
  "metro.usecase.4.desc": { id: "Jalur aman untuk transaksi perbankan real-time.", en: "Secure path for real-time banking transactions.", cn: "实时银行交易的安全通道。" },
  "metro.usecase.5.title": { id: "Enterprise VPN Backbone", en: "Enterprise VPN Backbone", cn: "企业VPN骨干" },
  "metro.usecase.5.desc": { id: "Backbone VPN korporat dengan performa terjamin.", en: "Corporate VPN backbone with guaranteed performance.", cn: "性能有保障的企业VPN骨干网。" },
  "metro.usecase.6.title": { id: "Cloud & Disaster Recovery", en: "Cloud & Disaster Recovery", cn: "云和灾难恢复" },
  "metro.usecase.6.desc": { id: "Replikasi data ke cloud dan site cadangan.", en: "Data replication to cloud and backup sites.", cn: "将数据复制到云和备份站点。" },

  "metro.coverage.heading1": { id: "Jangkauan", en: "Network", cn: "网络" },
  "metro.coverage.heading2": { id: "Jaringan Kami", en: "Coverage", cn: "覆盖范围" },
  "metro.coverage.desc": { id: "Terhubung ke 10 datacenter utama di area Jabodetabek & Cikarang melalui jaringan Metro Ethernet berkecepatan tinggi.", en: "Connected to 10 major datacenters in Jabodetabek & Cikarang via high-speed Metro Ethernet network.", cn: "通过高速城域以太网连接到大雅加达和芝卡朗地区的10个主要数据中心。" },
  "metro.coverage.btn": { id: "Check Coverage", en: "Check Coverage", cn: "查看覆盖" },

  "metro.infra.heading1": { id: "Infrastruktur Fiber", en: "National & Regional Fiber", cn: "国家和区域光纤" },
  "metro.infra.heading2": { id: "Nasional & Regional", en: "Infrastructure", cn: "基础设施" },
  "metro.infra.desc": { id: "Didukung backbone fiber nasional dan interkoneksi regional Asia Tenggara, jaringan kami dirancang untuk memastikan konektivitas cepat, stabil, dan aman bagi bisnis Anda.", en: "Supported by national fiber backbone and Southeast Asian regional interconnection, our network is designed to ensure fast, stable, and secure connectivity for your business.", cn: "得益于国家光纤骨干网和东南亚区域互联，我们的网络旨在为您的企业确保快速、稳定和安全的连接。" },

  "metro.cta.heading": { id: "Hubungkan Semua Lokasi Bisnis Anda dengan Stabil", en: "Connect All Your Business Locations Stably", cn: "稳定连接您的所有业务地点" },
  "metro.cta.desc": { id: "Percayakan konektivitas antar cabang dan data center Anda kepada jaringan fiber profesional kami.", en: "Trust the connectivity between your branches and data centers to our professional fiber network.", cn: "将您的分支机构和数据中心之间的连接交给我们专业的光纤网络。" },
  "metro.cta.btn1": { id: "Order Now", en: "Order Now", cn: "立即订购" },
  "metro.cta.btn2": { id: "Hubungi Sales", en: "Contact Sales", cn: "联系销售" },

  // ===== DWDM PAGE =====
  "dwdm.hero.title": { id: "DWDM Carrier-Grade Transport Solution", en: "DWDM Carrier-Grade Transport Solution", cn: "DWDM运营商级传输解决方案" },
  "dwdm.hero.desc": { id: "Solusi transmisi kapasitas besar berbasis Dense Wavelength Division Multiplexing untuk backbone nasional, data center interconnect, dan operator network.", en: "High-capacity transmission solution based on Dense Wavelength Division Multiplexing for national backbone, data center interconnect, and operator networks.", cn: "基于密集波分复用的大容量传输解决方案，适用于国家骨干网、数据中心互联和运营商网络。" },
  "dwdm.hero.btn1": { id: "Consult Our Team", en: "Consult Our Team", cn: "咨询我们的团队" },
  "dwdm.hero.btn2": { id: "Request Proposal", en: "Request Proposal", cn: "请求方案" },

  "dwdm.what.heading1": { id: "Apa Itu", en: "What Is", cn: "什么是" },
  "dwdm.what.heading2": { id: "DWDM?", en: "DWDM?", cn: "DWDM？" },
  "dwdm.what.desc": { id: "DWDM (Dense Wavelength Division Multiplexing) adalah teknologi transmisi fiber optik yang memungkinkan multiple wavelength berjalan dalam satu core fiber, sehingga menghasilkan kapasitas transmisi data sangat besar dalam satu jalur fiber.", en: "DWDM (Dense Wavelength Division Multiplexing) is a fiber optic transmission technology that allows multiple wavelengths to travel in a single fiber core, producing very large data transmission capacity in a single fiber path.", cn: "DWDM（密集波分复用）是一种光纤传输技术，允许多个波长在单根光纤核心中传输，在单条光纤路径中产生非常大的数据传输容量。" },
  "dwdm.what.quote": { id: "Satu fiber, multi-channel, multi-terabit capacity.", en: "One fiber, multi-channel, multi-terabit capacity.", cn: "一根光纤，多通道，多太比特容量。" },

  "dwdm.feat.heading1": { id: "Keunggulan", en: "Advantages of Our", cn: "我们的" },
  "dwdm.feat.heading2": { id: "DWDM Kami", en: "DWDM", cn: "DWDM优势" },
  "dwdm.feat.desc": { id: "Teknologi transport optik terdepan untuk kapasitas maksimal", en: "Leading optical transport technology for maximum capacity", cn: "领先的光传输技术，实现最大容量" },
  "dwdm.feat.banner.title": { id: "Optical Transport Equipment", en: "Optical Transport Equipment", cn: "光传输设备" },
  "dwdm.feat.banner.desc": { id: "Perangkat DWDM kelas carrier untuk kapasitas multi-terabit", en: "Carrier-class DWDM equipment for multi-terabit capacity", cn: "运营商级DWDM设备，实现多太比特容量" },
  "dwdm.feat.1.title": { id: "Multi-Channel Wavelength", en: "Multi-Channel Wavelength", cn: "多通道波长" },
  "dwdm.feat.1.desc": { id: "Mendukung multiple lambda dalam satu fiber.", en: "Supports multiple lambdas in a single fiber.", cn: "支持单根光纤中的多个Lambda。" },
  "dwdm.feat.2.title": { id: "High Capacity up to Terabit", en: "High Capacity up to Terabit", cn: "高达太比特的容量" },
  "dwdm.feat.2.desc": { id: "100G / 200G / 400G scalable.", en: "100G / 200G / 400G scalable.", cn: "100G / 200G / 400G可扩展。" },
  "dwdm.feat.3.title": { id: "Long Distance Transmission", en: "Long Distance Transmission", cn: "长距离传输" },
  "dwdm.feat.3.desc": { id: "Ideal untuk backbone antar kota dan antar negara.", en: "Ideal for inter-city and international backbone.", cn: "适用于城际和国际骨干网。" },
  "dwdm.feat.4.title": { id: "Low Latency", en: "Low Latency", cn: "低延迟" },
  "dwdm.feat.4.desc": { id: "Cocok untuk DCI dan inter-operator traffic.", en: "Suitable for DCI and inter-operator traffic.", cn: "适用于DCI和运营商间流量。" },
  "dwdm.feat.5.title": { id: "Scalable Architecture", en: "Scalable Architecture", cn: "可扩展架构" },
  "dwdm.feat.5.desc": { id: "Mudah upgrade tanpa penarikan fiber baru.", en: "Easy to upgrade without new fiber deployment.", cn: "无需铺设新光纤即可轻松升级。" },
  "dwdm.feat.6.title": { id: "Carrier-Grade Reliability", en: "Carrier-Grade Reliability", cn: "运营商级可靠性" },
  "dwdm.feat.6.desc": { id: "Infrastruktur dengan monitoring 24/7 dan SLA tinggi.", en: "Infrastructure with 24/7 monitoring and high SLA.", cn: "基础设施配备24/7监控和高SLA。" },

  "dwdm.specs.heading1": { id: "Spesifikasi", en: "Technical", cn: "技术" },
  "dwdm.specs.heading2": { id: "Teknis", en: "Specifications", cn: "规格" },
  "dwdm.specs.desc": { id: "Detail teknis layanan DWDM carrier-grade", en: "Technical details of carrier-grade DWDM service", cn: "运营商级DWDM服务技术细节" },

  "dwdm.usecase.heading1": { id: "Cocok", en: "Suitable", cn: "适合" },
  "dwdm.usecase.heading2": { id: "Untuk", en: "For", cn: "用途" },
  "dwdm.usecase.desc": { id: "Solusi ideal untuk transport data skala besar dengan efisiensi tinggi.", en: "Ideal solution for large-scale data transport with high efficiency.", cn: "大规模数据传输的理想解决方案，效率高。" },
  "dwdm.usecase.banner.title": { id: "Carrier-Grade Data Center", en: "Carrier-Grade Data Center", cn: "运营商级数据中心" },
  "dwdm.usecase.banner.desc": { id: "Fasilitas interkoneksi data center dengan standar carrier-grade", en: "Data center interconnection facility with carrier-grade standards", cn: "符合运营商级标准的数据中心互联设施" },
  "dwdm.usecase.1.title": { id: "Data Center Interconnect (DCI)", en: "Data Center Interconnect (DCI)", cn: "数据中心互联（DCI）" },
  "dwdm.usecase.1.desc": { id: "Interkoneksi antar data center dengan kapasitas terabit.", en: "Inter-data center interconnection with terabit capacity.", cn: "太比特容量的数据中心间互联。" },
  "dwdm.usecase.2.title": { id: "National Backbone Operator", en: "National Backbone Operator", cn: "国家骨干运营商" },
  "dwdm.usecase.2.desc": { id: "Backbone nasional untuk operator telekomunikasi.", en: "National backbone for telecom operators.", cn: "电信运营商的国家骨干网。" },
  "dwdm.usecase.3.title": { id: "ISP Aggregation Network", en: "ISP Aggregation Network", cn: "ISP聚合网络" },
  "dwdm.usecase.3.desc": { id: "Agregasi trafik ISP dengan efisiensi tinggi.", en: "ISP traffic aggregation with high efficiency.", cn: "高效的ISP流量聚合。" },
  "dwdm.usecase.4.title": { id: "Cloud Provider Connectivity", en: "Cloud Provider Connectivity", cn: "云提供商连接" },
  "dwdm.usecase.4.desc": { id: "Konektivitas langsung ke cloud provider.", en: "Direct connectivity to cloud providers.", cn: "直接连接到云提供商。" },
  "dwdm.usecase.5.title": { id: "Inter-City Transport", en: "Inter-City Transport", cn: "城际传输" },
  "dwdm.usecase.5.desc": { id: "Transport data antar kota berkapasitas besar.", en: "High-capacity inter-city data transport.", cn: "大容量城际数据传输。" },
  "dwdm.usecase.6.title": { id: "International Gateway", en: "International Gateway", cn: "国际网关" },
  "dwdm.usecase.6.desc": { id: "Gerbang konektivitas internasional.", en: "International connectivity gateway.", cn: "国际连接网关。" },

  "dwdm.coverage.heading1": { id: "Backbone", en: "National & Regional", cn: "国家和区域" },
  "dwdm.coverage.heading2": { id: "Nasional & Regional", en: "Backbone", cn: "骨干网" },
  "dwdm.coverage.desc": { id: "Terhubung ke 10 datacenter utama di area Jabodetabek & Cikarang melalui jaringan DWDM berkapasitas tinggi.", en: "Connected to 10 major datacenters in Jabodetabek & Cikarang via high-capacity DWDM network.", cn: "通过高容量DWDM网络连接到大雅加达和芝卡朗地区的10个主要数据中心。" },
  "dwdm.coverage.btn": { id: "Check Network Availability", en: "Check Network Availability", cn: "查看网络可用性" },

  "dwdm.infra.heading1": { id: "Infrastruktur Transport", en: "Modern Optical", cn: "现代光" },
  "dwdm.infra.heading2": { id: "Optik Modern", en: "Transport Infrastructure", cn: "传输基础设施" },
  "dwdm.infra.desc": { id: "Didukung backbone fiber optik modern dengan teknologi DWDM terbaru untuk memastikan kapasitas besar, stabilitas tinggi, dan skalabilitas jangka panjang.", en: "Supported by modern fiber optic backbone with latest DWDM technology to ensure large capacity, high stability, and long-term scalability.", cn: "得益于现代光纤骨干网和最新DWDM技术，确保大容量、高稳定性和长期可扩展性。" },

  "dwdm.cta.heading1": { id: "Bangun Backbone Berkapasitas Besar", en: "Build a High-Capacity Backbone", cn: "构建大容量骨干网" },
  "dwdm.cta.heading2": { id: "Bersama Kami", en: "With Us", cn: "与我们一起" },
  "dwdm.cta.desc": { id: "Hubungi tim engineering kami untuk solusi DWDM carrier-grade yang scalable dan future-ready.", en: "Contact our engineering team for scalable and future-ready carrier-grade DWDM solutions.", cn: "联系我们的工程团队，获取可扩展且面向未来的运营商级DWDM解决方案。" },
  "dwdm.cta.btn1": { id: "Request Proposal", en: "Request Proposal", cn: "请求方案" },
  "dwdm.cta.btn2": { id: "Contact Engineering Team", en: "Contact Engineering Team", cn: "联系工程团队" },

  // ===== DARK FIBER PAGE =====
  "df.hero.title1": { id: "Dark Fiber untuk", en: "Dark Fiber for", cn: "暗光纤，实现" },
  "df.hero.title2": { id: "Kontrol Penuh", en: "Full Control", cn: "完全控制" },
  "df.hero.title3": { id: "Infrastruktur Anda", en: "of Your Infrastructure", cn: "您的基础设施" },
  "df.hero.desc": { id: "Sewa core fiber optik eksklusif untuk membangun jaringan backbone sendiri dengan fleksibilitas, kapasitas, dan keamanan maksimal.", en: "Lease exclusive fiber optic cores to build your own backbone network with maximum flexibility, capacity, and security.", cn: "租赁独占光纤核心，构建您自己的骨干网络，实现最大灵活性、容量和安全性。" },
  "df.hero.btn1": { id: "Consult Our Team", en: "Consult Our Team", cn: "咨询我们的团队" },
  "df.hero.btn2": { id: "Request Proposal", en: "Request Proposal", cn: "请求方案" },

  "df.what.heading1": { id: "Apa Itu", en: "What Is", cn: "什么是" },
  "df.what.heading2": { id: "Dark Fiber?", en: "Dark Fiber?", cn: "暗光纤？" },
  "df.what.desc1": { id: "Dark Fiber adalah layanan penyewaan core fiber optik tanpa perangkat aktif. Pelanggan memiliki kontrol penuh untuk mengoperasikan dan mengatur perangkat transmisi sendiri sesuai kebutuhan.", en: "Dark Fiber is a fiber optic core leasing service without active equipment. Customers have full control to operate and manage their own transmission equipment as needed.", cn: "暗光纤是一种无源光纤核心租赁服务。客户可以完全控制和管理自己的传输设备。" },
  "df.what.quote": { id: "Infrastruktur fisik kami, kontrol jaringan sepenuhnya milik Anda.", en: "Our physical infrastructure, your complete network control.", cn: "我们的物理基础设施，您完全控制网络。" },
  "df.what.desc2": { id: "Ideal untuk operator, ISP, data center, dan enterprise skala besar yang membutuhkan fleksibilitas maksimum.", en: "Ideal for operators, ISPs, data centers, and large-scale enterprises needing maximum flexibility.", cn: "适用于需要最大灵活性的运营商、ISP、数据中心和大型企业。" },

  "df.adv.heading1": { id: "Keunggulan", en: "Advantages of Our", cn: "我们的" },
  "df.adv.heading2": { id: "Dark Fiber Kami", en: "Dark Fiber", cn: "暗光纤优势" },
  "df.adv.desc": { id: "Kontrol penuh atas infrastruktur fiber dengan fleksibilitas maksimal.", en: "Full control over fiber infrastructure with maximum flexibility.", cn: "完全控制光纤基础设施，灵活性最大。" },
  "df.adv.1.title": { id: "Full Control", en: "Full Control", cn: "完全控制" },
  "df.adv.1.desc": { id: "Anda mengelola sendiri perangkat dan kapasitas transmisi.", en: "You manage your own equipment and transmission capacity.", cn: "您自行管理设备和传输容量。" },
  "df.adv.2.title": { id: "Unlimited Bandwidth Potential", en: "Unlimited Bandwidth Potential", cn: "无限带宽潜力" },
  "df.adv.2.desc": { id: "Kapasitas ditentukan oleh teknologi perangkat Anda.", en: "Capacity determined by your equipment technology.", cn: "容量由您的设备技术决定。" },
  "df.adv.3.title": { id: "Secure & Private", en: "Secure & Private", cn: "安全且私密" },
  "df.adv.3.desc": { id: "Jalur fiber eksklusif tanpa sharing dengan pihak lain.", en: "Exclusive fiber path without sharing with others.", cn: "独占光纤路径，不与他人共享。" },
  "df.adv.4.title": { id: "Long-Term Scalability", en: "Long-Term Scalability", cn: "长期可扩展性" },
  "df.adv.4.desc": { id: "Mudah upgrade kapasitas tanpa perubahan fisik jaringan.", en: "Easy capacity upgrade without physical network changes.", cn: "无需物理网络更改即可轻松升级容量。" },
  "df.adv.5.title": { id: "Carrier-Grade Infrastructure", en: "Carrier-Grade Infrastructure", cn: "运营商级基础设施" },
  "df.adv.5.desc": { id: "Backbone fiber berkualitas tinggi.", en: "High-quality fiber backbone.", cn: "高质量光纤骨干网。" },
  "df.adv.6.title": { id: "Flexible Deployment", en: "Flexible Deployment", cn: "灵活部署" },
  "df.adv.6.desc": { id: "Cocok untuk metro, intercity, hingga backbone nasional.", en: "Suitable for metro, intercity, to national backbone.", cn: "适用于城域、城际到国家骨干网。" },

  "df.specs.heading1": { id: "Spesifikasi", en: "Infrastructure", cn: "基础设施" },
  "df.specs.heading2": { id: "Infrastruktur", en: "Specifications", cn: "规格" },
  "df.specs.desc": { id: "Detail teknis layanan Dark Fiber", en: "Technical details of Dark Fiber service", cn: "暗光纤服务技术细节" },

  "df.usecase.heading1": { id: "Cocok", en: "Suitable", cn: "适合" },
  "df.usecase.heading2": { id: "Untuk", en: "For", cn: "用途" },
  "df.usecase.desc": { id: "Solusi tepat untuk organisasi yang membutuhkan kontrol dan skalabilitas maksimal.", en: "The right solution for organizations needing maximum control and scalability.", cn: "需要最大控制和可扩展性的组织的正确解决方案。" },

  "df.process.heading1": { id: "Proses", en: "Implementation", cn: "实施" },
  "df.process.heading2": { id: "Implementasi", en: "Process", cn: "流程" },
  "df.process.desc": { id: "Dari konsultasi hingga aktivasi dalam proses yang terstruktur.", en: "From consultation to activation in a structured process.", cn: "从咨询到激活的结构化流程。" },
  "df.process.1": { id: "Konsultasi & Perencanaan Jalur", en: "Consultation & Route Planning", cn: "咨询和路线规划" },
  "df.process.2": { id: "Survey & Engineering Design", en: "Survey & Engineering Design", cn: "勘察和工程设计" },
  "df.process.3": { id: "Provisioning Core Fiber", en: "Core Fiber Provisioning", cn: "核心光纤配置" },
  "df.process.4": { id: "Activation & Handover", en: "Activation & Handover", cn: "激活和交付" },

  "df.infra.heading1": { id: "Infrastruktur Fiber", en: "National Fiber", cn: "国家光纤" },
  "df.infra.heading2": { id: "Nasional", en: "Infrastructure", cn: "基础设施" },
  "df.infra.desc": { id: "Jaringan fiber kami dibangun dengan standar carrier-grade untuk memastikan kualitas fisik jaringan yang stabil dan siap mendukung kebutuhan operator dan enterprise skala besar.", en: "Our fiber network is built with carrier-grade standards to ensure stable physical network quality and readiness to support large-scale operator and enterprise needs.", cn: "我们的光纤网络按照运营商级标准建设，确保物理网络质量稳定，并准备好支持大规模运营商和企业需求。" },

  "df.cta.heading": { id: "Bangun Jaringan Sendiri dengan Infrastruktur Profesional", en: "Build Your Own Network with Professional Infrastructure", cn: "使用专业基础设施构建您自己的网络" },
  "df.cta.desc": { id: "Diskusikan kebutuhan dark fiber Anda bersama tim engineering kami hari ini.", en: "Discuss your dark fiber needs with our engineering team today.", cn: "今天就与我们的工程团队讨论您的暗光纤需求。" },
  "df.cta.btn1": { id: "Request Proposal", en: "Request Proposal", cn: "请求方案" },
  "df.cta.btn2": { id: "Contact Engineering Team", en: "Contact Engineering Team", cn: "联系工程团队" },

  // ===== BACKUP ON DEMAND PAGE =====
  "bk.hero.title1": { id: "Backup On Demand untuk", en: "Backup On Demand for", cn: "按需备份，实现" },
  "bk.hero.title2": { id: "Koneksi Tanpa Gangguan", en: "Uninterrupted Connectivity", cn: "不间断连接" },
  "bk.hero.desc": { id: "Solusi koneksi cadangan otomatis yang aktif saat link utama mengalami gangguan, memastikan bisnis Anda tetap online 24/7.", en: "Automatic backup connection solution that activates when the primary link experiences disruption, ensuring your business stays online 24/7.", cn: "当主链路出现故障时自动激活的备份连接解决方案，确保您的业务全天候在线。" },
  "bk.hero.btn1": { id: "Consult Our Team", en: "Consult Our Team", cn: "咨询我们的团队" },
  "bk.hero.btn2": { id: "Request Proposal", en: "Request Proposal", cn: "请求方案" },

  "bk.what.heading1": { id: "Apa Itu", en: "What Is", cn: "什么是" },
  "bk.what.heading2": { id: "Backup On Demand?", en: "Backup On Demand?", cn: "按需备份？" },
  "bk.what.desc": { id: "Scalable International Connectivity, Delivered On Demand — koneksi cadangan otomatis yang memastikan bisnis Anda tetap online 24/7.", en: "Scalable International Connectivity, Delivered On Demand — automatic backup connection ensuring your business stays online 24/7.", cn: "可扩展的国际连接，按需交付——自动备份连接，确保您的业务全天候在线。" },
  "bk.what.1.title": { id: "Instant, Flexible Scalability", en: "Instant, Flexible Scalability", cn: "即时灵活的可扩展性" },
  "bk.what.1.desc": { id: "Scale bandwidth internasional naik-turun secara instan sesuai kebutuhan, tanpa delay atau waktu provisioning lama.", en: "Scale international bandwidth up and down instantly as needed, without delay or long provisioning time.", cn: "根据需要即时上下调整国际带宽，无延迟或长时间配置。" },
  "bk.what.2.title": { id: "Cost-Efficient Bandwidth", en: "Cost-Efficient Bandwidth", cn: "成本效益带宽" },
  "bk.what.2.desc": { id: "Bayar hanya kapasitas yang digunakan, mengurangi biaya overprovisioning dan bandwidth yang tidak terpakai.", en: "Pay only for capacity used, reducing overprovisioning costs and unused bandwidth.", cn: "只为使用的容量付费，减少过度配置成本和未使用的带宽。" },
  "bk.what.3.title": { id: "No Long-Term Lock-in", en: "No Long-Term Lock-in", cn: "无长期锁定" },
  "bk.what.3.desc": { id: "Tanpa kontrak jangka panjang. Nikmati kebebasan untuk mengatur bandwidth kapan saja sesuai kebutuhan.", en: "No long-term contracts. Enjoy the freedom to adjust bandwidth anytime as needed.", cn: "无长期合同。享受随时根据需要调整带宽的自由。" },
  "bk.what.intl": { id: "Infrastruktur koneksi Jakarta – Singapore untuk redundansi maksimal", en: "Jakarta – Singapore connection infrastructure for maximum redundancy", cn: "雅加达-新加坡连接基础设施，实现最大冗余" },

  "bk.adv.heading1": { id: "Keunggulan", en: "Advantages of", cn: "" },
  "bk.adv.heading2": { id: "Backup On Demand", en: "Backup On Demand", cn: "按需备份优势" },
  "bk.adv.desc": { id: "Perlindungan koneksi menyeluruh untuk bisnis mission-critical Anda.", en: "Comprehensive connection protection for your mission-critical business.", cn: "为您的关键业务提供全面的连接保护。" },
  "bk.adv.1.title": { id: "Automatic Failover", en: "Automatic Failover", cn: "自动故障转移" },
  "bk.adv.1.desc": { id: "Peralihan koneksi tanpa intervensi manual.", en: "Connection switching without manual intervention.", cn: "无需手动干预的连接切换。" },
  "bk.adv.2.title": { id: "Zero Downtime Protection", en: "Zero Downtime Protection", cn: "零停机保护" },
  "bk.adv.2.desc": { id: "Mengurangi risiko gangguan operasional.", en: "Reduces risk of operational disruption.", cn: "降低运营中断风险。" },
  "bk.adv.3.title": { id: "Flexible Bandwidth", en: "Flexible Bandwidth", cn: "灵活带宽" },
  "bk.adv.3.desc": { id: "Kapasitas backup disesuaikan kebutuhan.", en: "Backup capacity customized to needs.", cn: "根据需求定制备份容量。" },
  "bk.adv.4.title": { id: "Multi-Technology Option", en: "Multi-Technology Option", cn: "多技术选项" },
  "bk.adv.4.desc": { id: "Fiber, Wireless, atau Hybrid Backup.", en: "Fiber, Wireless, or Hybrid Backup.", cn: "光纤、无线或混合备份。" },
  "bk.adv.5.title": { id: "SLA Supported", en: "SLA Supported", cn: "SLA支持" },
  "bk.adv.5.desc": { id: "Didukung monitoring dan jaminan layanan.", en: "Supported by monitoring and service guarantee.", cn: "监控和服务保证支持。" },
  "bk.adv.6.title": { id: "Enterprise-Ready", en: "Enterprise-Ready", cn: "企业就绪" },
  "bk.adv.6.desc": { id: "Cocok untuk sistem mission-critical.", en: "Suitable for mission-critical systems.", cn: "适用于关键系统。" },

  "bk.specs.heading1": { id: "Spesifikasi", en: "Service", cn: "服务" },
  "bk.specs.heading2": { id: "Layanan", en: "Specifications", cn: "规格" },
  "bk.specs.desc": { id: "Detail teknis layanan Backup On Demand", en: "Technical details of Backup On Demand service", cn: "按需备份服务技术细节" },

  "bk.usecase.heading1": { id: "Cocok", en: "Suitable", cn: "适合" },
  "bk.usecase.heading2": { id: "Untuk", en: "For", cn: "用途" },
  "bk.usecase.desc": { id: "Pastikan operasional bisnis tetap berjalan meskipun terjadi gangguan jaringan.", en: "Ensure business operations continue despite network disruptions.", cn: "确保业务运营在网络中断时仍能继续。" },
  "bk.usecase.banner.title": { id: "Enterprise Connectivity", en: "Enterprise Connectivity", cn: "企业连接" },
  "bk.usecase.banner.desc": { id: "Koneksi backup untuk gedung perkantoran, rumah sakit, dan perbankan", en: "Backup connection for office buildings, hospitals, and banking", cn: "办公楼、医院和银行的备份连接" },
  "bk.usecase.1.title": { id: "Perbankan & Finansial", en: "Banking & Financial", cn: "银行与金融" },
  "bk.usecase.1.desc": { id: "Jaminan koneksi untuk transaksi perbankan real-time.", en: "Connection guarantee for real-time banking transactions.", cn: "实时银行交易的连接保证。" },
  "bk.usecase.2.title": { id: "Rumah Sakit", en: "Hospital", cn: "医院" },
  "bk.usecase.2.desc": { id: "Konektivitas vital untuk sistem rekam medis dan telemedicine.", en: "Vital connectivity for medical records and telemedicine systems.", cn: "医疗记录和远程医疗系统的重要连接。" },
  "bk.usecase.3.title": { id: "Data Center", en: "Data Center", cn: "数据中心" },
  "bk.usecase.3.desc": { id: "Redundansi koneksi untuk uptime data center maksimal.", en: "Connection redundancy for maximum data center uptime.", cn: "连接冗余，实现数据中心最大正常运行时间。" },
  "bk.usecase.4.title": { id: "E-Commerce Platform", en: "E-Commerce Platform", cn: "电子商务平台" },
  "bk.usecase.4.desc": { id: "Pastikan platform belanja online selalu tersedia.", en: "Ensure online shopping platform is always available.", cn: "确保在线购物平台始终可用。" },
  "bk.usecase.5.title": { id: "Corporate Office", en: "Corporate Office", cn: "企业办公" },
  "bk.usecase.5.desc": { id: "Produktivitas kantor tetap terjaga tanpa downtime.", en: "Office productivity maintained without downtime.", cn: "办公室生产力不受停机影响。" },
  "bk.usecase.6.title": { id: "ISP & Operator", en: "ISP & Operator", cn: "ISP和运营商" },
  "bk.usecase.6.desc": { id: "Backup upstream untuk keandalan layanan ISP.", en: "Upstream backup for ISP service reliability.", cn: "ISP服务可靠性的上游备份。" },

  "bk.how.heading1": { id: "Bagaimana", en: "How Does It", cn: "它是如何" },
  "bk.how.heading2": { id: "Cara Kerjanya?", en: "Work?", cn: "工作的？" },
  "bk.how.desc": { id: "Proses failover otomatis yang menjaga bisnis Anda tetap online.", en: "Automatic failover process that keeps your business online.", cn: "自动故障转移流程，保持您的业务在线。" },
  "bk.how.banner.title": { id: "Automatic Failover System", en: "Automatic Failover System", cn: "自动故障转移系统" },
  "bk.how.banner.desc": { id: "Peralihan koneksi otomatis tanpa intervensi manual", en: "Automatic connection switching without manual intervention", cn: "无需手动干预的自动连接切换" },
  "bk.how.1.title": { id: "Primary Link Active", en: "Primary Link Active", cn: "主链路活跃" },
  "bk.how.1.desc": { id: "Koneksi utama berjalan normal.", en: "Primary connection running normally.", cn: "主连接正常运行。" },
  "bk.how.2.title": { id: "Link Failure Detected", en: "Link Failure Detected", cn: "检测到链路故障" },
  "bk.how.2.desc": { id: "Sistem mendeteksi gangguan secara otomatis.", en: "System detects disruption automatically.", cn: "系统自动检测中断。" },
  "bk.how.3.title": { id: "Automatic Failover", en: "Automatic Failover", cn: "自动故障转移" },
  "bk.how.3.desc": { id: "Backup link aktif dalam hitungan detik.", en: "Backup link activates within seconds.", cn: "备份链路在几秒内激活。" },
  "bk.how.4.title": { id: "Primary Link Restored", en: "Primary Link Restored", cn: "主链路恢复" },
  "bk.how.4.desc": { id: "Koneksi kembali ke jalur utama secara otomatis.", en: "Connection returns to primary path automatically.", cn: "连接自动返回主路径。" },

  "bk.arch.heading1": { id: "Product", en: "Product", cn: "产品" },
  "bk.arch.heading2": { id: "Architecture", en: "Architecture", cn: "架构" },
  "bk.arch.desc": { id: "Dua opsi arsitektur untuk memenuhi kebutuhan konektivitas backup Anda.", en: "Two architecture options to meet your backup connectivity needs.", cn: "两种架构选项，满足您的备份连接需求。" },

  "bk.infra.heading1": { id: "Monitoring dan Infrastruktur", en: "Monitoring and", cn: "监控和" },
  "bk.infra.heading2": { id: "Andal", en: "Reliable Infrastructure", cn: "可靠基础设施" },
  "bk.infra.desc": { id: "Didukung sistem monitoring 24 jam dan infrastruktur fiber profesional untuk memastikan transisi koneksi berlangsung cepat dan stabil.", en: "Supported by 24-hour monitoring system and professional fiber infrastructure to ensure fast and stable connection transition.", cn: "得益于24小时监控系统和专业光纤基础设施，确保快速稳定的连接过渡。" },

  "bk.cta.heading": { id: "Pastikan Bisnis Anda Tetap Online", en: "Ensure Your Business Stays Online", cn: "确保您的业务始终在线" },
  "bk.cta.desc": { id: "Diskusikan kebutuhan backup koneksi Anda bersama tim kami hari ini.", en: "Discuss your backup connection needs with our team today.", cn: "今天就与我们的团队讨论您的备份连接需求。" },
  "bk.cta.btn1": { id: "Request Proposal", en: "Request Proposal", cn: "请求方案" },
  "bk.cta.btn2": { id: "Contact Sales", en: "Contact Sales", cn: "联系销售" },

  // Common
  "common.order": { id: "Order Now", en: "Order Now", cn: "立即订购" },
  "common.wa": { id: "Order via WhatsApp", en: "Order via WhatsApp", cn: "通过WhatsApp订购" },
  "common.step": { id: "Step", en: "Step", cn: "步骤" },
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
    return saved && ["id", "en", "cn"].includes(saved) ? saved : "id";
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
