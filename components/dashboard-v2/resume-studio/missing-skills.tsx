"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Docker", priority: "High", time: "1 week", demand: 92 },
  { name: "Redis", priority: "Medium", time: "3 days", demand: 68 },
  { name: "AWS", priority: "High", time: "2 weeks", demand: 88 },
  { name: "CI/CD", priority: "High", time: "1 week", demand: 81 },
  { name: "System Design", priority: "High", time: "3 weeks", demand: 95 },
  { name: "Kubernetes", priority: "Medium", time: "2 weeks", demand: 74 },
];

const priorityStyle: Record<string, string> = {
  High: "border-black bg-black text-white",
  Medium: "border-neutral-300 text-neutral-600",
  Low: "border-neutral-200 text-neutral-400",
};

export default function MissingSkills() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Missing Skills</h2>

      <div className="mt-5 overflow-x-auto">
        <div className="min-w-[560px]">
          <div className="grid grid-cols-4 gap-4 border-b border-neutral-200 pb-3 text-xs font-medium uppercase tracking-wide text-neutral-400">
            <span>Skill</span>
            <span>Priority</span>
            <span>Learning Time</span>
            <span>Demand</span>
          </div>

          <div className="divide-y divide-neutral-100">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
                className="grid grid-cols-4 items-center gap-4 py-3.5 transition-colors hover:bg-neutral-50"
              >
                <span className="font-medium">{skill.name}</span>

                <span>
                  <span
                    className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${priorityStyle[skill.priority]}`}
                  >
                    {skill.priority}
                  </span>
                </span>

                <span className="text-sm text-neutral-600">{skill.time}</span>

                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-16 overflow-hidden rounded-full bg-neutral-200">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.demand}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                      className="block h-full rounded-full bg-black"
                    />
                  </span>
                  <span className="text-xs tabular-nums text-neutral-500">{skill.demand}%</span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
