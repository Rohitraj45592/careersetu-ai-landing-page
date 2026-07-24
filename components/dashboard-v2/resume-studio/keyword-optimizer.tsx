"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Check } from "lucide-react";

const allKeywords = [
  "Python",
  "FastAPI",
  "LangChain",
  "TensorFlow",
  "PyTorch",
  "SQL",
  "Docker",
  "AWS",
  "Git",
  "React",
];

export default function KeywordOptimizer() {
  const [role, setRole] = useState("");
  const [selected, setSelected] = useState<string[]>(["Python", "SQL", "React"]);

  function toggle(keyword: string) {
    setSelected((prev) =>
      prev.includes(keyword) ? prev.filter((k) => k !== keyword) : [...prev, keyword]
    );
  }

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Keyword Optimizer</h2>

      <label className="mt-5 block text-sm font-medium text-neutral-600">
        Target Job Role
      </label>
      <div className="mt-2 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-3 pl-4 transition-colors focus-within:border-neutral-400">
        <Search size={16} className="text-neutral-400" />
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="e.g. AI Engineer"
          className="w-full min-w-0 bg-transparent text-sm outline-none"
        />
      </div>

      <p className="mt-6 text-sm font-medium text-neutral-500">Suggested Keywords</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {allKeywords.map((keyword) => {
          const active = selected.includes(keyword);

          return (
            <motion.button
              key={keyword}
              onClick={() => toggle(keyword)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? "border-black bg-black text-white"
                  : "border-neutral-300 text-neutral-700 hover:border-black hover:text-black"
              }`}
            >
              {active && <Check size={13} />}
              {keyword}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
