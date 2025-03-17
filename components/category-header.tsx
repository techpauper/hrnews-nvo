import type { Category } from "@/lib/types"

interface CategoryHeaderProps {
  category: Category
}

export function CategoryHeader({ category }: CategoryHeaderProps) {
  return (
    <header className="mb-12">
      <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">{category.name}</h1>
      {category.description && <p className="text-xl text-gray-600">{category.description}</p>}
    </header>
  )
}

