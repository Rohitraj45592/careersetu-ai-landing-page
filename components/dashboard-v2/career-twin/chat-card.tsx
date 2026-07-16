"use client";

import { useState } from "react";
import { Sparkles, ArrowUp } from "lucide-react";

const suggestedPrompts = [
  "Review my resume",
  "Find AI internships",
  "Build a 30-day roadmap",
  "Improve my LinkedIn",
  "Prepare me for interviews",
];

const mockMessages = [
  {
    from: "twin",
    text: "Hi! I'm your Career Twin. I've been analyzing your profile — want me to walk you through what I found, or is there something specific you'd like help with?",
  },
  {
    from: "user",
    text: "Can you review my resume?",
  },
  {
    from: "twin",
    text: "Sure — your resume is strong on projects and technical skills. I'd tighten the summary at the top and add measurable impact to two of your bullet points. Want me to rewrite them?",
  },
];

export default function ChatCard() {
  const [input, setInput] = useState("");

  return (
    <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[32px] lg:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
          <Sparkles size={18} />
        </div>

        <div>
          <h2 className="text-lg font-bold sm:text-xl">Career Twin Chat</h2>
          <p className="text-sm text-neutral-500">Ask anything about your career</p>
        </div>
      </div>

      {/* Conversation */}
      <div className="mt-6 space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 sm:p-5">
        {mockMessages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[70%] ${
                message.from === "user"
                  ? "bg-black text-white"
                  : "border border-neutral-200 bg-white text-neutral-800"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="mt-5 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-2 pl-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your Career Twin anything..."
          className="w-full min-w-0 bg-transparent text-sm outline-none"
        />

        <button
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-white transition hover:opacity-90"
          aria-label="Send message"
        >
          <ArrowUp size={16} />
        </button>
      </div>

      {/* Suggested prompts */}
      <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
        {suggestedPrompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() => setInput(prompt)}
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 transition hover:border-black hover:text-black"
          >
            {prompt}
          </button>
        ))}
      </div>
    </section>
  );
}
