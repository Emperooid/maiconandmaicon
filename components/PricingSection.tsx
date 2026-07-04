"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const tiers = [
  { label: "Emerging Talent",     prev: 150000, price: 80000,  after: 450000, href: "https://paystack.shop/emerging-talent-positioning" },
  { label: "Middle Management",   prev: 200000, price: 120000, after: 500000, href: "https://paystack.shop/middle-management-positioning" },
  { label: "Senior Management",   prev: 150000, price: 40000,  after: 400000, href: "https://paystack.shop/senior-management-positioning" },
  { label: "C-Suite",             prev: 300000, price: 35000,  after: 400000, href: "https://paystack.shop/c-suite-management-positioning" },
];

const chartData = tiers.map((t) => ({
  name: t.label,
  Before:    t.prev,
  "Our Price": t.price,
  After:     t.after,
}));

const COLORS = {
  Before:    "rgba(255,255,255,0.22)",
  "Our Price": "#05bc60",
  After:     "#6ee7b7",
};

function naira(v: number) {
  return `₦${(v / 1000).toFixed(0)}k`;
}

/* Two-line X-axis label — splits on the last space before the midpoint */
function XTick({ x = 0, y = 0, payload }: { x?: number; y?: number; payload?: { value: string } }) {
  const words = (payload?.value ?? "").split(" ");
  const mid = Math.ceil(words.length / 2);
  const top = words.slice(0, mid).join(" ");
  const bot = words.slice(mid).join(" ");
  return (
    <g transform={`translate(${x},${y + 4})`}>
      <text textAnchor="middle" fontSize={10} fontFamily="Roboto,sans-serif" fill="rgba(255,255,255,0.55)" dy={0}>
        {top}
      </text>
      {bot && (
        <text textAnchor="middle" fontSize={10} fontFamily="Roboto,sans-serif" fill="rgba(255,255,255,0.55)" dy={14}>
          {bot}
        </text>
      )}
    </g>
  );
}

interface TooltipEntry { name: string; value: number; color: string; }
interface LegendEntry  { value: string; color: string; }

/* Custom tooltip */
function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: TooltipEntry[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: "#122b1e", border: "1px solid rgba(5,188,96,0.4)", borderRadius: 10, padding: "10px 14px", fontFamily: "Roboto,sans-serif" }}>
      <p style={{ color: "#05bc60", fontWeight: 700, fontSize: 12, marginBottom: 8 }}>{label}</p>
      {payload.map((entry) => (
        <div key={entry.name} style={{ display: "flex", justifyContent: "space-between", gap: 24, fontSize: 12, marginBottom: 3 }}>
          <span style={{ color: "rgba(255,255,255,0.6)" }}>{entry.name}</span>
          <span style={{ color: "#fff", fontWeight: 600 }}>₦{Number(entry.value).toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}

/* Custom legend */
function ChartLegend({ payload }: { payload?: LegendEntry[] }) {
  return (
    <div style={{ display: "flex", gap: 20, justifyContent: "flex-end", marginBottom: 12 }}>
      {payload?.map((entry) => (
        <span key={entry.value} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontFamily: "Roboto,sans-serif", color: "rgba(255,255,255,0.65)" }}>
          <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: entry.color }} />
          {entry.value}
        </span>
      ))}
    </div>
  );
}

const benefits = ["Better interviews", "Higher pay", "Increased recruiter outreach"];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* ── Left copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-brand-green font-bold text-3xl md:text-4xl leading-tight mb-6">
              A well-executed investment in your career positioning unlocks roles, visibility, and income
              growth that continues to compound over time.
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              We&apos;ve worked with competent professionals whose earning potential was capped — not because
              they lacked skill, but because their current environment failed to reflect their true value.
              Many stayed stuck, underpaid, or overlooked, despite consistently delivering results, all
              because they weren&apos;t telling their career stories well.
            </p>
            <div className="flex flex-col gap-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="font-bold text-lg">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: bar chart ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          >
            <h3 className="font-bold text-xl text-white mb-1">Earnings Comparison (₦)</h3>
            <p className="text-white/45 text-sm mb-4">Average client outcomes before and after repositioning</p>

            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <ResponsiveContainer width="100%" height={340}>
                <BarChart
                  data={chartData}
                  margin={{ top: 4, right: 4, left: 4, bottom: 36 }}
                  barCategoryGap="30%"
                  barGap={3}
                >
                  <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.07)" />

                  <XAxis
                    dataKey="name"
                    tick={<XTick />}
                    tickLine={false}
                    axisLine={{ stroke: "rgba(255,255,255,0.12)" }}
                    interval={0}
                    height={42}
                  />

                  <YAxis
                    tickFormatter={naira}
                    tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10, fontFamily: "Roboto,sans-serif" }}
                    tickLine={false}
                    axisLine={false}
                    width={48}
                  />

                  <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)", radius: 4 }} />

                  <Legend content={<ChartLegend />} verticalAlign="top" />

                  <Bar name="Before"    dataKey="Before"    fill={COLORS["Before"]}    radius={[3,3,0,0]} maxBarSize={30} />
                  <Bar name="Our Price" dataKey="Our Price" fill={COLORS["Our Price"]} radius={[3,3,0,0]} maxBarSize={30} />
                  <Bar name="After"     dataKey="After"     fill={COLORS["After"]}     radius={[3,3,0,0]} maxBarSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p className="mt-3 text-white/30 text-xs leading-relaxed">
              * Results may vary by sector, positioning, and readiness. Figures reflect averages within 3–6 months.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {tiers.map((t) => (
                <a key={t.label} href={t.href} target="_blank" rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-green hover:underline">
                  {t.label} →
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
