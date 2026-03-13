'use client'

import { ReactNode } from 'react'

interface LayoutWrapperProps {
  children: ReactNode
  className?: string
}

export default function LayoutWrapper({ children, className }: LayoutWrapperProps) {
  return (
    <div className={cn("min-h-screen bg-white", className || "")}>
      {children}
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
