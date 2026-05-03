/**
 * Accuarion Logo — "Bracketed A" (Concept 7)
 *
 * Two open accounting brackets [  ] frame the gradient A monogram.
 * Brackets in accounting denote signed/measured values; here they signal
 * "what's inside has been audited and recorded."
 *
 * Color tokens preserve the existing brand: blue #4F7DFF -> amber #E8B04C
 * at 135deg.
 *
 * Usage:
 *   <Logo size={28} idSuffix="nav" />
 *
 * idSuffix is required when more than one Logo renders on the same page —
 * SVG gradient IDs must be unique within a document. Pass a different
 * suffix per call site (e.g. "nav", "footer").
 */
export default function Logo({ size = 28, idSuffix = 'default', className = '', style }) {
  const gradId = `logoGrad-${idSuffix}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`shrink-0 ${className}`}
      style={style}
      aria-hidden="true"
    >
      <defs>
        {/* 135deg gradient: blue (top-left) -> amber (bottom-right) */}
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F7DFF" />
          <stop offset="100%" stopColor="#E8B04C" />
        </linearGradient>
      </defs>

      {/* Left accounting bracket [ */}
      <path
        d="M18 16 L14 16 L14 48 L18 48"
        stroke={`url(#${gradId})`}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right accounting bracket ] */}
      <path
        d="M46 16 L50 16 L50 48 L46 48"
        stroke={`url(#${gradId})`}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* The A — peak + crossbar */}
      <path
        d="M22 44 L32 22 L42 44 M26 37 L38 37"
        stroke={`url(#${gradId})`}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
