import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import type { Article } from "@/lib/types"

interface FeaturedStoryProps {
  article: Article
}

export function FeaturedStory({ article }: FeaturedStoryProps) {
  return (
    <article className="border-b border-gray-200 pb-8 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <Link
            href={`/categories/${article.category.slug}`}
            className="text-sm font-bold text-blue-600 hover:underline"
          >
            {article.category.name}
          </Link>
          <Link href={`/articles/${article.slug}`}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 leading-tight hover:text-blue-700">
              {article.title}
            </h2>
          </Link>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">{article.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500">
            {article.citation && (
              <>
                <span className="font-medium">{article.citation.source}</span>
                <span className="mx-2">•</span>
              </>
            )}
            <span>{formatDate(article.date)}</span>
            <span className="mx-2">•</span>
            <span>{article.readingTime} min read</span>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Link
            href={`/articles/${article.slug}`}
            className="block relative h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={article.coverImage || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </Link>
        </div>
      </div>
    </article>
  )
}

