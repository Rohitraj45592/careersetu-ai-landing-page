"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, ArrowUp } from "lucide-react";

const suggestedPrompts = [
  "Review my resume",
  "Find AI internships",
  "Build a 30-day roadmap",
  "Improve my LinkedIn",
  "Prepare me for interviews",
];

const initialMessages = [
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

const canned = [
  "Good question — based on what's in your profile, I'd start with your resume summary, then move to your top two projects.",
  "That's doable. I can put together a step-by-step plan for that this week.",
  "Here's what stands out to me: your fundamentals are solid, the gap is mostly in interview practice.",
];

export default function ChatCard() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);

    const reply = canned[Math.floor(Math.random() * canned.length)];
    window.setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "twin", text: reply }]);
    }, 1100);
  }

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
      <div
        ref={scrollRef}
        className="mt-6 max-h-[420px] space-y-4 overflow-y-auto rounded-2xl border border-neutral-200 bg-neutral-50 p-4 sm:p-5"
      >
        <AnimatePresence initial={false}>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed transition-shadow sm:max-w-[70%] ${
                  message.from === "user"
                    ? "bg-black text-white"
                    : "border border-neutral-200 bg-white text-neutral-800 hover:shadow-sm"
                }`}
              >
                {message.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {typing && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex justify-start"
          >
            <div className="flex items-center gap-1.5 rounded-2xl border border-neutral-200 bg-white px-4 py-3">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400" />
            </div>
          </motion.div>
        )}
      </div>

      {/* Input */}
      <div className="mt-5 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-2 pl-4 transition-shadow focus-within:border-neutral-400 focus-within:shadow-sm">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send(input)}
          placeholder="Ask your Career Twin anything..."
          className="w-full min-w-0 bg-transparent text-sm outline-none"
        />

        <motion.button
          onClick={() => send(input)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          disabled={!input.trim() || typing}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-white transition hover:opacity-90 disabled:opacity-40"
          aria-label="Send message"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>

      {/* Suggested prompts */}
      <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
        {suggestedPrompts.map((prompt) => (
          <motion.button
            key={prompt}
            onClick={() => setInput(prompt)}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 shadow-sm transition-colors hover:border-black hover:text-black"
          >
            {prompt}
          </motion.button>
        ))}
      </div>
    </section>
  );
}
