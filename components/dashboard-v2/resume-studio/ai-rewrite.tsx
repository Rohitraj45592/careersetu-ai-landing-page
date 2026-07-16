"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, RotateCw } from "lucide-react";

const tabs = ["Summary", "Projects", "Experience", "Skills", "Achievements"] as const;
type Tab = (typeof tabs)[number];

const content: Record<Tab, { original: string; aiVersions: string[] }> = {
  Summary: {
    original:
      "Computer science student who knows Python, React and a few other technologies, looking for opportunities.",
    aiVersions: [
      "AI/ML-focused engineer with 6 shipped projects, specializing in Python, React and applied GenAI — seeking backend or AI engineering roles.",
      "Full-stack developer with hands-on GenAI project experience, strong in Python and React, targeting AI engineering internships.",
    ],
  },
  Projects: {
    original: "Built a chatbot using Python and OpenAI API. Used React for frontend.",
    aiVersions: [
      "Built and deployed a production chatbot serving 500+ users, integrating OpenAI's API with a React frontend and FastAPI backend.",
      "Designed a GenAI chatbot pipeline (Python, OpenAI API, React) that reduced average support response time by 40%.",
    ],
  },
  Experience: {
    original: "Worked as an intern, helped with backend tasks and fixed bugs.",
    aiVersions: [
      "Backend Engineering Intern — shipped 3 API features and resolved 20+ production bugs, improving service reliability by 15%.",
      "Contributed to backend services as an intern, reducing bug backlog by 35% and shipping 3 customer-facing API features.",
    ],
  },
  Skills: {
    original: "Python, React, SQL, Git, some ML libraries.",
    aiVersions: [
      "Languages: Python, SQL · Frameworks: React, FastAPI · ML: TensorFlow, PyTorch · Tools: Git, Docker",
      "Core: Python, SQL, React · Applied ML: TensorFlow, PyTorch, LangChain · DevOps: Git, Docker, AWS",
    ],
  },
  Achievements: {
    original: "Won a hackathon. Got good grades.",
    aiVersions: [
      "1st place, 200+ participant hackathon — built an AI resume screener in 24 hours. Maintained a 9.1/10 CGPA.",
      "Placed 1st among 40 teams at a national hackathon; consistently ranked in the top 5% of your cohort academically.",
    ],
  },
};

export default function AiRewrite() {
  const [active, setActive] = useState<Tab>("Summary");
  const [versionIndex, setVersionIndex] = useState<Record<Tab, number>>({
    Summary: 0,
    Projects: 0,
    Experience: 0,
    Skills: 0,
    Achievements: 0,
  });
  const [accepted, setAccepted] = useState<Partial<Record<Tab, boolean>>>({});

  const current = content[active];
  const aiText = current.aiVersions[versionIndex[active] % current.aiVersions.length];

  function rewrite() {
    setAccepted((prev) => ({ ...prev, [active]: false }));
    setVersionIndex((prev) => ({ ...prev, [active]: prev[active] + 1 }));
  }

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">AI Rewrite</h2>

      <div className="mt-5 flex flex-wrap gap-2 border-b border-neutral-200 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === tab
                ? "bg-black text-white"
                : "text-neutral-500 hover:bg-neutral-100 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active + versionIndex[active]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2"
        >
          <div className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
              Original Version
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{current.original}</p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-50 p-5">
            <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500">
              <Sparkles size={12} />
              AI Version
            </div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-800">{aiText}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-5 flex flex-wrap gap-3">
        <motion.button
          onClick={rewrite}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium transition-colors hover:border-black"
        >
          <RotateCw size={15} />
          Rewrite
        </motion.button>

        <motion.button
          onClick={() => setAccepted((prev) => ({ ...prev, [active]: true }))}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          {accepted[active] ? <Check size={15} /> : null}
          {accepted[active] ? "Accepted" : "Accept"}
        </motion.button>
      </div>
    </section>
  );
}
