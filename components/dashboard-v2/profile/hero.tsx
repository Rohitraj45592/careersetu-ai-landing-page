"use client";

import { motion } from "framer-motion";
import { User, Laptop, FileText, Briefcase, Sparkles, TrendingUp } from "lucide-react";

const pills = [
  { label: "Verified" },
  { label: "Placement Ready" },
  { label: "AI Optimized" },
  { label: "Portfolio Linked" },
];

const nodes = [
  { icon: Laptop, top: "6%", left: "16%" },
  { icon: FileText, top: "40%", left: "68%" },
  { icon: Briefcase, top: "70%", left: "20%" },
];

function ProfileIllustration() {
  return (
    <div className="relative flex h-full min-h-[280px] items-center justify-center py-6">
      <svg viewBox="0 0 220 220" className="h-56 w-56 sm:h-64 sm:w-64" fill="none">
        <circle cx="110" cy="82" r="34" fill="#111111" />
        <path
          d="M50 200 C 50 150, 76 130, 110 130 S 170 150, 170 200"
          fill="#111111"
        />
        <motion.circle
          cx="110"
          cy="82"
          r="46"
          stroke="#d4d4d4"
          strokeWidth={2}
          strokeDasharray="6 6"
          fill="none"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "110px 82px" }}
        />
      </svg>

      {nodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={index}
            style={{ top: node.top, left: node.left }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
            className="absolute flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-md"
          >
            <Icon size={18} />
          </motion.div>
        );
      })}

      {pills.map((pill, index) => {
        const positions = [
          "left-0 top-2 sm:left-1",
          "right-0 top-20 sm:right-1",
          "left-1 bottom-16",
          "right-2 bottom-2",
        ];
        return (
          <motion.span
            key={pill.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: [8, 0, -4, 0] }}
            transition={{
              opacity: { duration: 0.4, delay: 0.3 + index * 0.1 },
              y: { duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 },
            }}
            className={`absolute ${positions[index]} rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-600 shadow-sm`}
          >
            {pill.label}
          </motion.span>
        );
      })}
    </div>
  );
}

export default function ProfileHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[32px] lg:p-8"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-500">
            <User size={16} />
            Profile
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
          >
            Your Professional Career Profile
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
            className="mt-6 max-w-xl text-base text-neutral-600 sm:text-lg"
          >
            Manage your personal information, skills, achievements and
            career identity from one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-white shadow-sm transition-shadow hover:shadow-md sm:px-6"
            >
              <Sparkles size={16} />
              Edit Profile
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, borderColor: "#000" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 sm:px-6"
            >
              <TrendingUp size={16} />
              Share Profile
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <ProfileIllustration />
        </motion.div>
      </div>
    </motion.section>
  );
}
