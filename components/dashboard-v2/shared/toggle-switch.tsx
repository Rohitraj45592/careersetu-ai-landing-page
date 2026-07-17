"use client";

import { motion } from "framer-motion";

export default function ToggleSwitch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      aria-pressed={checked}
      className={`relative h-7 w-12 shrink-0 rounded-full border transition-colors duration-200 ${
        checked ? "border-black bg-black" : "border-neutral-300 bg-neutral-100"
      }`}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-[3px] h-[22px] w-[22px] rounded-full bg-white shadow-sm"
        style={{ left: checked ? "calc(100% - 25px)" : "3px" }}
      />
    </button>
  );
}
