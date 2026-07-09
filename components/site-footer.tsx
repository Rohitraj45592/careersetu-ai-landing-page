import { BrandLogo } from '@/components/brand-logo'

const columns = [
  {
    title: 'Product',
    links: ['Features', 'How It Works', 'Roadmap', 'Pricing'],
  },
  {
    title: 'Resources',
    links: ['Resume Guide', 'Interview Prep', 'Blog', 'Help Center'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Privacy', 'Terms'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <BrandLogo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Your AI career copilot for cracking placements — resume analysis,
              mock interviews and personalized roadmaps.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CareerSetu AI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made for students, by students.
          </p>
        </div>
      </div>
    </footer>
  )
}
