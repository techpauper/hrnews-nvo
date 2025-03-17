import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/types"

interface ArticleCardProps {
  post: Post
}

export function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="bg-white shadow-md rounded-lg overflow-hidden">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/categories/${post.category.slug}`} className="text-xs font-bold text-[#3D2E2E] hover:underline">
          {post.category.name}
        </Link>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-serif text-xl font-bold mt-1 mb-2 hover:text-[#3D2E2E]">{post.title}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center text-xs text-gray-500">
          <span>{formatDate(post.date)}</span>
          <span className="mx-2">•</span>
          <span>{post.readingTime} min read</span>
        </div>
      </div>
    </article>
  )
}

