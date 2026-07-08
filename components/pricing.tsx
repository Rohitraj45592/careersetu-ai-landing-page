'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Everything you need to start your placement prep.',
    features: [
      '3 resume analyses per month',
      'Basic ATS scoring',
      '2 AI mock interviews',
      'Community roadmap templates',
    ],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₹499',
    period: 'per month',
    description: 'For students serious about landing top offers.',
    features: [
      'Unlimited resume analyses',
      'Advanced ATS + recruiter feedback',
      'Unlimited AI mock interviews',
      'Personalized adaptive roadmap',
      'Company-specific prep kits',
      'Priority support',
    ],
    cta: 'Start Pro Trial',
    highlight: true,
  },
  {
    name: 'Campus',
    price: 'Custom',
    period: 'per cohort',
    description: 'For placement cells and student communities.',
    features: [
      'Everything in Pro',
      'Cohort analytics dashboard',
      'Bulk resume reviews',
      'Dedicated success manager',
    ],
    cta: 'Talk to Sales',
    highlight: false,
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-secondary/50 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, student-friendly pricing"
          description="Start completely free. Upgrade only when you are ready to go all in."
        />

        <div className="mt-14 grid items-start gap-4 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className={cn(
                'relative flex flex-col rounded-3xl border p-7',
                plan.highlight
                  ? 'border-accent/40 bg-primary text-primary-foreground shadow-lift lg:-mt-4 lg:pb-10'
                  : 'border-border bg-card shadow-soft',
              )}
            >
              {plan.highlight && (
                <span className="absolute right-6 top-7 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-accent-foreground">
                  Most Popular
                </span>
              )}
              <h3
                className={cn(
                  'font-display text-lg font-semibold',
                  plan.highlight ? 'text-primary-foreground' : 'text-foreground',
                )}
              >
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-semibold">{plan.price}</span>
                <span
                  className={cn(
                    'text-sm',
                    plan.highlight ? 'text-primary-foreground/70' : 'text-muted-foreground',
                  )}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={cn(
                  'mt-3 text-sm leading-relaxed',
                  plan.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground',
                )}
              >
                {plan.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={cn(
                        'mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full',
                        plan.highlight
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-accent-soft text-accent-strong',
                      )}
                    >
                      <Check className="size-3" />
                    </span>
                    <span className={plan.highlight ? 'text-primary-foreground/90' : 'text-foreground'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={plan.highlight ? 'default' : 'outline'}
                className={cn(
                  'group mt-8 h-11 w-full rounded-full text-sm font-medium',
                  plan.highlight
                    ? 'bg-accent text-accent-foreground hover:bg-accent-strong'
                    : 'border-border bg-card text-foreground hover:bg-secondary',
                )}
                nativeButton={false}
                render={<a href="#" />}
              >
                {plan.cta}
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
