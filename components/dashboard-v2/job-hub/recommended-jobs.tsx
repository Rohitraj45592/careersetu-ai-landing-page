"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, Sparkles } from "lucide-react";

const jobs = [
  {
    company: "Google",
    role: "AI Engineer Intern",
    salary: "₹80k/mo",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "0-1 yrs",
    skills: ["Python", "TensorFlow", "LLMs"],
    match: 94,
    posted: "2h ago",
  },
  {
    company: "Microsoft",
    role: "Backend Engineer",
    salary: "₹18 LPA",
    location: "Hyderabad",
    mode: "Remote",
    experience: "1-3 yrs",
    skills: ["Node.js", "SQL", "Docker"],
    match: 91,
    posted: "5h ago",
  },
  {
    company: "Amazon",
    role: "SDE-1",
    salary: "₹22 LPA",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "0-2 yrs",
    skills: ["Java", "DSA", "AWS"],
    match: 88,
    posted: "1d ago",
  },
  {
    company: "Adobe",
    role: "GenAI Product Engineer",
    salary: "₹20 LPA",
    location: "Noida",
    mode: "Remote",
    experience: "1-2 yrs",
    skills: ["LangChain", "React", "Python"],
    match: 90,
    posted: "1d ago",
  },
  {
    company: "NVIDIA",
    role: "ML Engineer",
    salary: "₹28 LPA",
    location: "Pune",
    mode: "Hybrid",
    experience: "2-4 yrs",
    skills: ["PyTorch", "CUDA", "Python"],
    match: 86,
    posted: "2d ago",
  },
  {
    company: "Atlassian",
    role: "Frontend Engineer",
    salary: "₹19 LPA",
    location: "Remote",
    mode: "Remote",
    experience: "0-2 yrs",
    skills: ["React", "TypeScript"],
    match: 83,
    posted: "3d ago",
  },
];

export default function RecommendedJobs() {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold sm:text-2xl">AI Recommended Jobs</h2>
        <button className="text-sm font-medium text-neutral-500 transition-colors hover:text-black">
          View All →
        </button>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, index) => (
          <motion.div
            key={job.role + job.company}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="flex items-center gap-1.5 self-start rounded-full bg-black px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
              <Sparkles size={10} />
              AI Recommended
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-sm font-bold">
                {job.company.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="truncate font-semibold">{job.role}</p>
                <p className="truncate text-sm text-neutral-500">{job.company}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-neutral-500">
              <span className="flex items-center gap-1"><MapPin size={12} />{job.location}</span>
              <span className="flex items-center gap-1"><Briefcase size={12} />{job.mode}</span>
              <span className="flex items-center gap-1"><Clock size={12} />{job.posted}</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {job.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-neutral-200 px-2.5 py-1 text-[11px] text-neutral-600">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold">{job.salary}</span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-semibold">
                {job.match}% Match
              </span>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 rounded-xl border border-neutral-300 py-2.5 text-sm font-medium transition hover:border-black">
                View Details
              </button>
              <button className="flex-1 rounded-xl bg-black py-2.5 text-sm font-medium text-white transition hover:opacity-90">
                Apply Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
