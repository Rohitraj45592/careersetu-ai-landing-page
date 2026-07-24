"use client";

import { motion } from "framer-motion";
import { Palette, Globe, Clock, CalendarDays, LayoutDashboard, Home, ChevronDown } from "lucide-react";

const preferences = [
  { icon: Palette, label: "Theme", value: "Light" },
  { icon: Globe, label: "Language", value: "English (India)" },
  { icon: Clock, label: "Timezone", value: "GMT+5:30 — Kolkata" },
  { icon: CalendarDays, label: "Date Format", value: "DD/MM/YYYY" },
  { icon: LayoutDashboard, label: "Default Dashboard", value: "Overview" },
  { icon: Home, label: "Start Page", value: "Career Twin" },
];

export default function Preferences() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Preferences</h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {preferences.map((pref, index) => {
          const Icon = pref.icon;
          return (
            <motion.button
              key={pref.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="flex w-full items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 text-left shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-xs text-neutral-500">{pref.label}</p>
                  <p className="text-sm font-medium">{pref.value}</p>
                </div>
              </div>
              <ChevronDown size={16} className="shrink-0 text-neutral-400" />
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
