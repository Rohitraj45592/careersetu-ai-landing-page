"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Globe2, FileText, BarChart3, Download, Trash2 } from "lucide-react";
import ToggleSwitch from "../shared/toggle-switch";

const initial = [
  { id: "public", icon: Eye, label: "Public Profile", desc: "Make your profile visible to recruiters.", on: true },
  { id: "portfolio", icon: Globe2, label: "Portfolio Visibility", desc: "Show your portfolio link on your profile.", on: true },
  { id: "resume", icon: FileText, label: "Resume Visibility", desc: "Allow recruiters to view your resume.", on: true },
  { id: "analytics", icon: BarChart3, label: "Analytics Sharing", desc: "Share anonymized usage data to improve AI.", on: false },
];

export default function PrivacySettings() {
  const [items, setItems] = useState(initial);

  function toggle(id: string) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, on: !item.on } : item)));
  }

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Privacy Settings</h2>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
              className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <p className="font-medium">{item.label}</p>
                  <p className="truncate text-xs text-neutral-500">{item.desc}</p>
                </div>
              </div>

              <ToggleSwitch checked={item.on} onChange={() => toggle(item.id)} />
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-neutral-100 pt-6">
        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium transition-colors hover:border-black"
        >
          <Download size={16} />
          Download Data
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-600 transition-colors hover:border-black hover:text-black"
        >
          <Trash2 size={16} />
          Delete Data
        </motion.button>
      </div>
    </section>
  );
}
