'use client'
import { cn } from '@/lib/utils'

interface ShimmerBorderProps {
  children: React.ReactNode
  className?: string
  shimmerColor?: string
  borderWidth?: number
}

export function ShimmerBorder({
  children,
  className,
  shimmerColor = '#C8873A',
  borderWidth = 1,
}: ShimmerBorderProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Animated shimmer border via conic-gradient mask */}
      <div
        className="absolute inset-0 rounded-none"
        style={{
          padding: borderWidth,
          background: `conic-gradient(from var(--shimmer-angle, 0deg), transparent 0%, transparent 50%, ${shimmerColor} 60%, transparent 70%, transparent 100%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          animation: 'shimmer-rotate 3s linear infinite',
        }}
      />
      {children}
    </div>
  )
}
