"use client";

import { motion } from "framer-motion";
import { FileText, Link2, Sparkles, Database, Brain, ArrowRight } from "lucide-react";

const suggestions = [
  {
    icon: FileText,
    title: "Improve Resume",
    desc: "Tighten your summary and add measurable impact to key bullet points.",
  },
  {
    icon: Link2,
    title: "Optimize LinkedIn",
    desc: "Your headline and about section could better reflect your AI focus.",
  },
  {
    icon: Sparkles,
    title: "Build GenAI Project",
    desc: "A GenAI project would strengthen your profile for AI/ML roles.",
  },
  {
    icon: Database,
    title: "Learn SQL",
    desc: "SQL comes up in most backend and data interviews — worth prioritizing.",
  },
  {
    icon: Brain,
    title: "Practice DSA",
    desc: "Consistent DSA practice will directly raise your interview readiness.",
  },
];

export default function AiSuggestions() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">AI Suggestions</h2>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {suggestions.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                  <Icon size={18} />
                </div>

                <motion.span
                  initial={{ opacity: 0, x: -4 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="opacity-0 text-neutral-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                >
                  <ArrowRight size={16} />
                </motion.span>
              </div>

              <h3 className="mt-4 font-semibold leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
