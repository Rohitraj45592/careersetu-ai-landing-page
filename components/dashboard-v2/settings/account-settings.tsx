"use client";

import { motion } from "framer-motion";
import { Pencil } from "lucide-react";

const fields = [
  { label: "Full Name", value: "Rohit Raj" },
  { label: "Username", value: "@rohitraj" },
  { label: "Email", value: "rohit.raj@careersetu.ai" },
  { label: "Phone", value: "+91 98765 43210" },
  { label: "College", value: "IIT Patna" },
  { label: "Branch", value: "Computer Science & Engineering" },
  { label: "Graduation Year", value: "2026" },
];

export default function AccountSettings() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-black text-2xl font-semibold text-white">
            RR
          </div>
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">Account Settings</h2>
            <p className="mt-1 text-sm text-neutral-500">
              Manage your profile photo and personal details.
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="flex shrink-0 items-center gap-1.5 rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition-shadow hover:shadow-md"
        >
          <Pencil size={14} />
          Edit
        </motion.button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {fields.map((field, index) => (
          <motion.div
            key={field.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
            className="rounded-2xl border border-neutral-200 p-4"
          >
            <p className="text-xs text-neutral-500">{field.label}</p>
            <p className="mt-1 truncate font-medium">{field.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
