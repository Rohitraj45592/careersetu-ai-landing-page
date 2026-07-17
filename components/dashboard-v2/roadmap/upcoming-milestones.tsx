"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, FileSearch, Send, Mic, Trophy } from "lucide-react";

const milestones = [
  { icon: Code2, title: "Finish DSA", eta: "2 weeks" },
  { icon: Rocket, title: "Deploy Project", eta: "3 weeks" },
  { icon: FileSearch, title: "Resume Review", eta: "3 weeks" },
  { icon: Send, title: "Apply Internship", eta: "4 weeks" },
  { icon: Mic, title: "Mock Interview", eta: "5 weeks" },
  { icon: Trophy, title: "Placement Drive", eta: "8 weeks" },
];

export default function UpcomingMilestones() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Upcoming Milestones</h2>

      <div className="relative mt-6">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-5 top-1 bottom-1 w-px bg-neutral-200"
        />

        <div className="space-y-1">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;

            return (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                className="group relative flex items-center gap-4 rounded-xl px-2 py-2.5 transition-colors hover:bg-neutral-50"
              >
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white transition-transform duration-300 group-hover:scale-110 group-hover:border-black">
                  <Icon size={16} />
                </div>

                <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
                  <span className="truncate font-medium">{milestone.title}</span>
                  <span className="shrink-0 text-xs tabular-nums text-neutral-400">
                    In {milestone.eta}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
