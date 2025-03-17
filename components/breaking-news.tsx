import Link from "next/link"
import type { Article } from "@/lib/types"

interface BreakingNewsProps {
  articles: Article[]
}

export function BreakingNews({ articles }: BreakingNewsProps) {
  if (articles.length === 0) return null

  return (
    <div className="bg-red-700 text-white py-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center overflow-x-auto whitespace-nowrap">
          <span className="font-bold mr-4 bg-white text-red-700 px-2 py-1 rounded text-sm">BREAKING</span>
          <div className="flex space-x-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="text-sm md:text-base font-medium hover:underline"
              >
                {article.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

