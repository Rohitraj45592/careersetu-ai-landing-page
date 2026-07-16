"use client";

import { motion } from "framer-motion";

const skills = [
  { skill: "Docker", priority: "High", demand: "89%", time: "1 week", course: "Docker Essentials" },
  { skill: "Redis", priority: "Medium", demand: "62%", time: "4 days", course: "Redis Crash Course" },
  { skill: "AWS", priority: "High", demand: "94%", time: "3 weeks", course: "AWS Fundamentals" },
  { skill: "CI/CD", priority: "Medium", demand: "71%", time: "1 week", course: "CI/CD with GitHub Actions" },
  { skill: "System Design", priority: "High", demand: "97%", time: "1 month", course: "Grokking System Design" },
  { skill: "Kubernetes", priority: "Low", demand: "48%", time: "2 weeks", course: "Kubernetes Basics" },
];

const priorityStyle: Record<string, string> = {
  High: "bg-black text-white",
  Medium: "bg-neutral-200 text-neutral-700",
  Low: "bg-neutral-100 text-neutral-500",
};

export default function MissingSkills() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Missing Skills</h2>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-neutral-200 text-left text-xs uppercase tracking-wide text-neutral-500">
              <th className="pb-3 pr-4 font-medium">Skill</th>
              <th className="pb-3 pr-4 font-medium">Priority</th>
              <th className="pb-3 pr-4 font-medium">Demand</th>
              <th className="pb-3 pr-4 font-medium">Learning Time</th>
              <th className="pb-3 pr-4 font-medium">Recommended Course</th>
              <th className="pb-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((row, index) => (
              <motion.tr
                key={row.skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50"
              >
                <td className="py-3.5 pr-4 font-medium">{row.skill}</td>
                <td className="py-3.5 pr-4">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${priorityStyle[row.priority]}`}>
                    {row.priority}
                  </span>
                </td>
                <td className="py-3.5 pr-4 text-neutral-600">{row.demand}</td>
                <td className="py-3.5 pr-4 text-neutral-600">{row.time}</td>
                <td className="py-3.5 pr-4 text-neutral-600">{row.course}</td>
                <td className="py-3.5">
                  <button className="rounded-lg border border-neutral-300 px-3 py-1.5 text-xs font-medium transition hover:border-black">
                    Learn
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
