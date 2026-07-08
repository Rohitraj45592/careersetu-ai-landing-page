'use client'

import {
  Bell,
  Briefcase,
  FileText,
  Gauge,
  LayoutDashboard,
  Search,
  Settings,
  Target,
  User,
  Video,
  Waypoints,
  ArrowRight,
  Check,
} from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'
import { cn } from '@/lib/utils'

const sidebar = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Resume Analyzer', icon: FileText },
  { label: 'Skill Gap Analyzer', icon: Target },
  { label: 'AI Mock Interview', icon: Video },
  { label: 'Career Roadmap', icon: Waypoints },
  { label: 'Projects', icon: Briefcase },
  { label: 'Profile', icon: User },
  { label: 'Settings', icon: Settings },
]

const scores = [
  { label: 'ATS Score', value: '92', tag: 'Excellent', trend: '+12% improved', tone: 'text-emerald-600' },
  { label: 'Career Score', value: '84', tag: 'Good', trend: '+8% improved', tone: 'text-emerald-600' },
  { label: 'Resume Match', value: '91%', tag: 'Perfect Match', trend: '+15% improved', tone: 'text-amber-600' },
  { label: 'Interview Score', value: '88', tag: 'Good', trend: '+10% improved', tone: 'text-emerald-600' },
]

const missingSkills = ['System Design', 'Docker', 'Kubernetes', 'AWS', 'CI/CD']

const roadmap = [
  { step: 'Improve Your Resume', status: 'done' },
  { step: 'Learn Missing Skills', status: 'progress' },
  { step: 'Build 2 Projects', status: 'pending' },
  { step: 'Practice Interviews', status: 'pending' },
]

function DonutChart() {
  const pct = 72
  const r = 44
  const c = 2 * Math.PI * r
  return (
    <div className="relative flex size-[120px] items-center justify-center">
      <svg viewBox="0 0 100 100" className="size-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#eee7f5" strokeWidth="10" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="url(#donut)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * pct) / 100}
        />
        <defs>
          <linearGradient id="donut" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7b61ff" />
            <stop offset="100%" stopColor="#22b07d" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-display text-2xl font-semibold text-foreground">{pct}%</span>
        <span className="text-[11px] text-muted-foreground">Matched</span>
      </div>
    </div>
  )
}

export function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-lift backdrop-blur-sm">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-52 shrink-0 flex-col gap-1 border-r border-border/70 bg-white/70 p-4 sm:flex">
          <div className="px-1 pb-4">
            <BrandLogo className="scale-90 origin-left" />
          </div>
          {sidebar.map((item) => (
            <div
              key={item.label}
              className={cn(
                'flex items-center gap-2.5 rounded-xl px-3 py-2 text-[13px] font-medium transition-colors',
                item.active
                  ? 'bg-accent-soft text-accent-strong'
                  : 'text-muted-foreground hover:bg-secondary',
              )}
            >
              <item.icon className="size-4" />
              {item.label}
            </div>
          ))}
        </aside>

        {/* Main */}
        <div className="min-w-0 flex-1 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Welcome back, Rohit
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Track your progress and improve your career score.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                <Search className="size-4" />
              </span>
              <span className="flex size-8 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                <Bell className="size-4" />
              </span>
              <span className="flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                R
              </span>
            </div>
          </div>

          {/* Score cards */}
          <div className="mt-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
            {scores.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border/70 bg-white p-3.5">
                <p className="text-[11px] font-medium text-muted-foreground">{s.label}</p>
                <p className="mt-1 font-display text-2xl font-semibold text-foreground">{s.value}</p>
                <p className={cn('text-[11px] font-medium', s.tone)}>{s.tag}</p>
                <p className="mt-1.5 text-[10px] text-muted-foreground">↑ {s.trend}</p>
              </div>
            ))}
          </div>

          {/* Bottom grid */}
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            <div className="rounded-2xl border border-border/70 bg-white p-4">
              <p className="text-sm font-semibold text-foreground">Skill Gap Overview</p>
              <div className="mt-2 flex items-center gap-4">
                <DonutChart />
                <div className="min-w-0">
                  <p className="mb-2 text-[11px] font-medium text-muted-foreground">
                    Top Missing Skills
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {missingSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button className="mt-3 flex items-center gap-1 text-[12px] font-semibold text-accent-strong">
                View Full Report <ArrowRight className="size-3" />
              </button>
            </div>

            <div className="rounded-2xl border border-border/70 bg-white p-4">
              <p className="text-sm font-semibold text-foreground">AI Suggested Roadmap</p>
              <ul className="mt-3 space-y-2.5">
                {roadmap.map((r, i) => (
                  <li key={r.step} className="flex items-center gap-2.5">
                    <span
                      className={cn(
                        'flex size-5 items-center justify-center rounded-full text-[10px] font-semibold',
                        r.status === 'done'
                          ? 'bg-emerald-100 text-emerald-600'
                          : r.status === 'progress'
                            ? 'bg-accent-soft text-accent-strong'
                            : 'bg-secondary text-muted-foreground',
                      )}
                    >
                      {r.status === 'done' ? <Check className="size-3" /> : i + 1}
                    </span>
                    <span className="flex-1 text-[13px] font-medium text-foreground">{r.step}</span>
                    <span
                      className={cn(
                        'text-[11px] font-medium',
                        r.status === 'done'
                          ? 'text-emerald-600'
                          : r.status === 'progress'
                            ? 'text-accent-strong'
                            : 'text-muted-foreground',
                      )}
                    >
                      {r.status === 'done' ? 'Done' : r.status === 'progress' ? 'In Progress' : 'Pending'}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="mt-3 flex items-center gap-1 text-[12px] font-semibold text-accent-strong">
                View Full Roadmap <ArrowRight className="size-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
