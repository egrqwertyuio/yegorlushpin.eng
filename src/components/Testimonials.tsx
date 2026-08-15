'use client'

import React, {
  useState, useRef, useEffect, useMemo, useImperativeHandle,
  Children, cloneElement, isValidElement,
  forwardRef, createRef,
  type ReactElement,
} from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, Send, CheckCircle, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { testimonialsData } from '@/lib/data'

// ── CardSwap (inlined from react-bits, adapted for manual prev/next control) ──

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, style, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      borderRadius: '2px',
      border: '1px solid rgba(255,255,255,0.2)',
      background: '#0a0a0a',
      transformStyle: 'preserve-3d',
      willChange: 'transform',
      backfaceVisibility: 'hidden',
      ...style,
    }}
    className={`${customClass ?? ''} ${rest.className ?? ''}`}
  />
))
Card.displayName = 'Card'

interface CardSwapHandle {
  next: () => void
  prev: () => void
}

interface CardSwapProps {
  width?: number
  height?: number
  cardDistance?: number
  verticalDistance?: number
  skewAmount?: number
  easing?: 'elastic' | 'power'
  children: React.ReactNode
}

const CardSwap = forwardRef<CardSwapHandle, CardSwapProps>(function CardSwap({
  width = 340,
  height = 220,
  cardDistance = 50,
  verticalDistance = 55,
  skewAmount = 4,
  easing = 'elastic',
  children,
}, handleRef) {
  const config =
    easing === 'elastic'
      ? { ease: 'elastic.out(0.7,0.9)', dur: 0.7 }
      : { ease: 'power2.inOut', dur: 0.5 }

  const childArr = useMemo(() => Children.toArray(children), [children])
  const refs = useMemo(() => childArr.map(() => createRef<HTMLDivElement>()), [childArr.length])
  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i))
  const animating = useRef(false)
  const container = useRef<HTMLDivElement>(null)

  const makeSlot = (i: number) => ({
    x: i * cardDistance,
    y: -i * verticalDistance,
    z: -i * cardDistance * 1.5,
    zIndex: childArr.length - i,
  })

  const placeNow = (el: HTMLDivElement, slot: ReturnType<typeof makeSlot>) =>
    gsap.set(el, { x: slot.x, y: slot.y, z: slot.z, xPercent: -50, yPercent: -50, skewY: skewAmount, transformOrigin: 'center center', zIndex: slot.zIndex, force3D: true })

  useEffect(() => {
    order.current = Array.from({ length: childArr.length }, (_, i) => i)
    refs.forEach((r, i) => { if (r.current) placeNow(r.current, makeSlot(i)) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refs.length])

  const goTo = (direction: 1 | -1) => {
    if (childArr.length < 2 || animating.current) return
    animating.current = true

    order.current = direction === 1
      ? [...order.current.slice(1), order.current[0]]
      : [order.current[order.current.length - 1], ...order.current.slice(0, -1)]

    let pending = order.current.length
    order.current.forEach((cardIdx, slotIdx) => {
      const el = refs[cardIdx].current
      if (!el) { pending--; return }
      const slot = makeSlot(slotIdx)
      gsap.set(el, { zIndex: slot.zIndex })
      gsap.to(el, {
        x: slot.x, y: slot.y, z: slot.z,
        duration: config.dur, ease: config.ease,
        onComplete: () => { pending--; if (pending <= 0) animating.current = false },
      })
    })
  }

  useImperativeHandle(handleRef, () => ({ next: () => goTo(1), prev: () => goTo(-1) }))

  const rendered = childArr.map((child, i) => {
    if (!isValidElement(child)) return child
    const el = child as ReactElement<CardProps & { ref?: React.Ref<HTMLDivElement> }>
    return cloneElement(el, { key: i, ref: refs[i], style: { width, height, ...(el.props.style ?? {}) } })
  })

  return (
    <div
      ref={container}
      style={{ position: 'relative', width, height, perspective: '900px', overflow: 'visible' }}
    >
      {rendered}
    </div>
  )
})

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
  const cardSwapRef = useRef<CardSwapHandle>(null)

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

        {/* CardSwap display — manual prev/next, no timer */}
        {hasTestimonials && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center mb-16"
          >
            <div className="flex justify-center" style={{ height: 340, overflow: 'visible' }}>
              <CardSwap ref={cardSwapRef} width={400} height={300} cardDistance={55} verticalDistance={60}>
                {testimonialsData.map((t) => (
                  <Card key={t.id}>
                    <div className="w-full h-full flex flex-col justify-between p-6">
                      <div className="space-y-3 overflow-y-auto">
                        <StarRating value={t.rating} />
                        <p className="text-gray-300 text-sm leading-relaxed">
                          &ldquo;{t.comment}&rdquo;
                        </p>
                      </div>
                      <div className="pt-3 border-t border-cyber-yellow/10 flex items-center justify-between">
                        <div>
                          <p className="text-white text-sm font-medium">{t.name}</p>
                          <p className="text-gray-500 text-xs font-mono">{t.relationship}</p>
                        </div>
                        <p className="text-gray-600 text-xs font-mono">{t.date}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>

            {testimonialsData.length > 1 && (
              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={() => cardSwapRef.current?.prev()}
                  className="w-9 h-9 flex items-center justify-center border border-cyber-yellow/30 text-cyber-yellow hover:bg-cyber-yellow/10 hover:border-cyber-yellow transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => cardSwapRef.current?.next()}
                  className="w-9 h-9 flex items-center justify-center border border-cyber-yellow/30 text-cyber-yellow hover:bg-cyber-yellow/10 hover:border-cyber-yellow transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
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
