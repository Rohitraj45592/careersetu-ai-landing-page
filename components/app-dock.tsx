'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Search,
  Wifi,
  Home,
  FileText,
  BarChart3,
  UserCheck,
  Route,
  FolderKanban,
  User,
  Settings,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type DockItem = {
  label: string
  icon: LucideIcon
  href: string
}

const items: DockItem[] = [
  { label: 'Dashboard', icon: Home, href: '#' },
  { label: 'Resume Analyzer', icon: FileText, href: '#features' },
  { label: 'Skill Gap Analyzer', icon: BarChart3, href: '#features' },
  { label: 'AI Mock Interview', icon: UserCheck, href: '#features' },
  { label: 'Career Roadmap', icon: Route, href: '#roadmap' },
  { label: 'Projects', icon: FolderKanban, href: '#features' },
  { label: 'Profile', icon: User, href: '#' },
  { label: 'Settings', icon: Settings, href: '#' },
]

const ease = [0.22, 1, 0.36, 1] as const

export function AppDock() {
  const [active, setActive] = useState('Dashboard')

  return (
    <section
      aria-label="CareerSetu AI quick navigation"
      className="relative z-20 mx-auto max-w-5xl px-4 pb-16 sm:pb-24"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/45 p-4 shadow-lift backdrop-blur-2xl sm:p-6">
          {/* subtle top sheen */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
          />

          {/* Top bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-soft">
                <Sparkles className="size-4" />
              </span>
              <span className="font-display text-base font-semibold tracking-tight text-foreground">
                CareerSetu AI
              </span>
            </div>

            <div className="flex items-center gap-3 text-foreground/70">
              <button
                type="button"
                aria-label="Search"
                className="flex size-8 items-center justify-center rounded-full transition-colors hover:bg-white/60 hover:text-foreground"
              >
                <Search className="size-4" />
              </button>
              <Wifi className="size-4" aria-hidden />
              <span className="text-sm font-medium tabular-nums text-foreground/80">
                09:41
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-4 h-px w-full bg-border/60" />

          {/* Dock items */}
          <nav
            aria-label="App sections"
            className="mt-5 grid grid-cols-4 gap-2 sm:flex sm:items-start sm:justify-between sm:gap-1"
          >
            {items.map((item, i) => {
              const isActive = active === item.label
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  aria-current={isActive ? 'page' : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.04 * i, ease }}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.94 }}
                  className={cn(
                    'group flex flex-col items-center gap-2 rounded-2xl px-2 py-2.5 text-center outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white/50 sm:w-[11%]',
                  )}
                >
                  <span
                    className={cn(
                      'flex size-12 items-center justify-center rounded-2xl border shadow-soft transition-all duration-300',
                      isActive
                        ? 'border-transparent bg-accent text-accent-foreground shadow-lift'
                        : 'border-white/50 bg-white/70 text-foreground/70 group-hover:border-accent/30 group-hover:bg-white group-hover:text-accent-strong group-hover:shadow-lift',
                    )}
                  >
                    <item.icon className="size-5" />
                  </span>
                  <span
                    className={cn(
                      'text-[11px] font-medium leading-tight transition-colors sm:text-xs',
                      isActive
                        ? 'text-accent-strong'
                        : 'text-muted-foreground group-hover:text-foreground',
                    )}
                  >
                    {item.label}
                  </span>
                </motion.a>
              )
            })}
          </nav>
        </div>
      </Reveal>
    </section>
  )
}
