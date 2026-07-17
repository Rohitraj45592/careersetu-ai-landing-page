"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Bell,
  Mic,
  BriefcaseBusiness,
  Route,
  FileText,
  Target,
  BarChart3,
} from "lucide-react";
import ToggleSwitch from "../shared/toggle-switch";

const initial = [
  { id: "email", icon: Mail, label: "Email Notifications", desc: "Get updates delivered to your inbox.", on: true },
  { id: "push", icon: Bell, label: "Push Notifications", desc: "Real-time alerts on this device.", on: true },
  { id: "interview", icon: Mic, label: "Interview Alerts", desc: "Reminders before scheduled mock interviews.", on: true },
  { id: "jobs", icon: BriefcaseBusiness, label: "Job Alerts", desc: "New matching job postings.", on: true },
  { id: "roadmap", icon: Route, label: "Roadmap Reminders", desc: "Nudges to stay on track with your plan.", on: false },
  { id: "resume", icon: FileText, label: "Resume Updates", desc: "ATS score changes and suggestions.", on: true },
  { id: "placement", icon: Target, label: "Placement Alerts", desc: "Offers, interview calls and deadlines.", on: true },
  { id: "weekly", icon: BarChart3, label: "Weekly Reports", desc: "A summary of your progress every Monday.", on: false },
];

export default function NotificationSettings() {
  const [items, setItems] = useState(initial);

  function toggle(id: string) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, on: !item.on } : item)));
  }

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Notification Settings</h2>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
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
