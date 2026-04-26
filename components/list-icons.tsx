type IconProps = { className?: string }

export function SmileyIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 46 46"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M23.1258 41.7092C33.02 41.7092 41.0408 33.6885 41.0408 23.7943C41.0408 13.9001 33.02 5.87939 23.1258 5.87939C13.2317 5.87939 5.21094 13.9001 5.21094 23.7943C5.21094 33.6885 13.2317 41.7092 23.1258 41.7092Z"
        fill="#E3FFE2"
      />
      <path
        d="M34.9765 24.2798C34.9765 24.2798 33.8725 31.1547 26.6128 32.6434C20.9256 33.8143 15.7401 30.9707 14.0674 27.6252"
        stroke="#231F20"
        strokeWidth="3.6"
        strokeLinecap="round"
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
