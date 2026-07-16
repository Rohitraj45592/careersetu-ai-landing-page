"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const initialTasks = [
  { id: "dsa", label: "Solve 2 DSA Questions", done: false },
  { id: "resume", label: "Improve Resume Summary", done: true },
  { id: "apply", label: "Apply to 3 Jobs", done: false },
  { id: "fastapi", label: "Learn FastAPI", done: false },
  { id: "mock", label: "Mock Interview", done: false },
];

export default function TodayFocus() {
  const [tasks, setTasks] = useState(initialTasks);

  function toggle(id: string) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  }

  const completed = tasks.filter((t) => t.done).length;
  const progress = (completed / tasks.length) * 100;

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold sm:text-2xl">Today's Focus</h2>
        <span className="text-sm text-neutral-500 tabular-nums">
          {completed}/{tasks.length} done
        </span>
      </div>

      {/* Progress indicator */}
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-neutral-100">
        <motion.div
          className="h-full rounded-full bg-black"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 200, damping: 26 }}
        />
      </div>

      <div className="mt-5 space-y-3">
        {tasks.map((task) => (
          <button
            key={task.id}
            onClick={() => toggle(task.id)}
            className="flex w-full items-center gap-3 rounded-2xl border border-neutral-200 p-4 text-left transition-colors hover:bg-neutral-50"
          >
            <motion.span
              animate={
                task.done
                  ? { backgroundColor: "#000", borderColor: "#000" }
                  : { backgroundColor: "#fff", borderColor: "#d4d4d4" }
              }
              transition={{ duration: 0.2 }}
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2"
            >
              <motion.span
                initial={false}
                animate={task.done ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 22 }}
                className="text-white"
              >
                <Check size={14} />
              </motion.span>
            </motion.span>

            <span className="relative font-medium">
              <motion.span
                animate={{ color: task.done ? "#a3a3a3" : "#262626" }}
                transition={{ duration: 0.25 }}
              >
                {task.label}
              </motion.span>
              <motion.span
                initial={false}
                animate={{ scaleX: task.done ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
                className="absolute left-0 top-1/2 h-px w-full bg-neutral-400"
              />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
