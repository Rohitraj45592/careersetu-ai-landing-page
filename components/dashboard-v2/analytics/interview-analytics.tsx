"use client";

import { motion } from "framer-motion";
import { Mic, Star, Cpu, MessageCircle, Smile, TrendingUp } from "lucide-react";
import AnimatedNumber from "../shared/animated-number";

const cards = [
  { icon: Mic, value: 14, suffix: "", label: "Interviews Completed" },
  { icon: Star, value: 78, suffix: "%", label: "Average Score" },
  { icon: Cpu, value: 74, suffix: "%", label: "Technical" },
  { icon: MessageCircle, value: 80, suffix: "%", label: "Communication" },
  { icon: Smile, value: 82, suffix: "%", label: "Confidence" },
];

export default function InterviewAnalytics() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Interview Analytics</h2>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {cards.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

      <div className="mt-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
        <div className="flex items-center gap-2 text-sm font-medium text-neutral-600">
          <TrendingUp size={15} />
          AI Feedback Trend
        </div>
        <div className="mt-4 flex h-16 items-end gap-1.5">
          {[35, 42, 38, 55, 60, 58, 72, 78].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex-1 rounded-t-sm bg-neutral-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
