"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const certifications = [
  { course: "Machine Learning Specialization", platform: "Coursera", duration: "3 months", progress: 68 },
  { course: "AWS Certified Developer", platform: "AWS Skill Builder", duration: "6 weeks", progress: 32 },
  { course: "Meta Backend Developer", platform: "Coursera", duration: "4 months", progress: 12 },
];

export default function Certifications() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Certifications</h2>

      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.course}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-neutral-200 p-5 transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">
              <GraduationCap size={16} />
            </div>

            <h3 className="mt-3 font-semibold leading-snug">{cert.course}</h3>
            <p className="mt-1 text-sm text-neutral-500">
              {cert.platform} · {cert.duration}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200">
                <motion.div
                  className="h-full rounded-full bg-black"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${cert.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.06, ease: "easeOut" }}
                />
              </div>
              <span className="text-xs tabular-nums text-neutral-500">{cert.progress}%</span>
            </div>

            <button className="mt-4 w-full rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white">
              Continue Learning
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
