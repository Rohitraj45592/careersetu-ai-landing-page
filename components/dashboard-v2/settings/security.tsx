"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { KeyRound, ShieldCheck, Monitor, Smartphone, History, ShieldAlert } from "lucide-react";
import AnimatedNumber from "../shared/animated-number";
import ToggleSwitch from "../shared/toggle-switch";

const sessions = [
  { device: "MacBook Pro — Chrome", location: "Patna, IN", time: "Active now", icon: Monitor },
  { device: "iPhone 15 — Safari", location: "Patna, IN", time: "2 hours ago", icon: Smartphone },
];

export default function Security() {
  const [twoFA, setTwoFA] = useState(false);

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-bold sm:text-2xl">Security</h2>

        <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-2.5">
          <ShieldCheck size={16} />
          <span className="text-sm text-neutral-500">Security Score</span>
          <AnimatedNumber value={78} suffix="%" className="text-sm font-bold tabular-nums" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">
              <KeyRound size={16} />
            </div>
            <div>
              <p className="font-medium">Password</p>
              <p className="text-xs text-neutral-500">Last changed 2 months ago</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 w-full rounded-xl border border-neutral-300 py-2.5 text-sm font-medium transition-colors hover:border-black"
          >
            Change Password
          </motion.button>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">
                <ShieldAlert size={16} />
              </div>
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-xs text-neutral-500">
                  {twoFA ? "Enabled — your account is protected" : "Add an extra layer of security"}
                </p>
              </div>
            </div>
            <ToggleSwitch checked={twoFA} onChange={() => setTwoFA((v) => !v)} />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 w-full rounded-xl bg-black py-2.5 text-sm font-medium text-white"
          >
            {twoFA ? "Manage 2FA" : "Enable 2FA"}
          </motion.button>
        </div>
      </div>

      <div className="mt-6 border-t border-neutral-100 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <History size={16} />
            Recent Login Activity
          </div>
          <button className="text-sm font-medium text-neutral-500 transition-colors hover:text-black">
            View Sessions
          </button>
        </div>

        <div className="mt-4 space-y-3">
          {sessions.map((session, index) => {
            const Icon = session.icon;
            return (
              <motion.div
                key={session.device}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
                className="flex items-center gap-3 rounded-2xl border border-neutral-200 p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100">
                  <Icon size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{session.device}</p>
                  <p className="text-xs text-neutral-500">{session.location}</p>
                </div>
                <span className="shrink-0 text-xs tabular-nums text-neutral-400">{session.time}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
