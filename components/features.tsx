'use client'

import { motion } from 'framer-motion'
import {
  FileText,
  Target,
  Video,
  Waypoints,
  Briefcase,
  Gauge,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const features = [
  {
    icon: FileText,
    title: 'Resume Analyzer',
    description:
      'Get an instant ATS score with line-by-line feedback on wording, structure and keyword coverage tailored to your target roles.',
  },
  {
    icon: Target,
    title: 'Skill Gap Analyzer',
    description:
      'See exactly which skills you are missing for a role and how you compare against successful candidates.',
  },
  {
    icon: Video,
    title: 'AI Mock Interview',
    description:
      'Practice real interview questions with an AI that scores your answers and gives actionable coaching in real time.',
  },
  {
    icon: Waypoints,
    title: 'Career Roadmap',
    description:
      'Receive a personalized, week-by-week plan that turns your goals into clear, achievable milestones.',
  },
  {
    icon: Briefcase,
    title: 'Project Suggestions',
    description:
      'Get portfolio project ideas matched to your target companies so your resume stands out from the crowd.',
  },
  {
    icon: Gauge,
    title: 'Progress Tracking',
    description:
      'Watch your career score climb as you improve, with clear metrics that show what to focus on next.',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Features"
        title="Everything you need to get hired"
        description="One intelligent workspace that guides you from an unpolished resume to a signed offer letter."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease }}
            whileHover={{ y: -6 }}
            className="group rounded-3xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
          >
            <span className="flex size-11 items-center justify-center rounded-2xl bg-accent-soft text-accent-strong transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <feature.icon className="size-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
              {feature.title}
            </h3>
            <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
