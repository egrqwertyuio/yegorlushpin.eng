'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Heart } from 'lucide-react'

const goshaImages = [
  '/images/goshapics/IMG_2264.jpeg',
  '/images/goshapics/IMG_2306.jpeg',
  '/images/goshapics/IMG_2341.jpeg',
  '/images/goshapics/IMG_2525.jpeg',
]

export default function GoshaPage() {
  return (
    <div className="min-h-screen bg-cyber-bg py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 text-cyber-yellow hover:text-cyber-yellow-bright transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-mono">Back</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Meet <span className="text-cyber-yellow">Gosha</span>
          </h1>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            My 2 year old squishy pug <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goshaImages.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square rounded-sm overflow-hidden border border-cyber-yellow/30 hover:border-cyber-yellow transition-colors"
            >
              <Image
                src={src}
                alt={`Gosha the pug ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm font-mono mt-8"
        >
          You found the easter egg!
        </motion.p>
      </div>
    </div>
  )
}
