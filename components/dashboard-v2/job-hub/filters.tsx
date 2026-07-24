"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const chipGroups = [
  { label: "Work Mode", options: ["Remote", "Hybrid", "Onsite"] },
  { label: "Type", options: ["Internship", "Full Time"] },
  { label: "Experience", options: ["0-1 yrs", "1-3 yrs", "3-5 yrs"] },
];

export default function Filters() {
  const [active, setActive] = useState<string[]>([]);

  function toggle(option: string) {
    setActive((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  }

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
          <SlidersHorizontal size={18} />
        </div>
        <h2 className="text-xl font-bold sm:text-2xl">Smart Filters</h2>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center rounded-2xl border border-neutral-200 px-4 py-3 sm:col-span-2 lg:col-span-1">
          <Search size={16} className="shrink-0 text-neutral-400" />
          <input placeholder="Search role or keyword" className="ml-3 w-full min-w-0 bg-transparent text-sm outline-none" />
        </div>
        <input placeholder="Company" className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-black" />
        <input placeholder="Location" className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-black" />
        <input placeholder="Salary range" className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-black" />
      </div>

      <div className="mt-5 space-y-4">
        {chipGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-500">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.options.map((option) => (
                <button
                  key={option}
                  onClick={() => toggle(option)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    active.includes(option)
                      ? "border-black bg-black text-white"
                      : "border-neutral-300 text-neutral-700 hover:border-black"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <select className="rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none">
          <option>Sort: Best Match</option>
          <option>Sort: Newest</option>
          <option>Sort: Highest Salary</option>
        </select>

        <div className="flex gap-3">
          <button onClick={() => setActive([])} className="rounded-xl border border-neutral-300 px-5 py-2.5 text-sm font-medium transition hover:border-black">
            Reset
          </button>
          <button className="rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90">
            Apply Filters
          </button>
        </div>
      </div>
    </section>
  );
}
