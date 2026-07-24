"use client";

import { motion } from "framer-motion";
import { Clock, FolderKanban, Send, Mic, ClipboardCheck, ListChecks } from "lucide-react";

const metrics = [
  { icon: Clock, label: "Study Hours", value: "18h", bars: [40, 55, 65, 50, 80, 60, 70] },
  { icon: FolderKanban, label: "Projects", value: "2", bars: [20, 20, 40, 40, 60, 60, 80] },
  { icon: Send, label: "Applications", value: "9", bars: [30, 45, 20, 60, 40, 70, 55] },
  { icon: Mic, label: "Interviews", value: "3", bars: [0, 30, 0, 50, 0, 40, 20] },
  { icon: ClipboardCheck, label: "Mock Tests", value: "5", bars: [20, 40, 30, 50, 45, 60, 50] },
  { icon: ListChecks, label: "Tasks Completed", value: "27", bars: [50, 60, 55, 70, 65, 80, 90] },
];

export default function WeeklyProgress() {
  return (
    <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[32px] lg:p-8">
      <h2 className="text-xl font-bold sm:text-2xl">Weekly Progress</h2>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-neutral-200 p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium text-neutral-600">
                  <Icon size={15} />
                  {metric.label}
                </div>
                <span className="text-lg font-bold">{metric.value}</span>
              </div>

              <div className="mt-4 flex h-16 items-end gap-1.5">
                {metric.bars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 rounded-t-sm bg-neutral-300"
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
