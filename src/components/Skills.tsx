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

// Convert level to proficiency label
function getProficiencyLabel(level: number): string {
  if (level >= 90) return 'Expert'
  if (level >= 80) return 'Advanced'
  if (level >= 70) return 'Proficient'
  if (level >= 60) return 'Intermediate'
  return 'Learning'
}

// Get number of filled segments (out of 5)
function getFilledSegments(level: number): number {
  if (level >= 90) return 5
  if (level >= 80) return 4
  if (level >= 70) return 3
  if (level >= 60) return 2
  return 1
}

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
          {activeData.map((skill, index) => {
            const filledSegments = getFilledSegments(skill.level)
            const proficiency = getProficiencyLabel(skill.level)

            return (
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
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                    {proficiency}
                  </span>
                </div>

                {/* Segmented Progress Bar */}
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((segment) => (
                    <motion.div
                      key={segment}
                      className="relative h-2 flex-1 bg-cyber-bg rounded-sm overflow-hidden"
                      initial={{ opacity: 0.3 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.1 * index + segment * 0.05 }}
                    >
                      <motion.div
                        className={`absolute inset-0 ${
                          segment <= filledSegments
                            ? 'bg-gradient-to-r from-cyber-yellow to-cyber-orange'
                            : 'bg-gray-800'
                        }`}
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + index * 0.1 + segment * 0.08,
                          ease: "easeOut"
                        }}
                        style={{ transformOrigin: 'left' }}
                      />
                      {/* Glow effect on filled segments */}
                      {segment <= filledSegments && (
                        <motion.div
                          className="absolute inset-0 bg-cyber-yellow/20"
                          animate={{ opacity: [0.2, 0.5, 0.2] }}
                          transition={{ duration: 2, repeat: Infinity, delay: segment * 0.2 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Circuit decoration */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-cyber-yellow/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            )
          })}
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
