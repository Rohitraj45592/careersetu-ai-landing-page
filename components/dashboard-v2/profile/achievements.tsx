"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, GitPullRequest } from "lucide-react";
import AnimatedNumber from "../shared/animated-number";

const achievements = [
  { icon: Trophy, value: 3, label: "Hackathons Won" },
  { icon: Medal, value: 12, label: "Coding Contests" },
  { icon: Award, value: 5, label: "Awards & Recognitions" },
  { icon: GitPullRequest, value: 21, label: "Open Source Contributions" },
];

export default function Achievements() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Achievements</h2>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {achievements.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-neutral-200 p-5 text-center transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white">
                <Icon size={18} />
              </div>
              <div className="mt-3 flex justify-center">
                <AnimatedNumber value={item.value} />
              </div>
              <p className="mt-1 text-sm text-neutral-500">{item.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
