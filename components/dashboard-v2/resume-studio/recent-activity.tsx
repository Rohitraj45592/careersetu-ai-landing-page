"use client";

import { motion } from "framer-motion";
import { UploadCloud, TrendingUp, Download, Share2, Trophy } from "lucide-react";

const events = [
  { icon: UploadCloud, title: "Resume Uploaded", time: "2 hours ago" },
  { icon: TrendingUp, title: "ATS Score Improved", time: "2 hours ago" },
  { icon: Download, title: "Resume Downloaded", time: "1 day ago" },
  { icon: Share2, title: "Resume Shared", time: "2 days ago" },
  { icon: Trophy, title: "Marked Interview Ready", time: "3 days ago" },
];

export default function RecentActivity() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Recent Activity</h2>

      <div className="relative mt-6">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-5 top-1 bottom-1 w-px bg-neutral-200"
        />

        <div className="space-y-1">
          {events.map((event, index) => {
            const Icon = event.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                className="group relative flex items-center gap-4 rounded-xl px-2 py-2.5 transition-colors hover:bg-neutral-50"
              >
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white transition-transform duration-300 group-hover:scale-110 group-hover:border-black">
                  <Icon size={16} />
                </div>

                <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
                  <span className="truncate font-medium">{event.title}</span>
                  <span className="shrink-0 text-xs tabular-nums text-neutral-400">
                    {event.time}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
