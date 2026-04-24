// Ambient aurora — fixed to viewport, slow animation, low opacity.
// Gives the page a subtle AI/tech feel without being loud.
export default function Aurora() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 grain-overlay">
      {/* Base dark wash */}
      <div className="absolute inset-0 bg-obsidian-900" />

      {/* Three aurora blobs, each with different hue + animation timing */}
      <div
        className="aurora-blob animate-aurora"
        style={{
          top: '-20%',
          left: '-10%',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle at center, rgba(79, 125, 255, 0.35) 0%, transparent 60%)',
          animationDelay: '0s',
        }}
      />
      <div
        className="aurora-blob animate-aurora"
        style={{
          top: '15%',
          right: '-20%',
          width: '55vw',
          height: '55vw',
          background: 'radial-gradient(circle at center, rgba(232, 176, 76, 0.18) 0%, transparent 60%)',
          animationDelay: '-5s',
        }}
      />
      <div
        className="aurora-blob animate-aurora"
        style={{
          bottom: '-25%',
          left: '20%',
          width: '70vw',
          height: '70vw',
          background: 'radial-gradient(circle at center, rgba(40, 80, 224, 0.25) 0%, transparent 65%)',
          animationDelay: '-10s',
        }}
      />

      {/* Vignette for focus */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10, 10, 15, 0.7) 100%)',
        }}
      />
    </div>
  )
}
