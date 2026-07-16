"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

/** Counts up from 0 to `value` once it scrolls into view. */
export default function AnimatedNumber({
  value,
  suffix = "",
  className = "text-2xl font-bold tabular-nums",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
