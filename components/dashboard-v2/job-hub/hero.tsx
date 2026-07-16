"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowRight, Bookmark, CheckCircle2, Building2, Sparkles } from "lucide-react";

const floatingBadges = [
  { icon: CheckCircle2, label: "91% Match", position: "left-4 top-6" },
  { icon: Building2, label: "Remote", position: "right-4 top-20" },
  { icon: CheckCircle2, label: "Verified", position: "left-8 bottom-24" },
  { icon: Briefcase, label: "Hiring", position: "right-8 bottom-10" },
  { icon: Sparkles, label: "AI Recommended", position: "left-1/2 -translate-x-1/2 top-2" },
];

export default function JobHubHero() {
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
            <Briefcase size={16} />
            Job Hub
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Discover Jobs That Match Your Skills
          </h1>

          <p className="mt-6 max-w-xl text-base text-neutral-600 sm:text-lg">
            Find AI-powered job recommendations based on your resume, ATS
            score, projects, skills and career goals.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <motion.button
              whileHover={{ y: -2, boxShadow: "0 10px 30px rgba(0,0,0,0.18)" }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-white sm:px-6"
            >
              Find Jobs
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ y: -2, borderColor: "rgb(0 0 0)" }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 sm:px-6"
            >
              <Bookmark size={16} />
              Saved Jobs
            </motion.button>
          </div>
        </div>

        {/* Illustration */}
        <div className="relative flex h-full min-h-[300px] items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 sm:min-h-[360px] lg:min-h-[420px] lg:rounded-[24px]">
          <svg viewBox="0 0 320 260" className="h-[70%] w-[70%] text-neutral-300">
            {/* Laptop */}
            <rect x="70" y="120" width="180" height="110" rx="10" fill="none" stroke="currentColor" strokeWidth="3" />
            <rect x="86" y="136" width="148" height="78" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="55" y1="232" x2="265" y2="232" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

            {/* Job cards floating above screen */}
            <rect x="105" y="30" width="60" height="40" rx="8" fill="none" stroke="#525252" strokeWidth="2.5" />
            <line x1="115" y1="42" x2="150" y2="42" stroke="#525252" strokeWidth="2" />
            <line x1="115" y1="52" x2="140" y2="52" stroke="#a3a3a3" strokeWidth="2" />

            <rect x="180" y="50" width="60" height="40" rx="8" fill="#111111" stroke="#111111" strokeWidth="2.5" />
            <line x1="190" y1="62" x2="225" y2="62" stroke="white" strokeWidth="2" />
            <line x1="190" y1="72" x2="215" y2="72" stroke="#a3a3a3" strokeWidth="2" />
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
