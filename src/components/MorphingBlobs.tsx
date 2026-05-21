export function MorphingBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Primary blob */}
      <div
        className="absolute animate-blob"
        style={{
          width: '600px',
          height: '600px',
          top: '-10%',
          left: '-5%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.28) 0%, rgba(37,99,235,0.18) 60%, transparent 80%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Secondary blob */}
      <div
        className="absolute animate-blob-slow"
        style={{
          width: '500px',
          height: '500px',
          top: '30%',
          right: '-8%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, rgba(129,140,248,0.15) 60%, transparent 80%)',
          filter: 'blur(90px)',
        }}
      />
      {/* Tertiary blob */}
      <div
        className="absolute animate-blob-delayed"
        style={{
          width: '400px',
          height: '400px',
          bottom: '10%',
          left: '25%',
          background: 'radial-gradient(circle, rgba(15,23,42,0.8) 0%, rgba(56,189,248,0.12) 60%, transparent 80%)',
          filter: 'blur(70px)',
        }}
      />
      {/* Accent glow */}
      <div
        className="absolute"
        style={{
          width: '300px',
          height: '300px',
          top: '60%',
          right: '30%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  )
}
