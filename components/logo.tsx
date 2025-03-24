import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: 40,
    md: 60,
    lg: 120,
  }

  const dimension = sizes[size]

  return (
    <Link href="/" className={`inline-block ${className}`}>
      <Image
        src="/images/netfortress-logo.png"
        alt="Net Fortress"
        width={dimension}
        height={dimension}
        priority
        className="transition-transform hover:scale-105"
      />
    </Link>
  )
}

