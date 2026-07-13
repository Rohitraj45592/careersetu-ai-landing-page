import { CalendarDays, FileText, Briefcase, Code2 } from "lucide-react";

const activities = [
  {
    icon: FileText,
    title: "Resume Updated",
    time: "2 hours ago",
  },
  {
    icon: Briefcase,
    title: "Applied to Backend Engineer at Microsoft",
    time: "3 hours ago",
  },
  {
    icon: CalendarDays,
    title: "Completed Mock Interview - Round 2",
    time: "5 hours ago",
  },
  {
    icon: Code2,
    title: "New skill added: Next.js",
    time: "1 day ago",
  },
];

export default function Activity() {
  return (
    <section className="mt-10 grid grid-cols-3 gap-6">

      {/* Recent Activity */}
      <div className="col-span-2 rounded-[30px] border border-neutral-200 bg-white p-8">

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <button className="text-sm font-medium text-neutral-500 hover:text-black">
            View All →
          </button>
        </div>

        <div className="space-y-6">
          {activities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-neutral-100 p-3">
                    <Icon size={18} />
                  </div>

                  <span className="font-medium">
                    {item.title}
                  </span>
                </div>

                <span className="text-sm text-neutral-500">
                  {item.time}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Interview */}

      <div className="rounded-[30px] border border-neutral-200 bg-white p-8">

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Upcoming Interview
          </h2>

          <button className="text-sm font-medium text-neutral-500 hover:text-black">
            View Calendar →
          </button>
        </div>

        <div className="flex gap-5">

          <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-neutral-200">
            <span className="text-xs text-neutral-500">
              MAY
            </span>

            <span className="text-4xl font-bold">
              22
            </span>
          </div>

          <div className="flex flex-col justify-center">

            <h3 className="text-xl font-bold">
              Microsoft
            </h3>

            <p className="mt-1 text-neutral-500">
              Backend Engineer Interview
            </p>

            <p className="mt-3 text-sm text-neutral-500">
              🕙 10:30 AM &nbsp;&nbsp;•&nbsp;&nbsp; Google Meet
            </p>

            <button className="mt-5 w-fit rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90">
              Prepare Now →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}