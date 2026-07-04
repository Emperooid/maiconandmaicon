"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const companies: { name: string; domain: string; careers: string; logoUrl?: string | false }[] = [
  { name: "Moniepoint",         domain: "moniepoint.com",         careers: "https://moniepoint.com/careers",           logoUrl: false },
  { name: "Paystack",           domain: "paystack.com",           careers: "https://paystack.com/careers" },
  { name: "Flutterwave",        domain: "flutterwave.com",        careers: "https://flutterwave.com/ng/careers" },
  { name: "MTN",                domain: "mtn.com",                careers: "https://mtn.com/careers/" },
  { name: "Airtel",             domain: "airtel.africa",          careers: "https://airtel.africa/careers/" },
  { name: "Halliburton",        domain: "halliburton.com",        careers: "https://jobs.halliburton.com/" },
  { name: "Dangote",            domain: "dangote.com",            careers: "https://dangote.com/careers/" },
  { name: "Shell",              domain: "shell.com",              careers: "https://www.shell.com/careers.html" },
  { name: "Seamfix",            domain: "seamfix.com",            careers: "https://seamfix.com/careers/" },
  { name: "Access Bank",        domain: "accessbankplc.com",      careers: "https://accessbankplc.com/careers/" },
  { name: "Coca-Cola",          domain: "coca-cola.com",          careers: "https://careers.coca-colacompany.com/" },
  { name: "Marriott Bonvoy",    domain: "marriott.com",           careers: "https://jobs.marriott.com/" },
  { name: "Africa Practice",    domain: "africapractice.com",     careers: "https://africapractice.com/join-us/" },
  { name: "Shuttlers",          domain: "shuttlers.ng",           careers: "https://shuttlers.ng/careers/" },
  { name: "Interswitch",        domain: "interswitchgroup.com",   careers: "https://www.interswitchgroup.com/careers/" },
  { name: "Jackson Etti & Edu", domain: "jee.ng",                 careers: "https://jee.ng/careers/" },
  { name: "Ikeja Electric",     domain: "ikejaelectric.com",      careers: "https://ikejaelectric.com/careers/" },
  { name: "FCDO",               domain: "gov.uk",                 careers: "https://www.gov.uk/government/organisations/foreign-commonwealth-development-office/about/recruitment" },
  { name: "Dyelab",             domain: "dyelab.com",             careers: "https://dyelab.com" },
];

const PALETTE = [
  { bg: "rgba(5,188,96,0.12)",   border: "rgba(5,188,96,0.28)",   text: "#05bc60" },
  { bg: "rgba(14,42,28,0.10)",   border: "rgba(14,42,28,0.22)",   text: "#0f2d1e" },
  { bg: "rgba(37,99,235,0.10)",  border: "rgba(37,99,235,0.22)",  text: "#2563eb" },
  { bg: "rgba(234,88,12,0.10)",  border: "rgba(234,88,12,0.22)",  text: "#ea580c" },
  { bg: "rgba(124,58,237,0.10)", border: "rgba(124,58,237,0.22)", text: "#7c3aed" },
  { bg: "rgba(220,38,38,0.10)",  border: "rgba(220,38,38,0.22)",  text: "#dc2626" },
];
const palette = (name: string) => PALETTE[name.charCodeAt(0) % PALETTE.length];

/* Silently probes image URLs via JS Image; never shows a broken <img> */
function CompanyLogo({ name, domain, logoUrl }: { name: string; domain: string; logoUrl?: string | false }) {
  const [src, setSrc] = useState<string | null>(null);
  const col = palette(name);

  useEffect(() => {
    // logoUrl: false → always badge; logoUrl: string → use directly; undefined → probe
    if (logoUrl === false) return;
    if (typeof logoUrl === "string") { setSrc(logoUrl); return; }

    let dead = false;
    const attempts = [
      `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
      `https://icons.duckduckgo.com/ip3/${domain}.ico`,
    ];

    let i = 0;
    const probe = () => {
      if (dead || i >= attempts.length) return;
      const img = new window.Image();
      img.onload = () => { if (!dead) setSrc(attempts[i]); };
      img.onerror = () => { i++; probe(); };
      img.src = attempts[i];
    };
    probe();
    return () => { dead = true; };
  }, [domain, logoUrl]);

  if (src) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={src}
        alt={name}
        className="w-8 h-8 object-contain opacity-55 group-hover:opacity-100 transition-opacity duration-200"
      />
    );
  }

  /* Badge — always visible until/unless a logo loads */
  return (
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
      style={{ background: col.bg, border: `1px solid ${col.border}` }}
    >
      <span
        className="font-black text-sm leading-none"
        style={{ color: col.text, fontFamily: "'Montserrat', sans-serif" }}
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
}

export default function CompaniesSection() {
  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mb-8"
        >
          <p className="text-brand-green text-[10px] font-medium tracking-[0.28em] uppercase mb-3">
            Where our clients land
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <h2
              className="font-display font-black text-brand-black leading-tight"
              style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.9rem)", letterSpacing: "-0.01em" }}
            >
              Companies our clients now call home.
            </h2>
            <p className="text-black/30 text-xs font-light sm:text-right sm:max-w-[200px] shrink-0">
              Tap any card to open their careers page.
            </p>
          </div>
        </motion.div>

        {/* Card grid — 3 cols → 4 → 5 → 6 → 7 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.025 } } }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2"
        >
          {companies.map((c) => (
            <motion.a
              key={c.name}
              href={c.careers}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${c.name} careers page`}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show:   { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
              className="group relative flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-black/7 hover:border-brand-green/40 hover:bg-brand-green/[0.03] hover:shadow-sm active:scale-95 transition-all duration-200"
              style={{ minHeight: 84 }}
            >
              {/* Green dot — signals tappability on all devices */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-black/10 group-hover:bg-brand-green transition-colors duration-200" />

              <CompanyLogo name={c.name} domain={c.domain} logoUrl={c.logoUrl} />

              <span className="text-[10px] font-semibold text-black/38 group-hover:text-brand-dark text-center leading-tight transition-colors duration-200 w-full px-0.5">
                {c.name}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          style={{ transformOrigin: "left" }}
          className="h-px bg-black/6 mt-10"
        />

      </div>
    </section>
  );
}
