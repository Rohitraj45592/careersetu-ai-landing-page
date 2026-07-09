'use client'

import { motion } from 'framer-motion'
import { Upload, ScanSearch, Rocket } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    icon: Upload,
    step: '01',
    title: 'Upload your resume',
    description:
      'Drop in your resume and tell us the roles and companies you are aiming for. No sign-up required to start.',
  },
  {
    icon: ScanSearch,
    step: '02',
    title: 'Get an instant analysis',
    description:
      'Our AI scores your resume, detects skill gaps and benchmarks you against thousands of successful applicants.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Follow your roadmap',
    description:
      'Work through a personalized plan of skills, projects and mock interviews until you are placement-ready.',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-secondary/50 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="How It Works"
          title="From resume to offer in three steps"
          description="A guided path that removes the guesswork from your placement journey."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="relative rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <s.icon className="size-5" />
                </span>
                <span className="font-display text-4xl font-semibold text-border">
                  {s.step}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
