import type { Post } from "@/lib/types"
import { ArticleCard } from "@/components/article-card"

interface ArticleGridProps {
  posts: Post[]
  columns?: 2 | 3 | 4
}

export function ArticleGrid({ posts, columns = 2 }: ArticleGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  }

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
      {posts.map((post) => (
        <ArticleCard key={post.slug} post={post} />
      ))}
    </div>
  )
}

