"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layout, Server, Brain, Database, Cloud, Users } from "lucide-react";

const categories = [
  { icon: Layout, name: "Frontend", value: 78 },
  { icon: Server, name: "Backend", value: 70 },
  { icon: Brain, name: "AI", value: 62 },
  { icon: Database, name: "Database", value: 68 },
  { icon: Cloud, name: "Cloud", value: 40 },
  { icon: Users, name: "Soft Skills", value: 80 },
];

export default function SkillDistribution() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const circumference = 2 * Math.PI * 30;

  return (
    <section ref={ref} className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Skill Distribution</h2>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative flex h-16 w-16 items-center justify-center">
                <svg viewBox="0 0 70 70" className="h-16 w-16 -rotate-90">
                  <circle cx="35" cy="35" r="30" fill="none" stroke="#e5e5e5" strokeWidth="6" />
                  <motion.circle
                    cx="35" cy="35" r="30" fill="none" stroke="#111111" strokeWidth="6" strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: inView ? circumference * (1 - cat.value / 100) : circumference }}
                    transition={{ duration: 1, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  />
                </svg>
                <Icon size={16} className="absolute" />
              </div>

              <p className="mt-3 text-sm font-semibold">{cat.name}</p>
              <p className="text-xs text-neutral-500">{cat.value}%</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
