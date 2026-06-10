'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, Send, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { testimonialsData } from '@/lib/data'

const RELATIONSHIPS = [
  'Teammate',
  'Project Collaborator',
  'Professor / TA',
  'Co-op / Internship Colleague',
  'Other',
]

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
            size={interactive ? 24 : 16}
            className={
              star <= (hovered || value)
                ? 'fill-cyber-yellow text-cyber-yellow'
                : 'text-gray-600'
            }
          />
        </button>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formOpen, setFormOpen] = useState(false)
  const [rating, setRating] = useState(0)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

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

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error || 'Something went wrong.')
      }
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <section id="testimonials" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyber-yellow/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyber-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-cyber-yellow text-sm uppercase tracking-widest">
            // From People I&apos;ve Worked With
          </span>
          <h2 className="section-heading mt-4">Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Have we worked together? I&apos;d love to hear your feedback.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        {testimonialsData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {testimonialsData.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="cyber-card p-6 flex flex-col gap-3"
              >
                <StarRating value={t.rating} />
                <p className="text-gray-300 text-sm leading-relaxed">&ldquo;{t.comment}&rdquo;</p>
                <div className="mt-auto pt-3 border-t border-cyber-yellow/10 flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs font-mono">{t.relationship}</p>
                  </div>
                  <p className="text-gray-600 text-xs font-mono">{t.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Leave a review toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => setFormOpen((o) => !o)}
            className="w-full cyber-card p-4 flex items-center justify-between text-cyber-yellow hover:bg-cyber-yellow/5 transition-colors"
          >
            <span className="font-mono text-sm uppercase tracking-widest">
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
                      <p className="text-gray-400 text-sm">
                        I&apos;ll review it and add it to the page shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name */}
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-widest text-gray-400 mb-2">
                          Your Name
                        </label>
                        <input
                          name="name"
                          required
                          maxLength={80}
                          placeholder="Jane Smith"
                          className="w-full bg-cyber-bg border border-cyber-yellow/20 text-white px-4 py-2 font-mono text-sm focus:outline-none focus:border-cyber-yellow/60 placeholder:text-gray-600"
                        />
                      </div>

                      {/* Relationship */}
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-widest text-gray-400 mb-2">
                          How We Know Each Other
                        </label>
                        <select
                          name="relationship"
                          required
                          defaultValue=""
                          className="w-full bg-cyber-bg border border-cyber-yellow/20 text-white px-4 py-2 font-mono text-sm focus:outline-none focus:border-cyber-yellow/60 appearance-none"
                        >
                          <option value="" disabled>Select one…</option>
                          {RELATIONSHIPS.map((r) => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      </div>

                      {/* Star rating */}
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-widest text-gray-400 mb-2">
                          Rating
                        </label>
                        <StarRating value={rating} onChange={setRating} />
                      </div>

                      {/* Comment */}
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-widest text-gray-400 mb-2">
                          Comment
                        </label>
                        <textarea
                          name="comment"
                          required
                          maxLength={500}
                          rows={4}
                          placeholder="What was it like working with Yegor?"
                          className="w-full bg-cyber-bg border border-cyber-yellow/20 text-white px-4 py-2 font-mono text-sm focus:outline-none focus:border-cyber-yellow/60 placeholder:text-gray-600 resize-none"
                        />
                      </div>

                      {errorMsg && (
                        <p className="text-red-400 text-xs font-mono">{errorMsg}</p>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="flex items-center gap-2 bg-cyber-yellow/10 border border-cyber-yellow/40 text-cyber-yellow px-6 py-2 font-mono text-sm uppercase tracking-widest hover:bg-cyber-yellow/20 transition-colors disabled:opacity-50"
                      >
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
