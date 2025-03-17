export interface Author {
  name: string
  title: string
  bio: string
  avatar: string
  social?: {
    twitter?: string
    linkedin?: string
    website?: string
  }
}

export interface Citation {
  source: string
  date: string
  url: string
}

export interface Category {
  name: string
  slug: string
  description: string
}

export interface Article {
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  coverImage: string
  citation?: Citation
  category: Category
  readingTime: number
  isBreaking?: boolean
  isFeatured?: boolean
  isOpinion?: boolean
}

export interface Post {
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  coverImage: string
  author: Author
  category: Category
  tags: string[]
  readingTime: number
}

