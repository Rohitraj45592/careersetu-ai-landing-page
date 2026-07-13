import { Sparkles } from "lucide-react";

export default function CommandBar() {
  return (
    <section className="mt-8 rounded-[28px] bg-black p-8 text-white">

      <div className="flex items-center gap-3">
        <Sparkles size={20} />

        <div>
          <h3 className="font-semibold">
            Ask CareerSetu AI
          </h3>

          <p className="text-sm text-neutral-400">
            Your AI Career Assistant
          </p>
        </div>
      </div>

      <input
        placeholder="Ask anything about your career..."
        className="mt-6 w-full rounded-2xl border border-neutral-700 bg-neutral-900 px-5 py-4 outline-none"
      />

      <div className="mt-5 flex flex-wrap gap-3">

        <button className="rounded-full border border-neutral-700 px-4 py-2">
          Analyze Resume
        </button>

        <button className="rounded-full border border-neutral-700 px-4 py-2">
          Find Jobs
        </button>

        <button className="rounded-full border border-neutral-700 px-4 py-2">
          Show Roadmap
        </button>

        <button className="rounded-full border border-neutral-700 px-4 py-2">
          Prepare Interview
        </button>

        <button className="rounded-full border border-neutral-700 px-4 py-2">
          Improve LinkedIn
        </button>

      </div>

    </section>
  );
}