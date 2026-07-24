"use client";

import { motion } from "framer-motion";
import { Smile, Timer, Star, Lightbulb, Cpu, Eye, ArrowRight } from "lucide-react";

const suggestions = [
  { icon: Smile, title: "Improve Confidence", desc: "Practice power poses before your next session." },
  { icon: Timer, title: "Speak Slower", desc: "Slightly slower pace improves clarity and confidence." },
  { icon: Star, title: "Use STAR Method", desc: "Structure behavioral answers with Situation-Task-Action-Result." },
  { icon: Lightbulb, title: "Explain Logic Better", desc: "Narrate your thought process while solving problems." },
  { icon: Cpu, title: "Improve Technical Depth", desc: "Go one level deeper when explaining trade-offs." },
  { icon: Eye, title: "Maintain Eye Contact", desc: "Look at the camera, not the screen, while speaking." },
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
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 transition-colors duration-200 group-hover:bg-black group-hover:text-white">
                  <Icon size={18} />
                </div>
                <ArrowRight size={16} className="mt-2 -translate-x-1 text-neutral-300 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-black" />
              </div>

              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
