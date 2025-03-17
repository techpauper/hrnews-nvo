import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/types"

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-72">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{formatDate(post.date)}</span>
          <span className="mx-2">•</span>
          <Link href={`/categories/${post.category.slug}`} className="text-[#3D2E2E] hover:underline">
            {post.category.name}
          </Link>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#3D2E2E]">{post.title}</h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-[#3D2E2E] font-medium hover:underline inline-flex items-center"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

