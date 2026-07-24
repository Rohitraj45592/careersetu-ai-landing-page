"use client";

import { motion } from "framer-motion";
import {
  CircleCheck,
  FileText,
  FolderKanban,
  Award,
  Boxes,
  Target,
} from "lucide-react";
import AnimatedNumber from "../shared/animated-number";

const stats = [
  { icon: CircleCheck, value: 92, suffix: "%", label: "Profile Completion" },
  { icon: FileText, value: 82, suffix: "", label: "Resume Score" },
  { icon: FolderKanban, value: 6, suffix: "", label: "Projects" },
  { icon: Award, value: 3, suffix: "", label: "Certificates" },
  { icon: Boxes, value: 14, suffix: "", label: "Skills" },
  { icon: Target, value: 82, suffix: "%", label: "Placement Readiness" },
];

export default function CareerSnapshot() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Career Snapshot</h2>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                <Icon size={18} />
              </div>

              <AnimatedNumber value={item.value} suffix={item.suffix} />

              <p className="mt-1 text-sm text-neutral-500">{item.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
