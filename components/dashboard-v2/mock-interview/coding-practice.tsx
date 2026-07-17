"use client";

import { motion } from "framer-motion";

const levels = [
  { label: "Easy", count: 42 },
  { label: "Medium", count: 35 },
  { label: "Hard", count: 18 },
];

export default function CodingPractice() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Coding Practice</h2>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {levels.map((level, index) => (
          <motion.div
            key={level.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            <p className="text-lg font-semibold">{level.label}</p>
            <p className="mt-1 text-sm text-neutral-500">{level.count} Questions</p>

            <button className="mt-5 w-full rounded-xl bg-black py-2.5 text-sm font-medium text-white transition hover:opacity-90">
              Solve
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
