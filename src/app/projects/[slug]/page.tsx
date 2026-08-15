'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Target, User, AlertTriangle } from 'lucide-react'
import { projectsData } from '@/lib/data'
import ProjectGallery from '@/components/ProjectGallery'

type GalleryItem = { type: 'image' | 'video' | 'pdf'; src: string; alt?: string }
type IssueRow = { issue: string; fix: string }

function SectionHeader({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <h3 className="text-cyber-yellow font-mono text-sm tracking-wider mb-3 flex items-center gap-2">
      <Icon className="w-4 h-4" />
      {label}
    </h3>
  )
}

function StageBody({
  deliverables,
  role,
  roleDetails,
  issues,
}: {
  deliverables: string[]
  role: string
  roleDetails?: string[]
  issues: IssueRow[]
}) {
  return (
    <div className="space-y-8">
      <div>
        <SectionHeader icon={Target} label="Project Deliverables" />
        <ul className="space-y-2">
          {deliverables.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="w-1.5 h-1.5 bg-cyber-yellow rounded-full flex-shrink-0 mt-1.5" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SectionHeader icon={User} label="My Role &amp; What I Did" />
        <p className="text-gray-300 text-sm leading-relaxed mb-3">{role}</p>
        {roleDetails && roleDetails.length > 0 && (
          <ul className="space-y-2">
            {roleDetails.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="font-mono text-cyber-yellow/70 text-xs mt-0.5 flex-shrink-0 w-4">{i + 1}.</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <SectionHeader icon={AlertTriangle} label="Issues I Overcame" />
        <div className="space-y-3">
          {issues.map((row, i) => (
            <div key={i} className="cyber-card p-4 border-cyber-orange/30">
              <p className="text-white text-sm font-medium mb-1">{row.issue}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{row.fix}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StageGallery({ gallery, title }: { gallery: GalleryItem[]; title: string }) {
  return gallery && gallery.length > 0 ? (
    <ProjectGallery items={gallery} title={title} />
  ) : (
    <div className="cyber-card aspect-video flex items-center justify-center">
      <span className="text-gray-500 text-sm font-mono">No media yet</span>
    </div>
  )
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => 'slug' in p && p.slug === params.slug)

  const hasStages = project && 'stages' in project && Array.isArray(project.stages) && project.stages.length > 0
  const hasDetails = project && 'details' in project && project.details

  if (!project || (!hasStages && !hasDetails)) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-cyber-yellow hover:text-cyber-yellow-bright transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-mono">Back to Projects</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <span className="px-2 py-1 bg-cyber-yellow/20 border border-cyber-yellow text-cyber-yellow text-xs font-mono">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2 py-1 bg-cyber-orange/20 border border-cyber-orange text-white text-xs font-mono">
                Featured
              </span>
            )}
            {'inProgress' in project && project.inProgress && (
              <span className="px-2 py-1 bg-black border border-white text-white text-xs font-mono">
                In Progress
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-gray-400 max-w-3xl leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-cyber-bg text-gray-400 text-xs font-mono border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {hasStages ? (
          <div className="space-y-16">
            {project.stages!.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h2 className="text-2xl font-display font-bold text-white">{stage.label}</h2>
                  {stage.status && (
                    <span className="px-2 py-1 bg-cyber-bg border border-gray-700 text-gray-400 text-xs font-mono">
                      {stage.status}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-3xl">{stage.summary}</p>

                <div className="mb-8">
                  <StageGallery gallery={stage.gallery} title={stage.label} />
                </div>

                <StageBody
                  deliverables={stage.deliverables}
                  role={stage.role}
                  roleDetails={(stage as { roleDetails?: string[] }).roleDetails}
                  issues={stage.issues}
                />

                {i < project.stages!.length - 1 && (
                  <div className="mt-16 border-b border-gray-800" />
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-10"
            >
              <StageGallery gallery={project.gallery ?? []} title={project.title} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <StageBody
                deliverables={project.details!.deliverables}
                role={project.details!.role}
                roleDetails={project.details!.roleDetails}
                issues={project.details!.issues}
              />
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}
