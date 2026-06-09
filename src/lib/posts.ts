export interface Post {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  tags: string[]
  content: string
}

// Minimal browser-safe frontmatter parser (YAML subset: string/array values)
function parseFrontmatter(source: string): { data: Record<string, unknown>; content: string } {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: source }

  const data: Record<string, unknown> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(':')
    if (colon === -1) continue
    const key = line.slice(0, colon).trim()
    const raw = line.slice(colon + 1).trim()

    // Array: ["a", "b"] or [a, b]
    if (raw.startsWith('[') && raw.endsWith(']')) {
      data[key] = raw
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean)
    } else {
      // Strip optional surrounding quotes
      data[key] = raw.replace(/^["']|["']$/g, '')
    }
  }

  return { data, content: match[2] }
}

// Load all markdown files from /posts at build time
const raw = import.meta.glob('/posts/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>

function slugFromPath(path: string): string {
  return path.replace(/^\/posts\//, '').replace(/\.md$/, '')
}

export const posts: Post[] = Object.entries(raw)
  .map(([path, source]) => {
    const { data, content } = parseFrontmatter(source)
    return {
      slug:    slugFromPath(path),
      title:   typeof data.title   === 'string' ? data.title   : 'Untitled',
      date:    typeof data.date    === 'string' ? data.date    : '',
      author:  typeof data.author  === 'string' ? data.author  : '6A Logic',
      excerpt: typeof data.excerpt === 'string' ? data.excerpt : '',
      tags:    Array.isArray(data.tags) ? (data.tags as string[]) : [],
      content,
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
