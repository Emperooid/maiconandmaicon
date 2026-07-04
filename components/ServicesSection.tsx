"use client";
import { motion } from "framer-motion";

const audiences = [
  { title: "Intrapreneurs",  description: "Leading change from within large organisations" },
  { title: "Entrepreneurs",  description: "Solving a pressing problem with conviction and skill" },
  { title: "Creatives",      description: "Shaping culture, community, and new markets" },
];

const services = [
  "CV Rewrite",          "CV Audit",
  "CV Review",           "LinkedIn Optimisation",
  "LinkedIn Management", "LinkedIn Review",
  "Cover Letter",        "Career Profile",
  "Portfolio Review",    "Portfolio Design",
  "Presentation Design", "Ghostwriting",
  "Content Strategy",    "Content Marketing",
  "Content Writing",     "Research",
  "Essays",              "DIY Resources",
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-brand-green text-[10px] font-medium tracking-[0.28em] uppercase mb-6"
            >
              Who we serve
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="font-serif font-bold leading-tight text-brand-black mb-10"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Built for more than a job title.
            </motion.h2>

            <div className="divide-y divide-black/8">
              {audiences.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease, delay: 0.1 + i * 0.08 }}
                  className="py-6"
                >
                  <p className="font-semibold text-black text-base mb-1">{a.title}</p>
                  <p className="text-black/45 text-sm leading-relaxed font-light">{a.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.blockquote
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.4 }}
              className="mt-10 border-l-[3px] border-brand-green pl-6"
            >
              <p className="text-brand-dark font-light text-base leading-relaxed italic">
                &ldquo;If you do honest work and deserve to be seen, we help you tell that story clearly — in every format that matters.&rdquo;
              </p>
            </motion.blockquote>
          </div>

          {/* Right */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-brand-green text-[10px] font-medium tracking-[0.28em] uppercase mb-6"
            >
              What we offer
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="font-serif font-semibold text-2xl text-brand-black mb-8"
            >
              Eighteen ways to tell your story better.
            </motion.h3>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
              className="grid grid-cols-2 gap-x-8"
            >
              {services.map((service) => (
                <motion.div
                  key={service}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  className="flex items-center gap-2.5 py-3 border-b border-black/6"
                >
                  <span className="w-1 h-1 rounded-full bg-brand-green shrink-0" />
                  <span className="text-sm text-black/65 font-normal">{service}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              href="#categories"
              className="mt-10 inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase text-black border-b border-black/25 pb-0.5 hover:text-brand-green hover:border-brand-green transition-colors group"
            >
              View our packages
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
