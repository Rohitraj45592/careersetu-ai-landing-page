import { BriefcaseBusiness, TrendingUp, AlertCircle } from "lucide-react";

export default function HeroStats() {
  const stats = [
    {
      icon: BriefcaseBusiness,
      value: "12",
      label: "New Matches",
      sub: "3 from yesterday",
    },
    {
      icon: TrendingUp,
      value: "+3",
      label: "Resume Score",
      sub: "Improved",
    },
    {
      icon: AlertCircle,
      value: "2",
      label: "Critical Actions",
      sub: "Due Today",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-3 gap-4">
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

            <h2 className="text-3xl font-bold">{item.value}</h2>

            <p className="mt-1 font-medium">{item.label}</p>

            <p className="mt-2 text-sm text-neutral-500">
              {item.sub}
            </p>
          </div>
        );
      })}
    </div>
  );
}