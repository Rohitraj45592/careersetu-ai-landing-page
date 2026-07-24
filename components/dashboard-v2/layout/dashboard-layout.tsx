"use client";

import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "../sidebar/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F7F5]">
      {/* Mobile top bar: hamburger + logo, only shown below lg */}
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-neutral-200 bg-white px-4 py-3 lg:hidden">
        <h1 className="text-lg font-bold tracking-tight">
          Career<span className="text-black">Setu</span>
          <span className="ml-2 rounded-full bg-black px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-white">
            AI
          </span>
        </h1>

        <button
          onClick={() => setMobileNavOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileNavOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-[320px] overflow-y-auto p-4">
            <div className="mb-3 flex justify-end">
              <button
                onClick={() => setMobileNavOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <Sidebar onNavigate={() => setMobileNavOpen(false)} />
          </div>
        </div>
      )}

      <div className="mx-auto flex max-w-[1650px] flex-col gap-6 px-4 py-4 sm:px-6 sm:py-6 lg:flex-row">

        {/* Sidebar: hidden on mobile/tablet, shown from lg up */}
        <aside className="sticky top-6 hidden h-[calc(100vh-48px)] w-[290px] shrink-0 lg:block">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-hidden rounded-[24px] border border-neutral-200 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.05)] lg:rounded-[32px]">

          {children}

        </main>

      </div>
    </div>
  );
}
