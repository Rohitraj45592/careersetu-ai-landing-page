"use client";

import { motion } from "framer-motion";
import { Target, Building2, IndianRupee, MapPin, Laptop, Sparkles, Pencil } from "lucide-react";

const goals = [
  { icon: Target, label: "Target Role", value: "AI Engineer / SDE-1" },
  { icon: Building2, label: "Dream Company", value: "Google, Razorpay, Zerodha" },
  { icon: IndianRupee, label: "Expected Salary", value: "₹18 – 24 LPA" },
  { icon: MapPin, label: "Preferred Location", value: "Bengaluru, Remote" },
  { icon: Laptop, label: "Preferred Work Mode", value: "Hybrid" },
  { icon: Sparkles, label: "Career Interests", value: "AI/ML, Full-Stack, Product Engineering" },
];

export default function CareerGoals() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold sm:text-2xl">Career Goals</h2>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-1.5 rounded-2xl border border-neutral-300 px-4 py-2 text-sm font-medium transition-colors hover:border-black"
        >
          <Pencil size={14} />
          Edit Goal
        </motion.button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {goals.map((goal, index) => {
          const Icon = goal.icon;
          return (
            <motion.div
              key={goal.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
              className="rounded-2xl border border-neutral-200 p-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">
                <Icon size={16} />
              </div>
              <p className="mt-3 text-xs text-neutral-500">{goal.label}</p>
              <p className="mt-1 font-medium">{goal.value}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
