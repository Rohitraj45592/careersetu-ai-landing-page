"use client";

import { motion } from "framer-motion";
import { Flame, Target, Quote, Sparkles } from "lucide-react";

export default function MotivationCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]"
    >
      <h2 className="text-xl font-bold sm:text-2xl">Keep Going</h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-neutral-200 p-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">
            <Flame size={16} />
          </div>
          <p className="mt-3 text-2xl font-bold">12 days</p>
          <p className="mt-1 text-sm text-neutral-500">Current Streak</p>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">
            <Target size={16} />
          </div>
          <p className="mt-3 text-2xl font-bold">5/7 days</p>
          <p className="mt-1 text-sm text-neutral-500">Weekly Goal</p>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-5 sm:col-span-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">
            <Quote size={16} />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            "Consistency compounds. A small step today is still a step
            toward placement day."
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-3 rounded-2xl border border-neutral-800 bg-neutral-50 p-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-black text-white">
          <Sparkles size={14} />
        </div>
        <p className="text-sm leading-relaxed text-neutral-700">
          You're 62% through DSA and ahead of your 90-day pace. Keep this
          rhythm and you'll hit placement-ready a week early.
        </p>
      </div>
    </motion.section>
  );
}
