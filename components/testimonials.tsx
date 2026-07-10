'use client'

import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'The ATS feedback was brutally honest and exactly what I needed. Rewrote my resume in a weekend and landed three interviews the next week.',
    name: 'Ananya Sharma',
    role: 'SDE Intern',
    company: 'amazon',
    avatar: '/images/avatar-2.png',
  },
  {
    quote:
      'The mock interviews felt shockingly real. By the time my actual interview came around, I had already practiced the exact questions.',
    name: 'Rohit Verma',
    role: 'Analyst',
    company: 'Deloitte.',
    avatar: '/images/avatar-1.png',
  },
  {
    quote:
      'I was switching from mechanical to software with no idea where to start. The roadmap gave me a clear plan I could actually follow.',
    name: 'Karthik Rao',
    role: 'Frontend Engineer',
    company: 'Infosys',
    avatar: '/images/avatar-3.png',
  },
  {
    quote:
      'The skill gap analyzer showed me I was missing system design. Two months later I cleared my dream company.',
    name: 'Meera Nair',
    role: 'SDE',
    company: 'Microsoft',
    avatar: '/images/avatar-4.png',
  },
  {
    quote:
      'Went from zero callbacks to five offers in a single placement season. The company-specific prep kits were a game changer.',
    name: 'Aditya Menon',
    role: 'Product Analyst',
    company: 'Google',
    avatar: '/images/avatar-1.png',
  },
  {
    quote:
      'As a fresher I had no network. CareerSetu became my mentor — resume, projects, interviews, all in one place.',
    name: 'Priya Iyer',
    role: 'Data Analyst',
    company: 'TCS',
    avatar: '/images/avatar-2.png',
  },
]

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-[340px] shrink-0 flex-col rounded-3xl border border-border bg-card p-6 shadow-soft sm:w-[400px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5 text-amber-500">
          {Array.from({ length: 5 }).map((_, s) => (
            <Star key={s} className="size-4 fill-current" />
          ))}
        </div>
        <span className="font-display text-sm font-semibold tracking-tight text-foreground/40">
          {t.company}
        </span>
      </div>
      <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <img
          src={t.avatar || '/placeholder.svg'}
          alt={t.name}
          loading="lazy"
          className="size-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-foreground">{t.name}</p>
          <p className="text-sm text-muted-foreground">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  )
}

function Row({
  items,
  duration,
  reverse = false,
}: {
  items: Testimonial[]
  duration: string
  reverse?: boolean
}) {
  return (
    <div className="marquee-group mask-fade-x flex overflow-hidden">
      <div
        className="animate-marquee flex shrink-0 gap-4 pr-4"
        style={{
          ['--marquee-duration' as string]: duration,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {items.map((t, i) => (
          <Card key={`a-${t.name}-${i}`} t={t} />
        ))}
        {items.map((t, i) => (
          <Card key={`b-${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  )
}

export function Testimonials() {
  const firstRow = testimonials.slice(0, 3)
  const secondRow = testimonials.slice(3)

  return (
    <section id="testimonials" className="overflow-hidden py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by students everywhere"
          description="Real results from students who turned their placement anxiety into offer letters."
        />
      </div>

      <div className="mt-14 flex flex-col gap-4">
        <Row items={firstRow} duration="48s" />
        <Row items={secondRow} duration="56s" reverse />
      </div>
    </section>
  )
}
