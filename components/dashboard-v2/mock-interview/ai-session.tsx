"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mic, Video, SkipForward, PhoneOff, VideoOff } from "lucide-react";

export default function AiSession() {
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const progress = 40;

  return (
    <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[32px] lg:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-bold sm:text-2xl">AI Interview Session</h2>
        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
          Question 2 of 5
        </span>
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-neutral-200">
        <motion.div
          className="h-1.5 rounded-full bg-black"
          initial={{ width: "0%" }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Current Question</p>
        <p className="mt-2 text-lg font-semibold leading-relaxed">
          Tell me about a challenging project and how you handled it.
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-black" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
          </span>
          01:24 remaining
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMicOn((v) => !v)}
          className={`flex h-12 w-12 items-center justify-center rounded-full border transition ${
            micOn ? "border-black bg-black text-white" : "border-neutral-300 text-neutral-400"
          }`}
        >
          <Mic size={18} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCamOn((v) => !v)}
          className={`flex h-12 w-12 items-center justify-center rounded-full border transition ${
            camOn ? "border-black bg-black text-white" : "border-neutral-300 text-neutral-400"
          }`}
        >
          {camOn ? <Video size={18} /> : <VideoOff size={18} />}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium transition hover:border-black"
        >
          <SkipForward size={16} />
          Skip Question
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          <PhoneOff size={16} />
          End Interview
        </motion.button>
      </div>
    </section>
  );
}
