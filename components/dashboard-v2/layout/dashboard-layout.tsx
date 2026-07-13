import { ReactNode } from "react";
import Sidebar from "../sidebar/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F7F7F5]">
      <div className="mx-auto flex max-w-[1650px] gap-6 px-6 py-6">

        {/* Sidebar */}
        <aside className="sticky top-6 h-[calc(100vh-48px)] w-[290px] shrink-0">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.05)]">

          {children}

        </main>

      </div>
    </div>
  );
}