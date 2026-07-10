'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

type Plan = {
  name: string
  monthly: number | null
  yearly: number | null
  priceLabel?: string
  period: string
  description: string
  features: string[]
  cta: string
  highlight: boolean
}

const plans: Plan[] = [
  {
    name: 'Starter',
    monthly: 0,
    yearly: 0,
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
    monthly: 499,
    yearly: 399,
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
    monthly: null,
    yearly: null,
    priceLabel: 'Custom',
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
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="relative bg-secondary/50 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, student-friendly pricing"
          description="Start completely free. Upgrade only when you are ready to go all in."
        />

        {/* billing toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span
            className={cn(
              'text-sm font-medium transition-colors',
              !annual ? 'text-foreground' : 'text-muted-foreground',
            )}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
            onClick={() => setAnnual((v) => !v)}
            className="relative h-7 w-12 rounded-full bg-primary/90 p-1 transition-colors"
          >
            <motion.span
              className="block size-5 rounded-full bg-accent-foreground shadow-sm"
              animate={{ x: annual ? 20 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 32 }}
            />
          </button>
          <span
            className={cn(
              'text-sm font-medium transition-colors',
              annual ? 'text-foreground' : 'text-muted-foreground',
            )}
          >
            Annual
          </span>
          <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent-strong">
            Save 20%
          </span>
        </div>

        <div className="mt-12 grid items-start gap-4 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const price =
              plan.priceLabel != null
                ? plan.priceLabel
                : (annual ? plan.yearly : plan.monthly) === 0
                  ? 'Free'
                  : `₹${annual ? plan.yearly : plan.monthly}`
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                whileHover={{ y: -6 }}
                className={cn(
                  'relative flex flex-col rounded-3xl border p-7 transition-shadow duration-300',
                  plan.highlight
                    ? 'border-accent/40 bg-primary text-primary-foreground shadow-lift lg:-mt-4 lg:pb-10'
                    : 'border-border bg-card shadow-soft hover:shadow-lift',
                )}
              >
                {plan.highlight && (
                  <>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-accent/25 blur-3xl"
                    />
                    <span className="absolute right-6 top-7 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-accent-foreground">
                      <Sparkles className="size-3" />
                      Most Popular
                    </span>
                  </>
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
                  <span className="font-display text-4xl font-semibold">{price}</span>
                  {price !== 'Free' && price !== 'Custom' && (
                    <span
                      className={cn(
                        'text-sm',
                        plan.highlight
                          ? 'text-primary-foreground/70'
                          : 'text-muted-foreground',
                      )}
                    >
                      /mo
                    </span>
                  )}
                  <span
                    className={cn(
                      'text-sm',
                      plan.highlight
                        ? 'text-primary-foreground/70'
                        : 'text-muted-foreground',
                    )}
                  >
                    {price === 'Free' || price === 'Custom' ? plan.period : ''}
                  </span>
                </div>
                {plan.highlight && annual && (
                  <p className="mt-1 text-xs font-medium text-accent">
                    Billed annually — 2 months free
                  </p>
                )}
                <p
                  className={cn(
                    'mt-3 text-sm leading-relaxed',
                    plan.highlight
                      ? 'text-primary-foreground/80'
                      : 'text-muted-foreground',
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
                      <span
                        className={
                          plan.highlight ? 'text-primary-foreground/90' : 'text-foreground'
                        }
                      >
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
