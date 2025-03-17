import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { NewsGrid } from "@/components/news-grid"
import { getCategoryBySlug, getArticlesByCategory } from "@/lib/articles"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug)

  if (!category) {
    return {
      title: "Category Not Found - Homeowners Rights",
    }
  }

  return {
    title: `${category.name} - Homeowners Rights`,
    description: category.description || `Latest news about ${category.name} for homeowners`,
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug)

  if (!category) {
    notFound()
  }

  const articles = getArticlesByCategory(params.slug)

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12 bg-blue-700 text-white p-6 rounded-lg shadow-md">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">{category.name}</h1>
          {category.description && <p className="text-xl text-blue-100">{category.description}</p>}
        </header>

        <NewsGrid articles={articles} columns={3} />
      </div>
    </main>
  )
}

