"use client";

import AnimatedNumber from "../shared/animated-number";
import { Sparkles } from "lucide-react";

const metrics = [
  { label: "Current Readiness", value: 82, suffix: "%" },
  { label: "Dream Company Readiness", value: 64, suffix: "%" },
  { label: "Expected Interview Chance", value: 76, suffix: "%" },
  { label: "Expected Placement Chance", value: 68, suffix: "%" },
  { label: "AI Confidence Score", value: 88, suffix: "%" },
];

export default function PlacementPrediction() {
  return (
    <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[32px] lg:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
          <Sparkles size={18} />
        </div>
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">Placement Prediction</h2>
          <p className="text-sm text-neutral-500">AI-estimated based on your current trajectory</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {metrics.map((item) => (
          <div key={item.label} className="rounded-2xl border border-neutral-200 p-5 text-center">
            <AnimatedNumber value={item.value} suffix={item.suffix} className="text-3xl font-bold tabular-nums" />
            <p className="mt-2 text-sm text-neutral-500">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
