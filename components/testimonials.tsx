'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    quote:
      'The ATS score feedback was brutally honest and exactly what I needed. Rewrote my resume in a weekend and landed three interviews the next week.',
    name: 'Ananya Sharma',
    role: 'SDE Intern @ Amazon',
    avatar: '/images/avatar-2.png',
  },
  {
    quote:
      'The mock interviews felt shockingly real. By the time my actual interview came around, I had already practiced the exact questions.',
    name: 'Rohit Verma',
    role: 'Analyst @ Deloitte',
    avatar: '/images/avatar-1.png',
  },
  {
    quote:
      'I was switching from mechanical to software and had no idea where to start. The roadmap gave me a clear plan I could actually follow.',
    name: 'Karthik Rao',
    role: 'Frontend Engineer @ Infosys',
    avatar: '/images/avatar-3.png',
  },
  {
    quote:
      'The skill gap analyzer showed me I was missing system design. Two months later I cleared my dream company.',
    name: 'Meera Nair',
    role: 'SDE @ Microsoft',
    avatar: '/images/avatar-4.png',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Testimonials"
        title="Loved by students everywhere"
        description="Real results from students who turned their placement anxiety into offer letters."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease }}
            className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft"
          >
            <div className="flex items-center gap-0.5 text-amber-500">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="size-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-pretty text-lg leading-relaxed text-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                src={t.avatar || '/placeholder.svg'}
                alt={t.name}
                className="size-11 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
