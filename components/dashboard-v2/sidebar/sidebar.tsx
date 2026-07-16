"use client";

import {
  LayoutDashboard,
  Sparkles,
  FileText,
  BriefcaseBusiness,
  Route,
  GraduationCap,
  BarChart3,
  User,
  Settings,
} from "lucide-react";

const items = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "Career Twin",
    icon: Sparkles,
  },
  {
    title: "Resume Studio",
    icon: FileText,
  },
  {
    title: "Job Hub",
    icon: BriefcaseBusiness,
  },
  {
    title: "Roadmap",
    icon: Route,
  },
  {
    title: "Mock Interview",
    icon: GraduationCap,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
  {
    title: "Profile",
    icon: User,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export default function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col rounded-[32px] border border-neutral-200 bg-white p-6 shadow-sm">

      {/* Replace this with your landing page logo component later */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold tracking-tight">
          Career<span className="text-black">Setu</span>
          <span className="ml-2 rounded-full bg-black px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
            AI
          </span>
        </h1>

        <p className="mt-2 text-sm text-neutral-500">
          AI Career Operating System
        </p>
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              onClick={onNavigate}
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-200 ${
                item.active
                  ? "bg-black text-white shadow-lg"
                  : "text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              <Icon size={19} />
              <span className="font-medium">{item.title}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto rounded-3xl border border-neutral-200 bg-neutral-50 p-5">
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          Placement Readiness
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          82%
        </h2>

        <p className="mt-2 text-sm text-neutral-500">
          You're ahead of 71% of students.
        </p>

        <button className="mt-5 w-full rounded-xl bg-black py-3 text-sm font-medium text-white transition hover:opacity-90">
          View Progress
        </button>
      </div>
    </div>
  );
}