"use client"
import { useRouter, useSearchParams } from "next/navigation"
import type { Category } from "@/lib/types"

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory?: string
}

export function CategoryFilter({ categories, selectedCategory }: CategoryFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleCategoryChange = (categorySlug: string | null) => {
    const params = new URLSearchParams(searchParams)

    // Reset page when changing category
    params.delete("page")

    if (categorySlug) {
      params.set("category", categorySlug)
    } else {
      params.delete("category")
    }

    router.push(`/blog?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap items-center gap-2 justify-center">
      <button
        onClick={() => handleCategoryChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          !selectedCategory ? "bg-[#3D2E2E] text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => handleCategoryChange(category.slug)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            selectedCategory === category.slug
              ? "bg-[#3D2E2E] text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

