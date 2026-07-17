"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    name: "AI Resume Screener",
    difficulty: "Intermediate",
    stack: "Python, FastAPI, LangChain",
    time: "1 week",
  },
  {
    name: "Realtime Chat App",
    difficulty: "Intermediate",
    stack: "React, Node.js, WebSockets",
    time: "5 days",
  },
  {
    name: "E-commerce Backend",
    difficulty: "Advanced",
    stack: "FastAPI, PostgreSQL, Docker",
    time: "2 weeks",
  },
  {
    name: "GenAI Interview Coach",
    difficulty: "Advanced",
    stack: "Python, OpenAI API, React",
    time: "10 days",
  },
];

const difficultyStyle: Record<string, string> = {
  Beginner: "border-neutral-200 text-neutral-500",
  Intermediate: "border-neutral-300 text-neutral-700",
  Advanced: "border-black bg-black text-white",
};

export default function RecommendedProjects() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Recommended Projects</h2>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            <span
              className={`inline-block w-fit rounded-full border px-3 py-1 text-xs font-medium ${difficultyStyle[project.difficulty]}`}
            >
              {project.difficulty}
            </span>

            <h3 className="mt-4 font-semibold leading-snug">{project.name}</h3>
            <p className="mt-2 flex-1 text-sm text-neutral-500">{project.stack}</p>
            <p className="mt-3 text-xs text-neutral-400">Est. {project.time}</p>

            <button className="group mt-4 flex items-center gap-1.5 self-start rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white">
              Start Project
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
