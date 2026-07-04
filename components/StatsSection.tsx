"use client";
import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const stats = [
  { value: "500+",   label: "Professionals",      desc: "Helped across industries and four continents",         accent: false },
  { value: ">2×",    label: "Average ROI",         desc: "Better pay or alignment within 6 months",              accent: false },
  { value: "₦450k+", label: "Avg new earnings",    desc: "Reported within 3–6 months of repositioning",         accent: true  },
  { value: "93%",    label: "Satisfaction rate",   desc: "Clients report more callbacks and better alignment",   accent: false },
  { value: "5+",     label: "Years of practice",   desc: "Helping professionals reposition since 2020",          accent: false },
  { value: "₦120k+", label: "Starting investment", desc: "Across all career tiers and packages",                 accent: true  },
];

export default function StatsSection() {
  return (
    <section className="bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">

        {/* Header row */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-16 pb-12 border-b border-white/8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-brand-green text-[10px] font-medium tracking-[0.28em] uppercase mb-4">
              Our track record
            </p>
            <h2
              className="font-display font-black text-white leading-tight"
              style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)", letterSpacing: "-0.01em" }}
            >
              The numbers behind every repositioned career.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="text-white/35 text-sm leading-relaxed font-light md:text-right"
          >
            Across all career stages we serve, clients report measurable improvements in earnings,
            callbacks, and visibility — typically within 3 to 6 months.
          </motion.p>
        </div>

        {/* Stats grid — 2 col mobile / 3 col desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-14 gap-x-6 md:gap-x-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.07 }}
              className={[
                "pr-6 md:pr-10",
                /* left border: every item that isn't the first in its row */
                i % 2 !== 0 ? "pl-6 border-l border-white/8 md:border-transparent" : "",
                i % 3 !== 0 ? "md:pl-10 md:border-l md:border-white/8" : "md:pl-0 md:border-l-0",
              ].join(" ")}
            >
              <div
                className="leading-none mb-3"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: s.accent ? "#05bc60" : "#ffffff",
                }}
              >
                {s.value}
              </div>
              <div className="text-brand-green text-[10px] font-semibold tracking-[0.18em] uppercase mb-2">
                {s.label}
              </div>
              <div className="text-white/30 text-xs font-light leading-relaxed">
                {s.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-white/8"
        >
          <a
            href="#pricing"
            className="text-brand-green text-sm font-medium tracking-wide hover:underline inline-flex items-center gap-2 group"
          >
            Explore our packages
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
