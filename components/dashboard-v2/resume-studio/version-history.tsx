"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { History, RotateCcw, Check } from "lucide-react";

const initialVersions = [
  { id: "v3", label: "Resume V3", time: "Just now", note: "AI-optimized summary and projects", current: true },
  { id: "v2", label: "Resume V2", time: "2 days ago", note: "Added metrics to experience section", current: false },
  { id: "v1", label: "Resume V1", time: "1 week ago", note: "Initial upload", current: false },
];

export default function VersionHistory() {
  const [versions, setVersions] = useState(initialVersions);

  function restore(id: string) {
    setVersions((prev) => prev.map((v) => ({ ...v, current: v.id === id })));
  }

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
          <History size={18} />
        </div>
        <h2 className="text-xl font-bold sm:text-2xl">Version History</h2>
      </div>

      <div className="relative mt-6">
        <div className="absolute left-5 top-1 bottom-1 w-px bg-neutral-200" />

        <div className="space-y-3">
          {versions.map((version, index) => (
            <motion.div
              key={version.id}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
              className="relative flex items-center gap-4 rounded-xl px-2 py-2.5 transition-colors hover:bg-neutral-50"
            >
              <div
                className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-white ${
                  version.current ? "border-black" : "border-neutral-200"
                }`}
              >
                {version.current ? <Check size={16} /> : <History size={16} />}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{version.label}</span>
                  {version.current && (
                    <span className="rounded-full bg-black px-2 py-0.5 text-[10px] font-medium text-white">
                      Current
                    </span>
                  )}
                </div>
                <p className="truncate text-sm text-neutral-500">{version.note}</p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <span className="text-xs tabular-nums text-neutral-400">{version.time}</span>
                {!version.current && (
                  <button
                    onClick={() => restore(version.id)}
                    className="flex items-center gap-1.5 rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium transition-colors hover:border-black hover:bg-black hover:text-white"
                  >
                    <RotateCcw size={12} />
                    Restore
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
