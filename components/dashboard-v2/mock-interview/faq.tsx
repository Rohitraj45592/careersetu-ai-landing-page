"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Tell me about yourself.", a: "Give a concise summary of your background, key skills, and what you're looking for next." },
  { q: "Why should we hire you?", a: "Connect your specific skills and past impact directly to the role's requirements." },
  { q: "What are your strengths?", a: "Pick 2-3 strengths relevant to the role and back each with a short example." },
  { q: "What are your weaknesses?", a: "Share a real, minor weakness along with what you're doing to improve it." },
  { q: "Describe a leadership experience.", a: "Use the STAR method to walk through a time you led or influenced a team." },
  { q: "Tell me about a failure.", a: "Focus on what you learned and how it changed your approach afterward." },
  { q: "Walk me through your projects.", a: "Explain the problem, your role, the tech used, and the measurable outcome." },
  { q: "Tell me about your final year project.", a: "Cover the goal, your contribution, challenges faced, and the result." },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Frequently Asked Questions</h2>

      <div className="mt-5 divide-y divide-neutral-100">
        {faqs.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
              >
                <span className="font-medium">{item.q}</span>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={18} className="shrink-0 text-neutral-400" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-sm leading-relaxed text-neutral-600">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
