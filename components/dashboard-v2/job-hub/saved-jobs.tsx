"use client";

import { motion } from "framer-motion";
import { Bookmark, Zap, Calendar } from "lucide-react";

const saved = [
  { company: "Stripe", role: "Backend Engineer", deadline: "3 days left" },
  { company: "Notion", role: "Product Engineer", deadline: "5 days left" },
  { company: "Figma", role: "Frontend Engineer", deadline: "1 week left" },
];

export default function SavedJobs() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold sm:text-2xl">Saved Jobs</h2>
        <button className="text-sm font-medium text-neutral-500 transition-colors hover:text-black">
          View All →
        </button>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {saved.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-neutral-200 p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-sm font-bold">
                {job.company.charAt(0)}
              </div>
              <Bookmark size={18} className="fill-black text-black" />
            </div>

            <p className="mt-3 font-semibold">{job.role}</p>
            <p className="text-sm text-neutral-500">{job.company}</p>

            <span className="mt-3 flex w-fit items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600">
              <Calendar size={11} />
              {job.deadline}
            </span>

            <button className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl bg-black py-2.5 text-sm font-medium text-white transition hover:opacity-90">
              <Zap size={14} />
              Quick Apply
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
