import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import { Providers } from '@/components/providers/providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CareerSetu AI — Crack Placements with AI',
  description:
    'AI-powered resume analysis, skill gap detection, mock interviews and personalized learning roadmaps to help students get hired faster.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf8f5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable} bg-background`}>
      <body className="font-sans antialiased">
  <Providers>
    {children}
  </Providers>

  {process.env.NODE_ENV === 'production' && <Analytics />}
</body>
    </html>
  )
}
