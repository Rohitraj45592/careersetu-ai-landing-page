"use client";

import { motion } from "framer-motion";
import { FileText, FolderKanban, Award, BarChart3, Download } from "lucide-react";

const categories = [
  { icon: FileText, label: "Resume Files", size: "12 MB", percent: 18 },
  { icon: FolderKanban, label: "Projects", size: "34 MB", percent: 51 },
  { icon: Award, label: "Certificates", size: "9 MB", percent: 13 },
  { icon: BarChart3, label: "Analytics Reports", size: "12 MB", percent: 18 },
];

export default function DataStorage() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">Data & Storage</h2>
          <p className="mt-1 text-sm text-neutral-500">67 MB of 500 MB used</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium transition-colors hover:border-black"
        >
          <Download size={16} />
          Download All Data
        </motion.button>
      </div>

      <div className="mt-5 flex h-2.5 overflow-hidden rounded-full bg-neutral-100">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.label}
            initial={{ width: 0 }}
            whileInView={{ width: `${cat.percent}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
            className={index % 2 === 0 ? "bg-black" : "bg-neutral-400"}
          />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
              className="flex items-center gap-3 rounded-2xl border border-neutral-200 p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100">
                <Icon size={16} />
              </div>
              <div className="flex min-w-0 flex-1 items-center justify-between">
                <span className="font-medium">{cat.label}</span>
                <span className="text-sm text-neutral-500">{cat.size}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
