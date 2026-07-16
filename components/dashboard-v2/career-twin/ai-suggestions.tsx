import { FileText, Link2, Sparkles, Database, Brain } from "lucide-react";

const suggestions = [
  {
    icon: FileText,
    title: "Improve Resume",
    desc: "Tighten your summary and add measurable impact to key bullet points.",
  },
  {
    icon: Link2,
    title: "Optimize LinkedIn",
    desc: "Your headline and about section could better reflect your AI focus.",
  },
  {
    icon: Sparkles,
    title: "Build GenAI Project",
    desc: "A GenAI project would strengthen your profile for AI/ML roles.",
  },
  {
    icon: Database,
    title: "Learn SQL",
    desc: "SQL comes up in most backend and data interviews — worth prioritizing.",
  },
  {
    icon: Brain,
    title: "Practice DSA",
    desc: "Consistent DSA practice will directly raise your interview readiness.",
  },
];

export default function AiSuggestions() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">AI Suggestions</h2>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {suggestions.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                <Icon size={18} />
              </div>

              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-500">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
