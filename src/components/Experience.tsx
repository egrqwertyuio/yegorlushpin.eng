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
          <span className="font-mono text-cyber-cyan text-sm uppercase tracking-widest">
            // Career Path
          </span>
          <h2 className="section-heading mt-4">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-cyan via-cyber-magenta to-cyber-cyan transform md:-translate-x-1/2" />

          {/* Experience items */}
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-0 md:pb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-cyber-bg border-2 border-cyber-cyan rounded-full transform -translate-x-1/2 md:-translate-x-1/2`}>
                  <motion.div
                    className="absolute inset-0 bg-cyber-cyan rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Content card */}
                <div className="cyber-card p-6 group">
                  {/* Period badge */}
                  <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar className="w-4 h-4 text-cyber-cyan" />
                    <span className="text-cyber-cyan font-mono text-sm">{exp.period}</span>
                  </div>

                  {/* Title and Company */}
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyber-cyan transition-colors mb-1">
                    {exp.title}
                  </h3>
                  <div className={`flex items-center gap-4 mb-4 text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="flex items-center gap-1 text-cyber-magenta">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`text-gray-400 text-sm mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-2 text-sm ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                      >
                        <ChevronRight className="w-4 h-4 text-cyber-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute ${index % 2 === 0 ? 'top-0 left-0' : 'top-0 right-0'} w-4 h-4 border-t-2 ${index % 2 === 0 ? 'border-l-2' : 'border-r-2'} border-cyber-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              </div>
            </motion.div>
          ))}
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
            className="inline-flex items-center gap-2 px-8 py-4 border border-cyber-cyan text-cyber-cyan font-mono uppercase tracking-wider hover:bg-cyber-cyan/10 transition-all duration-300"
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
