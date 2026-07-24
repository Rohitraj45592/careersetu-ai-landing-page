"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, PlusCircle, ArrowRight, LucideIcon } from "lucide-react";

const groups: {
  title: string;
  icon: LucideIcon;
  items: string[];
}[] = [
  {
    title: "Strengths",
    icon: CheckCircle2,
    items: [
      "Strong technical project section",
      "Clear, quantifiable impact in 2 bullet points",
      "Consistent formatting throughout",
    ],
  },
  {
    title: "Weaknesses",
    icon: AlertTriangle,
    items: [
      "Summary is generic and skippable",
      "No metrics in 3 of your 5 bullet points",
      "Skills section feels like a keyword dump",
    ],
  },
  {
    title: "Missing Skills",
    icon: PlusCircle,
    items: ["Docker", "System Design basics", "CI/CD pipelines"],
  },
  {
    title: "Action Items",
    icon: ArrowRight,
    items: [
      "Rewrite your summary in 2 lines",
      "Add measurable outcomes to top 3 bullets",
      "Group skills by category",
    ],
  },
];

export default function AiAnalysis() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">AI Resume Analysis</h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {groups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              className="rounded-2xl border border-neutral-200 p-5 transition-colors hover:bg-neutral-50"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">
                  <Icon size={16} />
                </div>
                <h3 className="font-semibold">{group.title}</h3>
              </div>

              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-600">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
