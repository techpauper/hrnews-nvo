import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import type { Article } from "@/lib/types"

interface OpinionSectionProps {
  articles: Article[]
}

export function OpinionSection({ articles }: OpinionSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article) => (
        <article key={article.slug} className="flex flex-col bg-white p-4 rounded-lg shadow-md">
          <div className="relative h-48 mb-4 rounded overflow-hidden">
            <Image
              src={article.coverImage || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {article.citation && (
            <div className="flex items-center mb-4">
              <div>
                <p className="font-bold text-sm">{article.citation.source}</p>
                <p className="text-xs text-orange-700">{formatDate(article.citation.date)}</p>
              </div>
            </div>
          )}
          <Link href={`/articles/${article.slug}`}>
            <h3 className="font-serif text-xl font-bold mb-2 hover:text-orange-700">{article.title}</h3>
          </Link>
          <p className="text-gray-700 text-sm mb-2">{article.excerpt}</p>
          <div className="mt-auto text-xs text-gray-500">
            <span>{formatDate(article.date)}</span>
          </div>
        </article>
      ))}
    </div>
  )
}

