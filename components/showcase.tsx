'use client'

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion'
import {
  Home,
  FileText,
  Shuffle,
  MessagesSquare,
  Route,
  FolderKanban,
  User,
  Settings,
  Wifi,
  Search,
} from 'lucide-react'
import { FlyingBird } from '@/components/flying-bird'

const ease = [0.22, 1, 0.36, 1] as const

const modules = [
  { label: 'Dashboard', icon: Home, active: true },
  { label: 'Resume Analyzer', icon: FileText },
  { label: 'Skill Gap Analyzer', icon: Shuffle },
  { label: 'AI Mock Interview', icon: MessagesSquare },
  { label: 'Career Roadmap', icon: Route },
  { label: 'Projects', icon: FolderKanban },
  { label: 'Profile', icon: User },
  { label: 'Settings', icon: Settings },
]

const gridParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
}

const gridChild: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease },
  },
}

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Subtle parallax — background slower, foreground panel slightly faster.
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '10%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1])
  const wordY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%'])
  const panelY = useTransform(scrollYProgress, [0, 1], ['8%', '-6%'])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-24 sm:pt-28"
      aria-label="The CareerSetu AI workspace"
    >
      {/* Extended cinematic landscape */}
      <motion.img
        src="/images/footer-landscape.png"
        alt=""
        aria-hidden="true"
        style={{ y: bgY, scale: bgScale }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[120%] w-full object-cover object-top"
      />
      {/* Morning fog + top/bottom fades */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-background via-background/30 to-background/70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent"
      />

      {/* Bird gliding slowly across the landscape */}
      <FlyingBird
        className="left-0 top-28 sm:top-32"
        duration={34}
        delay={1}
        drift={48}
        size="w-16"
      />

      {/* Huge brand typography */}
      <motion.span
        style={{ y: wordY }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 select-none text-center font-display text-[18vw] font-semibold leading-none tracking-tight text-foreground/[0.05]"
      >
        CareerSetu
      </motion.span>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3.5 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm">
            <span className="flex size-1.5 rounded-full bg-accent" />
            One workspace, every tool
          </span>
          <h2 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Your entire placement journey, in one place.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            A calm, focused operating system for your career — every module a
            tap away.
          </p>
        </motion.div>

        {/* Glass OS panel */}
        <motion.div
          style={{ y: panelY }}
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease }}
          className="relative mx-auto mt-12 max-w-4xl rounded-[2rem] border border-white/50 bg-white/55 p-5 shadow-lift backdrop-blur-xl sm:p-7"
        >
          {/* Window chrome */}
          <div className="flex items-center justify-between border-b border-border/70 pb-4">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-destructive/60" />
              <span className="size-2.5 rounded-full bg-chart-3/70" />
              <span className="size-2.5 rounded-full bg-chart-2/70" />
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs text-muted-foreground">
              <Search className="size-3" />
              careersetu.ai/workspace
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Wifi className="size-4" />
              <span className="text-xs font-medium tabular-nums">09:41</span>
            </div>
          </div>

          {/* Module grid */}
          <motion.div
            variants={gridParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {modules.map((mod) => (
              <motion.button
                key={mod.label}
                variants={gridChild}
                whileHover={{ y: -6, rotate: -0.6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`group flex flex-col items-center gap-3 rounded-2xl border p-5 text-center transition-colors ${
                  mod.active
                    ? 'border-accent/30 bg-accent-soft'
                    : 'border-border bg-white/70 hover:border-accent/30'
                }`}
              >
                <span
                  className={`flex size-11 items-center justify-center rounded-xl transition-colors ${
                    mod.active
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-foreground group-hover:bg-accent group-hover:text-accent-foreground'
                  }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.12 }}
                    className="flex"
                  >
                    <mod.icon className="size-5" />
                  </motion.span>
                </span>
                <span className="text-xs font-medium leading-tight text-foreground">
                  {mod.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
