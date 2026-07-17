"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    college: "IIT Patna",
    degree: "B.Tech, Computer Science & Engineering",
    duration: "2022 — 2026",
    cgpa: "8.7 CGPA",
    coursework: "DSA, OS, DBMS, Computer Networks, Machine Learning",
    achievement: "Dean's List — 4 consecutive semesters",
  },
  {
    college: "DAV Public School, Patna",
    degree: "Class XII, PCM",
    duration: "2020 — 2022",
    cgpa: "94.2%",
    coursework: "Physics, Chemistry, Mathematics, Computer Science",
    achievement: "School topper in Computer Science",
  },
];

export default function Education() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Education</h2>

      <div className="relative mt-6">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-5 top-1 bottom-1 w-px bg-neutral-200"
        />

        <div className="space-y-2">
          {education.map((item, index) => (
            <motion.div
              key={item.college}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
              className="group relative flex gap-4 rounded-xl px-2 py-3 transition-colors hover:bg-neutral-50"
            >
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-black text-white">
                <GraduationCap size={16} />
              </div>

              <div className="min-w-0 flex-1 pt-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-semibold">{item.college}</span>
                  <span className="text-xs tabular-nums text-neutral-400">{item.duration}</span>
                </div>

                <p className="mt-1 text-sm text-neutral-600">{item.degree}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700">
                    {item.cgpa}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700">
                    {item.achievement}
                  </span>
                </div>

                <p className="mt-2 text-xs text-neutral-400">
                  Coursework: {item.coursework}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
