"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Minimize2, TrendingUp, Sparkles, PanelLeftClose, Wand2, Zap } from "lucide-react";
import ToggleSwitch from "../shared/toggle-switch";

const initial = [
  { id: "compact", icon: Minimize2, label: "Compact Mode", desc: "Reduce spacing across the dashboard.", on: false },
  { id: "progress", icon: TrendingUp, label: "Show Progress Cards", desc: "Display progress widgets on Overview.", on: true },
  { id: "widgets", icon: Sparkles, label: "Show AI Widgets", desc: "Career Twin suggestions on every page.", on: true },
  { id: "sidebar", icon: PanelLeftClose, label: "Sidebar Collapse", desc: "Start with a collapsed sidebar.", on: false },
  { id: "animations", icon: Wand2, label: "Animations", desc: "Enable motion and transitions.", on: true },
  { id: "quickaccess", icon: Zap, label: "Quick Access Panel", desc: "Keep shortcuts pinned to the header.", on: true },
];

export default function DashboardPreferences() {
  const [items, setItems] = useState(initial);

  function toggle(id: string) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, on: !item.on } : item)));
  }

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Dashboard Preferences</h2>

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
    </section>
  );
}
