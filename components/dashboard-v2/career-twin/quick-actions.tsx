"use client";

import { motion } from "framer-motion";
import { FileSearch, Mic, Route, Search, TrendingUp } from "lucide-react";

const actions = [
  { icon: FileSearch, label: "Analyze Resume" },
  { icon: Mic, label: "Start Mock Interview" },
  { icon: Route, label: "Generate Roadmap" },
  { icon: Search, label: "Find Jobs" },
  { icon: TrendingUp, label: "Improve ATS" },
];

export default function QuickActions() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Quick Actions</h2>

      <div className="mt-5 flex flex-wrap gap-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <motion.button
              key={action.label}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 420, damping: 22 }}
              className="flex items-center gap-2.5 rounded-full border border-neutral-300 px-4 py-3 text-sm font-medium shadow-sm transition-colors duration-200 hover:border-black hover:bg-black hover:text-white"
            >
              <Icon size={16} />
              {action.label}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
