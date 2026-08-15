'use client'

import React, {
  useState, useRef, useEffect, useMemo,
  Children, cloneElement, isValidElement,
  forwardRef, createRef,
  type ReactElement,
} from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, Send, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import gsap from 'gsap'
import { testimonialsData } from '@/lib/data'

// ── CardSwap (inlined from react-bits) ───────────────────────────────────────

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

interface CardSwapProps {
  width?: number
  height?: number
  cardDistance?: number
  verticalDistance?: number
  delay?: number
  pauseOnHover?: boolean
  skewAmount?: number
  easing?: 'elastic' | 'power'
  children: React.ReactNode
}

function CardSwap({
  width = 340,
  height = 220,
  cardDistance = 50,
  verticalDistance = 55,
  delay = 4000,
  pauseOnHover = true,
  skewAmount = 4,
  easing = 'elastic',
  children,
}: CardSwapProps) {
  const config =
    easing === 'elastic'
      ? { ease: 'elastic.out(0.6,0.9)', durDrop: 2, durMove: 2, durReturn: 2, promoteOverlap: 0.9, returnDelay: 0.05 }
      : { ease: 'power1.inOut', durDrop: 0.8, durMove: 0.8, durReturn: 0.8, promoteOverlap: 0.45, returnDelay: 0.2 }

  const childArr = useMemo(() => Children.toArray(children), [children])
  const refs = useMemo(() => childArr.map(() => createRef<HTMLDivElement>()), [childArr.length])
  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i))
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
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
    refs.forEach((r, i) => { if (r.current) placeNow(r.current, makeSlot(i)) })

    const swap = () => {
      if (order.current.length < 2) return
      const [front, ...rest] = order.current
      const elFront = refs[front].current!
      const tl = gsap.timeline()
      tlRef.current = tl

      tl.to(elFront, { y: '+=500', duration: config.durDrop, ease: config.ease })
      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`)
      rest.forEach((idx, i) => {
        const el = refs[idx].current!
        const slot = makeSlot(i)
        tl.set(el, { zIndex: slot.zIndex }, 'promote')
        tl.to(el, { x: slot.x, y: slot.y, z: slot.z, duration: config.durMove, ease: config.ease }, `promote+=${i * 0.15}`)
      })
      const backSlot = makeSlot(refs.length - 1)
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`)
      tl.call(() => { gsap.set(elFront, { zIndex: backSlot.zIndex }) }, undefined, 'return')
      tl.to(elFront, { x: backSlot.x, y: backSlot.y, z: backSlot.z, duration: config.durReturn, ease: config.ease }, 'return')
      tl.call(() => { order.current = [...rest, front] })
    }

    swap()
    intervalRef.current = setInterval(swap, delay)

    if (pauseOnHover && container.current) {
      const node = container.current
      const pause = () => { tlRef.current?.pause(); if (intervalRef.current) clearInterval(intervalRef.current) }
      const resume = () => { tlRef.current?.play(); intervalRef.current = setInterval(swap, delay) }
      node.addEventListener('mouseenter', pause)
      node.addEventListener('mouseleave', resume)
      return () => { node.removeEventListener('mouseenter', pause); node.removeEventListener('mouseleave', resume); if (intervalRef.current) clearInterval(intervalRef.current) }
    }

    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing])

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
}

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

        {/* CardSwap display */}
        {hasTestimonials && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-16"
            style={{ height: 440, overflow: 'visible' }}
          >
            <CardSwap width={400} height={300} delay={4500} pauseOnHover cardDistance={55} verticalDistance={60}>
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
