import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/types"
import { Button } from "@/components/ui/button"

interface FeaturedPostProps {
  post: Post
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 md:h-full">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>{formatDate(post.date)}</span>
            <span className="mx-2">•</span>
            <Link href={`/categories/${post.category.slug}`} className="text-[#3D2E2E] hover:underline">
              {post.category.name}
            </Link>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-[#3D2E2E]">{post.title}</h3>
          </Link>
          <p className="text-gray-600 mb-6 text-lg">{post.excerpt}</p>
          <div className="mt-auto">
            <Button asChild className="bg-[#3D2E2E] hover:bg-[#4D3E3E] text-white">
              <Link href={`/blog/${post.slug}`}>Read Article</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}

