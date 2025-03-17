import Link from "next/link"
import { formatDate } from "@/lib/utils"
import type { Article } from "@/lib/types"

interface SidebarNewsProps {
  articles: Article[]
}

export function SidebarNews({ articles }: SidebarNewsProps) {
  return (
    <div className="bg-gray-50 p-6 rounded">
      <h2 className="font-serif text-xl font-bold border-b-2 border-gray-900 pb-2 mb-4">LATEST NEWS</h2>
      <div className="space-y-4">
        {articles.map((article) => (
          <article key={article.slug} className="pb-4 border-b border-gray-200 last:border-b-0">
            <Link
              href={`/categories/${article.category.slug}`}
              className="text-xs font-bold text-red-700 hover:underline"
            >
              {article.category.name}
            </Link>
            <Link href={`/articles/${article.slug}`}>
              <h3 className="font-serif text-base font-bold mt-1 mb-1 hover:text-gray-700">{article.title}</h3>
            </Link>
            <div className="flex items-center text-xs text-gray-500">
              <span>{formatDate(article.date)}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

