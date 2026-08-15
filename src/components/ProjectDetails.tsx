'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Users, DollarSign, Cpu, Wrench, CheckCircle, Lightbulb, ClipboardList } from 'lucide-react'

interface BomRow {
  item: string
  qty: string
  unitCost: string
}

export interface ProjectDetailsData {
  objective: string
  team?: string[]
  bom?: BomRow[]
  totalCost?: string
  architecture?: string
  process?: string[]
  results?: string
  brainstorm?: string[]
}

interface ProjectDetailsProps {
  title: string
  details: ProjectDetailsData
  onClose: () => void
}

function SectionHeader({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <Icon className="w-4 h-4 text-cyber-yellow flex-shrink-0" />
      <span className="font-mono text-cyber-yellow text-xs tracking-widest">{label}</span>
      <div className="flex-1 h-px bg-cyber-yellow/20" />
    </div>
  )
}

export default function ProjectDetails({ title, details, onClose }: ProjectDetailsProps) {
  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer — slides in from right */}
      <motion.div
        key="drawer"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-full max-w-2xl z-[9999] bg-cyber-bg border-l border-cyber-yellow/30 flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-cyber-yellow/20 flex-shrink-0">
          <div>
            <span className="font-mono text-cyber-yellow text-xs tracking-widest block mb-1">
              // Project Documentation
            </span>
            <h2 className="text-xl font-semibold text-white">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 border border-gray-700 text-gray-400 hover:border-cyber-yellow hover:text-cyber-yellow transition-colors flex-shrink-0 ml-4"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">

          {/* Objective */}
          <div>
            <SectionHeader icon={ClipboardList} label="Objective" />
            <p className="text-gray-300 text-sm leading-relaxed">{details.objective}</p>
          </div>

          {/* Team */}
          {details.team && details.team.length > 0 && (
            <div>
              <SectionHeader icon={Users} label="Team" />
              <ul className="space-y-1">
                {details.team.map((member, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyber-yellow rounded-full flex-shrink-0" />
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Bill of Materials */}
          {details.bom && details.bom.length > 0 && (
            <div>
              <SectionHeader icon={DollarSign} label="Bill of Materials" />
              <div className="border border-gray-800 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-800 bg-cyber-yellow/5">
                      <th className="text-left px-3 py-2 font-mono text-gray-500 text-xs tracking-wider">Component</th>
                      <th className="text-center px-3 py-2 font-mono text-gray-500 text-xs tracking-wider w-16">Qty</th>
                      <th className="text-right px-3 py-2 font-mono text-gray-500 text-xs tracking-wider w-24">Unit Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {details.bom.map((row, i) => (
                      <tr key={i} className="border-b border-gray-800/50 last:border-0 hover:bg-cyber-yellow/5 transition-colors">
                        <td className="px-3 py-2 text-gray-300">{row.item}</td>
                        <td className="px-3 py-2 text-center text-gray-400 font-mono text-xs">{row.qty}</td>
                        <td className="px-3 py-2 text-right text-cyber-yellow font-mono text-xs">{row.unitCost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {details.totalCost && (
                <div className="mt-2 flex justify-end">
                  <span className="font-mono text-xs text-gray-500 tracking-wider mr-2">Total:</span>
                  <span className="font-mono text-sm text-cyber-orange font-semibold">{details.totalCost}</span>
                </div>
              )}
            </div>
          )}

          {/* Architecture */}
          {details.architecture && (
            <div>
              <SectionHeader icon={Cpu} label="System Architecture" />
              <p className="text-gray-300 text-sm leading-relaxed">{details.architecture}</p>
            </div>
          )}

          {/* Process */}
          {details.process && details.process.length > 0 && (
            <div>
              <SectionHeader icon={Wrench} label="Design & Build Process" />
              <ol className="space-y-2">
                {details.process.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="font-mono text-cyber-yellow/70 text-xs mt-0.5 flex-shrink-0 w-4">{i + 1}.</span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Results */}
          {details.results && (
            <div>
              <SectionHeader icon={CheckCircle} label="Results" />
              <p className="text-gray-300 text-sm leading-relaxed">{details.results}</p>
            </div>
          )}

          {/* Brainstorm (in-progress projects) */}
          {details.brainstorm && details.brainstorm.length > 0 && (
            <div>
              <SectionHeader icon={Lightbulb} label="Planned Features / Brainstorm" />
              <ul className="space-y-2">
                {details.brainstorm.map((idea, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-cyber-orange rounded-full flex-shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{idea}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 p-4 border-t border-cyber-yellow/20">
          <button
            onClick={onClose}
            className="w-full py-2.5 font-mono text-xs tracking-widest border border-gray-700 text-gray-400 hover:border-cyber-yellow hover:text-cyber-yellow transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
