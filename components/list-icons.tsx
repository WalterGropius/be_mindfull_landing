type IconProps = { className?: string }

export function SmileyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#E3FFE2" />
      <circle cx="14.5" cy="17" r="1.8" fill="#2D2C2B" />
      <circle cx="25.5" cy="17" r="1.8" fill="#2D2C2B" />
      <path
        d="M13 24 Q20 30 27 24"
        stroke="#2D2C2B"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function CheckIconLight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#E3FFE2" />
      <path
        d="M12 21 L18 27 L29 14"
        stroke="#2D2C2B"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function PlusIconLight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#E3FFE2" />
      <path
        d="M20 12 V28 M12 20 H28"
        stroke="#2D2C2B"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
