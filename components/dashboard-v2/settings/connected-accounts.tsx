"use client";

import { motion } from "framer-motion";
import { Mail, GitFork, Link2, Globe, Code2, Terminal } from "lucide-react";

const accounts = [
  { icon: Mail, name: "Google", status: "Connected" },
  { icon: GitFork, name: "GitHub", status: "Connected" },
  { icon: Link2, name: "LinkedIn", status: "Connected" },
  { icon: Globe, name: "Portfolio", status: "Connected" },
  { icon: Code2, name: "LeetCode", status: "Connected" },
  { icon: Terminal, name: "HackerRank", status: "Not Connected" },
];

export default function ConnectedAccounts() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Connected Accounts</h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {accounts.map((account, index) => {
          const Icon = account.icon;
          const connected = account.status === "Connected";
          return (
            <motion.div
              key={account.name}
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
                  <p className="font-medium">{account.name}</p>
                  <span
                    className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[11px] font-medium ${
                      connected ? "bg-neutral-100 text-neutral-600" : "bg-neutral-100 text-neutral-400"
                    }`}
                  >
                    {account.status}
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
                {connected ? "Disconnect" : "Connect"}
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
