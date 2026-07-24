"use client";

import { motion } from "framer-motion";
import { Trophy, Flame, Smile, Cpu, Users, GraduationCap } from "lucide-react";

const badges = [
  { icon: Trophy, title: "First Interview", earned: true },
  { icon: Flame, title: "10 Interviews", earned: true },
  { icon: Smile, title: "Confidence Master", earned: false },
  { icon: Cpu, title: "Technical Expert", earned: false },
  { icon: Users, title: "HR Champion", earned: true },
  { icon: GraduationCap, title: "Placement Ready", earned: false },
];

export default function AchievementBadges() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Achievement Badges</h2>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {badges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className={`flex flex-col items-center rounded-2xl border p-5 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg ${
                badge.earned ? "border-neutral-200 bg-white" : "border-neutral-200 bg-neutral-50 opacity-60"
              }`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${badge.earned ? "bg-black text-white" : "bg-neutral-200 text-neutral-400"}`}>
                <Icon size={20} />
              </div>
              <p className="mt-3 text-sm font-medium">{badge.title}</p>
              <span className="mt-1 text-[11px] text-neutral-400">{badge.earned ? "Earned" : "Locked"}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
