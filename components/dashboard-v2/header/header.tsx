"use client";

import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col gap-4 border-b border-neutral-200 px-4 py-5 sm:px-6 sm:py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">

      <div>
        <p className="text-sm text-neutral-500">
          Welcome back
        </p>

        <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
          Career Dashboard
        </h1>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">

        <div className="flex h-12 w-full items-center rounded-2xl border border-neutral-200 bg-neutral-50 px-4 sm:w-[260px] lg:w-[340px]">
          <Search size={18} className="text-neutral-500 shrink-0" />

          <input
            placeholder="Ask CareerSetu AI..."
            className="ml-3 w-full min-w-0 bg-transparent text-sm outline-none"
          />

          <kbd className="hidden shrink-0 rounded-lg border border-neutral-300 px-2 py-1 text-xs text-neutral-500 sm:block">
            Ctrl K
          </kbd>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-neutral-200 hover:bg-neutral-100">
            <Bell size={18} />
          </button>

          <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-neutral-200 px-3 py-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white font-semibold">
              R
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold">
                Rohit Raj
              </h3>

              <p className="truncate text-xs text-neutral-500">
                AI Engineer
              </p>
            </div>
          </div>
        </div>

      </div>

    </header>
  );
}
