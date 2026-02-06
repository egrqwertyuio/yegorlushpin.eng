'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Folder, ChevronRight } from 'lucide-react'
import { projectsData } from '@/lib/data'

const categories = ['All', 'Hardware', 'IoT', 'Firmware', 'Personal']

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyber-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyber-yellow/5 rounded-full blur-3xl" />
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
            // Featured Work
          </span>
          <h2 className="section-heading mt-4">
            Projects
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                filter === category
                  ? 'bg-cyber-yellow/20 border border-cyber-yellow text-cyber-yellow'
                  : 'border border-gray-700 text-gray-400 hover:border-cyber-yellow/50 hover:text-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="cyber-card h-full flex flex-col overflow-hidden">
                {/* Project Image */}
                <div className="relative aspect-video bg-cyber-bg overflow-hidden">
                  {/* Placeholder image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyber-yellow/10 to-cyber-orange/10">
                    <Folder className="w-16 h-16 text-cyber-yellow/30" />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-cyber-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-cyber-yellow/20 border border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow hover:text-cyber-bg transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-cyber-orange/20 border border-cyber-orange text-cyber-orange hover:bg-cyber-orange hover:text-cyber-bg transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-cyber-orange/20 border border-cyber-orange text-cyber-orange text-xs font-mono">
                      Featured
                    </div>
                  )}

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-cyber-yellow/20 border border-cyber-yellow/50 text-cyber-yellow text-xs font-mono">
                    {project.category}
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyber-yellow transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex-1 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-cyber-bg text-gray-400 text-xs font-mono border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-gray-500 text-xs font-mono">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-gray-400 hover:text-cyber-yellow transition-colors"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-gray-400 hover:text-cyber-orange transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                    )}
                    <motion.span
                      className="ml-auto text-cyber-yellow/50 group-hover:text-cyber-yellow transition-colors"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight size={18} />
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.a
            href={projectsData[0]?.github?.replace(/\/[^\/]*$/, '') || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyber-yellow hover:text-cyber-orange transition-colors font-mono"
            whileHover={{ x: 5 }}
          >
            View all projects on GitHub
            <ChevronRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
