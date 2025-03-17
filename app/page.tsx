import { FeaturedStory } from "@/components/featured-story"
import { NewsGrid } from "@/components/news-grid"
import { OpinionSection } from "@/components/opinion-section"
import { getAllArticles } from "@/lib/articles"

export default function Home() {
  const allArticles = getAllArticles()
  const featuredStory = allArticles.find((article) => article.isFeatured) || allArticles[0]
  const mainStories = allArticles
    .filter((article) => !article.isBreaking && !article.isFeatured && !article.isOpinion)
    .slice(0, 9)
  const opinionStories = allArticles.filter((article) => article.isOpinion).slice(0, 3)

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Newspaper Header */}
      <header className="border-b border-blue-200 py-6 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center text-sm">
              <p>
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <span className="mx-2">|</span>
              <p>Defending Property Rights Since 2023</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Story */}
        <FeaturedStory article={featuredStory} />

        {/* Main Content */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl font-bold border-b-2 border-blue-700 pb-2 mb-6 text-blue-800">
            TOP STORIES
          </h2>
          <NewsGrid articles={mainStories} columns={3} />
        </div>

        {/* Opinion Section */}
        <section className="mt-16 bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
          <h2 className="font-serif text-2xl font-bold border-b-2 border-orange-500 pb-2 mb-6 text-orange-800">
            OPINION & ANALYSIS
          </h2>
          <OpinionSection articles={opinionStories} />
        </section>
      </div>
    </main>
  )
}

