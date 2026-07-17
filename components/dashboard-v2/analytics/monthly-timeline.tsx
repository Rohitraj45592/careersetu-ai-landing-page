"use client";

import { motion } from "framer-motion";
import { FileText, FolderKanban, Mic, GraduationCap, Send } from "lucide-react";

const events = [
  { icon: FileText, title: "Resume Updated", time: "2 days ago" },
  { icon: FolderKanban, title: "Project Completed", time: "5 days ago" },
  { icon: Mic, title: "Interview Finished", time: "1 week ago" },
  { icon: GraduationCap, title: "Course Completed", time: "2 weeks ago" },
  { icon: Send, title: "Application Submitted", time: "3 weeks ago" },
];

export default function MonthlyTimeline() {
  return (
    <section className="rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Monthly Timeline</h2>

      <div className="relative mt-6">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-neutral-200" />
        <div className="space-y-2">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.title}
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
                  <span className="truncate font-medium">{event.title}</span>
                  <span className="shrink-0 whitespace-nowrap text-xs text-neutral-400">{event.time}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
