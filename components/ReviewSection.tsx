"use client";
import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const reviews = [
  {
    title: "CV Review",
    turnaround: "24-Hour Turnaround",
    body: "Spot the gaps, refine your strengths, and align your CV with the job you want. You'll get a full diagnostic review with tips to improve content, formatting, positioning, and job-fit.",
    cta: "Review my CV",
    href: "https://paystack.shop/cv-review",
  },
  {
    title: "Cover Letter Review",
    turnaround: "24-Hour Turnaround",
    body: "Your cover letter should speak directly to the role and show that you're aligned, intentional, and ready to contribute. We review tone, structure, clarity, and alignment with the role.",
    cta: "Review my Cover Letter",
    href: "https://paystack.shop/cover-letter-review",
  },
  {
    title: "LinkedIn Review",
    turnaround: "24-Hour Turnaround",
    body: "Make sure your recruiter-facing profile is telling the right story. We review your headline, summary, experience, and skills section, plus give tips to improve visibility.",
    cta: "Review my LinkedIn",
    href: "https://paystack.shop/linkedin-review",
  },
];

export default function ReviewSection() {
  return (
    <section className="bg-[#f5fbf7] py-20 md:py-28 overflow-hidden">
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
            Quick turnaround
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="font-display font-black text-brand-black leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.8vw, 2.75rem)", letterSpacing: "-0.01em" }}
          >
            Saw a job you like?<br />
            Review your application documents in 24 hours.
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease, delay: i * 0.1 }}
              className="bg-brand-dark rounded-2xl p-8 flex flex-col"
            >
              {/* Tag */}
              <span className="inline-block text-brand-green text-[10px] font-semibold tracking-[0.2em] uppercase mb-5 border border-brand-green/30 rounded-full px-3 py-1 w-fit">
                {r.turnaround}
              </span>

              {/* Title */}
              <h3 className="font-display font-black text-white text-xl leading-snug mb-4">
                {r.title}
              </h3>

              {/* Body */}
              <p className="text-white/45 text-sm font-light leading-relaxed flex-1 mb-8">
                {r.body}
              </p>

              {/* CTA */}
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-white text-xs font-semibold tracking-wide uppercase py-3 px-6 rounded-lg hover:bg-white hover:text-brand-dark transition-all duration-200 group"
              >
                {r.cta}
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
