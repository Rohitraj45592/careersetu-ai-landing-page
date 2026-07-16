"use client";

import { motion } from "framer-motion";
import AnimatedNumber from "../shared/animated-number";

const stats = [
  { label: "Applications", value: 23 },
  { label: "Interview Rate", value: 34, suffix: "%" },
  { label: "Offer Rate", value: 12, suffix: "%" },
  { label: "Response Rate", value: 58, suffix: "%" },
  { label: "Acceptance", value: 100, suffix: "%" },
  { label: "Rejections", value: 9 },
];

const bars = [62, 40, 75, 55, 90, 48, 70];

export default function PlacementAnalytics() {
  return (
    <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[32px] lg:p-8">
      <h2 className="text-xl font-bold sm:text-2xl">Placement Analytics</h2>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl border border-neutral-200 p-4">
            <AnimatedNumber value={item.value} suffix={item.suffix ?? ""} className="text-xl font-bold tabular-nums" />
            <p className="mt-1 text-xs text-neutral-500">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Placeholder graph */}
      <div className="mt-6 flex h-40 items-end gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
        {bars.map((height, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 rounded-t-md bg-neutral-300"
          />
        ))}
      </div>
    </section>
  );
}
