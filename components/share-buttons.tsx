"use client"

import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react"

interface ShareButtonsProps {
  title: string
  slug: string
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
  const url = `${baseUrl}/articles/${slug}`

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank",
    )
  }

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
  }

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank")
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    alert("Link copied to clipboard!")
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={shareOnTwitter}
        className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-full"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-5 h-5" />
      </button>
      <button
        onClick={shareOnFacebook}
        className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-full"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-5 h-5" />
      </button>
      <button
        onClick={shareOnLinkedIn}
        className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-full"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </button>
      <button
        onClick={copyToClipboard}
        className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-full"
        aria-label="Copy link"
      >
        <LinkIcon className="w-5 h-5" />
      </button>
    </div>
  )
}

