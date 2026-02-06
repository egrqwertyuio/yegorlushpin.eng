import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/lib/data'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
        <div className="cyber-grid fixed inset-0 pointer-events-none opacity-50" />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
