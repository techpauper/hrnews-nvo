import type { Article } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

interface RelatedArticlesProps {
  articles: Article[]
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article) => (
        <article key={article.slug} className="border-b border-gray-200 pb-6">
          <Link href={`/articles/${article.slug}`} className="block relative h-64 mb-4 rounded overflow-hidden">
            <Image src={article.coverImage || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          </Link>
          <Link
            href={`/categories/${article.category.slug}`}
            className="text-xs font-bold text-red-700 hover:underline"
          >
            {article.category.name}
          </Link>
          <Link href={`/articles/${article.slug}`}>
            <h3 className="font-serif text-xl font-bold mt-1 mb-2 leading-tight hover:text-gray-700">
              {article.title}
            </h3>
          </Link>
          <p className="text-gray-700 text-sm mb-2 line-clamp-2">{article.excerpt}</p>
          <div className="flex items-center text-xs text-gray-500">
            <span>{formatDate(article.date)}</span>
            <span className="mx-2">•</span>
            <span>{article.readingTime} min read</span>
          </div>
        </article>
      ))}
    </div>
  )
}

