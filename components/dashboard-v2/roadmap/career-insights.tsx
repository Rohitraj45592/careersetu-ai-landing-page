"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const insights = [
  "Backend hiring is increasing this quarter.",
  "Complete Docker before applying to internships.",
  "Your resume score improved by 6 points this month.",
  "Projects are carrying more weight than certificates right now.",
  "Practice interviews next week — you're due for one.",
];

export default function CareerInsights() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
          <Sparkles size={18} />
        </div>
        <h2 className="text-xl font-bold sm:text-2xl">Career Insights</h2>
      </div>

      <ul className="mt-6 space-y-1">
        {insights.map((insight, index) => (
          <motion.li
            key={insight}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
            className="flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-neutral-50"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-[11px] font-medium tabular-nums text-neutral-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[15px] leading-relaxed text-neutral-700">{insight}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
