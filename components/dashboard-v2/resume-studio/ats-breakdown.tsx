"use client";

import { motion } from "framer-motion";

const categories = [
  { name: "Formatting", value: 92 },
  { name: "Projects", value: 85 },
  { name: "Experience", value: 74 },
  { name: "Skills", value: 88 },
  { name: "Education", value: 95 },
  { name: "Achievements", value: 63 },
  { name: "Keywords", value: 71 },
  { name: "Professional Summary", value: 58 },
];

export default function AtsBreakdown() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">ATS Breakdown</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        {categories.map((cat, index) => (
          <div key={cat.name}>
            <div className="mb-2 flex items-baseline justify-between">
              <span className="font-medium">{cat.name}</span>
              <span className="w-10 text-right text-sm tabular-nums text-neutral-500">
                {cat.value}%
              </span>
            </div>

            <div className="relative h-2 overflow-hidden rounded-full bg-neutral-200">
              <motion.div
                className="relative h-2 overflow-hidden rounded-full bg-black"
                initial={{ width: 0 }}
                whileInView={{ width: `${cat.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.06, ease: "easeOut" }}
              >
                <span
                  className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  style={{
                    animation: `atsShine 2.6s ease-in-out ${1 + index * 0.12}s infinite`,
                  }}
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes atsShine {
          0% { transform: translateX(-120%) skewX(-12deg); }
          60%, 100% { transform: translateX(320%) skewX(-12deg); }
        }
      `}</style>
    </section>
  );
}
