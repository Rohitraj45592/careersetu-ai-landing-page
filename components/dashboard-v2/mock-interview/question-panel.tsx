"use client";

import { motion } from "framer-motion";
import { Lightbulb, ListTree, Gauge, Clock } from "lucide-react";

const expectedTopics = ["Ownership", "Problem Solving", "Communication", "Impact"];

export default function QuestionPanel() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Question Panel</h2>

      <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Current Question</p>
          <p className="mt-2 text-base font-semibold leading-relaxed">
            Describe a time you disagreed with a teammate. How did you resolve it?
          </p>

          <div className="mt-4 flex items-start gap-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-600">
            <Lightbulb size={16} className="mt-0.5 shrink-0" />
            Hint: Use the STAR method — Situation, Task, Action, Result.
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 p-4">
            <Gauge size={16} />
            <div>
              <p className="text-xs text-neutral-500">Difficulty</p>
              <p className="text-sm font-semibold">Medium</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 p-4">
            <Clock size={16} />
            <div>
              <p className="text-xs text-neutral-500">Time Remaining</p>
              <p className="text-sm font-semibold">01:24</p>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <ListTree size={14} />
              Expected Topics
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {expectedTopics.map((topic) => (
                <span key={topic} className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] text-neutral-600">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="mt-6 w-full rounded-2xl bg-black py-3 text-sm font-medium text-white transition hover:opacity-90 sm:w-auto sm:px-8"
      >
        Next Question
      </motion.button>
    </section>
  );
}
