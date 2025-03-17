import type { Metadata } from "next"
import { NewsGrid } from "@/components/news-grid"
import { getAllArticles } from "@/lib/articles"

export const metadata: Metadata = {
  title: "Search Results - Homeowners Rights",
  description: "Search results for articles on Homeowners Rights",
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  const query = searchParams.q || ""
  const allArticles = getAllArticles()

  // Simple search implementation that checks title, excerpt, and content
  const searchResults = query
    ? allArticles.filter((article) => {
        const searchableText = `${article.title} ${article.excerpt} ${article.content}`.toLowerCase()
        return searchableText.includes(query.toLowerCase())
      })
    : []

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Search Results: "{query}"</h1>
          <p className="text-lg text-gray-600">
            {searchResults.length} {searchResults.length === 1 ? "article" : "articles"} found
          </p>
        </header>

        {searchResults.length > 0 ? (
          <NewsGrid articles={searchResults} columns={3} />
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">No results found</h2>
            <p className="text-gray-600 mb-6">
              We couldn't find any articles matching your search. Try using different keywords or browse our categories.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

