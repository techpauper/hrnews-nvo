import type { Metadata } from "next"
import { CategoryGrid } from "@/components/category-grid"
import { getAllCategories } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Categories - Brainy Security News",
  description: "Browse all our security news categories",
}

export default function CategoriesPage() {
  const categories = getAllCategories()

  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-8">Categories</h1>
        <CategoryGrid categories={categories} />
      </div>
    </main>
  )
}

