import Link from "next/link"
import type { Category } from "@/lib/types"

interface CategoryGridProps {
  categories: Category[]
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/categories/${category.slug}`}
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">{category.name}</h2>
          <p className="text-gray-600">{category.description}</p>
        </Link>
      ))}
    </div>
  )
}

