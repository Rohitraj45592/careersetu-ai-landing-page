'use client'

import { motion } from 'framer-motion'
import {
  GraduationCap,
  Rocket,
  Sparkles,
  RefreshCw,
  Check,
  ArrowRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const cases = [
  {
    icon: GraduationCap,
    title: 'Students',
    tagline: 'Build the right foundation early',
    description: 'Discover in-demand skills and start building a standout profile from day one.',
    points: ['Skill discovery', 'Learning roadmap', 'Beginner projects'],
  },
  {
    icon: Sparkles,
    title: 'Final year',
    tagline: 'Own your campus placements',
    description: 'Walk into placements with a polished resume and real interview confidence.',
    points: ['ATS-ready resume', 'Company-specific prep', 'Mock interviews'],
  },
  {
    icon: Rocket,
    title: 'Freshers',
    tagline: 'Break into your first role',
    description: 'Stand out in a crowded market with sharp positioning and portfolio proof.',
    points: ['Portfolio guidance', 'Recruiter feedback', 'Application tracking'],
  },
  {
    icon: RefreshCw,
    title: 'Career switch',
    tagline: 'Move into a new domain',
    description: 'Map existing skills to a new field and close the gaps that actually matter.',
    points: ['Transferable skills', 'Targeted learning', 'Domain roadmap'],
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

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cases.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift"
          >
            {/* accent wash reveals on hover */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
            />
            <span className="flex size-11 items-center justify-center rounded-2xl bg-accent-soft text-accent-strong transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
              <c.icon className="size-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
              {c.title}
            </h3>
            <p className="mt-0.5 text-sm font-medium text-accent-strong">{c.tagline}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {c.description}
            </p>
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
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              Explore
              <ArrowRight className="size-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
