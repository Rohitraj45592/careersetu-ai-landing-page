"use client";

import { motion } from "framer-motion";
import { Pencil } from "lucide-react";

export default function AboutMe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold sm:text-2xl">About Me</h2>

        <button className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-black">
          <Pencil size={14} />
          Edit
        </button>
      </div>

      <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-neutral-600">
        I&apos;m a final-year Computer Science student passionate about building
        AI-powered products end-to-end — from model integration to polished
        frontend experiences. Over the last two years I&apos;ve worked on six
        production-grade projects, interned as a backend developer, and led a
        team of four in a national-level hackathon. I&apos;m currently sharpening
        my system design fundamentals while preparing for SDE and AI Engineer
        placements at top product companies.
      </p>
    </motion.section>
  );
}
