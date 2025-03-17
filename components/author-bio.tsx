import Image from "next/image"
import Link from "next/link"
import type { Author } from "@/lib/types"

interface AuthorBioProps {
  author: Author
}

export function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="relative w-24 h-24 rounded-full overflow-hidden">
          <Image src={author.avatar || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{author.name}</h3>
          <p className="text-gray-600 mb-4">{author.bio}</p>
          <div className="flex gap-4">
            {author.social.twitter && (
              <Link href={author.social.twitter} className="text-[#3D2E2E] hover:underline">
                Twitter
              </Link>
            )}
            {author.social.linkedin && (
              <Link href={author.social.linkedin} className="text-[#3D2E2E] hover:underline">
                LinkedIn
              </Link>
            )}
            {author.social.website && (
              <Link href={author.social.website} className="text-[#3D2E2E] hover:underline">
                Website
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

