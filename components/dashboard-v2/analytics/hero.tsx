"use client";

import { motion } from "framer-motion";
import { BarChart3, ArrowRight, Download, TrendingUp, Sparkles, FileBarChart } from "lucide-react";

const floatingBadges = [
  { icon: TrendingUp, label: "+24% Growth", position: "left-4 top-6" },
  { icon: Sparkles, label: "AI Insights", position: "right-4 top-16" },
  { icon: FileBarChart, label: "Weekly Report", position: "left-8 bottom-16" },
];

export default function AnalyticsHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[32px] lg:p-8"
    >
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-500">
            <BarChart3 size={16} />
            Analytics
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Track Your Career Growth
          </h1>

          <p className="mt-6 max-w-xl text-base text-neutral-600 sm:text-lg">
            Monitor your progress across learning, interviews, resumes and
            placements with AI-powered insights.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <motion.button
              whileHover={{ y: -2, boxShadow: "0 10px 30px rgba(0,0,0,0.18)" }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-white sm:px-6"
            >
              View Report
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ y: -2, borderColor: "rgb(0 0 0)" }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 sm:px-6"
            >
              <Download size={16} />
              Export Analytics
            </motion.button>
          </div>
        </div>

        {/* Illustration */}
        <div className="relative flex h-full min-h-[300px] items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 sm:min-h-[360px] lg:min-h-[420px] lg:rounded-[24px]">
          <svg viewBox="0 0 320 260" className="h-[70%] w-[70%] text-neutral-300">
            <rect x="40" y="40" width="240" height="170" rx="10" fill="none" stroke="currentColor" strokeWidth="3" />
            <line x1="40" y1="90" x2="280" y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />

            {/* Bars */}
            <rect x="65" y="150" width="20" height="45" rx="3" fill="#a3a3a3" />
            <rect x="100" y="120" width="20" height="75" rx="3" fill="#737373" />
            <rect x="135" y="100" width="20" height="95" rx="3" fill="#525252" />
            <rect x="170" y="130" width="20" height="65" rx="3" fill="#737373" />
            <rect x="205" y="80" width="20" height="115" rx="3" fill="#111111" />

            {/* Trend line */}
            <polyline points="65,150 100,120 135,100 170,130 205,80 240,60" fill="none" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {floatingBadges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                className={`absolute ${badge.position} flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium shadow-sm`}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              >
                <Icon size={12} />
                {badge.label}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
