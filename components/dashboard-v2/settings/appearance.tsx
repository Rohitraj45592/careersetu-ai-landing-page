"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, MonitorCog, Check } from "lucide-react";

const modes = [
  { id: "light", icon: Sun, label: "Light Mode" },
  { id: "dark", icon: Moon, label: "Dark Mode" },
  { id: "system", icon: MonitorCog, label: "System Default" },
];

const fontSizes = ["Small", "Medium", "Large"];
const densities = ["Comfortable", "Compact"];

export default function Appearance() {
  const [mode, setMode] = useState("light");
  const [fontSize, setFontSize] = useState("Medium");
  const [density, setDensity] = useState("Comfortable");

  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Appearance</h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {modes.map((item, index) => {
          const Icon = item.icon;
          const active = mode === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => setMode(item.id)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
              whileHover={{ y: -3 }}
              className={`relative flex flex-col items-center gap-3 rounded-2xl border p-6 transition-colors ${
                active ? "border-black" : "border-neutral-200 hover:border-neutral-300"
              }`}
            >
              {active && (
                <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
                  <Check size={12} />
                </span>
              )}
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${active ? "bg-black text-white" : "bg-neutral-100"}`}>
                <Icon size={20} />
              </div>
              <span className="font-medium">{item.label}</span>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 p-4">
          <p className="text-sm font-medium">Font Size</p>
          <div className="mt-3 flex gap-2">
            {fontSizes.map((size) => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  fontSize === size ? "bg-black text-white" : "border border-neutral-300 hover:border-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-4">
          <p className="text-sm font-medium">Display Density</p>
          <div className="mt-3 flex gap-2">
            {densities.map((d) => (
              <button
                key={d}
                onClick={() => setDensity(d)}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  density === d ? "bg-black text-white" : "border border-neutral-300 hover:border-black"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
