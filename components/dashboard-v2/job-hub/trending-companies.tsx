"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "Google", openings: 42, package: "₹32 LPA" },
  { name: "Microsoft", openings: 35, package: "₹28 LPA" },
  { name: "Amazon", openings: 58, package: "₹24 LPA" },
  { name: "Adobe", openings: 21, package: "₹22 LPA" },
  { name: "NVIDIA", openings: 14, package: "₹30 LPA" },
  { name: "Atlassian", openings: 12, package: "₹26 LPA" },
  { name: "Flipkart", openings: 27, package: "₹18 LPA" },
  { name: "Uber", openings: 9, package: "₹25 LPA" },
  { name: "TCS", openings: 210, package: "₹7 LPA" },
  { name: "Infosys", openings: 180, package: "₹6.5 LPA" },
];

export default function TrendingCompanies() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Trending Companies</h2>

      <div className="mt-5 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:thin]">
        {companies.map((company, index) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3 }}
            className="w-[180px] shrink-0 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 text-sm font-bold">
              {company.name.charAt(0)}
            </div>

            <p className="mt-3 font-semibold">{company.name}</p>
            <span className="mt-1 inline-block rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600">
              Hiring
            </span>

            <p className="mt-3 text-xs text-neutral-500">{company.openings} open positions</p>
            <p className="text-xs text-neutral-500">Avg. {company.package}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
