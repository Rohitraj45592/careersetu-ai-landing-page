"use client";

import { motion } from "framer-motion";
import { LifeBuoy, HelpCircle, MessageCircle, Bug, Lightbulb, BookOpen, ArrowUpRight } from "lucide-react";

const items = [
  { icon: LifeBuoy, label: "Help Center", desc: "Browse guides and walkthroughs." },
  { icon: HelpCircle, label: "FAQs", desc: "Answers to common questions." },
  { icon: MessageCircle, label: "Contact Support", desc: "Reach our team directly." },
  { icon: Bug, label: "Report Bug", desc: "Let us know what went wrong." },
  { icon: Lightbulb, label: "Feature Request", desc: "Suggest something new." },
  { icon: BookOpen, label: "Documentation", desc: "Technical docs and API reference." },
];

export default function HelpSupport() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Help & Support</h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group flex w-full items-start justify-between rounded-2xl border border-neutral-200 bg-white p-5 text-left shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className="mt-1 text-sm text-neutral-500">{item.desc}</p>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="mt-1 shrink-0 text-neutral-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
              />
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
