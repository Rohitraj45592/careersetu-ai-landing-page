'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BrandMark } from '@/components/brand-logo'

const ease = [0.22, 1, 0.36, 1] as const

export function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease }}
        className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center shadow-lift sm:px-16 sm:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-accent/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-10 size-64 rounded-full bg-accent/15 blur-3xl"
        />
        <div className="relative">
          <BrandMark className="mx-auto size-10" />
          <h2 className="mx-auto mt-6 max-w-2xl text-balance font-display text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl">
            Your dream placement is closer than you think.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-lg leading-relaxed text-primary-foreground/75">
            Join 10,000+ students using CareerSetu AI to get hired faster. Free to
            start, no credit card required.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="group h-12 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5 hover:bg-accent-strong"
              nativeButton={false}
              render={<a href="#" />}
            >
              Analyze My Resume
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-white/20 bg-white/10 px-6 text-sm font-medium text-primary-foreground hover:bg-white/20"
              nativeButton={false}
              render={<a href="#" />}
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
