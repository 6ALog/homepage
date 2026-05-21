import React, { useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

interface ParallaxCardProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export function ParallaxCard({ children, className = '', intensity = 8 }: ParallaxCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const rotateX = useSpring(0, { stiffness: 200, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 })

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    rotateY.set(dx * intensity)
    rotateX.set(-dy * intensity)
  }

  function onMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
    setIsHovered(false)
  }

  return (
    <div style={{ perspective: '1000px' }}>
      <motion.div
        ref={ref}
        className={`glass rounded-2xl transition-shadow duration-300 ${isHovered ? 'shadow-card-hover border-brand-cyan/40' : ''} ${className}`}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={onMouseLeave}
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
