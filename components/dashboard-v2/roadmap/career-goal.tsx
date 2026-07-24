"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, IndianRupee, CalendarClock, Clock3, Pencil } from "lucide-react";

const goals = [
  { icon: Briefcase, label: "Target Role", value: "AI Engineer" },
  { icon: Building2, label: "Dream Company", value: "Google" },
  { icon: IndianRupee, label: "Expected Package", value: "18 LPA" },
  { icon: CalendarClock, label: "Learning Duration", value: "6 months" },
  { icon: Clock3, label: "Weekly Hours", value: "20 hrs/week" },
];

export default function CareerGoal() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-bold sm:text-2xl">Career Goal</h2>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-1.5 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition-colors hover:border-black"
        >
          <Pencil size={14} />
          Edit Goal
        </motion.button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {goals.map((goal, index) => {
          const Icon = goal.icon;
          return (
            <motion.div
              key={goal.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
              className="rounded-2xl border border-neutral-200 p-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">
                <Icon size={16} />
              </div>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-neutral-400">
                {goal.label}
              </p>
              <p className="mt-1 font-semibold">{goal.value}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
