import { Target, Rocket, TrendingUp, Building2, Wifi, Shield, Award, Radio } from "lucide-react";
import aboutOffice from "@/assets/about-office.jpg";
import aboutNoc from "@/assets/about-noc.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const growthData = [
  { year: "2017", revenue: 1873 },
  { year: "2018", revenue: 2556 },
  { year: "2019", revenue: 3561 },
  { year: "2020", revenue: 4929 },
  { year: "2021", revenue: 7030 },
  { year: "2022", revenue: 9062 },
];

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
      {/* About Us + Timeline */}
      <div className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              {t("about.heading1")} <span className="text-primary">{t("about.heading2")}</span>
            </h2>
          </div>

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

      {/* Company Growth */}
      <div className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">{t("about.growth")}</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              {t("about.growth.heading1")} <span className="text-primary">{t("about.growth.heading2")}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <TrendingUp size={28} className="text-primary" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">9.062M</p>
                  <p className="text-muted-foreground">{t("about.growth.revenue")}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("about.growth.desc")} <strong className="text-foreground">{t("about.growth.times")}</strong> {t("about.growth.period")}
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={14} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(v: number) => `${(v / 1000).toFixed(1)}B`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "12px" }}
                    formatter={(value: number) => [`${value.toLocaleString()} Juta`, "Revenue"]}
                  />
                  <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={3}
                    dot={{ r: 6, fill: "hsl(var(--primary))", strokeWidth: 3, stroke: "hsl(var(--background))" }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
