"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Sparkles,
  FileText,
  BriefcaseBusiness,
  Route,
  GraduationCap,
  BarChart3,
  User,
} from "lucide-react";

const links = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard-v2" },
  { icon: Sparkles, label: "Career Twin", href: "/dashboard-v2/career-twin" },
  { icon: FileText, label: "Resume Studio", href: "/dashboard-v2/resume-studio" },
  { icon: BriefcaseBusiness, label: "Job Hub", href: "/dashboard-v2/job-hub" },
  { icon: Route, label: "Roadmap", href: "/dashboard-v2/roadmap" },
  { icon: GraduationCap, label: "Mock Interview", href: "/dashboard-v2/mock-interview" },
  { icon: BarChart3, label: "Analytics", href: "/dashboard-v2/analytics" },
  { icon: User, label: "Profile", href: "/dashboard-v2/profile" },
];

export default function QuickNavigation() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Quick Navigation</h2>

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
      </div>
    </section>
  );
}
