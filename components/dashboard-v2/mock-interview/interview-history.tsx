"use client";

import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

const history = [
  { name: "Technical Interview", date: "12 July", duration: "32 min", score: "84%", feedback: "Strong problem solving" },
  { name: "HR Interview", date: "9 July", duration: "18 min", score: "76%", feedback: "Good communication" },
  { name: "System Design", date: "3 July", duration: "40 min", score: "68%", feedback: "Improve scalability depth" },
];

export default function InterviewHistory() {
  return (
    <section className="rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Interview History</h2>

      <div className="mt-5 space-y-3">
        {history.map((item, index) => (
          <motion.div
            key={item.name + item.date}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="flex flex-col gap-3 rounded-2xl border border-neutral-200 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-neutral-500">{item.date} · {item.duration} · {item.feedback}</p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-semibold">{item.score}</span>
              <button className="flex items-center gap-1.5 rounded-xl border border-neutral-300 px-3 py-2 text-sm font-medium transition hover:border-black">
                <RotateCcw size={14} />
                Retry
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
