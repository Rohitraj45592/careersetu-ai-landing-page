"use client";

import { motion } from "framer-motion";
import { Link2, GitFork, Globe, Code2, Trophy, Terminal } from "lucide-react";

const profiles = [
  { icon: Link2, name: "LinkedIn", username: "rohitraj", status: "Connected" },
  { icon: GitFork, name: "GitHub", username: "Rohitraj45592", status: "Connected" },
  { icon: Globe, name: "Portfolio", username: "rohitraj.dev", status: "Connected" },
  { icon: Code2, name: "LeetCode", username: "rohitraj45", status: "Connected" },
  { icon: Trophy, name: "Codeforces", username: "rohit_r", status: "Not Linked" },
  { icon: Terminal, name: "HackerRank", username: "rohitraj", status: "Connected" },
];

export default function SocialProfiles() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Social Profiles</h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profiles.map((profile, index) => {
          const Icon = profile.icon;
          const connected = profile.status === "Connected";
          return (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-medium">{profile.name}</p>
                  <p className="text-sm text-neutral-500">@{profile.username}</p>
                  <span
                    className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[11px] font-medium ${
                      connected ? "bg-neutral-100 text-neutral-600" : "bg-neutral-100 text-neutral-400"
                    }`}
                  >
                    {profile.status}
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`shrink-0 rounded-xl px-3 py-2 text-xs font-medium ${
                  connected ? "border border-neutral-300 hover:border-black" : "bg-black text-white"
                }`}
              >
                {connected ? "Visit" : "Link"}
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
