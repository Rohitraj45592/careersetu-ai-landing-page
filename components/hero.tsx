'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Play,
  ShieldCheck,
  BadgeCheck,
  Zap,
  Lock,
  Star,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DashboardPreview } from '@/components/dashboard-preview'

const trustBadges = [
  { label: '100% Free', icon: BadgeCheck },
  { label: 'No Credit Card', icon: ShieldCheck },
  { label: 'Instant Results', icon: Zap },
  { label: 'Privacy Focused', icon: Lock },
]

const avatars = [
  '/images/avatar-1.png',
  '/images/avatar-2.png',
  '/images/avatar-3.png',
  '/images/avatar-4.png',
]

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ed] pt-32 sm:pt-36">
      {/* Background Glow */}
<div className="absolute inset-0 -z-10 overflow-hidden">
  <div className="absolute left-1/2 top-20 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-100 via-orange-100 to-transparent blur-3xl opacity-70" />

  <div className="absolute -left-32 top-48 h-96 w-96 rounded-full bg-yellow-100 blur-[140px] opacity-40" />

  <div className="absolute right-0 top-10 h-[420px] w-[420px] rounded-full bg-orange-100 blur-[160px] opacity-40" />
</div>
      {/* Premium Atmosphere */}
<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
  {/* Top sunlight */}
  <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-100/70 via-orange-100/30 to-transparent blur-3xl" />

  {/* Left glow */}
  <div className="absolute -left-32 top-40 h-[420px] w-[420px] rounded-full bg-yellow-100/50 blur-[140px]" />

  {/* Right glow */}
  <div className="absolute right-0 top-20 h-[360px] w-[360px] rounded-full bg-orange-100/40 blur-[120px]" />

  {/* Soft vignette */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_0%,rgba(247,243,237,0.08)_70%,rgba(247,243,237,0.28)_100%)]" />
</div>
      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-8">
        {/* Left */}
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
           <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-xs font-medium text-slate-700 shadow-lg backdrop-blur-xl">
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
  </span>

  AI Career Copilot • Resume • Interview • Roadmap
</span>
          </motion.div>

          <motion.h1
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.08, ease }}
  className="mt-5 text-balance font-display text-5xl font-semibold leading-[0.98] tracking-tight text-foreground sm:text-6xl xl:text-7xl"
>
  Unlock Your Dream Career with{" "}
  <span className="bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
    AI
  </span>
</motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            AI-powered resume analysis, skill gap detection, mock interviews and
            personalized learning roadmaps to help students get hired faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              className="group h-12 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Analyze My Resume
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-border bg-white/70 px-6 text-sm font-medium text-foreground backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:bg-white"
              nativeButton={false}
              render={<a href="#" />}
            >
              <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Play className="size-2.5 fill-current" />
              </span>
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <img
                  key={src}
                  src={src || '/placeholder.svg'}
                  alt={`Student ${i + 1}`}
                  className="size-10 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Trusted by 10,000+ students
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {trustBadges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/60 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm"
              >
                <badge.icon className="size-3.5 text-accent" />
                {badge.label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — floating dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative"
        >
          <motion.div
  animate={{
    y: [0, -12, 0],
    rotate: [0, 0.6, 0, -0.6, 0],
    scale: [1, 1.01, 1],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  style={{ transformOrigin: 'center center' }}
  className="drop-shadow-[0_35px_60px_rgba(0,0,0,0.18)]"
>
  <DashboardPreview />
</motion.div>
        </motion.div>
      </div>

      {/* Cinematic landscape band */}
      <div className="relative mt-16 sm:mt-20">
        <div className="relative h-[360px] w-full sm:h-[440px]">
          <img
            src="/images/hero-landscape.png"
            alt="Misty rolling hills at sunrise"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/40" />
          {/* Giant wordmark */}
          <div className="absolute inset-x-0 bottom-16 flex justify-center px-4">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="select-none text-center font-display text-[15vw] font-semibold leading-none tracking-tight text-white/80 mix-blend-overlay"
            >
              CareerSetu AI
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  )
}
