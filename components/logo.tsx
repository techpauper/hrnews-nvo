import Link from "next/link"
import { Home } from "lucide-react"

interface LogoProps {
  className?: string
  size?: "small" | "medium" | "large"
  showText?: boolean
}

export function Logo({ className = "", size = "medium", showText = true }: LogoProps) {
  const sizes = {
    small: { iconSize: 16, fontSize: 14, padding: "p-1.5" },
    medium: { iconSize: 20, fontSize: 16, padding: "p-2" },
    large: { iconSize: 24, fontSize: 18, padding: "p-2.5" },
  }

  const { iconSize, fontSize, padding } = sizes[size]

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <div className={`bg-blue-600 rounded-lg ${padding} flex items-center justify-center`}>
        <Home size={iconSize} className="text-yellow-300" />
      </div>

      {showText && (
        <div className="ml-2">
          <div className="flex flex-col">
            <span className="font-serif font-bold text-white" style={{ fontSize: `${fontSize}px` }}>
              HOMEOWNERS
            </span>
            <span className="font-serif font-bold text-yellow-300" style={{ fontSize: `${fontSize}px` }}>
              RIGHTS
            </span>
          </div>
        </div>
      )}
    </Link>
  )
}

