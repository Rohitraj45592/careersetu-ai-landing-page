"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const tips = [
  "Keep your resume to a single page unless you have 5+ years of experience.",
  "Lead every bullet point with a strong action verb, not a passive phrase.",
  "Quantify impact wherever possible — percentages, numbers, timeframes.",
  "Tailor your keywords to each job description before applying.",
  "Avoid tables and columns — many ATS systems parse them incorrectly.",
  "Keep your summary to 2–3 lines and make it role-specific.",
  "List your most relevant, recent experience first.",
  "Use a consistent, readable font at 10–12pt throughout.",
];

export default function RecruiterTips() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
          <Lightbulb size={18} />
        </div>
        <h2 className="text-xl font-bold sm:text-2xl">Recruiter Tips</h2>
      </div>

      <ul className="mt-6 grid grid-cols-1 gap-1 sm:grid-cols-2">
        {tips.map((tip, index) => (
          <motion.li
            key={tip}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
            className="flex items-start gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-neutral-50"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
            <span className="text-sm leading-relaxed text-neutral-700">{tip}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
