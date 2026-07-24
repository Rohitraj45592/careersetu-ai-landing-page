"use client";

import { motion } from "framer-motion";
import { Download, Share2, RotateCcw, FileText, Route, Briefcase } from "lucide-react";

const actions = [
  { icon: Download, label: "Download Interview Report" },
  { icon: Share2, label: "Share Performance" },
  { icon: RotateCcw, label: "Retry Interview" },
  { icon: FileText, label: "Resume Studio" },
  { icon: Route, label: "Roadmap" },
  { icon: Briefcase, label: "Job Hub" },
];

export default function ExportActions() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Export</h2>

      <div className="mt-5 flex flex-wrap gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <motion.button
              key={action.label}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="flex items-center gap-2.5 rounded-full border border-neutral-300 px-4 py-3 text-sm font-medium shadow-sm transition-colors duration-200 hover:border-black hover:bg-black hover:text-white hover:shadow-md"
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
