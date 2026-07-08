'use client'

import { motion } from 'framer-motion'
import { GraduationCap, RefreshCw, Building2, Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const cases = [
  {
    icon: GraduationCap,
    title: 'Final-year students',
    description: 'Walk into campus placements with a polished resume and interview confidence.',
    points: ['ATS-ready resume', 'Company-specific prep', 'Mock interview practice'],
  },
  {
    icon: RefreshCw,
    title: 'Career switchers',
    description: 'Map your existing skills to a new domain and close the gaps that matter.',
    points: ['Transferable skill mapping', 'Targeted learning plan', 'Portfolio guidance'],
  },
  {
    icon: Building2,
    title: 'Placement cells',
    description: 'Help every student in your cohort become interview-ready at scale.',
    points: ['Cohort dashboards', 'Progress analytics', 'Bulk resume reviews'],
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export function UseCases() {
  return (
    <section id="use-cases" className="mx-auto max-w-6xl px-4 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Use Cases"
        title="Built for every stage of the journey"
        description="Whether you are starting out or switching lanes, CareerSetu AI meets you where you are."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {cases.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-lift"
          >
            <span className="flex size-11 items-center justify-center rounded-2xl bg-accent-soft text-accent-strong">
              <c.icon className="size-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
              {c.title}
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{c.description}</p>
            <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
              {c.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-foreground">
                  <span className="flex size-4.5 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                    <Check className="size-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
