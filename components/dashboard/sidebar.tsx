"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Brain,
  Mic,
  Map,
  Briefcase,
  User,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Resume Analyzer",
    href: "/dashboard/resume",
    icon: FileText,
  },
  {
    title: "Skill Gap",
    href: "/dashboard/skills",
    icon: Brain,
  },
  {
    title: "Mock Interview",
    href: "/dashboard/interview",
    icon: Mic,
  },
  {
    title: "Career Roadmap",
    href: "/dashboard/roadmap",
    icon: Map,
  },
  {
    title: "Applications",
    href: "/dashboard/applications",
    icon: Briefcase,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen border-r bg-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          Career<span className="text-purple-600">Setu</span>
        </h1>
      </div>

      <nav className="px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 mb-2 transition ${
                pathname === item.href
                  ? "bg-purple-100 text-purple-700"
                  : "hover:bg-gray-100"
              }`}
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}