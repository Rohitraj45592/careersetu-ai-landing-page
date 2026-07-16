"use client";

import { useState } from "react";
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

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold sm:text-2xl">Today's Focus</h2>
        <span className="text-sm text-neutral-500">
          {completed}/{tasks.length} done
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {tasks.map((task) => (
          <button
            key={task.id}
            onClick={() => toggle(task.id)}
            className="flex w-full items-center gap-3 rounded-2xl border border-neutral-200 p-4 text-left transition hover:bg-neutral-50"
          >
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition ${
                task.done
                  ? "border-black bg-black text-white"
                  : "border-neutral-300"
              }`}
            >
              {task.done && <Check size={14} />}
            </span>

            <span
              className={`font-medium ${
                task.done ? "text-neutral-400 line-through" : "text-neutral-800"
              }`}
            >
              {task.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
