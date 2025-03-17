import type { Metadata } from "next"
import { BlogCard } from "@/components/blog-card"
import { Pagination } from "@/components/pagination"
import { CategoryFilter } from "@/components/category-filter"
import { getAllPosts, getAllCategories } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Blog - Brainy Security News",
  description: "Browse all our security articles, insights, and analysis",
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; category?: string }
}) {
  const currentPage = Number(searchParams.page) || 1
  const selectedCategory = searchParams.category

  const categories = getAllCategories()
  const allPosts = getAllPosts()

  // Filter posts by category if selected
  const filteredPosts = selectedCategory ? allPosts.filter((post) => post.category.slug === selectedCategory) : allPosts

  // Pagination
  const postsPerPage = 9
  const totalPosts = filteredPosts.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  const paginatedPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

  return (
    <main className="min-h-screen bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Security Blog</h1>
          <p className="text-xl text-gray-600">
            Explore our latest articles, insights, and analysis on cybersecurity and IT management
          </p>
        </div>

        <CategoryFilter categories={categories} selectedCategory={selectedCategory} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} category={selectedCategory} />}
      </div>
    </main>
  )
}

