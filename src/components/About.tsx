'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Cpu, CircuitBoard, Wifi, Zap, GraduationCap, Award } from 'lucide-react'
import { aboutData, siteConfig } from '@/lib/data'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const specialtyIcons = [Cpu, CircuitBoard, Wifi, Zap, Cpu, CircuitBoard]

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-yellow/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-cyber-yellow text-sm uppercase tracking-widest">
            // About Me
          </span>
          <h2 className="section-heading mt-4">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image / Circuit Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Profile image */}
              <div className="absolute inset-0 rounded-sm border border-cyber-yellow/30 overflow-hidden">
                <Image
                  src="/images/lushpiev@mail.uc.edu-1.jpg"
                  alt="Yegor Lushpin"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg/80 via-transparent to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-cyber-yellow" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-cyber-orange" />

              {/* Animated circuit lines */}
              <motion.div
                className="absolute -right-8 top-1/4 w-16 h-px bg-gradient-to-r from-cyber-yellow to-transparent"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -left-8 bottom-1/4 w-16 h-px bg-gradient-to-l from-cyber-orange to-transparent"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-invert">
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {aboutData.bio}
              </p>
            </div>

            {/* Specialties */}
            <div>
              <h3 className="text-cyber-yellow font-mono text-sm uppercase tracking-wider mb-4">
                Specialties
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {aboutData.specialties.map((specialty, index) => {
                  const Icon = specialtyIcons[index % specialtyIcons.length]
                  return (
                    <motion.div
                      key={specialty}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-cyber-yellow transition-colors group"
                    >
                      <Icon className="w-4 h-4 text-cyber-yellow/50 group-hover:text-cyber-yellow transition-colors" />
                      <span className="text-sm">{specialty}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-cyber-yellow font-mono text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </h3>
              {aboutData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-cyber-yellow/30 pl-4 py-2">
                  <p className="text-white font-semibold">{edu.degree}</p>
                  <p className="text-gray-400 text-sm">{edu.school}</p>
                  <p className="text-cyber-yellow/70 text-xs font-mono">{edu.year}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            {aboutData.certifications.length > 0 && (
              <div>
                <h3 className="text-cyber-yellow font-mono text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {aboutData.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyber-yellow/10 border border-cyber-yellow/30 text-cyber-yellow text-xs font-mono"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
