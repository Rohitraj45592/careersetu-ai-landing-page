"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function CareerTwinHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[32px] lg:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-medium text-neutral-500">
          <Sparkles size={16} />
          Career Twin
        </div>

        {/* Animated AI status indicator */}
        <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-500">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
          </span>
          Analyzing your profile
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
        className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
      >
        Your Personal AI Career Coach
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
        className="mt-6 max-w-2xl text-base text-neutral-600 sm:text-lg"
      >
        CareerSetu AI continuously analyzes your profile and helps you
        improve your career with personalized recommendations.
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
          className="rounded-2xl bg-black px-5 py-3 text-white shadow-sm transition-shadow hover:shadow-md sm:px-6"
        >
          Start Conversation
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03, borderColor: "#000" }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="rounded-2xl border border-neutral-300 px-5 py-3 sm:px-6"
        >
          View Insights
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
