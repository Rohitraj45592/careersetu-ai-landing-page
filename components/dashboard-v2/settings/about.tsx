"use client";

import { motion } from "framer-motion";

const details = [
  { label: "Current Version", value: "v2.4.0" },
  { label: "Release Date", value: "July 2026" },
  { label: "Build", value: "20260712-rc3" },
  { label: "License", value: "Proprietary" },
  { label: "Developer", value: "CareerSetu AI Team" },
];

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]"
    >
      <h2 className="text-xl font-bold sm:text-2xl">About CareerSetu AI</h2>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {details.map((detail) => (
          <div key={detail.label} className="rounded-2xl border border-neutral-200 p-4">
            <p className="text-xs text-neutral-500">{detail.label}</p>
            <p className="mt-1 font-medium">{detail.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <button className="font-medium text-neutral-500 underline-offset-4 transition-colors hover:text-black hover:underline">
          Privacy Policy
        </button>
        <button className="font-medium text-neutral-500 underline-offset-4 transition-colors hover:text-black hover:underline">
          Terms of Service
        </button>
      </div>
    </motion.section>
  );
}
