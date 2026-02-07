'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileText, ChevronRight } from 'lucide-react'
import { siteConfig } from '@/lib/data'

const MagnetLines = dynamic(() => import('./MagnetLines'), {
  ssr: false,
  loading: () => null,
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060010]">
      {/* Mobile background - simple animated gradient */}
      <div className="absolute inset-0 md:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-yellow/5 via-transparent to-cyber-orange/5" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-yellow/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-orange/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Desktop background - MagnetLines */}
      <div className="absolute inset-0 opacity-30 hidden md:block">
        <MagnetLines
          rows={12}
          columns={20}
          lineColor="#FFD700"
          lineWidth="3px"
          lineHeight="70px"
          baseAngle={-45}
          className="w-full h-full"
        />
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
            <span className="inline-block font-mono text-cyber-yellow text-sm bg-cyber-yellow/10 px-4 py-2 rounded-sm border border-cyber-yellow/30">
              <span className="text-cyber-orange">$</span> ./initialize_engineer.sh
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
            <span className="bg-gradient-to-r from-cyber-yellow via-cyber-orange to-cyber-yellow bg-clip-text text-transparent">
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
              <span className="text-cyber-yellow">&lt;</span>
              {siteConfig.title}
              <span className="text-cyber-yellow">/&gt;</span>
            </h2>
            <p className="text-cyber-orange font-mono mt-2">
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
              className="group flex items-center gap-2 px-8 py-4 bg-cyber-yellow text-cyber-bg font-mono font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-cyber-yellow-bright hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]"
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
              className="flex items-center gap-2 px-8 py-4 border border-cyber-yellow text-cyber-yellow font-mono font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-cyber-yellow/10"
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
              className="flex items-center gap-2 px-8 py-4 border border-cyber-orange text-cyber-orange font-mono font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-cyber-orange/10"
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
                className="w-12 h-12 flex items-center justify-center border border-cyber-yellow/30 text-cyber-yellow/70 hover:text-cyber-yellow hover:border-cyber-yellow transition-all duration-300"
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
          className="flex flex-col items-center gap-2 text-cyber-yellow/50 hover:text-cyber-yellow transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-4 w-20 h-20 border-l-2 border-t-2 border-cyber-yellow/30" />
      <div className="absolute top-20 right-4 w-20 h-20 border-r-2 border-t-2 border-cyber-yellow/30" />
      <div className="absolute bottom-20 left-4 w-20 h-20 border-l-2 border-b-2 border-cyber-orange/30" />
      <div className="absolute bottom-20 right-4 w-20 h-20 border-r-2 border-b-2 border-cyber-orange/30" />
    </section>
  )
}
