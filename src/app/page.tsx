'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import { siteConfig } from '@/lib/data'

// Dynamic import for 3D component to avoid SSR issues
const CubesIntro = dynamic(() => import('@/components/CubesIntro'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-cyber-yellow font-mono text-xl animate-pulse">
        Loading...
      </div>
    </div>
  ),
})

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  const handleEnter = () => {
    setShowIntro(false)
  }

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <CubesIntro
            name={siteConfig.name.toUpperCase()}
            onEnter={handleEnter}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </motion.div>
    </>
  )
}
