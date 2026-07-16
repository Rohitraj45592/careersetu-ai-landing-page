"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileDown, Link2, Share2, Check } from "lucide-react";

export default function ExportActions() {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText("https://careersetu.ai/r/rohit-raj-resume");
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
          Download PDF
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium transition-colors hover:border-black"
        >
          <FileDown size={16} />
          Download DOCX
        </motion.button>

        <motion.button
          onClick={copyLink}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium transition-colors hover:border-black"
        >
          {copied ? <Check size={16} /> : <Link2 size={16} />}
          {copied ? "Link Copied" : "Copy Share Link"}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium transition-colors hover:border-black"
        >
          <Share2 size={16} />
          Share Resume
        </motion.button>
      </div>
    </section>
  );
}
