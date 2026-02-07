'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MapPin, Clock, Github, Linkedin, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/data'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-yellow/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-cyber-yellow text-sm uppercase tracking-widest">
            // Get In Touch
          </span>
          <h2 className="section-heading mt-4">
            Contact Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
              },
              {
                icon: Phone,
                label: 'Phone',
                value: siteConfig.phone,
                href: `tel:${siteConfig.phone?.replace(/[^0-9]/g, '')}`,
              },
              {
                icon: MapPin,
                label: 'Location',
                value: siteConfig.location,
                href: null,
              },
              {
                icon: Clock,
                label: 'Availability',
                value: siteConfig.availability,
                href: null,
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="cyber-card p-4 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-cyber-yellow/10 border border-cyber-yellow/30 text-cyber-yellow group-hover:bg-cyber-yellow/20 transition-colors">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-mono uppercase tracking-wider">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white hover:text-cyber-yellow transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-cyber-yellow font-mono text-sm uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex justify-center gap-4">
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
                  className="w-12 h-12 flex items-center justify-center border border-cyber-yellow/30 text-cyber-yellow hover:bg-cyber-yellow/10 hover:border-cyber-yellow transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
