"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  BriefcaseBusiness,
  Route,
  Mic,
  BarChart3,
  Pencil,
  Download,
  Globe,
} from "lucide-react";

const links = [
  { icon: FileText, label: "Resume Studio", href: "/dashboard-v2/resume-studio" },
  { icon: BriefcaseBusiness, label: "Job Hub", href: "/dashboard-v2/job-hub" },
  { icon: Route, label: "Roadmap", href: "/dashboard-v2/roadmap" },
  { icon: Mic, label: "Mock Interview", href: "#" },
  { icon: BarChart3, label: "Analytics", href: "#" },
];

const actions = [
  { icon: Pencil, label: "Edit Profile" },
  { icon: Download, label: "Download Resume" },
  { icon: Globe, label: "View Portfolio" },
];

export default function QuickActions() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Quick Actions</h2>

      <div className="mt-5 flex flex-wrap gap-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <motion.div key={link.label} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={link.href}
                className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium transition-colors hover:border-black"
              >
                <Icon size={16} />
                {link.label}
              </Link>
            </motion.div>
          );
        })}

        {actions.map((action, index) => {
          const Icon = action.icon;
          const isPrimary = index === 0;
          return (
            <motion.button
              key={action.label}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={
                isPrimary
                  ? "flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition-shadow hover:shadow-md"
                  : "flex items-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium transition-colors hover:border-black"
              }
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
