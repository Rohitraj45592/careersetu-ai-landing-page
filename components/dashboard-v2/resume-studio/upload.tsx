"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, FileText, RefreshCw, Trash2 } from "lucide-react";

type UploadedFile = {
  id: string;
  name: string;
  size: string;
  time: string;
};

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function Upload() {
  const [dragging, setDragging] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);
  const [uploads, setUploads] = useState<UploadedFile[]>([
    { id: "seed-1", name: "Rohit_Raj_Resume_v2.pdf", size: "412 KB", time: "2 hours ago" },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const replaceId = useRef<string | null>(null);

  function startUpload(file: File, replacing?: string) {
    replaceId.current = replacing ?? null;
    setProgress(0);

    const start = performance.now();
    const duration = 1100;

    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      setProgress(Math.round(t * 100));
      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => {
          setProgress(null);
          const entry: UploadedFile = {
            id: crypto.randomUUID(),
            name: file.name,
            size: formatSize(file.size),
            time: "just now",
          };
          setUploads((prev) => {
            if (replaceId.current) {
              return prev.map((u) => (u.id === replaceId.current ? entry : u));
            }
            return [entry, ...prev];
          });
        }, 250);
      }
    }
    requestAnimationFrame(tick);
  }

  function handleFiles(files: FileList | null, replacing?: string) {
    if (!files || files.length === 0) return;
    startUpload(files[0], replacing);
  }

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Upload Resume</h2>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        className={`mt-5 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center transition-colors sm:p-12 ${
          dragging ? "border-black bg-neutral-50" : "border-neutral-300 hover:border-neutral-400"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.docx"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100">
          <UploadCloud size={22} />
        </div>

        <p className="mt-4 font-medium">Drag & drop your resume here</p>
        <p className="mt-1 text-sm text-neutral-500">or click to browse from your device</p>

        <div className="mt-4 flex gap-2">
          <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-500">
            PDF Support
          </span>
          <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-500">
            DOCX Support
          </span>
        </div>

        <AnimatePresence>
          {progress !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-5 w-full max-w-sm"
            >
              <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
                <motion.div
                  className="h-full rounded-full bg-black"
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
              <p className="mt-1.5 text-xs tabular-nums text-neutral-500">Uploading… {progress}%</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {uploads.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-neutral-500">Recent Uploads</h3>

          <div className="mt-3 space-y-3">
            <AnimatePresence initial={false}>
              {uploads.map((file) => (
                <motion.div
                  key={file.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100">
                    <FileText size={18} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{file.name}</p>
                    <p className="text-xs text-neutral-500">
                      {file.time} · {file.size}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      onClick={() => {
                        replaceId.current = file.id;
                        inputRef.current?.click();
                      }}
                      aria-label="Replace resume"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 transition hover:bg-neutral-50"
                    >
                      <RefreshCw size={15} />
                    </button>
                    <button
                      onClick={() => setUploads((prev) => prev.filter((u) => u.id !== file.id))}
                      aria-label="Delete resume"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 text-neutral-500 transition hover:border-black hover:text-black"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </section>
  );
}
