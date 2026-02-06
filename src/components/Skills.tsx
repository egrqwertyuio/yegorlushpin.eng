'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Cpu, Code, Wrench, Terminal } from 'lucide-react'
import { skillsData } from '@/lib/data'

const categories = [
  { id: 'hardware', name: 'Hardware', icon: Cpu, data: skillsData.hardware },
  { id: 'embedded', name: 'Embedded', icon: Code, data: skillsData.embedded },
  { id: 'tools', name: 'Tools', icon: Wrench, data: skillsData.tools },
  { id: 'software', name: 'Software', icon: Terminal, data: skillsData.software },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('hardware')

  const activeData = categories.find(c => c.id === activeCategory)?.data || []

  return (
    <section id="skills" className="py-20 relative bg-cyber-bg-light" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 circuit-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activeData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="cyber-card p-6 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold group-hover:text-cyber-yellow transition-colors">
                  {skill.name}
                </h3>
                <span className="text-cyber-yellow font-mono text-sm">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-cyber-bg rounded-sm overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyber-yellow to-cyber-orange"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                />
                {/* Animated glow effect */}
                <motion.div
                  className="absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: [-20, 300],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Circuit decoration */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-cyber-yellow/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
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
