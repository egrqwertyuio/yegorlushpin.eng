'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react'
import { experienceData } from '@/lib/data'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 relative bg-cyber-bg-light" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 circuit-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-cyber-yellow text-sm uppercase tracking-widest">
            // Career Path
          </span>
          <h2 className="section-heading mt-4">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-yellow via-cyber-orange to-cyber-yellow" />

          {/* Experience items */}
          {experienceData.map((exp, index) => {
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 bg-cyber-bg border-2 border-cyber-yellow rounded-full -translate-x-1/2 z-10">
                  <motion.div
                    className="absolute inset-0 bg-cyber-yellow rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </div>

                {/* Connector line - desktop only */}
                <div className={`hidden md:block absolute top-7 h-px w-8 bg-cyber-yellow/50 ${
                  isLeft ? 'left-1/2 ml-2' : 'right-1/2 mr-2'
                }`} />

                {/* Card container */}
                <div className={`
                  pl-12 md:pl-0
                  md:w-[calc(50%-2rem)]
                  ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}
                `}>
                  <div className="cyber-card p-6 group">
                    {/* Period badge */}
                    <div className={`flex items-center gap-2 mb-4 ${isLeft ? 'md:justify-end' : ''}`}>
                      <Calendar className="w-4 h-4 text-cyber-yellow" />
                      <span className="text-cyber-yellow font-mono text-sm">{exp.period}</span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-semibold text-white group-hover:text-cyber-yellow transition-colors mb-1 ${isLeft ? 'md:text-right' : ''}`}>
                      {exp.title}
                    </h3>

                    {/* Company and Location */}
                    <div className={`flex items-center gap-4 mb-4 text-sm flex-wrap ${isLeft ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1 text-cyber-orange">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className={`text-gray-400 text-sm mb-4 ${isLeft ? 'md:text-right' : ''}`}>
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-2 text-sm ${isLeft ? 'md:flex-row-reverse md:text-right' : ''}`}
                        >
                          <ChevronRight className={`w-4 h-4 text-cyber-yellow flex-shrink-0 mt-0.5 ${isLeft ? 'md:rotate-180' : ''}`} />
                          <span className="text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 border border-cyber-yellow text-cyber-yellow font-mono uppercase tracking-wider hover:bg-cyber-yellow/10 transition-all duration-300"
            style={{
              clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
