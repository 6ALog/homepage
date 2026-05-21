interface ThreeDWireCubeProps {
  className?: string
  size?: number
}

export function ThreeDWireCube({ className = '', size = 100 }: ThreeDWireCubeProps) {
  const half = size / 2
  const faceStyle: React.CSSProperties = {
    position: 'absolute',
    width: size,
    height: size,
    background: 'rgba(56, 189, 248, 0.06)',
    border: '2px solid rgba(56, 189, 248, 0.7)',
  }

  return (
    <div
      className={`${className}`}
      aria-hidden="true"
      style={{ perspective: `${size * 4}px`, width: size, height: size }}
    >
      <div
        style={{
          width: size,
          height: size,
          position: 'relative',
          transformStyle: 'preserve-3d',
          animation: 'cubeRotate 12s linear infinite',
        }}
      >
        <div style={{ ...faceStyle, transform: `rotateY(0deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateY(180deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateY(90deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateY(-90deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateX(90deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateX(-90deg) translateZ(${half}px)` }} />
      </div>
    </div>
  )
}
