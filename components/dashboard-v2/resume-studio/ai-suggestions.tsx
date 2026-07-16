"use client";

import { motion } from "framer-motion";
import {
  FileText,
  FolderKanban,
  Briefcase,
  Brain,
  BarChart3,
  KeyRound,
  ShieldCheck,
  SpellCheck2,
} from "lucide-react";

const suggestions = [
  { icon: FileText, title: "Improve Summary", desc: "Make your opening two lines sharper and role-specific." },
  { icon: FolderKanban, title: "Rewrite Projects", desc: "Lead with outcomes instead of tech stack lists." },
  { icon: Briefcase, title: "Improve Experience", desc: "Turn responsibilities into measurable achievements." },
  { icon: Brain, title: "Improve Skills", desc: "Group skills by category so they scan faster." },
  { icon: BarChart3, title: "Add Metrics", desc: "Quantify impact with numbers wherever possible." },
  { icon: KeyRound, title: "Optimize Keywords", desc: "Align phrasing with the roles you're targeting." },
  { icon: ShieldCheck, title: "Fix ATS Issues", desc: "Resolve formatting that trips up parsing systems." },
  { icon: SpellCheck2, title: "Grammar Check", desc: "Clean up 4 minor grammar issues we found." },
];

export default function AiSuggestions() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">AI Suggestions</h2>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {suggestions.map((item, index) => {
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
