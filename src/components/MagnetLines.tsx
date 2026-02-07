'use client'

import { useRef, useEffect } from 'react'

interface MagnetLinesProps {
  rows?: number
  columns?: number
  containerSize?: string
  lineColor?: string
  lineWidth?: string
  lineHeight?: string
  baseAngle?: number
  className?: string
  style?: React.CSSProperties
}

export default function MagnetLines({
  rows = 9,
  columns = 9,
  containerSize = '100%',
  lineColor = '#FFD700',
  lineWidth = '1vmin',
  lineHeight = '6vmin',
  baseAngle = -10,
  className = '',
  style = {}
}: MagnetLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = container.querySelectorAll('span')

    const onPointerMove = (pointer: { x: number; y: number }) => {
      items.forEach(item => {
        const rect = item.getBoundingClientRect()
        const centerX = rect.x + rect.width / 2
        const centerY = rect.y + rect.height / 2

        const b = pointer.x - centerX
        const a = pointer.y - centerY
        const c = Math.sqrt(a * a + b * b) || 1
        const r = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1)

        ;(item as HTMLElement).style.setProperty('--rotate', `${r}deg`)
      })
    }

    const handlePointerMove = (e: PointerEvent) => {
      onPointerMove({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('pointermove', handlePointerMove)

    // Initialize with center position
    if (items.length) {
      const middleIndex = Math.floor(items.length / 2)
      const rect = items[middleIndex].getBoundingClientRect()
      onPointerMove({ x: rect.x, y: rect.y })
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  const total = rows * columns
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      className="block origin-center will-change-transform"
      style={{
        transform: `rotate(var(--rotate, ${baseAngle}deg))`,
        backgroundColor: lineColor,
        width: lineWidth,
        height: lineHeight,
      } as React.CSSProperties}
    />
  ))

  return (
    <div
      ref={containerRef}
      className={`grid justify-items-center items-center ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: '0px',
        ...style
      }}
    >
      {spans}
    </div>
  )
}
