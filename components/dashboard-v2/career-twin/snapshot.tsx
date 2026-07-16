import {
  FileText,
  BadgeCheck,
  FolderKanban,
  Brain,
  Send,
  Target,
} from "lucide-react";

const stats = [
  { icon: FileText, value: "82", label: "Resume Score" },
  { icon: BadgeCheck, value: "91", label: "ATS Score" },
  { icon: FolderKanban, value: "6", label: "Projects" },
  { icon: Brain, value: "14", label: "Skills" },
  { icon: Send, value: "23", label: "Applications" },
  { icon: Target, value: "82%", label: "Placement Readiness" },
];

export default function Snapshot() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Career Snapshot</h2>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                <Icon size={18} />
              </div>

              <h3 className="text-2xl font-bold">{item.value}</h3>
              <p className="mt-1 text-sm text-neutral-500">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
