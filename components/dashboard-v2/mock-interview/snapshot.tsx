"use client";

import { motion } from "framer-motion";
import { Mic, Star, Smile, Cpu, MessageCircle, Target } from "lucide-react";
import AnimatedNumber from "../shared/animated-number";

const stats = [
  { icon: Mic, value: 14, suffix: "", label: "Interviews Completed" },
  { icon: Star, value: 78, suffix: "%", label: "Average Score" },
  { icon: Smile, value: 82, suffix: "%", label: "Confidence Level" },
  { icon: Cpu, value: 74, suffix: "%", label: "Technical Score" },
  { icon: MessageCircle, value: 80, suffix: "%", label: "Communication Score" },
  { icon: Target, value: 82, suffix: "%", label: "Placement Readiness" },
];

export default function Snapshot() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Interview Snapshot</h2>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                <Icon size={18} />
              </div>
              <AnimatedNumber value={item.value} suffix={item.suffix} />
              <p className="mt-1 text-sm text-neutral-500">{item.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
