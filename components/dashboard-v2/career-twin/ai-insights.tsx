import { Sparkles } from "lucide-react";

const insights = [
  "Your resume is strong for AI internships.",
  "Improve DSA before placements.",
  "Deploy another full-stack project.",
  "Improve your GitHub README.",
];

export default function AiInsights() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
          <Sparkles size={18} />
        </div>

        <h2 className="text-xl font-bold sm:text-2xl">AI Insights</h2>
      </div>

      <ul className="mt-6 space-y-4">
        {insights.map((insight) => (
          <li key={insight} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
            <span className="text-neutral-700">{insight}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
