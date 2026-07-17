"use client";

import { motion } from "framer-motion";
import { Check, Circle, Loader2 } from "lucide-react";

type Status = "done" | "active" | "upcoming";

const milestones: { title: string; status: Status; completion: number; duration: string }[] = [
  { title: "Foundation", status: "done", completion: 100, duration: "3 weeks" },
  { title: "Programming", status: "done", completion: 100, duration: "4 weeks" },
  { title: "DSA", status: "active", completion: 62, duration: "6 weeks" },
  { title: "Development", status: "active", completion: 45, duration: "5 weeks" },
  { title: "Backend", status: "upcoming", completion: 0, duration: "4 weeks" },
  { title: "Projects", status: "upcoming", completion: 0, duration: "5 weeks" },
  { title: "Resume", status: "upcoming", completion: 0, duration: "1 week" },
  { title: "Interview", status: "upcoming", completion: 0, duration: "3 weeks" },
  { title: "Placement", status: "upcoming", completion: 0, duration: "Ongoing" },
];

const statusStyles: Record<Status, string> = {
  done: "border-black bg-black text-white",
  active: "border-black bg-white text-black",
  upcoming: "border-neutral-200 bg-white text-neutral-300",
};

const statusLabel: Record<Status, string> = {
  done: "Completed",
  active: "In Progress",
  upcoming: "Upcoming",
};

export default function RoadmapTimeline() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Roadmap Timeline</h2>

      <div className="relative mt-6">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-5 top-1 bottom-1 w-px bg-neutral-200"
        />

        <div className="space-y-2">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
              className="group relative flex gap-4 rounded-xl px-2 py-3 transition-colors hover:bg-neutral-50"
            >
              <div
                className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 ${statusStyles[milestone.status]}`}
              >
                {milestone.status === "done" && <Check size={16} />}
                {milestone.status === "active" && <Loader2 size={16} className="animate-spin" />}
                {milestone.status === "upcoming" && <Circle size={10} fill="currentColor" />}
              </div>

              <div className="min-w-0 flex-1 pt-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-semibold">{milestone.title}</span>
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <span
                      className={`rounded-full px-2.5 py-1 font-medium ${
                        milestone.status === "done"
                          ? "bg-neutral-100 text-neutral-700"
                          : milestone.status === "active"
                          ? "bg-black text-white"
                          : "bg-neutral-100 text-neutral-400"
                      }`}
                    >
                      {statusLabel[milestone.status]}
                    </span>
                    <span className="tabular-nums">{milestone.duration}</span>
                  </div>
                </div>

                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                  <motion.div
                    className="h-full rounded-full bg-black"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${milestone.completion}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.06, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
