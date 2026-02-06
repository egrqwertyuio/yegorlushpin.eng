'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Zap, Heart } from 'lucide-react'
import { siteConfig, navLinks } from '@/lib/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: siteConfig.social.github, label: 'GitHub' },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: 'Email' },
  ]

  return (
    <footer className="relative border-t border-cyber-cyan/20 bg-cyber-bg-light">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.a
              href="#"
              className="flex items-center gap-2 text-cyber-cyan font-display font-bold text-xl"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-6 h-6" />
              <span>{siteConfig.name}</span>
            </motion.a>
            <p className="text-gray-400 text-sm max-w-xs">
              {siteConfig.title} specializing in embedded systems, PCB design, and IoT solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cyber-cyan font-mono text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-cyber-cyan transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-cyber-cyan/50 mr-2">&gt;</span>
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-cyber-cyan font-mono text-sm uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/10 transition-colors"
                  whileHover={{ scale: 1.1, borderColor: 'var(--cyber-cyan)' }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              {siteConfig.email}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              {siteConfig.location}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-cyber-cyan/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-cyber-magenta" /> and lots of solder
          </p>
        </div>
      </div>

      {/* Circuit decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-cyber-cyan opacity-30" />
    </footer>
  )
}
