"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const categories = [
  { name: "Projects", value: 90 },
  { name: "Skills", value: 84 },
  { name: "ATS", value: 91 },
  { name: "Resume", value: 82 },
  { name: "Keywords", value: 76 },
  { name: "Experience", value: 65 },
  { name: "Education", value: 95 },
  { name: "Certifications", value: 58 },
];

const suggestions = [
  "Add Docker experience to increase backend match.",
  "Highlight measurable impact in your top project.",
  "Add one more certification for stronger ATS pass rate.",
];

export default function JobMatch() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const score = 91;
  const circumference = 2 * Math.PI * 54;

  return (
    <section ref={ref} className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">AI Job Match</h2>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
        {/* Circular score */}
        <div className="relative flex items-center justify-center">
          <svg viewBox="0 0 120 120" className="h-40 w-40 -rotate-90">
            <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e5e5" strokeWidth="10" />
            <motion.circle
              cx="60" cy="60" r="54" fill="none" stroke="#111111" strokeWidth="10" strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: inView ? circumference * (1 - score / 100) : circumference }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-3xl font-bold">{score}%</span>
            <span className="text-xs text-neutral-500">Match Score</span>
          </div>
        </div>

        {/* Progress bars */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.map((cat, index) => (
            <div key={cat.name}>
              <div className="mb-1.5 flex justify-between text-sm">
                <span className="font-medium">{cat.name}</span>
                <span className="text-neutral-500">{cat.value}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-neutral-200">
                <motion.div
                  className="h-1.5 rounded-full bg-black"
                  initial={{ width: "0%" }}
                  animate={{ width: inView ? `${cat.value}%` : "0%" }}
                  transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 sm:p-5">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Sparkles size={14} />
          AI Suggestions
        </div>
        <ul className="mt-3 space-y-2">
          {suggestions.map((s) => (
            <li key={s} className="flex items-start gap-2 text-sm text-neutral-600">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
