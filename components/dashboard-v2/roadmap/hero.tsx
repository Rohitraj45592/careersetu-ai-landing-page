"use client";

import { motion } from "framer-motion";
import { Route, Sparkles, Target, Milestone, Laptop } from "lucide-react";

const pills = [
  { label: "AI Generated" },
  { label: "Placement Ready" },
  { label: "90 Days" },
  { label: "Daily Goals" },
];

const nodes = [
  { icon: Laptop, top: "8%", left: "18%" },
  { icon: Target, top: "38%", left: "62%" },
  { icon: Milestone, top: "68%", left: "22%" },
];

function RoadmapIllustration() {
  return (
    <div className="relative flex h-full min-h-[280px] items-center justify-center py-6">
      <svg viewBox="0 0 220 220" className="h-56 w-56 sm:h-64 sm:w-64" fill="none">
        <motion.path
          d="M30 190 C 60 150, 40 120, 90 100 S 150 60, 130 30"
          stroke="#d4d4d4"
          strokeWidth={3}
          strokeDasharray="8 8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <circle cx="30" cy="190" r="7" fill="#111" />
        <circle cx="90" cy="100" r="6" fill="#a3a3a3" />
        <circle cx="130" cy="30" r="7" fill="#111" />
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
          <motion.div
            key={pill.label}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4 + index * 0.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
            className={`absolute ${positions[index]} flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium shadow-md`}
          >
            <Sparkles size={12} />
            {pill.label}
          </motion.div>
        );
      })}
    </div>
  );
}

export default function RoadmapHero() {
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
            <Route size={16} />
            Roadmap
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Your Personalized AI Career Roadmap
          </h1>

          <p className="mt-6 max-w-xl text-base text-neutral-600 sm:text-lg">
            Build a structured learning journey tailored to your career
            goals, current skills and placement targets.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="rounded-2xl bg-black px-5 py-3 text-white shadow-sm transition-shadow hover:shadow-md sm:px-6"
            >
              Generate Roadmap
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="rounded-2xl border border-neutral-300 px-5 py-3 sm:px-6"
            >
              Update Goal
            </motion.button>
          </div>
        </div>

        <RoadmapIllustration />
      </div>
    </motion.section>
  );
}
