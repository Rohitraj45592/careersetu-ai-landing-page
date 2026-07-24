"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Users, Heart } from "lucide-react";

const experience = [
  {
    role: "Backend Developer Intern",
    org: "Zynthex Labs",
    duration: "May 2025 — Jul 2025",
    description: "Built REST APIs serving 50k+ daily requests; cut average response time by 30% through query optimization.",
    icon: Briefcase,
    type: "Internship",
  },
  {
    role: "Freelance Full-Stack Developer",
    org: "Self-employed",
    duration: "Jan 2025 — Present",
    description: "Delivered 5 client projects — landing pages, dashboards and booking systems — using Next.js and Supabase.",
    icon: Code2,
    type: "Freelance",
  },
  {
    role: "Team Lead — Smart India Hackathon",
    org: "National Level",
    duration: "Sep 2024",
    description: "Led a team of 4 to build a finalist solution for rural healthcare access, presented to a jury of 12 industry experts.",
    icon: Users,
    type: "Leadership",
  },
  {
    role: "Volunteer Mentor",
    org: "Code for Change",
    duration: "Jun 2024 — Present",
    description: "Mentor first-year students in DSA fundamentals through weekly peer-learning sessions.",
    icon: Heart,
    type: "Volunteer",
  },
];

export default function Experience() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Experience</h2>

      <div className="relative mt-6">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-5 top-1 bottom-1 w-px bg-neutral-200"
        />

        <div className="space-y-2">
          {experience.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
                className="group relative flex gap-4 rounded-xl px-2 py-3 transition-colors hover:bg-neutral-50"
              >
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white text-black">
                  <Icon size={16} />
                </div>

                <div className="min-w-0 flex-1 pt-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-semibold">{item.role}</span>
                    <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-500">
                      {item.type}
                    </span>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-neutral-500">
                    <span>{item.org}</span>
                    <span className="text-neutral-300">·</span>
                    <span className="tabular-nums">{item.duration}</span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
