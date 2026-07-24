"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";

const certifications = [
  { name: "AWS Certified Cloud Practitioner", platform: "Amazon Web Services", issued: "Mar 2026", credentialId: "AWS-CCP-99213" },
  { name: "Deep Learning Specialization", platform: "Coursera (deeplearning.ai)", issued: "Nov 2025", credentialId: "DL-SPEC-44210" },
  { name: "Meta Front-End Developer", platform: "Meta / Coursera", issued: "Jul 2025", credentialId: "META-FE-11837" },
];

export default function Certifications() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Certifications</h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
              <BadgeCheck size={18} />
            </div>

            <h3 className="mt-4 font-semibold leading-snug">{cert.name}</h3>
            <p className="mt-1 text-sm text-neutral-500">{cert.platform}</p>

            <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
              <span>Issued {cert.issued}</span>
              <span className="truncate">{cert.credentialId}</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-neutral-300 py-2 text-sm font-medium transition-colors hover:border-black"
            >
              <ExternalLink size={14} />
              View Certificate
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
