"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedNumber from "../shared/animated-number";

const breakdown = [
  { name: "Communication", value: 80 },
  { name: "Technical", value: 74 },
  { name: "Coding", value: 71 },
  { name: "Resume", value: 82 },
  { name: "Roadmap Progress", value: 65 },
];

export default function PlacementReadiness() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[32px] lg:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold sm:text-2xl">Placement Readiness</h2>
        <AnimatedNumber value={82} suffix="%" className="text-3xl font-bold tabular-nums" />
      </div>

      <div ref={ref} className="mt-6 space-y-5">
        {breakdown.map((item, index) => (
          <div key={item.name}>
            <div className="mb-1.5 flex justify-between text-sm">
              <span className="font-medium">{item.name}</span>
              <span className="tabular-nums text-neutral-500">{item.value}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
              <motion.div
                className="h-2 rounded-full bg-black"
                initial={{ width: "0%" }}
                animate={{ width: inView ? `${item.value}%` : "0%" }}
                transition={{ duration: 0.9, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
