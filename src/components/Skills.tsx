'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { Cpu, Code, Wrench, Terminal } from 'lucide-react'
import { skillsData } from '@/lib/data'
import SpotlightCard from './SpotlightCard'

const MetaBalls = dynamic(() => import('./MetaBalls'), {
  ssr: false,
  loading: () => null,
})

const categories = [
  { id: 'hardware', name: 'Hardware', icon: Cpu, data: skillsData.hardware },
  { id: 'embedded', name: 'Languages', icon: Code, data: skillsData.embedded },
  { id: 'tools', name: 'Tools', icon: Wrench, data: skillsData.tools },
  { id: 'software', name: 'Software', icon: Terminal, data: skillsData.software },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('hardware')

  const activeData = categories.find(c => c.id === activeCategory)?.data || []

  return (
    <section id="skills" className="py-20 relative bg-cyber-bg-light overflow-hidden" ref={ref}>
      {/* MetaBalls Background */}
      <div className="absolute inset-0 opacity-40">
        <MetaBalls
          color="#FFD700"
          cursorBallColor="#FF8C00"
          speed={0.3}
          enableMouseInteraction={true}
          hoverSmoothness={0.05}
          animationSize={30}
          ballCount={12}
          clumpFactor={1.2}
          cursorBallSize={2}
          enableTransparency={true}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-cyber-yellow text-sm uppercase tracking-widest">
            // Technical Expertise
          </span>
          <h2 className="section-heading mt-4">
            Skills & Tools
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-cyber-yellow text-cyber-bg'
                  : 'border border-cyber-yellow/30 text-gray-400 hover:border-cyber-yellow hover:text-cyber-yellow'
              }`}
              style={{
                clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid - 3 columns x 2 rows */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {activeData.slice(0, 6).map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
            >
              <SpotlightCard className="h-full">
                <div className="p-5 text-center">
                  <h3 className="text-white font-semibold text-sm md:text-base">
                    {skill.name}
                  </h3>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm font-mono">
            <span className="text-cyber-yellow">&gt;</span> Always learning new technologies and improving existing skills
          </p>
        </motion.div>
      </div>
    </section>
  )
}
