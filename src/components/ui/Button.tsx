import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg select-none cursor-pointer'

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
  }

  const variants = {
    primary:
      'bg-brand-cyan text-brand-bg font-bold tracking-tight hover:bg-white active:scale-[0.97] shadow-cyan-glow hover:shadow-cyan-glow-lg',
    ghost:
      'glass text-brand-textSecondary hover:text-white hover:border-brand-cyan/40 active:scale-[0.97]',
    outline:
      'border border-brand-cyan/30 text-brand-cyan bg-transparent hover:bg-brand-cyan/10 hover:border-brand-cyan active:scale-[0.97]',
  }

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={cls}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={cls}
      whileTap={{ scale: 0.97 }}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {children}
    </motion.button>
  )
}
