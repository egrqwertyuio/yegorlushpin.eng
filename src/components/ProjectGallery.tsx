'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Play, FileText } from 'lucide-react'

interface GalleryItem {
  type: 'image' | 'video' | 'pdf'
  src: string
  alt?: string
}

interface ProjectGalleryProps {
  items: GalleryItem[]
  title: string
}

export default function ProjectGallery({ items, title }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const currentItem = items[currentIndex]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  const renderThumbnail = (item: GalleryItem, index: number) => {
    if (item.type === 'video') {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-cyber-bg">
          <Play className="w-8 h-8 text-cyber-yellow" />
        </div>
      )
    }
    if (item.type === 'pdf') {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-cyber-bg">
          <FileText className="w-8 h-8 text-cyber-yellow" />
        </div>
      )
    }
    return (
      <Image
        src={item.src}
        alt={item.alt || `${title} - ${index + 1}`}
        fill
        className="object-cover"
      />
    )
  }

  const renderMainContent = () => {
    if (currentItem.type === 'video') {
      return (
        <video
          src={currentItem.src}
          controls
          className="w-full h-full object-contain"
          playsInline
        />
      )
    }
    if (currentItem.type === 'pdf') {
      return (
        <a
          href={currentItem.src}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-cyber-yellow/10 to-cyber-orange/10 hover:from-cyber-yellow/20 hover:to-cyber-orange/20 transition-colors"
        >
          <FileText className="w-16 h-16 text-cyber-yellow mb-2" />
          <span className="text-cyber-yellow font-mono text-sm">View PDF</span>
        </a>
      )
    }
    return (
      <Image
        src={currentItem.src}
        alt={currentItem.alt || title}
        fill
        className="object-cover cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      />
    )
  }

  return (
    <>
      {/* Main Display */}
      <div className="relative aspect-video bg-cyber-bg overflow-hidden">
        {renderMainContent()}

        {/* Navigation arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious() }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-cyber-bg/80 border border-cyber-yellow/50 text-cyber-yellow flex items-center justify-center hover:bg-cyber-yellow hover:text-cyber-bg transition-colors z-10"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext() }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-cyber-bg/80 border border-cyber-yellow/50 text-cyber-yellow flex items-center justify-center hover:bg-cyber-yellow hover:text-cyber-bg transition-colors z-10"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Dots indicator */}
        {items.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(index) }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-cyber-yellow'
                    : 'bg-cyber-yellow/30 hover:bg-cyber-yellow/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Item count */}
        {items.length > 1 && (
          <div className="absolute top-2 right-2 px-2 py-1 bg-cyber-bg/80 text-cyber-yellow text-xs font-mono z-10">
            {currentIndex + 1} / {items.length}
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {items.length > 1 && (
        <div className="flex gap-1 mt-1 overflow-x-auto pb-1">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-12 h-12 flex-shrink-0 border transition-colors ${
                index === currentIndex
                  ? 'border-cyber-yellow'
                  : 'border-gray-700 hover:border-cyber-yellow/50'
              }`}
            >
              {renderThumbnail(item, index)}
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && currentItem.type === 'image' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-cyber-bg border border-cyber-yellow text-cyber-yellow flex items-center justify-center hover:bg-cyber-yellow hover:text-cyber-bg transition-colors"
            >
              <X size={20} />
            </button>

            {items.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrevious() }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cyber-bg border border-cyber-yellow text-cyber-yellow flex items-center justify-center hover:bg-cyber-yellow hover:text-cyber-bg transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goToNext() }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cyber-bg border border-cyber-yellow text-cyber-yellow flex items-center justify-center hover:bg-cyber-yellow hover:text-cyber-bg transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <div className="relative max-w-5xl max-h-[80vh] w-full h-full">
              <Image
                src={currentItem.src}
                alt={currentItem.alt || title}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
