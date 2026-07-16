import { Sparkles } from "lucide-react";

export default function CareerTwinHero() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[32px] lg:p-8">
      <div className="flex items-center gap-2 text-sm font-medium text-neutral-500">
        <Sparkles size={16} />
        Career Twin
      </div>

      <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
        Your Personal AI Career Coach
      </h1>

      <p className="mt-6 max-w-2xl text-base text-neutral-600 sm:text-lg">
        CareerSetu AI continuously analyzes your profile and helps you
        improve your career with personalized recommendations.
      </p>

      <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
        <button className="rounded-2xl bg-black px-5 py-3 text-white sm:px-6">
          Start Conversation
        </button>

        <button className="rounded-2xl border border-neutral-300 px-5 py-3 sm:px-6">
          View Insights
        </button>
      </div>
    </section>
  );
}
