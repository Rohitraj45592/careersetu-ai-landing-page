"use client";

import { motion } from "framer-motion";
import { Send, Eye, FileCheck2, Mic, Users, Trophy, XCircle } from "lucide-react";

const stages = [
  { icon: Send, label: "Applied", done: true },
  { icon: Eye, label: "Under Review", done: true },
  { icon: FileCheck2, label: "Assessment", done: true },
  { icon: Mic, label: "Interview", done: false },
  { icon: Users, label: "HR", done: false },
  { icon: Trophy, label: "Offer", done: false },
];

export default function ApplicationTracker() {
  return (
    <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[32px] lg:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold sm:text-2xl">Application Tracker</h2>
        <span className="flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500">
          <XCircle size={12} />
          2 Rejected
        </span>
      </div>

      <div className="relative mt-10 lg:mt-14">
        <div className="absolute left-0 right-0 top-[22px] hidden h-[2px] bg-neutral-200 lg:block" />
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "50%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-[22px] hidden h-[2px] bg-black lg:block"
        />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="relative flex flex-col items-center gap-3 text-center"
              >
                <div
                  className={`z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 ${
                    stage.done ? "border-black bg-black text-white" : "border-neutral-300 bg-white text-neutral-400"
                  }`}
                >
                  <Icon size={17} />
                </div>
                <p className={`text-sm font-medium ${stage.done ? "text-black" : "text-neutral-400"}`}>
                  {stage.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
