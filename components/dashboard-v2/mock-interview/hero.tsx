"use client";

import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, ListChecks, Mic, Video, MessageSquare } from "lucide-react";

const floatingBadges = [
  { icon: Mic, label: "AI Coach", position: "left-4 top-6" },
  { icon: MessageSquare, label: "Live Feedback", position: "right-4 top-16" },
  { icon: ListChecks, label: "Technical", position: "left-8 bottom-24" },
  { icon: Video, label: "HR", position: "right-8 bottom-10" },
  { icon: GraduationCap, label: "Communication", position: "left-1/2 -translate-x-1/2 top-2" },
];

export default function MockInterviewHero() {
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
            <GraduationCap size={16} />
            Mock Interview
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Practice Real Interviews with AI
          </h1>

          <p className="mt-6 max-w-xl text-base text-neutral-600 sm:text-lg">
            Simulate real technical and HR interviews, receive instant AI
            feedback and improve your confidence before placement drives.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <motion.button
              whileHover={{ y: -2, boxShadow: "0 10px 30px rgba(0,0,0,0.18)" }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-white sm:px-6"
            >
              Start Interview
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ y: -2, borderColor: "rgb(0 0 0)" }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="rounded-2xl border border-neutral-300 px-5 py-3 sm:px-6"
            >
              Choose Interview
            </motion.button>
          </div>
        </div>

        {/* Illustration */}
        <div className="relative flex h-full min-h-[300px] items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 sm:min-h-[360px] lg:min-h-[420px] lg:rounded-[24px]">
          <svg viewBox="0 0 320 260" className="h-[70%] w-[70%] text-neutral-300">
            {/* Laptop with candidate on screen */}
            <rect x="90" y="60" width="140" height="100" rx="8" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="160" cy="98" r="16" fill="none" stroke="#525252" strokeWidth="2.5" />
            <path d="M138 140 q22 -22 44 0" fill="none" stroke="#525252" strokeWidth="2.5" />

            <rect x="70" y="170" width="180" height="14" rx="7" fill="none" stroke="currentColor" strokeWidth="3" />

            {/* Microphone */}
            <rect x="150" y="200" width="20" height="30" rx="10" fill="none" stroke="#111111" strokeWidth="2.5" />
            <path d="M140 218 a20 20 0 0 0 40 0" fill="none" stroke="#111111" strokeWidth="2.5" />
            <line x1="160" y1="238" x2="160" y2="248" stroke="#111111" strokeWidth="2.5" />

            {/* Speech bubble */}
            <rect x="220" y="30" width="70" height="34" rx="10" fill="#111111" />
            <polygon points="230,64 240,64 228,76" fill="#111111" />
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
