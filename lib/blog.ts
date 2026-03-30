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
