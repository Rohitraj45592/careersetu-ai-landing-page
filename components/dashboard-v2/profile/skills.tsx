"use client";

import { motion } from "framer-motion";

const groups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90, tag: "Advanced" },
      { name: "JavaScript / TypeScript", level: 85, tag: "Advanced" },
      { name: "Java", level: 62, tag: "Intermediate" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React / Next.js", level: 88, tag: "Advanced" },
      { name: "FastAPI", level: 74, tag: "Intermediate" },
      { name: "Node.js", level: 70, tag: "Intermediate" },
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", level: 76, tag: "Intermediate" },
      { name: "MongoDB", level: 68, tag: "Intermediate" },
      { name: "AWS", level: 55, tag: "Beginner" },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "PyTorch", level: 72, tag: "Intermediate" },
      { name: "LangChain", level: 66, tag: "Intermediate" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", level: 88, tag: "Advanced" },
      { name: "Leadership", level: 74, tag: "Intermediate" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Skills</h2>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {groups.map((group, groupIndex) => (
          <div key={group.title}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500">
              {group.title}
            </h3>

            <div className="space-y-5">
              {group.skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-500">
                        {skill.tag}
                      </span>
                      <span className="text-sm tabular-nums text-neutral-500">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  <div className="relative h-2 overflow-hidden rounded-full bg-neutral-200">
                    <motion.div
                      className="relative h-2 overflow-hidden rounded-full bg-black"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-10% 0px" }}
                      transition={{
                        duration: 0.8,
                        delay: groupIndex * 0.05 + index * 0.06,
                        ease: "easeOut",
                      }}
                    >
                      <span
                        className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                        style={{
                          animation: `profileSkillShine 2.6s ease-in-out ${1 + (groupIndex * 2 + index) * 0.15}s infinite`,
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes profileSkillShine {
          0% { transform: translateX(-120%) skewX(-12deg); }
          60%, 100% { transform: translateX(320%) skewX(-12deg); }
        }
      `}</style>
    </section>
  );
}
