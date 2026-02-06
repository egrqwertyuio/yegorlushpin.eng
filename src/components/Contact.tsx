'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, MapPin, Clock, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react'
import { siteConfig } from '@/lib/data'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Simulate form submission - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // For demo purposes, always succeed
    setStatus('success')
    setFormState({ name: '', email: '', message: '' })

    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-magenta/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-cyber-cyan text-sm uppercase tracking-widest">
            // Get In Touch
          </span>
          <h2 className="section-heading mt-4">
            Contact Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
            Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
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
                  <div className="w-12 h-12 flex items-center justify-center bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan group-hover:bg-cyber-cyan/20 transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-mono uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-cyber-cyan transition-colors"
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
            <div>
              <h3 className="text-cyber-cyan font-mono text-sm uppercase tracking-wider mb-4">
                Connect
              </h3>
              <div className="flex gap-4">
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
                    className="w-12 h-12 flex items-center justify-center border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/10 hover:border-cyber-cyan transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Circuit decoration */}
            <div className="hidden lg:block relative h-32">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 100"
                fill="none"
              >
                <motion.path
                  d="M0 50 H100 V20 H200 V80 H300 V50 H400"
                  stroke="url(#circuit-gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 0.5 }}
                />
                <defs>
                  <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00ffff" />
                    <stop offset="50%" stopColor="#ff00ff" />
                    <stop offset="100%" stopColor="#00ffff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="cyber-card p-8 space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-cyber-cyan font-mono text-sm uppercase tracking-wider mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-bg border border-cyber-cyan/30 text-white placeholder-gray-500 focus:border-cyber-cyan focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-cyber-cyan font-mono text-sm uppercase tracking-wider mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-bg border border-cyber-cyan/30 text-white placeholder-gray-500 focus:border-cyber-cyan focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-cyber-cyan font-mono text-sm uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-cyber-bg border border-cyber-cyan/30 text-white placeholder-gray-500 focus:border-cyber-cyan focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full flex items-center justify-center gap-2 px-8 py-4 font-mono font-semibold uppercase tracking-wider transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-green-500 text-white'
                    : status === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-cyber-cyan text-cyber-bg hover:bg-cyber-cyan/90 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]'
                }`}
                style={{
                  clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
                }}
                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              >
                {status === 'sending' && (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-cyber-bg border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                )}
                {status === 'error' && (
                  <>
                    <AlertCircle size={20} />
                    Error - Try Again
                  </>
                )}
                {status === 'idle' && (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Form note */}
              <p className="text-gray-500 text-xs text-center font-mono">
                * This form is for demo purposes. Connect the backend to make it functional.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
