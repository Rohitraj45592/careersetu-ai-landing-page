"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Python", value: 88 },
  { name: "Java", value: 60 },
  { name: "SQL", value: 68 },
  { name: "React", value: 80 },
  { name: "FastAPI", value: 45 },
  { name: "Docker", value: 38 },
  { name: "AWS", value: 30 },
  { name: "GenAI", value: 55 },
  { name: "System Design", value: 42 },
  { name: "DSA", value: 65 },
];

export default function LearningAnalytics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Learning Analytics</h2>

      <div ref={ref} className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div className="mb-1.5 flex justify-between text-sm">
              <span className="font-medium">{skill.name}</span>
              <span className="tabular-nums text-neutral-500">{skill.value}%</span>
            </div>
            <div className="relative h-2 overflow-hidden rounded-full bg-neutral-200">
              <motion.div
                className="relative h-2 overflow-hidden rounded-full bg-black"
                initial={{ width: "0%" }}
                animate={{ width: inView ? `${skill.value}%` : "0%" }}
                transition={{ duration: 0.9, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
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
