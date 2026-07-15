"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCurrentUser } from "@/lib/auth/use-current-user";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Circular "telemetry" profile widget: rotating dashed rings around the
 * signed-in user's own photo, a floating About card, and a status pill.
 * Ported from the portfolio site's hero avatar animation and made dynamic
 * so every user sees their own picture and name instead of a fixed one.
 */
export default function ProfileOrbitAvatar() {
  const { user } = useCurrentUser();
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spx = useSpring(px, { stiffness: 80, damping: 20 });
  const spy = useSpring(py, { stiffness: 80, damping: 20 });
  const tx1 = useTransform(spx, (v) => v * 18);
  const ty1 = useTransform(spy, (v) => v * 18);
  const tx2 = useTransform(spx, (v) => v * -28);
  const ty2 = useTransform(spy, (v) => v * -28);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = ref.current;
    if (!r) return;
    const rect = r.getBoundingClientRect();
    px.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    py.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  }

  function handleMouseLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-[280px] w-[280px] items-center justify-center md:h-[310px] md:w-[310px]"
    >
      {/* Outer rotating dashed ring */}
      <motion.div
        style={{ x: tx1, y: ty1 }}
        className="animate-rotate-cw absolute inset-0 rounded-full border border-dashed border-accent/40"
      />

      {/* Middle rotating tech ring */}
      <motion.div
        style={{ x: tx2, y: ty2 }}
        className="animate-rotate-ccw absolute inset-3 rounded-full border border-foreground/10"
      >
        <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-emerald-500" />
        <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-emerald-500" />
      </motion.div>

      {/* Static alignment guides */}
      <div className="absolute inset-6 rounded-full border border-foreground/5">
        <div className="absolute -left-1 top-1/2 h-px w-2 -translate-y-1/2 bg-foreground/20" />
        <div className="absolute -right-1 top-1/2 h-px w-2 -translate-y-1/2 bg-foreground/20" />
        <div className="absolute -top-1 left-1/2 h-2 w-px -translate-x-1/2 bg-foreground/20" />
        <div className="absolute -bottom-1 left-1/2 h-2 w-px -translate-x-1/2 bg-foreground/20" />
      </div>

      {/* Inner frame wrapper */}
      <div className="absolute inset-9 rounded-full border border-accent/20 bg-background/30 shadow-[0_0_24px_rgba(123,97,255,0.08)] backdrop-blur-[2px]" />

      {/* Profile photo */}
      <div className="relative h-[165px] w-[165px] overflow-hidden rounded-full border-4 border-white ring-4 ring-accent shadow-lift md:h-[185px] md:w-[185px] group">
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={user.fullName}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-accent-soft font-display text-5xl font-semibold text-accent-strong">
            {user.initial}
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Floating "About" card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 4 }}
        transition={{ delay: 0.4, duration: 0.6, ease: EASE }}
        className="absolute bottom-4 left-0 max-w-[150px] rounded-md border border-border bg-white/95 p-2.5 font-mono text-[9px] leading-snug text-foreground shadow-lift backdrop-blur-sm"
        style={{ transform: "rotate(4deg)" }}
      >
        <p className="font-bold uppercase tracking-wider text-muted-foreground">About</p>
        <p className="mt-0.5">{user.fullName}</p>
        <p>Career Twin · Active</p>
      </motion.div>

      {/* Status pill */}
      <div className="pointer-events-none absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-white/95 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-foreground shadow-lift backdrop-blur-sm">
        Open to work
      </div>
    </div>
  );
}
