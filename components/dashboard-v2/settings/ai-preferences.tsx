"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, FileText, BriefcaseBusiness, Mic, GraduationCap, Compass } from "lucide-react";
import ToggleSwitch from "../shared/toggle-switch";

const initial = [
  { id: "career", icon: Sparkles, label: "AI Career Suggestions", desc: "Personalized guidance from Career Twin.", on: true },
  { id: "resume", icon: FileText, label: "Resume Analysis", desc: "Automatic ATS scoring and feedback.", on: true },
  { id: "jobs", icon: BriefcaseBusiness, label: "Job Recommendations", desc: "AI-matched roles based on your profile.", on: true },
  { id: "interview", icon: Mic, label: "Interview Coaching", desc: "Real-time feedback during mock interviews.", on: true },
  { id: "learning", icon: GraduationCap, label: "Learning Recommendations", desc: "Suggested courses and resources.", on: false },
  { id: "insights", icon: Compass, label: "Career Insights", desc: "Weekly AI-generated career insights.", on: true },
];

export default function AiPreferences() {
  const [items, setItems] = useState(initial);

  function toggle(id: string) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, on: !item.on } : item)));
  }

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
          <Sparkles size={18} />
        </div>
        <h2 className="text-xl font-bold sm:text-2xl">AI Preferences</h2>
      </div>

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
