"use client";
import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const outcomes = [
  {
    value: "₦450k+",
    label: "New avg earnings",
    note: "Reported within 3–6 months",
    color: "#05bc60",
  },
  {
    value: "₦120k+",
    label: "Our investment",
    note: "Starting price across all tiers",
    color: "rgba(255,255,255,0.85)",
  },
];

export default function ImpactSection() {
  return (
    <section className="bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left — heading + body */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
          >
            <p
              className="text-brand-green text-[10px] font-medium tracking-[0.28em] uppercase mb-6"
            >
              Our Results
            </p>
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6"
              style={{ letterSpacing: "-0.01em" }}
            >
              The numbers behind every repositioned career.
            </h2>
            <p className="text-white/45 font-light text-base leading-relaxed mb-8 max-w-md">
              Across all career stages we serve, clients report measurable improvements in earnings, callbacks, and visibility — typically within 3 to 6 months.
            </p>
            <a
              href="#pricing"
              className="text-brand-green text-sm font-medium tracking-wide hover:underline transition-all inline-flex items-center gap-2 group"
            >
              Explore pricing
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {outcomes.map((o, i) => (
              <motion.div
                key={o.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease, delay: i * 0.12 }}
                className="border border-white/10 p-8 flex flex-col justify-between"
              >
                <div
                  className="leading-none mb-4"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                    color: o.color,
                  }}
                >
                  {o.value}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold mb-1">{o.label}</div>
                  <div className="text-white/35 text-xs font-light tracking-wide">{o.note}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
