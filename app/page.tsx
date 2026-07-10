import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { LogoCloud } from '@/components/logo-cloud'
import { AppDock } from '@/components/app-dock'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { UseCases } from '@/components/use-cases'
import { Roadmap } from '@/components/roadmap'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { Faq } from '@/components/faq'
import { Cta } from '@/components/cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <SiteNav />
      <Hero />
      <LogoCloud />
      <AppDock />
      <Features />
      <HowItWorks />
      <UseCases />
      <Roadmap />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
      <SiteFooter />
    </main>
  )
}
