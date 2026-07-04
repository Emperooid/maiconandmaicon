"use client";
import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const testimonials = [
  {
    quote: "I was stuck applying for mid-level roles despite leading projects across markets. They helped me see my worth and repositioned me for global roles. I now work with a fintech scale-up in London, earning twice what I made last year.",
    name: "Dipo O.",
    country: "United Kingdom",
    flagCode: "gb",
    flagEmoji: "🇬🇧",
    avatar: "https://api.dicebear.com/9.x/personas/svg?seed=DipoOlawale&backgroundColor=ebe8e4",
  },
  {
    quote: "I kept getting ignored for roles I knew I could do. After Maicon & Maicon worked on my CV and LinkedIn, I started getting calls from top-tier companies, and within 6 weeks I landed a role with a 60% salary increase.",
    name: "Bimbo A.",
    country: "Nigeria",
    flagCode: "ng",
    flagEmoji: "🇳🇬",
    avatar: "https://api.dicebear.com/9.x/personas/svg?seed=BimboAdekunle&backgroundColor=dce8e0",
  },
  {
    quote: "What I loved about the service is that they don't do surface-level work. They pulled out the core of my experience and turned it into a story that finally made sense to recruiters. I got interviews at 3 major organisations within a month.",
    name: "Sanmi A.",
    country: "United States",
    flagCode: "us",
    flagEmoji: "🇺🇸",
    avatar: "https://api.dicebear.com/9.x/personas/svg?seed=SanmiAdeola&backgroundColor=e8ebe4",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-brand-green text-[10px] font-medium tracking-[0.28em] uppercase mb-4"
          >
            Client outcomes
          </motion.p>
          <div className="grid md:grid-cols-2 gap-6 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.08 }}
              className="font-display font-black text-brand-black leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.01em" }}
            >
              Trusted by professionals in four continents.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.15 }}
              className="text-black/40 text-sm font-light leading-relaxed md:text-right"
            >
              Every testimonial is a story of clarity, growth, and finding the right fit.
            </motion.p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease, delay: i * 0.1 }}
              className="border border-black/8 rounded-2xl p-7 flex flex-col gap-6 hover:border-brand-green/25 hover:shadow-sm transition-all duration-300"
            >
              {/* Large quote mark */}
              <div
                className="text-brand-green/15 leading-none select-none"
                style={{ fontFamily: "Georgia, serif", fontSize: "4.5rem", lineHeight: 1 }}
                aria-hidden
              >
                &ldquo;
              </div>

              {/* Quote */}
              <p className="text-black/60 text-sm leading-relaxed font-light -mt-4 flex-1">
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/6">
                {/* Avatar image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover shrink-0 border border-black/8"
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.style.display = "none";
                    const fallback = img.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                {/* Fallback initials */}
                <div
                  className="w-10 h-10 rounded-full shrink-0 items-center justify-center text-white text-xs font-bold border border-white/20"
                  style={{ background: "#05bc60", fontFamily: "'Montserrat', sans-serif", display: "none" }}
                >
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>

                {/* Name + flag */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-brand-black leading-tight">{t.name}</span>
                  <div className="flex items-center gap-1.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://flagcdn.com/20x15/${t.flagCode}.png`}
                      alt={t.country}
                      width={20}
                      height={15}
                      className="rounded-sm object-cover"
                      style={{ width: 20, height: 15 }}
                    />
                    <span className="text-xs text-black/35 font-light">{t.country}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
