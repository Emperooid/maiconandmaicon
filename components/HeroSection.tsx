"use client";
import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const trusted = [
  { label: "Emerging Talents",   href: "https://paystack.shop/emerging-talent-positioning" },
  { label: "Middle Managers",    href: "https://paystack.shop/middle-management-positioning" },
  { label: "Senior Managers",    href: "https://paystack.shop/senior-management-positioning" },
  { label: "C-Suite Executives", href: "https://paystack.shop/c-suite-management-positioning" },
  { label: "Retired Executives", href: "https://paystack.shop/legacy-positioning" },
];

export default function HeroSection() {
  return (
    <section id="home" className="min-h-[72vh] flex flex-col justify-center pt-[72px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full py-10 md:py-14">

        {/* Overline */}
        <div className="flex items-center gap-4 mb-7 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 36 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="h-px bg-brand-green shrink-0"
          />
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="text-brand-green text-[10px] font-medium tracking-[0.28em] uppercase"
          >
            Career Repositioning &amp; Professional Branding
          </motion.p>
        </div>

        {/* Headline */}
        <div className="overflow-hidden mb-5">
          <motion.h1
            initial={{ y: 72, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease, delay: 0.3 }}
            className="font-sans font-bold leading-[1.1] tracking-tight text-brand-black"
            style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
          >
            Every great professional
            <br />
            has a compelling
            <br />
            <span className="text-brand-green">career story.</span>
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.55 }}
          className="text-black/45 text-sm md:text-base leading-relaxed font-light max-w-lg mb-9"
        >
          Not just a list of roles — a clear thread of competence, growth, and integrity
          that the right people can see and act on.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
        >
          <a href="#categories" className="btn-primary">
            Explore Packages
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 text-sm font-medium text-black/55 hover:text-brand-green tracking-wide transition-colors group"
          >
            <span>What we offer</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.95 }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease, delay: 0.85 }}
            style={{ transformOrigin: "left" }}
            className="h-px bg-black/8 mb-6"
          />
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-black/25">
              Trusted by
            </p>
            <div className="flex flex-wrap gap-2">
              {trusted.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-black/10 text-xs font-medium text-black/50 hover:border-brand-green hover:text-brand-green hover:bg-brand-green/5 transition-all duration-200"
                >
                  {item.label}
                  <svg
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
