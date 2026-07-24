"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, Maximize2, Download, FileDown, Pencil, X } from "lucide-react";

function ResumePage() {
  return (
    <div className="aspect-[8.5/11] w-full max-w-sm rounded-lg border border-neutral-200 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
      <div className="h-3 w-2/3 rounded-full bg-neutral-900" />
      <div className="mt-2 h-2 w-1/3 rounded-full bg-neutral-300" />

      <div className="mt-6 h-2 w-1/4 rounded-full bg-neutral-800" />
      <div className="mt-2 space-y-1.5">
        <div className="h-1.5 w-full rounded-full bg-neutral-200" />
        <div className="h-1.5 w-full rounded-full bg-neutral-200" />
        <div className="h-1.5 w-3/4 rounded-full bg-neutral-200" />
      </div>

      <div className="mt-5 h-2 w-1/4 rounded-full bg-neutral-800" />
      <div className="mt-2 space-y-1.5">
        <div className="h-1.5 w-full rounded-full bg-neutral-200" />
        <div className="h-1.5 w-5/6 rounded-full bg-neutral-200" />
        <div className="h-1.5 w-full rounded-full bg-neutral-200" />
        <div className="h-1.5 w-2/3 rounded-full bg-neutral-200" />
      </div>

      <div className="mt-5 h-2 w-1/4 rounded-full bg-neutral-800" />
      <div className="mt-2 flex flex-wrap gap-1.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-4 w-10 rounded-full bg-neutral-100" />
        ))}
      </div>
    </div>
  );
}

export default function ResumePreview() {
  const [zoomed, setZoomed] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-bold sm:text-2xl">Resume Preview</h2>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setZoomed((z) => !z)}
            className="flex items-center gap-1.5 rounded-full border border-neutral-300 px-3.5 py-2 text-sm transition hover:border-black"
          >
            <ZoomIn size={14} />
            Zoom
          </button>
          <button
            onClick={() => setFullscreen(true)}
            className="flex items-center gap-1.5 rounded-full border border-neutral-300 px-3.5 py-2 text-sm transition hover:border-black"
          >
            <Maximize2 size={14} />
            Fullscreen
          </button>
          <button className="flex items-center gap-1.5 rounded-full border border-neutral-300 px-3.5 py-2 text-sm transition hover:border-black">
            <Download size={14} />
            PDF
          </button>
          <button className="flex items-center gap-1.5 rounded-full border border-neutral-300 px-3.5 py-2 text-sm transition hover:border-black">
            <FileDown size={14} />
            DOCX
          </button>
          <button className="flex items-center gap-1.5 rounded-full bg-black px-3.5 py-2 text-sm text-white transition hover:opacity-90">
            <Pencil size={14} />
            Edit Resume
          </button>
        </div>
      </div>

      <div className="mt-6 flex justify-center overflow-hidden rounded-2xl bg-neutral-50 p-8">
        <motion.div animate={{ scale: zoomed ? 1.15 : 1 }} transition={{ type: "spring", stiffness: 200, damping: 22 }}>
          <ResumePage />
        </motion.div>
      </div>

      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-8"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              <button
                onClick={() => setFullscreen(false)}
                aria-label="Close"
                className="absolute -top-4 -right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-lg"
              >
                <X size={16} />
              </button>
              <div className="scale-125">
                <ResumePage />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
