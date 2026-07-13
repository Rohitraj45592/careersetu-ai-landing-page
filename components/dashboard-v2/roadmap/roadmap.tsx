export default function Roadmap() {
  const steps = [
    {
      number: 1,
      title: "DSA",
      desc: "Complete Arrays,\nStrings & Hashing",
      status: "In Progress",
      active: true,
    },
    {
      number: 2,
      title: "System Design",
      desc: "Learn backend\nfundamentals",
      status: "Pending",
    },
    {
      number: 3,
      title: "Projects",
      desc: "Build 2 production\nready apps",
      status: "Pending",
    },
    {
      number: 4,
      title: "Apply",
      desc: "Apply to top\ncompanies",
      status: "Pending",
    },
    {
      number: 5,
      title: "Crack Interviews",
      desc: "Get placed",
      status: "Locked",
    },
  ];

  return (
    <section className="mt-10 rounded-[32px] border border-neutral-200 bg-white p-10">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold">
            Your Recommended Roadmap
          </h2>

          <p className="mt-2 text-neutral-500">
            Follow these steps to become placement ready.
          </p>
        </div>

        <button className="rounded-full border border-violet-400 px-6 py-3 font-medium text-violet-600 transition hover:bg-violet-50">
          View Full Roadmap →
        </button>
      </div>

      {/* Timeline */}
      <div className="relative mt-16">

        {/* One Connected Line */}
        <div className="absolute left-0 right-0 top-[24px] h-[2px] bg-neutral-300" />

        <div className="relative grid grid-cols-5 gap-6">

          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center"
            >

              {/* Circle */}
              <div
                className={`z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 text-lg font-semibold ${
  step.active
    ? "border-black bg-black text-white"
    : "border-neutral-300 bg-white text-black"
}`}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-center">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 whitespace-pre-line text-center text-sm text-neutral-500">
                {step.desc}
              </p>

              {/* Badge */}
              <span
  className={`mt-5 rounded-full px-4 py-2 text-xs font-medium shadow-sm ${
    step.status === "In Progress"
      ? "bg-black text-white"
      : step.status === "Locked"
      ? "bg-neutral-200 text-neutral-600"
      : "border border-neutral-200 bg-white text-neutral-700"
  }`}
>
  {step.status}
</span>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}