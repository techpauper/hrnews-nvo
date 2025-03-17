import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/types"

interface FeaturedArticleProps {
  post: Post
}

export function FeaturedArticle({ post }: FeaturedArticleProps) {
  return (
    <article className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-64 md:h-auto">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>
        <div className="p-6 md:p-8">
          <Link href={`/categories/${post.category.slug}`} className="text-sm font-bold text-[#3D2E2E] hover:underline">
            {post.category.name}
          </Link>
          <Link href={`/blog/${post.slug}`}>
            <h2 className="font-serif text-3xl font-bold mt-2 mb-4 hover:text-[#3D2E2E]">{post.title}</h2>
          </Link>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>{formatDate(post.date)}</span>
            <span className="mx-2">•</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </div>
    </article>
  )
}

