"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { name: "Communication", value: 80 },
  { name: "Confidence", value: 82 },
  { name: "Problem Solving", value: 75 },
  { name: "Technical Knowledge", value: 74 },
  { name: "Grammar", value: 88 },
  { name: "Vocabulary", value: 70 },
  { name: "Leadership", value: 65 },
  { name: "Overall Performance", value: 78 },
];

export default function PerformanceBreakdown() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Performance Breakdown</h2>

      <div ref={ref} className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {metrics.map((metric, index) => (
          <div key={metric.name}>
            <div className="mb-1.5 flex justify-between text-sm">
              <span className="font-medium">{metric.name}</span>
              <span className="tabular-nums text-neutral-500">{metric.value}%</span>
            </div>
            <div className="relative h-2 overflow-hidden rounded-full bg-neutral-200">
              <motion.div
                className="relative h-2 overflow-hidden rounded-full bg-black"
                initial={{ width: "0%" }}
                animate={{ width: inView ? `${metric.value}%` : "0%" }}
                transition={{ duration: 0.9, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="absolute inset-0 -skew-x-12 animate-shine-sweep bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
