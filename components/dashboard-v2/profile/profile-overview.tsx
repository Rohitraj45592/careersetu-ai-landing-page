"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Link2,
  GitFork,
  Globe,
  GraduationCap,
  Calendar,
} from "lucide-react";

const details = [
  { icon: GraduationCap, label: "College", value: "IIT Patna" },
  { icon: GraduationCap, label: "Degree", value: "B.Tech, Computer Science" },
  { icon: Calendar, label: "Graduation Year", value: "2026" },
  { icon: MapPin, label: "Location", value: "Patna, Bihar, IN" },
  { icon: Mail, label: "Email", value: "rohit.raj@careersetu.ai" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Link2, label: "LinkedIn", value: "linkedin.com/in/rohitraj" },
  { icon: GitFork, label: "GitHub", value: "github.com/Rohitraj45592" },
  { icon: Globe, label: "Portfolio", value: "rohitraj.dev" },
];

export default function ProfileOverview() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-black text-2xl font-semibold text-white">
            RR
          </div>

          <div>
            <h2 className="text-2xl font-bold">Rohit Raj</h2>
            <p className="mt-1 text-neutral-500">AI Engineer · Aspiring SDE</p>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-neutral-600">
              Final-year CS student building AI-powered products. Focused on
              full-stack development and applied ML, with a track record of
              shipping production-ready projects.
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="shrink-0 rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition-shadow hover:shadow-md"
        >
          Edit Profile
        </motion.button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {details.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
              className="flex items-center gap-3 rounded-2xl border border-neutral-200 p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100">
                <Icon size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-neutral-500">{detail.label}</p>
                <p className="truncate text-sm font-medium">{detail.value}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
