"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Python", value: 88 },
  { name: "Java", value: 62 },
  { name: "SQL", value: 71 },
  { name: "React", value: 80 },
  { name: "FastAPI", value: 55 },
  { name: "Docker", value: 40 },
  { name: "AWS", value: 35 },
  { name: "GenAI", value: 58 },
  { name: "System Design", value: 30 },
  { name: "DSA", value: 66 },
];

export default function SkillProgress() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Skill Progress</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-baseline justify-between">
              <span className="font-medium">{skill.name}</span>
              <span className="w-10 text-right text-sm tabular-nums text-neutral-500">
                {skill.value}%
              </span>
            </div>

            <div className="relative h-2 overflow-hidden rounded-full bg-neutral-200">
              <motion.div
                className="relative h-2 overflow-hidden rounded-full bg-black"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.06, ease: "easeOut" }}
              >
                <span
                  className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  style={{
                    animation: `roadmapShine 2.6s ease-in-out ${1 + index * 0.12}s infinite`,
                  }}
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes roadmapShine {
          0% { transform: translateX(-120%) skewX(-12deg); }
          60%, 100% { transform: translateX(320%) skewX(-12deg); }
        }
      `}</style>
    </section>
  );
}
