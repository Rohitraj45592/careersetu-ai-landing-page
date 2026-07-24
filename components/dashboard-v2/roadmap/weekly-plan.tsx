"use client";

import { motion } from "framer-motion";

const plan = [
  { day: "Monday", topic: "DSA — Arrays & Strings", duration: "2 hrs", priority: "High" },
  { day: "Tuesday", topic: "Backend — FastAPI routes", duration: "1.5 hrs", priority: "High" },
  { day: "Wednesday", topic: "React — State management", duration: "2 hrs", priority: "Medium" },
  { day: "Thursday", topic: "DSA — Trees & Graphs", duration: "2 hrs", priority: "High" },
  { day: "Friday", topic: "Project — Deploy backend", duration: "2.5 hrs", priority: "Medium" },
  { day: "Saturday", topic: "Mock Interview practice", duration: "1 hr", priority: "High" },
  { day: "Sunday", topic: "Revision + light reading", duration: "1 hr", priority: "Low" },
];

const priorityStyle: Record<string, string> = {
  High: "border-black bg-black text-white",
  Medium: "border-neutral-300 text-neutral-600",
  Low: "border-neutral-200 text-neutral-400",
};

export default function WeeklyPlan() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Weekly Learning Plan</h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {plan.map((item, index) => (
          <motion.div
            key={item.day}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-neutral-200 p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">{item.day}</p>
            <p className="mt-2 text-sm font-semibold leading-snug">{item.topic}</p>
            <p className="mt-3 text-xs text-neutral-500">{item.duration}</p>
            <span
              className={`mt-3 inline-block rounded-full border px-2.5 py-1 text-[11px] font-medium ${priorityStyle[item.priority]}`}
            >
              {item.priority}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
