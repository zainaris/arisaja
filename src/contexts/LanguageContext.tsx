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
  "about.company": {
    id: "PT Artamedia Citra Telematika Indonesia",
    en: "PT Artamedia Citra Telematika Indonesia",
    cn: "PT Artamedia Citra Telematika Indonesia",
  },
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

  // Timeline
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

  // Vision & Mission
  "about.purpose": { id: "Our Purpose", en: "Our Purpose", cn: "我们的使命" },
  "about.vision": { id: "Visi", en: "Vision", cn: "愿景" },
  "about.mission": { id: "Misi", en: "Mission", cn: "使命" },
  "about.vision.text": {
    id: "Menjadi pemain utama dalam bisnis solusi informasi dan komunikasi di regional.",
    en: "Being a major player in business information and communication solutions in the region.",
    cn: "成为区域信息和通信解决方案业务的主要参与者。",
  },
  "about.mission.text": {
    id: "Mendukung kegiatan bisnis bagi perusahaan dengan solusi informasi dan komunikasi yang murah dan handal.",
    en: "Supporting business activities for enterprises with affordable and reliable information and communication solutions.",
    cn: "以经济实惠且可靠的信息和通信解决方案支持企业业务活动。",
  },

  // Company Growth
  "about.growth": { id: "Company Growth", en: "Company Growth", cn: "公司增长" },
  "about.growth.heading1": { id: "Pertumbuhan", en: "Company", cn: "公司" },
  "about.growth.heading2": { id: "Perusahaan", en: "Growth", cn: "增长" },
  "about.growth.revenue": { id: "Revenue di 2022 (Rupiah)", en: "Revenue in 2022 (Rupiah)", cn: "2022年收入（卢比）" },
  "about.growth.desc": {
    id: "Sejak berdiri sebagai PT di tahun 2017, pendapatan perusahaan terus meningkat secara konsisten dari 1.873 juta rupiah hingga mencapai 9.062 juta rupiah di tahun 2022 — pertumbuhan hampir",
    en: "Since incorporation in 2017, company revenue has consistently increased from 1,873 million rupiah to 9,062 million rupiah in 2022 — almost",
    cn: "自2017年成立以来，公司收入从18.73亿卢比持续增长到2022年的90.62亿卢比——在6年内增长了近",
  },
  "about.growth.times": { id: "5x lipat", en: "5x growth", cn: "5倍" },
  "about.growth.period": { id: "dalam 6 tahun.", en: "in 6 years.", cn: "。" },

  // Coverage
  "coverage.heading1": { id: "Area", en: "Area", cn: "覆盖" },
  "coverage.heading2": { id: "Coverage", en: "Coverage", cn: "范围" },
  "coverage.desc": {
    id: "Jaringan fiber optik kami menjangkau kota-kota besar di seluruh Indonesia hingga Asia Tenggara.",
    en: "Our fiber optic network reaches major cities across Indonesia and Southeast Asia.",
    cn: "我们的光纤网络覆盖印度尼西亚和东南亚的主要城市。",
  },
  "coverage.btn": { id: "Cek Coverage", en: "Check Coverage", cn: "查看覆盖" },

  // Stats
  "stats.experience": { id: "Tahun Pengalaman", en: "Years of Experience", cn: "年经验" },
  "stats.customers": { id: "Pelanggan Aktif", en: "Active Customers", cn: "活跃客户" },
  "stats.uptime": { id: "Uptime SLA", en: "Uptime SLA", cn: "在线率SLA" },
  "stats.monitoring": { id: "Monitoring", en: "Monitoring", cn: "全天监控" },

  // FinalCTA
  "cta.heading": {
    id: "Siap Menggunakan Internet yang Lebih Stabil?",
    en: "Ready for a More Stable Internet?",
    cn: "准备好使用更稳定的互联网了吗？",
  },
  "cta.desc": {
    id: "Hubungi tim kami hari ini dan dapatkan solusi terbaik untuk kebutuhan Anda.",
    en: "Contact our team today and get the best solution for your needs.",
    cn: "立即联系我们的团队，获取最适合您需求的解决方案。",
  },
  "cta.order": { id: "Order Now", en: "Order Now", cn: "立即订购" },
  "cta.contact": { id: "Contact Us", en: "Contact Us", cn: "联系我们" },

  // Contact
  "contact.heading1": { id: "Contact", en: "Contact", cn: "联系" },
  "contact.heading2": { id: "Us", en: "Us", cn: "我们" },
  "contact.desc": {
    id: "Hubungi kami untuk konsultasi, penawaran, atau pertanyaan seputar layanan internet fiber optik kami.",
    en: "Contact us for consultation, quotes, or questions about our fiber optic internet services.",
    cn: "请联系我们进行咨询、报价或有关我们光纤互联网服务的问题。",
  },
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
  "footer.desc": {
    id: "Penyedia layanan internet fiber optik terpercaya di Indonesia.",
    en: "Trusted fiber optic internet service provider in Indonesia.",
    cn: "印度尼西亚值得信赖的光纤互联网服务提供商。",
  },
  "footer.services": { id: "Layanan", en: "Services", cn: "服务" },
  "footer.company": { id: "Company", en: "Company", cn: "公司" },
  "footer.support": { id: "Support", en: "Support", cn: "支持" },
  "footer.email.support": { id: "Email Support", en: "Email Support", cn: "邮件支持" },
  "footer.chat.support": { id: "Chat Support", en: "Chat Support", cn: "在线支持" },
  "footer.24.support": { id: "24/7 Technical Support", en: "24/7 Technical Support", cn: "全天候技术支持" },
  "footer.24.desc": { id: "Tim teknis kami siap membantu kapan saja", en: "Our technical team is ready to help anytime", cn: "我们的技术团队随时准备提供帮助" },
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
