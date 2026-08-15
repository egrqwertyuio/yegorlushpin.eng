import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import './globals.css'
import { siteConfig } from '@/lib/data'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'

const Dither = dynamic(() => import('@/components/Dither'), {
  ssr: false,
  loading: () => null,
})

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.description,
  keywords: ['Electrical Engineer', 'Embedded Systems', 'PCB Design', 'IoT', 'Firmware', 'Hardware'],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-cyber-bg min-h-screen">
        <div className="fixed inset-0 pointer-events-none opacity-5">
          <Dither
            waveColor={[1, 1, 1]}
            disableAnimation={false}
            enableMouseInteraction={false}
            mouseRadius={0.8}
            colorNum={2}
            pixelSize={3}
            waveAmplitude={0.35}
            waveFrequency={5.5}
            waveSpeed={0.08}
          />
        </div>
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
