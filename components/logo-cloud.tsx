import { Reveal } from '@/components/reveal'

const companies = [
  'Google',
  'Microsoft',
  'amazon',
  'Deloitte.',
  'Infosys',
  'TCS',
  'Wipro',
  'Cognizant',
]

export function LogoCloud() {
  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4 pb-12">
      <Reveal>
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by students placed at
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {companies.map((name) => (
            <span
              key={name}
              className="font-display text-xl font-semibold tracking-tight text-foreground/45 transition-colors hover:text-foreground/70 sm:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
