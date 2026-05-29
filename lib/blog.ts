import fs from 'fs'
import path from 'path'

export interface BlogPost {
  slug: string
  title: string
  category: string
  readTime: string
  image: string
  date: string
  excerpt: string
  content: string
  video?: {
    src: string
    poster: string
    alt: string
  }
}

export function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), 'content', 'blog')
  
  if (!fs.existsSync(blogDir)) {
    return []
  }

  const fileNames = fs.readdirSync(blogDir)

  return fileNames
    .filter((fileName) => fileName.endsWith('.json'))
    .map((fileName) => {
      const slug = fileName.replace(/\.json$/, '')
      const fullPath = path.join(blogDir, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const data = JSON.parse(fileContents)

      return {
        slug,
        ...data,
      } as BlogPost
    })
    // Sort posts by date descending
    .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const posts = getBlogPosts()
  return posts.find((post) => post.slug === slug)
}

// Slugs the client wants pinned to the homepage blog row, in this order.
export const HOMEPAGE_PINNED_SLUGS = [
  'proc-nemuzeme-vypnout',
  'proc-prestavame-meditovat',
  'kazda-minuta-musi-byt-vyuzita',
]

export function getHomepageBlogPosts(): BlogPost[] {
  const all = getBlogPosts()
  const bySlug = new Map(all.map((p) => [p.slug, p]))
  return HOMEPAGE_PINNED_SLUGS
    .map((slug) => bySlug.get(slug))
    .filter((p): p is BlogPost => Boolean(p))
}
