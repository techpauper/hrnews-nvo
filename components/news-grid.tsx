import type { Article } from "@/lib/types"
import { NewsCard } from "@/components/news-card"

interface NewsGridProps {
  articles: Article[]
  columns?: 2 | 3 | 4
}

export function NewsGrid({ articles, columns = 3 }: NewsGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  }

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
      {articles.map((article) => (
        <NewsCard key={article.slug} article={article} />
      ))}
    </div>
  )
}

