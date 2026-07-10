'use client'

import { motion } from 'framer-motion'
import {
  FileText,
  Target,
  Video,
  Waypoints,
  Briefcase,
  Gauge,
  ArrowRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

type Feature = {
  icon: typeof FileText
  title: string
  description: string
  className: string
  cta: string
}

const features: Feature[] = [
  {
    icon: FileText,
    title: 'Resume Analyzer',
    description:
      'Get an instant ATS score with line-by-line feedback on wording, structure and keyword coverage tailored to your target roles.',
    className: 'lg:col-span-4',
    cta: 'Analyze resume',
  },
  {
    icon: Target,
    title: 'Skill Gap Analyzer',
    description:
      'See exactly which skills you are missing for a role and how you compare against successful candidates.',
    className: 'lg:col-span-2',
    cta: 'Find my gaps',
  },
  {
    icon: Video,
    title: 'AI Mock Interview',
    description:
      'Practice real questions with an AI that scores your answers and coaches you in real time.',
    className: 'lg:col-span-2',
    cta: 'Start practicing',
  },
  {
    icon: Waypoints,
    title: 'Career Roadmap',
    description:
      'A personalized, week-by-week plan that turns your goals into achievable milestones.',
    className: 'lg:col-span-2',
    cta: 'Build roadmap',
  },
  {
    icon: Briefcase,
    title: 'Project Suggestions',
    description:
      'Portfolio project ideas matched to your target companies so your resume stands out.',
    className: 'lg:col-span-2',
    cta: 'Get ideas',
  },
  {
    icon: Gauge,
    title: 'Progress Tracking',
    description:
      'Watch your career score climb as you improve, with clear metrics that show what to focus on next.',
    className: 'lg:col-span-6',
    cta: 'View dashboard',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

function AtsRing() {
  return (
    <div className="relative flex size-28 shrink-0 items-center justify-center">
      <svg viewBox="0 0 120 120" className="size-full -rotate-90">
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke="var(--border)"
          strokeWidth="12"
        />
        <motion.circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * 52}
          initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
          whileInView={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - 0.86) }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-display text-2xl font-semibold text-foreground">86</span>
        <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
          ATS score
        </span>
      </div>
    </div>
  )
}

function ProgressBars() {
  const bars = [
    { label: 'Resume', value: 92 },
    { label: 'Skills', value: 74 },
    { label: 'Interview', value: 68 },
  ]
  return (
    <div className="grid w-full max-w-md gap-3">
      {bars.map((b, i) => (
        <div key={b.label} className="flex items-center gap-3">
          <span className="w-20 shrink-0 text-xs font-medium text-muted-foreground">
            {b.label}
          </span>
          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full rounded-full bg-accent"
              initial={{ width: 0 }}
              whileInView={{ width: `${b.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 * i, ease }}
            />
          </div>
          <span className="w-9 shrink-0 text-right text-xs font-semibold text-foreground">
            {b.value}
          </span>
        </div>
      ))}
    </div>
  )
}

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Features"
        title="Everything you need to get hired"
        description="One intelligent workspace that guides you from an unpolished resume to a signed offer letter."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {features.map((feature, i) => {
          const isFeatured = feature.className.includes('col-span-4')
          const isWide = feature.className.includes('col-span-6')
          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease }}
              whileHover={{ y: -6 }}
              className={cn(
                'group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift sm:p-7',
                feature.className,
              )}
            >
              {/* soft gradient glow on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div
                className={cn(
                  'relative flex flex-1 gap-6',
                  isFeatured ? 'flex-col sm:flex-row sm:items-center' : 'flex-col',
                  isWide && 'flex-col sm:flex-row sm:items-center sm:justify-between',
                )}
              >
                <div className="flex-1">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-accent-soft text-accent-strong transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <feature.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-md text-pretty leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong transition-colors hover:text-accent"
                  >
                    {feature.cta}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>

                {isFeatured && (
                  <div className="flex shrink-0 items-center justify-center rounded-2xl bg-accent-soft/50 p-6">
                    <AtsRing />
                  </div>
                )}
                {isWide && (
                  <div className="flex shrink-0 items-center sm:pl-8">
                    <ProgressBars />
                  </div>
                )}
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
