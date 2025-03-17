import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { formatDate } from "@/lib/utils"
import { getPostBySlug, getRelatedPosts } from "@/lib/posts"
import { ShareButtons } from "@/components/share-buttons"
import { AuthorBio } from "@/components/author-bio"
import { RelatedPosts } from "@/components/related-posts"
import { CommentSection } from "@/components/comment-section"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found - Brainy",
    }
  }

  return {
    title: `${post.title} - Brainy`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 3)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
            <div className="flex items-center text-sm mb-4">
              <span>{formatDate(post.date)}</span>
              <span className="mx-2">•</span>
              <Link href={`/categories/${post.category.slug}`} className="hover:underline">
                {post.category.name}
              </Link>
              <span className="mx-2">•</span>
              <span>{post.readingTime} min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-gray-300">{post.author.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
              <ShareButtons title={post.title} slug={post.slug} />
            </div>
          </div>

          <AuthorBio author={post.author} />
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedPosts posts={relatedPosts} />
        </div>
      </section>

      {/* Comments */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <CommentSection postSlug={post.slug} />
        </div>
      </section>
    </main>
  )
}

