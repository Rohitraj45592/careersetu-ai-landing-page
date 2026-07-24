import {
  CheckCircle2,
  FileText,
  BriefcaseBusiness,
  BadgeCheck,
  Clock,
} from "lucide-react";

const items = [
  { icon: CheckCircle2, title: "AI Status", value: "Everything OK" },
  { icon: FileText, title: "Resume", value: "+4 Today" },
  { icon: BriefcaseBusiness, title: "New Jobs", value: "+12 Today" },
  { icon: BadgeCheck, title: "ATS Score", value: "91 Excellent" },
  { icon: Clock, title: "Last Sync", value: "2 min ago" },
];

export default function StatusStrip() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-4"
          >
            <Icon size={20} />

            <div>
              <p className="text-xs text-neutral-500">{item.title}</p>
              <p className="font-medium">{item.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}