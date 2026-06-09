import matter from 'gray-matter'

export interface Post {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  tags: string[]
  content: string
}

// Load all markdown files from /posts at build time
const raw = import.meta.glob('/posts/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>

function slugFromPath(path: string): string {
  return path.replace(/^\/posts\//, '').replace(/\.md$/, '')
}

export const posts: Post[] = Object.entries(raw)
  .map(([path, source]) => {
    const { data, content } = matter(source)
    return {
      slug:    slugFromPath(path),
      title:   data.title   ?? 'Untitled',
      date:    data.date    ?? '',
      author:  data.author  ?? '6A Logic',
      excerpt: data.excerpt ?? '',
      tags:    Array.isArray(data.tags) ? data.tags : [],
      content,
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
