import { Link } from "react-router-dom";

/* ─── 3D Illustration SVG Icons ─────────────────────────────────── */

const BroadbandIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="bb-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f0fdf4" />
        <stop offset="100%" stopColor="#d1fae5" />
      </linearGradient>
      <linearGradient id="bb-top" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#a7f3d0" />
      </linearGradient>
      <linearGradient id="bb-wave1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#16a34a" />
        <stop offset="100%" stopColor="#4ade80" />
      </linearGradient>
      <linearGradient id="bb-wave2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#86efac" stopOpacity="0.6" />
      </linearGradient>
      <filter id="bb-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#16a34a" floodOpacity="0.25" />
      </filter>
    </defs>
    {/* Router body */}
    <rect x="14" y="44" width="52" height="18" rx="5" fill="url(#bb-body)" filter="url(#bb-shadow)" />
    <rect x="14" y="44" width="52" height="7" rx="5" fill="url(#bb-top)" />
    {/* Antenna left */}
    <rect x="20" y="28" width="4" height="17" rx="2" fill="#6ee7b7" />
    <circle cx="22" cy="27" r="3" fill="#16a34a" />
    {/* Antenna right */}
    <rect x="56" y="28" width="4" height="17" rx="2" fill="#6ee7b7" />
    <circle cx="58" cy="27" r="3" fill="#16a34a" />
    {/* LED dots */}
    <circle cx="27" cy="55" r="2.5" fill="#4ade80">
      <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="35" cy="55" r="2.5" fill="#4ade80" opacity="0.7" />
    <circle cx="43" cy="55" r="2.5" fill="#fbbf24" />
    {/* WiFi arcs */}
    <path d="M40 38 Q40 30 50 25" stroke="url(#bb-wave2)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M40 38 Q40 30 30 25" stroke="url(#bb-wave2)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M40 38 Q40 20 56 14" stroke="url(#bb-wave1)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M40 38 Q40 20 24 14" stroke="url(#bb-wave1)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <circle cx="40" cy="38" r="3" fill="#16a34a" />
  </svg>
);

const DedicatedIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="sv-face" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e0f2fe" />
        <stop offset="100%" stopColor="#bae6fd" />
      </linearGradient>
      <linearGradient id="sv-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e0f2fe" />
      </linearGradient>
      <linearGradient id="sv-side" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7dd3fc" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
      <filter id="sv-shadow">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0284c7" floodOpacity="0.2" />
      </filter>
    </defs>
    {/* Server 1 (bottom) */}
    <rect x="12" y="54" width="50" height="14" rx="3" fill="url(#sv-face)" filter="url(#sv-shadow)" />
    <rect x="12" y="54" width="50" height="5" rx="3" fill="url(#sv-top)" />
    <rect x="54" y="54" width="8" height="14" rx="2" fill="url(#sv-side)" />
    <circle cx="22" cy="61" r="2" fill="#22c55e"><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" /></circle>
    <circle cx="29" cy="61" r="2" fill="#22c55e" opacity="0.6" />
    <rect x="36" y="58" width="14" height="2" rx="1" fill="#94a3b8" />
    <rect x="36" y="62" width="10" height="2" rx="1" fill="#94a3b8" opacity="0.5" />
    {/* Server 2 (mid) */}
    <rect x="12" y="36" width="50" height="14" rx="3" fill="url(#sv-face)" filter="url(#sv-shadow)" />
    <rect x="12" y="36" width="50" height="5" rx="3" fill="url(#sv-top)" />
    <rect x="54" y="36" width="8" height="14" rx="2" fill="url(#sv-side)" />
    <circle cx="22" cy="43" r="2" fill="#22c55e" opacity="0.8" />
    <circle cx="29" cy="43" r="2" fill="#fbbf24"><animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite" /></circle>
    <rect x="36" y="40" width="14" height="2" rx="1" fill="#94a3b8" />
    <rect x="36" y="44" width="10" height="2" rx="1" fill="#94a3b8" opacity="0.5" />
    {/* Server 3 (top) */}
    <rect x="12" y="18" width="50" height="14" rx="3" fill="url(#sv-face)" filter="url(#sv-shadow)" />
    <rect x="12" y="18" width="50" height="5" rx="3" fill="url(#sv-top)" />
    <rect x="54" y="18" width="8" height="14" rx="2" fill="url(#sv-side)" />
    <circle cx="22" cy="25" r="2" fill="#22c55e" />
    <circle cx="29" cy="25" r="2" fill="#22c55e" opacity="0.4" />
    <rect x="36" y="22" width="14" height="2" rx="1" fill="#94a3b8" />
    <rect x="36" y="26" width="10" height="2" rx="1" fill="#94a3b8" opacity="0.5" />
  </svg>
);

const MetroEIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="sw-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#eff6ff" />
        <stop offset="100%" stopColor="#dbeafe" />
      </linearGradient>
      <linearGradient id="sw-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#bfdbfe" />
      </linearGradient>
      <linearGradient id="cable-blue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
      <linearGradient id="cable-green" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#16a34a" />
        <stop offset="100%" stopColor="#4ade80" />
      </linearGradient>
      <filter id="sw-shadow">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#2563eb" floodOpacity="0.18" />
      </filter>
    </defs>
    {/* Switch body */}
    <rect x="8" y="30" width="58" height="22" rx="5" fill="url(#sw-body)" filter="url(#sw-shadow)" />
    <rect x="8" y="30" width="58" height="8" rx="5" fill="url(#sw-top)" />
    {/* Ports */}
    {[18, 26, 34, 42, 50].map((x, i) => (
      <g key={i}>
        <rect x={x} y="43" width="7" height="5" rx="1.5" fill="#94a3b8" />
        <rect x={x + 1} y="44" width="5" height="3" rx="1" fill="#1e3a5f" />
      </g>
    ))}
    {/* LED row */}
    {[18, 26, 34, 42, 50].map((x, i) => (
      <circle key={i} cx={x + 3.5} cy="38" r="1.8" fill={i % 2 === 0 ? "#22c55e" : "#3b82f6"} opacity={i === 2 ? "1" : "0.7"}>
        {i === 0 && <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />}
      </circle>
    ))}
    {/* Cables hanging down */}
    <path d="M21 52 Q21 62 14 68" stroke="url(#cable-blue)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    <path d="M29 52 Q29 65 22 72" stroke="url(#cable-green)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    <path d="M37 52 Q37 62 37 70" stroke="url(#cable-blue)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    <path d="M45 52 Q45 65 52 70" stroke="url(#cable-green)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    <path d="M53 52 Q53 62 60 68" stroke="url(#cable-blue)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    {/* Cable ends */}
    <rect x="10" y="65" width="8" height="5" rx="2" fill="#1d4ed8" />
    <rect x="18" y="69" width="8" height="5" rx="2" fill="#15803d" />
    <rect x="33" y="67" width="8" height="5" rx="2" fill="#1d4ed8" />
    <rect x="48" y="67" width="8" height="5" rx="2" fill="#15803d" />
    <rect x="56" y="65" width="8" height="5" rx="2" fill="#1d4ed8" />
  </svg>
);

const DwdmIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="coil-outer" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1d4ed8" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="coil-inner" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#172554" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
      <radialGradient id="fiber-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
      </radialGradient>
      <filter id="coil-shadow">
        <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#1d4ed8" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* Fiber coil - outer ring */}
    <ellipse cx="38" cy="44" rx="26" ry="20" fill="url(#coil-outer)" filter="url(#coil-shadow)" />
    <ellipse cx="38" cy="44" rx="20" ry="15" fill="url(#coil-inner)" />
    <ellipse cx="38" cy="44" rx="13" ry="9" fill="#0f172a" />
    {/* Glossy highlight */}
    <ellipse cx="32" cy="38" rx="7" ry="4" fill="white" opacity="0.12" transform="rotate(-15 32 38)" />
    {/* Fiber core strands at the tip (right side) */}
    <path d="M62 30 Q72 22 76 18" stroke="#f97316" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M63 34 Q74 28 78 24" stroke="#fbbf24" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M63 38 Q75 35 78 30" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M62 42 Q74 42 78 38" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M62 46 Q73 48 76 46" stroke="#e879f9" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M61 50 Q71 55 74 53" stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Glow at tip */}
    <ellipse cx="63" cy="40" rx="4" ry="8" fill="url(#fiber-glow)" opacity="0.5" />
    {/* Cable sleeve end */}
    <ellipse cx="38" cy="44" rx="26" ry="20" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0.4" />
  </svg>
);

const DarkFiberIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="df-cable" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
      <linearGradient id="df-cut" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
      <radialGradient id="beam1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
        <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="beam2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#22c55e" stopOpacity="1" />
        <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="beam3" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
      </radialGradient>
      <filter id="df-shadow">
        <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.35" />
      </filter>
    </defs>
    {/* Main cable body */}
    <rect x="10" y="34" width="44" height="16" rx="8" fill="url(#df-cable)" filter="url(#df-shadow)" />
    {/* Cable highlight */}
    <rect x="10" y="34" width="44" height="5" rx="4" fill="white" opacity="0.07" />
    {/* Cross-section cut face */}
    <ellipse cx="54" cy="42" rx="8" ry="8" fill="url(#df-cut)" stroke="#475569" strokeWidth="1.5" />
    {/* Fiber cores in cross-section */}
    {[
      { cx: 54, cy: 42, r: 1.5, color: "#f97316" },
      { cx: 58, cy: 39, r: 1.2, color: "#22c55e" },
      { cx: 58, cy: 45, r: 1.2, color: "#3b82f6" },
      { cx: 50, cy: 39, r: 1.2, color: "#e879f9" },
      { cx: 50, cy: 45, r: 1.2, color: "#fbbf24" },
      { cx: 54, cy: 36.5, r: 1, color: "#38bdf8" },
      { cx: 54, cy: 47.5, r: 1, color: "#f97316" },
    ].map((c, i) => (
      <circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill={c.color} opacity="0.9" />
    ))}
    {/* Light beams shooting out from fibers */}
    <path d="M62 39 L76 28" stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.9" />
    <path d="M62 42 L78 42" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.9" />
    <path d="M62 45 L76 56" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.9" />
    <path d="M62 37 L74 24" stroke="#e879f9" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
    <path d="M62 47 L74 60" stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
    {/* Glow halos at beam tips */}
    <circle cx="76" cy="28" r="3.5" fill="#f97316" opacity="0.5" />
    <circle cx="78" cy="42" r="3.5" fill="#22c55e" opacity="0.5" />
    <circle cx="76" cy="56" r="3.5" fill="#3b82f6" opacity="0.5" />
    {/* Cable jacket texture lines */}
    <line x1="20" y1="34" x2="20" y2="50" stroke="white" strokeWidth="0.5" opacity="0.07" />
    <line x1="30" y1="34" x2="30" y2="50" stroke="white" strokeWidth="0.5" opacity="0.07" />
    <line x1="40" y1="34" x2="40" y2="50" stroke="white" strokeWidth="0.5" opacity="0.07" />
  </svg>
);

const BackupIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="bk-shield" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="100%" stopColor="#16a34a" />
      </linearGradient>
      <linearGradient id="bk-shield-inner" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#86efac" />
        <stop offset="100%" stopColor="#22c55e" />
      </linearGradient>
      <linearGradient id="bk-server" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e0f2fe" />
        <stop offset="100%" stopColor="#bae6fd" />
      </linearGradient>
      <filter id="bk-glow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
      <filter id="bk-shadow">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#16a34a" floodOpacity="0.35" />
      </filter>
    </defs>
    {/* Mini server rack behind */}
    <rect x="14" y="32" width="36" height="10" rx="3" fill="url(#bk-server)" opacity="0.8" />
    <rect x="14" y="45" width="36" height="10" rx="3" fill="url(#bk-server)" opacity="0.8" />
    <rect x="14" y="58" width="36" height="10" rx="3" fill="url(#bk-server)" opacity="0.8" />
    <circle cx="22" cy="37" r="1.8" fill="#22c55e" opacity="0.8" />
    <circle cx="22" cy="50" r="1.8" fill="#22c55e" opacity="0.6" />
    <circle cx="22" cy="63" r="1.8" fill="#fbbf24" />
    {/* Shield - main */}
    <path d="M52 14 L72 20 L72 38 Q72 54 52 62 Q32 54 32 38 L32 20 Z" fill="url(#bk-shield)" filter="url(#bk-shadow)" />
    {/* Shield inner highlight */}
    <path d="M52 18 L68 23 L68 38 Q68 51 52 57 Q36 51 36 38 L36 23 Z" fill="url(#bk-shield-inner)" opacity="0.6" />
    {/* Shield glossy top */}
    <path d="M52 18 L68 23 L68 30 Q60 26 52 26 Q44 26 36 30 L36 23 Z" fill="white" opacity="0.2" />
    {/* Checkmark on shield */}
    <path d="M44 38 L49 44 L61 32" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#bk-glow)" />
    {/* Green glow ring around shield */}
    <ellipse cx="52" cy="40" rx="23" ry="24" fill="none" stroke="#4ade80" strokeWidth="1.5" opacity="0.3">
      <animate attributeName="r" values="23;25;23" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
    </ellipse>
  </svg>
);

/* ─── Service data ────────────────────────────────────────────────── */

const services = [
  { title: "Broadband",       IconComp: BroadbandIcon, href: "/broadband",        bg: "from-green-50  to-emerald-100" },
  { title: "Dedicated",       IconComp: DedicatedIcon, href: "/dedicated",        bg: "from-sky-50    to-blue-100"    },
  { title: "Metro E",         IconComp: MetroEIcon,    href: "/metro-e",          bg: "from-blue-50   to-indigo-100"  },
  { title: "DWDM",            IconComp: DwdmIcon,      href: "/dwdm",             bg: "from-indigo-50 to-blue-100"    },
  { title: "Dark Fiber",      IconComp: DarkFiberIcon, href: "/dark-fiber",       bg: "from-slate-50  to-slate-100"   },
  { title: "Backup On Demand",IconComp: BackupIcon,    href: "/backup-on-demand", bg: "from-green-50  to-emerald-100" },
];

/* ─── Component ───────────────────────────────────────────────────── */

const ServiceCards = () => (
  <section className="bg-background py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map(({ title, IconComp, href, bg }) => (
          <Link
            key={title}
            to={href}
            className="group flex flex-col items-center gap-3 p-5 bg-card border border-border rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
          >
            {/* Icon container */}
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${bg} flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
              <IconComp />
            </div>

            {/* Title */}
            <span className="text-sm font-bold text-foreground text-center leading-tight">
              {title}
            </span>

            {/* Lihat Paket */}
            <span className="text-xs text-primary font-semibold group-hover:underline">
              Lihat Paket →
            </span>

            {/* Bottom CTA button */}
            <div className="w-full mt-1 py-2 px-3 rounded-xl bg-green-gradient-cta text-primary-foreground text-xs font-bold text-center truncate group-hover:opacity-90 transition-opacity duration-200">
              {title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceCards;
