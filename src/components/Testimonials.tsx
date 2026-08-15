'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, Send, CheckCircle, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonialsData } from '@/lib/data'

// ── StarRating ────────────────────────────────────────────────────────────────

function StarRating({ value, onChange }: { value: number; onChange?: (v: number) => void }) {
  const [hovered, setHovered] = useState(0)
  const interactive = !!onChange
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type={interactive ? 'button' : undefined}
          onClick={() => onChange?.(star)}
          onMouseEnter={() => interactive && setHovered(star)}
          onMouseLeave={() => interactive && setHovered(0)}
          className={interactive ? 'cursor-pointer' : 'cursor-default'}
          aria-label={interactive ? `Rate ${star} stars` : undefined}
        >
          <Star
            size={interactive ? 22 : 14}
            className={star <= (hovered || value) ? 'fill-cyber-yellow text-cyber-yellow' : 'text-gray-700'}
          />
        </button>
      ))}
    </div>
  )
}

// ── Testimonials section ──────────────────────────────────────────────────────

const RELATIONSHIPS = ['Teammate', 'Project Collaborator', 'Professor / TA', 'Co-op / Internship Colleague', 'Other']

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formOpen, setFormOpen] = useState(false)
  const [rating, setRating] = useState(0)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (rating === 0) { setErrorMsg('Please select a rating.'); return }
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
      relationship: (form.elements.namedItem('relationship') as HTMLSelectElement).value,
      rating,
      comment: (form.elements.namedItem('comment') as HTMLTextAreaElement).value.trim(),
    }
    setStatus('loading'); setErrorMsg('')
    try {
      const res = await fetch('/api/testimonials', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      if (!res.ok) { const body = await res.json(); throw new Error(body.error || 'Something went wrong.') }
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  const hasTestimonials = testimonialsData.length > 0

  return (
    <section id="testimonials" className="py-20 relative" ref={ref}>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-cyber-yellow text-sm tracking-widest">
            // From People I&apos;ve Worked With
          </span>
          <h2 className="section-heading mt-4">Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Have we worked together? I&apos;d love to hear your feedback.
          </p>
        </motion.div>

        {/* Testimonial display — click-to-select, no auto-rotation */}
        {hasTestimonials && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative max-w-2xl mx-auto">
              {testimonialsData.length > 1 && (
                <button
                  onClick={() => setActiveTestimonial((i) => (i === 0 ? testimonialsData.length - 1 : i - 1))}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 w-9 h-9 flex items-center justify-center border border-cyber-yellow/30 text-cyber-yellow hover:bg-cyber-yellow/10 hover:border-cyber-yellow transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="cyber-card p-6 sm:p-8"
                >
                  <Quote className="w-6 h-6 text-cyber-yellow/40 mb-3" />
                  <StarRating value={testimonialsData[activeTestimonial].rating} />
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4 mb-6">
                    &ldquo;{testimonialsData[activeTestimonial].comment}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-cyber-yellow/10 flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-medium">{testimonialsData[activeTestimonial].name}</p>
                      <p className="text-gray-500 text-xs font-mono">{testimonialsData[activeTestimonial].relationship}</p>
                    </div>
                    <p className="text-gray-600 text-xs font-mono">{testimonialsData[activeTestimonial].date}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {testimonialsData.length > 1 && (
                <button
                  onClick={() => setActiveTestimonial((i) => (i === testimonialsData.length - 1 ? 0 : i + 1))}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 w-9 h-9 flex items-center justify-center border border-cyber-yellow/30 text-cyber-yellow hover:bg-cyber-yellow/10 hover:border-cyber-yellow transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              )}
            </div>

            {testimonialsData.length > 1 && (
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {testimonialsData.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTestimonial(i)}
                    className={`px-4 py-2 font-mono text-xs tracking-wider border transition-all duration-300 ${
                      i === activeTestimonial
                        ? 'bg-cyber-yellow text-cyber-bg border-cyber-yellow'
                        : 'border-gray-700 text-gray-400 hover:border-cyber-yellow/50 hover:text-gray-300'
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Leave a review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => setFormOpen((o) => !o)}
            className="w-full cyber-card p-4 flex items-center justify-between text-cyber-yellow hover:bg-cyber-yellow/5 transition-colors"
          >
            <span className="font-mono text-sm tracking-widest">
              {formOpen ? 'Close' : 'Leave a Review'}
            </span>
            {formOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          <AnimatePresence>
            {formOpen && (
              <motion.div
                key="form"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="cyber-card p-6 mt-px border-t-0">
                  {status === 'success' ? (
                    <div className="flex flex-col items-center gap-3 py-8 text-center">
                      <CheckCircle className="text-cyber-yellow" size={40} />
                      <p className="text-white font-medium">Thanks for your feedback!</p>
                      <p className="text-gray-400 text-sm">I&apos;ll review it and add it to the page shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block font-mono text-xs tracking-widest text-gray-400 mb-2">Your Name</label>
                        <input name="name" required maxLength={80} placeholder="Jane Smith" className="w-full bg-cyber-bg border border-cyber-yellow/20 text-white px-4 py-2 font-mono text-sm focus:outline-none focus:border-cyber-yellow/60 placeholder:text-gray-600" />
                      </div>
                      <div>
                        <label className="block font-mono text-xs tracking-widest text-gray-400 mb-2">How We Know Each Other</label>
                        <select name="relationship" required defaultValue="" className="w-full bg-cyber-bg border border-cyber-yellow/20 text-white px-4 py-2 font-mono text-sm focus:outline-none focus:border-cyber-yellow/60 appearance-none">
                          <option value="" disabled>Select one…</option>
                          {RELATIONSHIPS.map((r) => <option key={r} value={r}>{r}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono text-xs tracking-widest text-gray-400 mb-2">Rating</label>
                        <StarRating value={rating} onChange={setRating} />
                      </div>
                      <div>
                        <label className="block font-mono text-xs tracking-widest text-gray-400 mb-2">Comment</label>
                        <textarea name="comment" required maxLength={500} rows={4} placeholder="What was it like working with Yegor?" className="w-full bg-cyber-bg border border-cyber-yellow/20 text-white px-4 py-2 font-mono text-sm focus:outline-none focus:border-cyber-yellow/60 placeholder:text-gray-600 resize-none" />
                      </div>
                      {errorMsg && <p className="text-red-400 text-xs font-mono">{errorMsg}</p>}
                      <button type="submit" disabled={status === 'loading'} className="flex items-center gap-2 bg-cyber-yellow/10 border border-cyber-yellow/40 text-cyber-yellow px-6 py-2 font-mono text-sm tracking-widest hover:bg-cyber-yellow/20 transition-colors disabled:opacity-50">
                        <Send size={14} />
                        {status === 'loading' ? 'Sending…' : 'Submit'}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
