"use client";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Emerging Talent Positioning",
    tagline: "You're not just starting out — you're ready to step up.",
    href: "https://paystack.shop/emerging-talent-positioning",
  },
  {
    title: "Middle-Management Positioning",
    tagline: "You've earned your seat. Now let's position you for the next table.",
    href: "https://paystack.shop/middle-management-positioning",
  },
  {
    title: "Senior-Management Positioning",
    tagline: "You're shaping systems. It's time your career story showed it.",
    href: "https://paystack.shop/senior-management-positioning",
  },
  {
    title: "C-Suite Management Positioning",
    tagline: "Your leadership deserves a narrative as powerful as your impact.",
    href: "https://paystack.shop/c-suite-management-positioning",
  },
  {
    title: "Legacy Positioning",
    tagline: "Your career doesn't end at retirement — it evolves into legacy.",
    href: "https://paystack.shop/legacy-positioning",
  },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function CategoriesSection() {
  return (
    <section id="categories" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-brand-green text-[10px] font-medium tracking-[0.28em] uppercase mb-5"
            >
              Our packages
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="font-serif font-bold leading-tight text-brand-black"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              Designed for wherever you are in your career.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="text-black/45 text-base leading-relaxed font-light md:text-right"
          >
            Each package is tailored to a specific career stage — choose the one that reflects where you are and where you&apos;re going.
          </motion.p>
        </div>

        {/* Animated top border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          style={{ transformOrigin: "left" }}
          className="h-px bg-black/10"
        />

        {/* List */}
        <div>
          {categories.map((cat, i) => (
            <motion.a
              key={cat.title}
              href={cat.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease, delay: i * 0.07 }}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 py-8 border-b border-black/8 hover:bg-brand-green/4 transition-colors duration-300 px-2 -mx-2"
            >
              {/* Index */}
              <span className="font-serif text-brand-green/50 text-sm font-medium w-8 shrink-0 group-hover:text-brand-green transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title + tagline */}
              <div className="flex-1 min-w-0">
                <h3 className="font-serif font-semibold text-xl md:text-2xl text-brand-black group-hover:text-brand-dark transition-colors leading-snug mb-1">
                  {cat.title}
                </h3>
                <p className="text-black/40 text-sm font-light leading-relaxed">{cat.tagline}</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase text-black/30 group-hover:text-brand-green group-hover:gap-3 transition-all duration-300 shrink-0">
                View package
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
