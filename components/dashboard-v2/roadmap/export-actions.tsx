"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download, Share2, Check, FileText, Briefcase, Mic } from "lucide-react";

export default function ExportActions() {
  const [copied, setCopied] = useState(false);

  async function share() {
    try {
      await navigator.clipboard.writeText("https://careersetu.ai/roadmap/rohit-raj");
    } catch {
      // clipboard permissions unavailable — still show feedback for the demo
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Export</h2>

      <div className="mt-5 flex flex-wrap gap-3">
        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition-shadow hover:shadow-md"
        >
          <Download size={16} />
          Download Roadmap PDF
        </motion.button>

        <motion.button
          onClick={share}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium transition-colors hover:border-black"
        >
          {copied ? <Check size={16} /> : <Share2 size={16} />}
          {copied ? "Link Copied" : "Share Roadmap"}
        </motion.button>
      </div>

      <div className="mt-6 border-t border-neutral-100 pt-5">
        <p className="text-sm font-medium text-neutral-500">Continue your journey</p>

        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/dashboard-v2/resume-studio"
            className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white"
          >
            <FileText size={15} />
            Resume Studio
          </Link>

          <Link
            href="/dashboard-v2/job-hub"
            className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white"
          >
            <Briefcase size={15} />
            Job Hub
          </Link>

          <Link
            href="/dashboard-v2/mock-interview"
            className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white"
          >
            <Mic size={15} />
            Mock Interview
          </Link>
        </div>
      </div>
    </section>
  );
}
