import type { Metadata } from "next"
import { OpinionSection } from "@/components/opinion-section"
import { getOpinionArticles } from "@/lib/articles"

export const metadata: Metadata = {
  title: "Opinion - Homeowners Rights",
  description: "Expert opinions and analysis on homeowners rights and property issues",
}

export default function OpinionPage() {
  const opinionArticles = getOpinionArticles()

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12 bg-orange-600 text-white p-6 rounded-lg shadow-md">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Opinion & Analysis</h1>
          <p className="text-xl text-orange-100">Expert perspectives on homeowners rights and property issues</p>
        </header>

        <div className="grid grid-cols-1 gap-12">
          {opinionArticles.map((article) => (
            <OpinionSection key={article.slug} articles={[article]} />
          ))}
        </div>
      </div>
    </main>
  )
}

