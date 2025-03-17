import Link from "next/link"
import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/types"

interface SidebarArticlesProps {
  posts: Post[]
}

export function SidebarArticles({ posts }: SidebarArticlesProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="font-serif text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-200">Latest News</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="pb-4 border-b border-gray-200 last:border-b-0">
            <Link
              href={`/categories/${post.category.slug}`}
              className="text-xs font-bold text-[#3D2E2E] hover:underline"
            >
              {post.category.name}
            </Link>
            <Link href={`/blog/${post.slug}`}>
              <h3 className="font-serif text-lg font-bold mt-1 mb-2 hover:text-[#3D2E2E]">{post.title}</h3>
            </Link>
            <div className="flex items-center text-xs text-gray-500">
              <span>{formatDate(post.date)}</span>
              <span className="mx-2">•</span>
              <span>{post.readingTime} min read</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

