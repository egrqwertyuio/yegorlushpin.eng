'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileText, ChevronRight } from 'lucide-react'
import { siteConfig } from '@/lib/data'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* Radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-cyber-cyan/5 via-transparent to-transparent" />

        {/* Floating circuit elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyber-cyan/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Terminal-style intro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block font-mono text-cyber-cyan text-sm bg-cyber-cyan/10 px-4 py-2 rounded-sm border border-cyber-cyan/30">
              <span className="text-cyber-magenta">$</span> ./initialize_engineer.sh
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4"
          >
            <span className="text-white">{siteConfig.name.split(' ')[0]}</span>
            <br />
            <span className="bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-magenta bg-clip-text text-transparent">
              {siteConfig.name.split(' ')[1]}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-mono text-gray-300">
              <span className="text-cyber-cyan">&lt;</span>
              {siteConfig.title}
              <span className="text-cyber-cyan">/&gt;</span>
            </h2>
            <p className="text-cyber-magenta font-mono mt-2">
              {siteConfig.subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
          >
            {siteConfig.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-4 bg-cyber-cyan text-cyber-bg font-mono font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-cyber-cyan/90 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
              style={{
                clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href={siteConfig.resumeUrl}
              className="flex items-center gap-2 px-8 py-4 border border-cyber-cyan text-cyber-cyan font-mono font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-cyber-cyan/10"
              style={{
                clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5" />
              Resume
            </motion.a>

            <motion.a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 border border-cyber-magenta text-cyber-magenta font-mono font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-cyber-magenta/10"
              style={{
                clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Contact
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: siteConfig.social.github, label: 'GitHub' },
              { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${siteConfig.email}`, label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-cyber-cyan/30 text-cyber-cyan/70 hover:text-cyber-cyan hover:border-cyber-cyan transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-cyber-cyan/50 hover:text-cyber-cyan transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-4 w-20 h-20 border-l-2 border-t-2 border-cyber-cyan/30" />
      <div className="absolute top-20 right-4 w-20 h-20 border-r-2 border-t-2 border-cyber-cyan/30" />
      <div className="absolute bottom-20 left-4 w-20 h-20 border-l-2 border-b-2 border-cyber-magenta/30" />
      <div className="absolute bottom-20 right-4 w-20 h-20 border-r-2 border-b-2 border-cyber-magenta/30" />
    </section>
  )
}
