import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getArticleBySlug } from "@/lib/articles"
import { formatDate } from "@/lib/utils"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href={`/categories/${article.category.slug}`}
            className="text-sm font-bold text-blue-600 hover:underline"
          >
            {article.category.name}
          </Link>
          <h1 className="font-serif text-4xl font-bold mt-2 mb-4">{article.title}</h1>
          <div className="flex items-center text-sm text-gray-500 mb-6">
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
        {article.coverImage && (
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.coverImage || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        )}
        <div
          className="prose prose-lg max-w-none mb-12 article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </div>
  )
}

