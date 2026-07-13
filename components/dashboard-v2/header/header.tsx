"use client";

import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-neutral-200 px-10 py-6">

      <div>
        <p className="text-sm text-neutral-500">
          Welcome back
        </p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight">
          Career Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-[340px] items-center rounded-2xl border border-neutral-200 bg-neutral-50 px-4">
          <Search size={18} className="text-neutral-500" />

          <input
            placeholder="Ask CareerSetu AI..."
            className="ml-3 w-full bg-transparent text-sm outline-none"
          />

          <kbd className="rounded-lg border border-neutral-300 px-2 py-1 text-xs text-neutral-500">
            Ctrl K
          </kbd>
        </div>

        <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200 hover:bg-neutral-100">
          <Bell size={18} />
        </button>

        <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-3 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white font-semibold">
            R
          </div>

          <div>
            <h3 className="text-sm font-semibold">
              Rohit Raj
            </h3>

            <p className="text-xs text-neutral-500">
              AI Engineer
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}