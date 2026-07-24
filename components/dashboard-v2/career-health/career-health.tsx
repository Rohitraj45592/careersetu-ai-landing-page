import {
  FileText,
  FolderKanban,
  Brain,
  MessageSquare,
  Mic,
} from "lucide-react";

const items = [
  {
    icon: FileText,
    title: "Resume",
    value: 90,
    status: "Excellent",
  },
  {
    icon: FolderKanban,
    title: "Projects",
    value: 78,
    status: "Good",
  },
  {
    icon: Brain,
    title: "DSA",
    value: 45,
    status: "Needs Work",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    value: 52,
    status: "Moderate",
  },
  {
    icon: Mic,
    title: "Interview Skills",
    value: 60,
    status: "Practice",
  },
];

export default function CareerHealth() {
  return (
    <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">

      {/* Left Card */}
      <div className="rounded-[28px] border border-neutral-200 bg-white p-5 sm:p-6">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-xl font-bold">
              Career Health
            </h2>

            <p className="mt-1 text-sm text-neutral-500">
              Your overall career readiness
            </p>
          </div>

          <div className="text-right">
            <h2 className="text-3xl font-bold">
              82%
            </h2>

            <p className="text-green-600 text-sm">
              Good
            </p>
          </div>

        </div>

        <div className="mt-8 space-y-5">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title}>

                <div className="mb-2 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <Icon size={18} />

                    <span>{item.title}</span>

                  </div>

                  <span className="text-sm text-neutral-500">
                    {item.status}
                  </span>

                </div>

                <div className="h-2 rounded-full bg-neutral-200">

                  <div
                    className="h-2 rounded-full bg-black"
                    style={{ width: `${item.value}%` }}
                  />

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Right Card */}

      <div className="rounded-[28px] border border-neutral-200 bg-white p-5 sm:p-6">

        <h2 className="text-xl font-bold">
          AI Insight
        </h2>

        <p className="mt-3 text-neutral-600">
          You are strong in technical skills and projects.
          Focus more on DSA and interview preparation to
          improve your placement chances.
        </p>

        <button className="mt-6 rounded-xl bg-black px-5 py-3 text-white">
          View Detailed Insights
        </button>

        <div className="mt-8 space-y-4">

          <div className="flex justify-between">
            <span>Technical Skills</span>
            <span className="text-green-600">Strong</span>
          </div>

          <div className="flex justify-between">
            <span>DSA</span>
            <span className="text-orange-500">Needs Work</span>
          </div>

          <div className="flex justify-between">
            <span>Communication</span>
            <span className="text-yellow-500">Moderate</span>
          </div>

          <div className="flex justify-between">
            <span>Interview Skills</span>
            <span className="text-red-500">Practice</span>
          </div>

        </div>

      </div>

    </section>
  );
}