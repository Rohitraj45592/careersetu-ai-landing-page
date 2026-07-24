"use client";

import { motion } from "framer-motion";
import { Users, Cpu, Code2, Brain, Network, Calculator } from "lucide-react";

const categories = [
  { icon: Users, title: "HR Interview", desc: "Behavioral and culture-fit style questions.", difficulty: "Easy", time: "15 min" },
  { icon: Cpu, title: "Technical Interview", desc: "Core CS fundamentals and role-specific depth.", difficulty: "Medium", time: "30 min" },
  { icon: Code2, title: "Coding Interview", desc: "Live problem solving with AI evaluation.", difficulty: "Hard", time: "45 min" },
  { icon: Brain, title: "Behavioral Interview", desc: "STAR-method situational questions.", difficulty: "Medium", time: "20 min" },
  { icon: Network, title: "System Design", desc: "Architecture and scalability discussions.", difficulty: "Hard", time: "40 min" },
  { icon: Calculator, title: "Aptitude Round", desc: "Quantitative and logical reasoning.", difficulty: "Easy", time: "25 min" },
];

export default function Categories() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Interview Categories</h2>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100">
                <Icon size={20} />
              </div>

              <h3 className="mt-4 font-semibold">{cat.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{cat.desc}</p>

              <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
                <span className="rounded-full bg-neutral-100 px-2.5 py-1 font-medium">{cat.difficulty}</span>
                <span>{cat.time}</span>
              </div>

              <button className="mt-5 rounded-xl bg-black py-2.5 text-sm font-medium text-white transition hover:opacity-90">
                Start
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
