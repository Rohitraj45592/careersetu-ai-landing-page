'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Is CareerSetu AI really free to use?',
    a: 'Yes. The Starter plan is free forever and includes resume analysis, ATS scoring and mock interviews. You only upgrade if you want unlimited usage and advanced coaching.',
  },
  {
    q: 'Do I need to create an account to try it?',
    a: 'You can run your first resume analysis without signing up. Creating a free account lets you save your progress, track your career score and access your roadmap.',
  },
  {
    q: 'How accurate is the ATS scoring?',
    a: 'Our scoring is modeled on the parsing logic used by common applicant tracking systems and refined against thousands of real resumes and recruiter outcomes.',
  },
  {
    q: 'Is my resume and personal data private?',
    a: 'Absolutely. Your documents are encrypted, never sold, and never shared with third parties. You can delete your data permanently at any time.',
  },
  {
    q: 'Can placement cells use this for a whole batch?',
    a: 'Yes. The Campus plan gives placement cells cohort dashboards, bulk resume reviews and readiness analytics for every student.',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24 sm:py-28">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions, answered"
        description="Everything you might want to know before getting started."
      />

      <div className="mt-12 space-y-3">
        {faqs.map((item, i) => {
          const isOpen = open === i
          return (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05, ease }}
              className={cn(
                'overflow-hidden rounded-2xl border bg-card transition-colors duration-300',
                isOpen
                  ? 'border-accent/40 shadow-lift'
                  : 'border-border shadow-soft hover:border-accent/25',
              )}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-foreground">{item.q}</span>
                <span
                  className={cn(
                    'flex size-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300',
                    isOpen
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-accent-soft text-accent-strong',
                  )}
                >
                  <Plus
                    className={cn(
                      'size-4 transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                  />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease }}
                  >
                    <p className="px-5 pb-5 leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
