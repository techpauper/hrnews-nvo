import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import type { Article } from "@/lib/types"

interface NewsCardProps {
  article: Article
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="border-b border-gray-200 pb-6 hover:shadow-lg transition-shadow rounded-lg overflow-hidden bg-white">
      <Link href={`/articles/${article.slug}`} className="block relative h-64 mb-4 rounded-t overflow-hidden">
        <Image
          src={article.coverImage || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={article.isFeatured}
        />
      </Link>
      <div className="px-4">
        <Link href={`/categories/${article.category.slug}`} className="text-xs font-bold text-blue-600 hover:underline">
          {article.category.name}
        </Link>
        <Link href={`/articles/${article.slug}`}>
          <h3 className="font-serif text-xl font-bold mt-1 mb-2 leading-tight hover:text-blue-700">{article.title}</h3>
        </Link>
        <p className="text-gray-700 text-sm mb-2 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center text-xs text-gray-500">
          {article.citation && (
            <>
              <span>{article.citation.source}</span>
              <span className="mx-2">•</span>
            </>
          )}
          <span>{formatDate(article.date)}</span>
          <span className="mx-2">•</span>
          <span>{article.readingTime} min read</span>
        </div>
      </div>
    </article>
  )
}

