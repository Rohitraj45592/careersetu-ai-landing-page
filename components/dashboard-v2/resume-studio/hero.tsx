"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle2, Sparkles, Percent } from "lucide-react";

const badges = [
  { icon: Percent, label: "ATS 91%" },
  { icon: CheckCircle2, label: "Grammar ✓" },
  { icon: CheckCircle2, label: "Formatting ✓" },
  { icon: Sparkles, label: "AI Optimized" },
];

function DocumentIllustration() {
  return (
    <div className="relative flex h-full min-h-[260px] items-center justify-center py-6">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-56 rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:w-64"
      >
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 shrink-0 rounded-full bg-neutral-900" />
          <div className="flex-1 space-y-1.5">
            <div className="h-2 w-3/4 rounded-full bg-neutral-800" />
            <div className="h-1.5 w-1/2 rounded-full bg-neutral-300" />
          </div>
        </div>

        <div className="mt-5 space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-neutral-200" />
          <div className="h-1.5 w-full rounded-full bg-neutral-200" />
          <div className="h-1.5 w-4/5 rounded-full bg-neutral-200" />
        </div>

        <div className="mt-4 h-1.5 w-1/3 rounded-full bg-neutral-800" />
        <div className="mt-2 space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-neutral-200" />
          <div className="h-1.5 w-2/3 rounded-full bg-neutral-200" />
        </div>

        <div className="mt-4 h-1.5 w-1/3 rounded-full bg-neutral-800" />
        <div className="mt-2 space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-neutral-200" />
          <div className="h-1.5 w-3/4 rounded-full bg-neutral-200" />
        </div>

        {/* Scan sweep */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <div
            className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-black/[0.04] to-transparent"
            style={{ animation: "resumeScan 3.2s ease-in-out infinite" }}
          />
        </div>
      </motion.div>

      {badges.map((badge, index) => {
        const Icon = badge.icon;
        const positions = [
          "left-1 top-4 sm:left-2",
          "right-1 top-16 sm:right-2",
          "left-0 bottom-16 sm:left-1",
          "right-2 bottom-4",
        ];
        return (
          <motion.div
            key={badge.label}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4 + index * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
            className={`absolute ${positions[index]} flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium shadow-md`}
          >
            <Icon size={12} />
            {badge.label}
          </motion.div>
        );
      })}

      <style>{`
        @keyframes resumeScan {
          0% { transform: translateY(-40px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(280px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default function ResumeStudioHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[32px] lg:p-8"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-500">
            <FileText size={16} />
            Resume Studio
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Build an ATS-Friendly Resume That Gets Interviews
          </h1>

          <p className="mt-6 max-w-xl text-base text-neutral-600 sm:text-lg">
            Create, analyze, optimize and export your resume with AI-powered
            suggestions designed for top tech placements.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="rounded-2xl bg-black px-5 py-3 text-white shadow-sm transition-shadow hover:shadow-md sm:px-6"
            >
              Upload Resume
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="rounded-2xl border border-neutral-300 px-5 py-3 sm:px-6"
            >
              Create Resume
            </motion.button>
          </div>
        </div>

        <DocumentIllustration />
      </div>
    </motion.section>
  );
}
