"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Eraser, RotateCcw, UserX, FileDown } from "lucide-react";

const actions = [
  { icon: Eraser, label: "Clear Cache", desc: "Free up local storage used by the app.", danger: false },
  { icon: RotateCcw, label: "Reset Preferences", desc: "Restore all settings to their defaults.", danger: false },
  { icon: FileDown, label: "Export Account Data", desc: "Download a full copy of your data.", danger: false },
  { icon: UserX, label: "Delete Account", desc: "Permanently remove your account and all data.", danger: true },
];

export default function DangerZone() {
  return (
    <section className="mt-8 rounded-[24px] border border-red-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
          <AlertTriangle size={18} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-red-600 sm:text-2xl">Danger Zone</h2>
          <p className="text-sm text-neutral-500">These actions are irreversible. Proceed with caution.</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
              className={`flex items-center justify-between gap-4 rounded-2xl border p-4 ${
                action.danger ? "border-red-200" : "border-neutral-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    action.danger ? "bg-red-50 text-red-600" : "bg-neutral-100"
                  }`}
                >
                  <Icon size={16} />
                </div>
                <div>
                  <p className="font-medium">{action.label}</p>
                  <p className="text-xs text-neutral-500">{action.desc}</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`shrink-0 rounded-xl px-4 py-2 text-sm font-medium ${
                  action.danger
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "border border-neutral-300 hover:border-black"
                }`}
              >
                {action.danger ? "Delete" : "Run"}
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
