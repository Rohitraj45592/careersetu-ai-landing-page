"use client";

import { motion } from "framer-motion";
import { Gauge, CheckSquare, Layers, Brain, FolderKanban, Target } from "lucide-react";
import { useCountUp } from "./hooks";

const stats = [
  { icon: Gauge, value: 64, suffix: "%", label: "Overall Progress" },
  { icon: CheckSquare, value: 38, suffix: "", label: "Completed Tasks" },
  { icon: Layers, value: 3, suffix: "", label: "Current Phase" },
  { icon: Brain, value: 12, suffix: "", label: "Skills Learned" },
  { icon: FolderKanban, value: 5, suffix: "", label: "Projects Built" },
  { icon: Target, value: 71, suffix: "%", label: "Placement Readiness" },
];

function StatCard({ item, index }: { item: (typeof stats)[number]; index: number }) {
  const Icon = item.icon;
  const count = useCountUp(item.value, index * 80);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
        <Icon size={18} />
      </div>

      <h3 className="text-2xl font-bold tabular-nums">
        {count}
        {item.suffix}
      </h3>
      <p className="mt-1 text-sm text-neutral-500">{item.label}</p>
    </motion.div>
  );
}

export default function Snapshot() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Roadmap Snapshot</h2>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((item, index) => (
          <StatCard key={item.label} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
