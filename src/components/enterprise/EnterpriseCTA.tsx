import { ArrowRight, ArrowUpRight } from "lucide-react";

const WA_EXPERT =
  "https://wa.me/6281517667777?text=Halo%20Artamedia%2C%20saya%20ingin%20berbicara%20dengan%20network%20expert";
const WA_QUOTE =
  "https://wa.me/6281517667777?text=Halo%20Artamedia%2C%20saya%20ingin%20meminta%20penawaran%20layanan";

const EnterpriseCTA = () => (
  <section id="order" className="relative overflow-hidden bg-navy py-20 text-navy-foreground lg:py-28">
    <div className="absolute inset-0 network-grid radial-fade" aria-hidden="true" />
    <div
      className="absolute left-1/2 top-0 h-96 w-[48rem] -translate-x-1/2 blur-3xl"
      style={{ background: "radial-gradient(circle, hsl(219 100% 52% / 0.25), transparent 65%)" }}
      aria-hidden="true"
    />
    <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
      <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
        Ready to connect?
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-navy-muted">
        Let's build a network infrastructure that keeps your business connected.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href={WA_EXPERT}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-dark"
        >
          Talk to a Network Expert
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href={WA_QUOTE}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition-colors hover:border-white/60 hover:bg-white/10"
        >
          Request a Quote
          <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  </section>
);

export default EnterpriseCTA;
