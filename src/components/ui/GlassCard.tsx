import React from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  onClick?: () => void
}

export function GlassCard({ children, className = '', hover = true, glow = false, onClick }: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl ${glow ? 'animate-pulse-glow' : ''} ${hover ? 'hover:border-brand-cyan/40 hover:shadow-card-hover transition-all duration-300' : ''} ${className}`}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}
