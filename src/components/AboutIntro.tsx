import { Target, Rocket, Building2, Wifi, Shield, Award, Radio } from "lucide-react";
import aboutOffice from "@/assets/about-office.jpg";
import aboutNoc from "@/assets/about-noc.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import trustedNetwork from "@/assets/trusted-network.png";
import { useLanguage } from "@/contexts/LanguageContext";

const timelineIcons = [Building2, Wifi, Award, Shield, Radio];
const timelineYears = ["2006", "2014", "2017", "2018", "2019"];

const AboutIntro = () => {
  const { t } = useLanguage();

  const timeline = timelineYears.map((year, i) => ({
    year,
    title: t(`about.tl.${year}.title`),
    desc: t(`about.tl.${year}.desc`),
    icon: timelineIcons[i],
  }));

  return (
    <section id="about" className="bg-background">
      {/* Hero Banner */}
      <div className="relative w-full overflow-hidden" style={{ height: "60vh", minHeight: "400px" }}>
        <img
          src={aboutHero}
          alt="Tim Artamedia"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-lg mb-3">
              About Us
            </h1>
            <p className="text-primary font-semibold text-xl drop-shadow-lg">
              PT Artamedia Citra Telematika Indonesia
            </p>
          </div>
        </div>
      </div>

      {/* About Us + Timeline */}
      <div className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div className="relative">
              <img src={aboutOffice} alt="Tim Artamedia" className="rounded-2xl shadow-card w-full object-cover aspect-[4/3]" />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-lg">
                <p className="text-3xl font-bold">18+</p>
                <p className="text-sm opacity-90">{t("about.years")}</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("about.desc1")}
                <strong className="text-foreground"> {t("about.company")}</strong>
                {t("about.desc1b")}
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("about.desc2")}
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {timeline.map(({ year, title, desc, icon: Icon }) => (
                <div key={year} className="relative group">
                  <div className="hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary items-center justify-center ring-4 ring-background z-10">
                    <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                  </div>
                  <div className="lg:pt-12 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <span className="text-2xl font-bold text-primary">{year}</span>
                    </div>
                    <h4 className="font-bold text-foreground mb-1">{title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Network Banner */}
      <div className="w-full">
        <img
          src={trustedNetwork}
          alt="Get Connected, Always Connected - Artamedia Trusted Network"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Vision & Mission */}
      <div className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${aboutNoc})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-[hsl(145,60%,5%)]/85" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">{t("about.purpose")}</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              {t("about.vision")} & <span className="text-primary">{t("about.mission")}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Target size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t("about.vision")}</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-lg">{t("about.vision.text")}</p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Rocket size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t("about.mission")}</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-lg">{t("about.mission.text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
