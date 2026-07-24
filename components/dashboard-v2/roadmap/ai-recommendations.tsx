"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Container,
  FolderKanban,
  FileText,
  Database,
  Mic,
  Link2,
} from "lucide-react";

const recommendations = [
  { icon: Brain, title: "Improve DSA", desc: "You're behind pace on graphs and dynamic programming." },
  { icon: Container, title: "Learn Docker", desc: "Comes up in almost every backend interview now." },
  { icon: FolderKanban, title: "Complete Backend Project", desc: "Finish and deploy your FastAPI project this week." },
  { icon: FileText, title: "Update Resume", desc: "Add your latest project before applying further." },
  { icon: Database, title: "Practice SQL", desc: "Joins and window functions need more reps." },
  { icon: Mic, title: "Mock Interview", desc: "You haven't done one in 2 weeks — schedule one." },
  { icon: Link2, title: "Optimize LinkedIn", desc: "Your headline doesn't reflect your AI focus yet." },
];

export default function AiRecommendations() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">AI Recommendations</h2>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                <Icon size={18} />
              </div>

              <h3 className="mt-4 font-semibold leading-snug">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">{item.desc}</p>

              <button className="mt-4 self-start rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white">
                Improve
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
