'use client'

import { motion } from 'framer-motion'
import { Check, Loader2, Circle } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const milestones = [
  {
    period: 'Q1',
    title: 'Smart Resume Analyzer',
    description: 'Real-time ATS scoring with recruiter-grade feedback and rewrite suggestions.',
    status: 'done',
  },
  {
    period: 'Q2',
    title: 'AI Mock Interviews',
    description: 'Voice-based interviews with instant scoring on clarity, structure and depth.',
    status: 'done',
  },
  {
    period: 'Q3',
    title: 'Personalized Roadmaps',
    description: 'Adaptive weekly plans that adjust as your skills and goals evolve.',
    status: 'progress',
  },
  {
    period: 'Q4',
    title: 'Placement Cell Suite',
    description: 'Analytics and cohort tools for colleges to track student readiness at scale.',
    status: 'pending',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

const statusMeta = {
  done: { icon: Check, label: 'Shipped', cls: 'bg-emerald-100 text-emerald-600' },
  progress: { icon: Loader2, label: 'In Progress', cls: 'bg-accent-soft text-accent-strong' },
  pending: { icon: Circle, label: 'Planned', cls: 'bg-secondary text-muted-foreground' },
} as const

export function Roadmap() {
  return (
    <section id="roadmap" className="relative bg-secondary/50 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Roadmap"
          title="Where we are headed"
          description="We ship fast and build in the open. Here is what is live and what is next."
        />

        <div className="relative mt-14">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-1/2" />
          <div className="space-y-8">
            {milestones.map((m, i) => {
              const meta = statusMeta[m.status as keyof typeof statusMeta]
              const Icon = meta.icon
              return (
                <motion.div
                  key={m.period}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                  className={cn(
                    'relative flex gap-5 md:w-1/2',
                    i % 2 === 0 ? 'md:ml-auto md:flex-row-reverse md:pl-8' : 'md:pr-8',
                  )}
                >
                  <span
                    className={cn(
                      'z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-4 border-secondary md:absolute md:top-1',
                      meta.cls,
                      i % 2 === 0 ? 'md:-left-5' : 'md:-right-5',
                    )}
                  >
                    <Icon className={cn('size-4', m.status === 'progress' && 'animate-spin')} />
                  </span>
                  <div className="flex-1 rounded-3xl border border-border bg-card p-6 shadow-soft">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm font-semibold text-accent-strong">
                        {m.period}
                      </span>
                      <span className={cn('rounded-full px-2.5 py-0.5 text-[11px] font-medium', meta.cls)}>
                        {meta.label}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                      {m.title}
                    </h3>
                    <p className="mt-1.5 leading-relaxed text-muted-foreground">
                      {m.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
