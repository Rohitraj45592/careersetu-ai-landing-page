"use client";

import { motion } from "framer-motion";
import { FileCheck2, Mic, Send, Code } from "lucide-react";

const deadlines = [
  { icon: FileCheck2, title: "Amazon SDE-1 Assessment", time: "Tomorrow, 10:00 AM" },
  { icon: Mic, title: "Adobe GenAI Interview", time: "In 2 days" },
  { icon: Send, title: "Atlassian Application Deadline", time: "In 3 days" },
  { icon: Code, title: "NVIDIA Coding Test", time: "In 5 days" },
];

export default function UpcomingDeadlines() {
  return (
    <section className="rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Upcoming Deadlines</h2>

      <div className="relative mt-6">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-neutral-200" />

        <div className="space-y-2">
          {deadlines.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ x: 2 }}
                className="relative flex items-center gap-4 rounded-xl px-2 py-2.5 transition-colors duration-200 hover:bg-neutral-50"
              >
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white">
                  <Icon size={16} />
                </div>
                <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
                  <span className="truncate font-medium">{item.title}</span>
                  <span className="shrink-0 whitespace-nowrap text-xs text-neutral-400">{item.time}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
