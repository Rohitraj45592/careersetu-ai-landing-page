"use client";

import { motion } from "framer-motion";
import { ThumbsUp, AlertTriangle, SpellCheck2, Smile, Cpu, MessageCircle } from "lucide-react";

const strengths = ["Clear structure in answers", "Confident tone", "Good technical vocabulary"];
const weaknesses = ["Uses filler words often", "Answers run slightly long", "Could add more metrics"];

const scores = [
  { icon: SpellCheck2, label: "Grammar", value: "88%" },
  { icon: Smile, label: "Confidence", value: "82%" },
  { icon: Cpu, label: "Technical Accuracy", value: "76%" },
  { icon: MessageCircle, label: "Communication", value: "80%" },
];

export default function AiFeedback() {
  return (
    <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[32px] lg:p-8">
      <h2 className="text-xl font-bold sm:text-2xl">AI Feedback</h2>

      <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 p-5">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <ThumbsUp size={16} />
            Strengths
          </div>
          <ul className="mt-3 space-y-2">
            {strengths.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-neutral-600">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-5">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <AlertTriangle size={16} />
            Weaknesses
          </div>
          <ul className="mt-3 space-y-2">
            {weaknesses.map((w) => (
              <li key={w} className="flex items-start gap-2 text-sm text-neutral-600">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {scores.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="rounded-2xl border border-neutral-200 p-4 text-center"
            >
              <Icon size={16} className="mx-auto" />
              <p className="mt-2 text-lg font-bold">{item.value}</p>
              <p className="text-xs text-neutral-500">{item.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
