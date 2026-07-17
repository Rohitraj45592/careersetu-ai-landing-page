"use client";

import { motion } from "framer-motion";
import { Settings as SettingsIcon, Shield, Bell, User, LayoutDashboard, RotateCcw, Save } from "lucide-react";

const pills = [
  { label: "Secure" },
  { label: "AI Powered" },
  { label: "Synced" },
  { label: "Private" },
];

const nodes = [
  { icon: LayoutDashboard, top: "6%", left: "18%" },
  { icon: Shield, top: "42%", left: "70%" },
  { icon: Bell, top: "72%", left: "16%" },
  { icon: User, top: "20%", left: "78%" },
];

function SettingsIllustration() {
  return (
    <div className="relative flex h-full min-h-[280px] items-center justify-center py-6">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-neutral-300 sm:h-32 sm:w-32"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white sm:h-20 sm:w-20">
          <SettingsIcon size={28} />
        </div>
      </motion.div>

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

export default function SettingsHero() {
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
            <SettingsIcon size={16} />
            Settings
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
          >
            Manage Your CareerSetu Experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
            className="mt-6 max-w-xl text-base text-neutral-600 sm:text-lg"
          >
            Customize your account, privacy, notifications and preferences
            from one centralized dashboard.
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
              <Save size={16} />
              Save Changes
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, borderColor: "#000" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 sm:px-6"
            >
              <RotateCcw size={16} />
              Reset Settings
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <SettingsIllustration />
        </motion.div>
      </div>
    </motion.section>
  );
}
