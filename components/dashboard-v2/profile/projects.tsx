"use client";

import { motion } from "framer-motion";
import { GitFork, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "CareerSetu AI",
    description: "AI-powered placement preparation platform with resume analysis, mock interviews and job matching.",
    stack: ["Next.js", "TypeScript", "FastAPI", "LangChain"],
    status: "In Progress",
    duration: "Jan 2026 — Present",
  },
  {
    name: "DevMatch",
    description: "Real-time collaborative code editor with AI pair-programming suggestions.",
    stack: ["React", "Node.js", "Socket.io", "Redis"],
    status: "Completed",
    duration: "Aug 2025 — Dec 2025",
  },
  {
    name: "CampusConnect",
    description: "Event and club management portal used by 2,000+ students across campus.",
    stack: ["Next.js", "PostgreSQL", "Prisma"],
    status: "Completed",
    duration: "Mar 2025 — Jun 2025",
  },
  {
    name: "SmartExpense",
    description: "Personal finance tracker with ML-based spending predictions.",
    stack: ["Python", "PyTorch", "Streamlit"],
    status: "Completed",
    duration: "Nov 2024 — Jan 2025",
  },
];

const statusStyle: Record<string, string> = {
  "In Progress": "bg-black text-white",
  Completed: "bg-neutral-100 text-neutral-700",
};

export default function Projects() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Projects</h2>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${statusStyle[project.status]}`}>
                {project.status}
              </span>
            </div>

            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-neutral-400">{project.duration}</span>

              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 rounded-xl border border-neutral-300 px-3 py-1.5 text-xs font-medium transition-colors hover:border-black"
                >
                  <GitFork size={13} />
                  Code
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 rounded-xl bg-black px-3 py-1.5 text-xs font-medium text-white"
                >
                  <ExternalLink size={13} />
                  Live
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
