'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Upload, ScanSearch, Waypoints, Trophy } from 'lucide-react'
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
    icon: Waypoints,
    step: '03',
    title: 'Follow your roadmap',
    description:
      'Work through a personalized plan of skills, projects and mock interviews until you are placement-ready.',
  },
  {
    icon: Trophy,
    step: '04',
    title: 'Land the offer',
    description:
      'Walk into interviews confident and prepared, then track every application until you sign your offer letter.',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 60%'],
  })
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  })

  return (
    <section id="how-it-works" className="relative bg-secondary/50 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="How It Works"
          title="From resume to offer in four steps"
          description="A guided path that removes the guesswork from your placement journey."
        />

        <div ref={ref} className="relative mt-16">
          {/* connecting progress line — horizontal on desktop, vertical on mobile */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-border md:left-0 md:top-6 md:h-px md:w-full md:block"
          >
            <motion.div
              className="h-full w-full origin-left bg-accent md:origin-left"
              style={{ scaleX: progress }}
            />
          </div>
          {/* mobile vertical line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-6 top-0 h-full w-px bg-border md:hidden"
          >
            <motion.div
              className="h-full w-full origin-top bg-accent"
              style={{ scaleY: progress }}
            />
          </div>

          <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
            {steps.map((s, i) => (
              <motion.li
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="relative pl-20 md:pl-0 md:pt-16"
              >
                {/* node marker */}
                <span className="absolute left-0 top-0 flex size-12 items-center justify-center rounded-2xl border border-border bg-card text-accent-strong shadow-soft md:left-0">
                  <s.icon className="size-5" />
                </span>

                <div className="md:pr-4">
                  <span className="font-display text-sm font-semibold text-accent-strong">
                    Step {s.step}
                  </span>
                  <h3 className="mt-1.5 font-display text-xl font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
