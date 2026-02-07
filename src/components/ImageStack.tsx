'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, FileText, X, ChevronLeft, ChevronRight } from 'lucide-react'

interface StackItem {
  type: 'image' | 'video' | 'pdf'
  src: string
  alt?: string
}

interface ImageStackProps {
  items: StackItem[]
  title: string
}

export default function ImageStack({ items, title }: ImageStackProps) {
  const [isSpread, setIsSpread] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  if (items.length === 0) {
    // Placeholder for empty galleries
    return (
      <div className="relative aspect-video bg-gradient-to-br from-cyber-yellow/10 to-cyber-orange/10 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-dashed border-cyber-yellow/50 rounded-lg flex items-center justify-center mx-auto mb-2">
            <span className="text-cyber-yellow/50 text-2xl">+</span>
          </div>
          <span className="text-gray-500 text-sm font-mono">Coming Soon</span>
        </div>
      </div>
    )
  }

  const handleItemClick = (index: number) => {
    if (items[index].type === 'pdf') {
      window.open(items[index].src, '_blank')
    } else {
      setSelectedIndex(index)
    }
  }

  const renderStackItem = (item: StackItem, index: number) => {
    const offset = index * 4
    const rotation = (index - Math.floor(items.length / 2)) * 2
    const spreadRotation = (index - Math.floor(items.length / 2)) * 5
    const spreadOffset = (index - Math.floor(items.length / 2)) * 40

    return (
      <motion.div
        key={index}
        className="absolute inset-0 cursor-pointer"
        initial={false}
        animate={{
          x: isSpread ? spreadOffset : 0,
          y: isSpread ? 0 : offset,
          rotate: isSpread ? spreadRotation : rotation,
          scale: isSpread ? 0.9 : 1 - index * 0.02,
          zIndex: items.length - index,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
        }}
        onClick={() => handleItemClick(index)}
        whileHover={{ scale: isSpread ? 0.95 : 1.02 }}
      >
        <div className="w-full h-full border border-cyber-yellow/30 bg-cyber-bg overflow-hidden shadow-lg">
          {item.type === 'image' && (
            <Image
              src={item.src}
              alt={item.alt || `${title} - ${index + 1}`}
              fill
              className="object-cover"
            />
          )}
          {item.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyber-yellow/10 to-cyber-orange/10">
              <div className="w-16 h-16 rounded-full bg-cyber-yellow/20 border border-cyber-yellow flex items-center justify-center">
                <Play className="w-8 h-8 text-cyber-yellow ml-1" />
              </div>
            </div>
          )}
          {item.type === 'pdf' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-cyber-yellow/10 to-cyber-orange/10">
              <FileText className="w-12 h-12 text-cyber-yellow mb-2" />
              <span className="text-cyber-yellow text-xs font-mono">PDF</span>
            </div>
          )}
        </div>
      </motion.div>
    )
  }

  return (
    <>
      {/* Stack Container */}
      <div
        ref={containerRef}
        className="relative aspect-video bg-cyber-bg overflow-hidden"
        onMouseEnter={() => setIsSpread(true)}
        onMouseLeave={() => setIsSpread(false)}
      >
        {/* Render items in reverse order so first item is on top */}
        {[...items].reverse().map((item, index) =>
          renderStackItem(item, items.length - 1 - index)
        )}

        {/* Item count badge */}
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-cyber-bg/90 border border-cyber-yellow/50 text-cyber-yellow text-xs font-mono z-50 pointer-events-none">
          {items.length} items
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex(null)
            }}
            className="absolute top-20 right-6 p-2 text-cyber-yellow hover:text-cyber-yellow-bright transition-colors z-[10000]"
          >
            <X size={40} strokeWidth={3} />
          </button>

          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedIndex(prev => prev === 0 ? items.length - 1 : (prev ?? 0) - 1)
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cyber-bg border border-cyber-yellow text-cyber-yellow flex items-center justify-center hover:bg-cyber-yellow hover:text-cyber-bg transition-colors z-50"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedIndex(prev => prev === items.length - 1 ? 0 : (prev ?? 0) + 1)
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cyber-bg border border-cyber-yellow text-cyber-yellow flex items-center justify-center hover:bg-cyber-yellow hover:text-cyber-bg transition-colors z-50"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div className="relative max-w-5xl max-h-[80vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            {items[selectedIndex].type === 'image' && (
              <Image
                src={items[selectedIndex].src}
                alt={items[selectedIndex].alt || title}
                fill
                className="object-contain"
              />
            )}
            {items[selectedIndex].type === 'video' && (
              <video
                src={items[selectedIndex].src}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            )}
          </div>

          {/* Thumbnail strip in modal */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  if (item.type !== 'pdf') {
                    setSelectedIndex(index)
                  }
                }}
                className={`relative w-16 h-12 border-2 transition-colors overflow-hidden ${
                  index === selectedIndex
                    ? 'border-cyber-yellow'
                    : 'border-gray-600 hover:border-cyber-yellow/50'
                }`}
              >
                {item.type === 'image' && (
                  <Image src={item.src} alt="" fill className="object-cover" />
                )}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-cyber-bg">
                    <Play className="w-4 h-4 text-cyber-yellow" />
                  </div>
                )}
                {item.type === 'pdf' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-cyber-bg">
                    <FileText className="w-4 h-4 text-cyber-yellow" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}
