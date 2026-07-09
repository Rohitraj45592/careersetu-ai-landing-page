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
            <div
              key={item.q}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-foreground">{item.q}</span>
                <Plus
                  className={cn(
                    'size-5 shrink-0 text-accent-strong transition-transform duration-300',
                    isOpen && 'rotate-45',
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-5 pb-5 leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
