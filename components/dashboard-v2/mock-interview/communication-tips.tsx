"use client";

import { motion } from "framer-motion";
import { Sparkles, Eye, Mic2, Ban, ListOrdered, Flame } from "lucide-react";

const tips = [
  { icon: Eye, text: "Maintain eye contact with the camera." },
  { icon: Mic2, text: "Speak confidently and at a steady pace." },
  { icon: Ban, text: "Avoid filler words like 'um' and 'like'." },
  { icon: ListOrdered, text: "Use structured answers with clear points." },
  { icon: Flame, text: "Show enthusiasm about the role and company." },
];

export default function CommunicationTips() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
          <Sparkles size={18} />
        </div>
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">AI Communication Tips</h2>
          <p className="text-sm text-neutral-500">Based on your recent sessions</p>
        </div>
      </div>

      <ul className="mt-6 divide-y divide-neutral-100">
        {tips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <motion.li
              key={tip.text}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100">
                <Icon size={14} />
              </span>
              <span className="leading-relaxed text-neutral-700">{tip.text}</span>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
