"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Clock, BarChart3, Container } from "lucide-react";

const insights = [
  { icon: TrendingUp, text: "Your ATS score is above average." },
  { icon: BarChart3, text: "Companies prefer measurable projects." },
  { icon: Clock, text: "Apply within the first 24 hours for better response rates." },
  { icon: BarChart3, text: "Backend job openings have increased this month." },
  { icon: Container, text: "Docker skills improve your hiring chances." },
];

export default function PlacementInsights() {
  return (
    <section className="rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
          <Sparkles size={18} />
        </div>
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">Placement Insights</h2>
          <p className="text-sm text-neutral-500">Based on your applications and market data</p>
        </div>
      </div>

      <ul className="mt-6 divide-y divide-neutral-100">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <motion.li
              key={insight.text}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100">
                <Icon size={14} />
              </span>
              <span className="leading-relaxed text-neutral-700">{insight.text}</span>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
