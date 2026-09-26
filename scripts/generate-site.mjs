import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

const origin = 'https://6alogic.com'
// Keep this list in sync with the public routes in src/App.tsx.
// /services renders the homepage, so the root URL is listed once.
const staticPaths = ['/', '/how-it-works', '/technology', '/contact', '/blog/']

function validDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value ?? '')) return false
  const date = new Date(`${value}T00:00:00Z`)
  return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value
}

function urlEntry(path, lastmod) {
  const lines = [`  <url>`, `    <loc>${origin}${path}</loc>`]
  if (validDate(lastmod)) lines.push(`    <lastmod>${lastmod}</lastmod>`)
  return [...lines, '  </url>'].join('\n')
}

export function createSitemap(posts) {
  const entries = [
    ...staticPaths.map((path) => urlEntry(path)),
    ...posts.map(({ slug, date, updated }) =>
      urlEntry(`/blog/${encodeURIComponent(slug)}/`, updated || date),
    ),
  ]
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char])
}

function postUrl(slug) {
  return `${origin}/blog/${encodeURIComponent(slug)}/`
}

function setPageMeta(template, { title, description, canonical, type = 'website' }) {
  const safeTitle = escapeHtml(title)
  const safeDescription = escapeHtml(description)
  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/<meta name="description"[\s\S]*?\/>/, `<meta name="description" content="${safeDescription}" />`)
    .replace(/<meta property="og:type"[^>]*\/>/, `<meta property="og:type" content="${type}" />`)
    .replace(/<meta property="og:title"[^>]*\/>/, `<meta property="og:title" content="${safeTitle}" />`)
    .replace(/<meta property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${safeDescription}" />`)
    .replace(/<meta name="twitter:title"[^>]*\/>/, `<meta name="twitter:title" content="${safeTitle}" />`)
    .replace(/<meta name="twitter:description"[\s\S]*?\/>/, `<meta name="twitter:description" content="${safeDescription}" />`)
    .replace('</head>', `  <link rel="canonical" href="${canonical}" />\n  </head>`)
}

function setBody(template, body) {
  return template.replace('<div id="root"></div>', `<div id="root">${body}</div>`)
}

export function createPostHtml(template, post) {
  const title = `${post.title} — 6A Logic`
  const date = validDate(post.date) ? post.date : ''
  const article = sanitizeHtml(marked.parse(post.content), {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img'],
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ['src', 'alt', 'title'],
    },
  })
  const body = `<div class="app-bg min-h-screen text-brand-textPrimary" style="background:#030712">
    <main class="pt-28 pb-24"><article class="max-w-3xl mx-auto px-6 lg:px-10">
      <a href="/blog/" class="font-mono text-xs uppercase text-brand-cyan">← All Posts</a>
      <header class="mb-12 mt-10"><h1 class="font-display font-black text-white mb-6" style="font-size:clamp(1.75rem,4vw,2.75rem)">${escapeHtml(post.title)}</h1>
        <p class="text-brand-textDimmer font-mono text-xs">${escapeHtml(post.author)}${date ? ` · <time datetime="${date}">${date}</time>` : ''}</p>
      </header><div class="prose-6a">${article}</div>
    </article></main></div>`
  const html = setPageMeta(template, {
    title, description: post.excerpt, canonical: postUrl(post.slug), type: 'article',
  }).replace('</head>', `${date ? `  <meta property="article:published_time" content="${date}" />\n` : ''}  </head>`)
  return setBody(html, body)
}

export function createBlogIndexHtml(template, posts) {
  const cards = posts.map((post) => `<article class="rounded-xl p-6" style="background:rgba(15,23,42,.6);border:1px solid rgba(56,189,248,.12)">
    <h2 class="font-display font-bold text-white text-xl"><a href="/blog/${encodeURIComponent(post.slug)}/">${escapeHtml(post.title)}</a></h2>
    <p class="text-brand-textDimmer font-mono text-xs">${escapeHtml(post.date)}</p>
    <p class="text-brand-textSecondary">${escapeHtml(post.excerpt)}</p>
  </article>`).join('\n')
  const body = `<div class="app-bg min-h-screen text-brand-textPrimary" style="background:#030712">
    <main class="pt-28 pb-24"><div class="max-w-7xl mx-auto px-6 lg:px-10">
      <a href="/" class="font-mono text-xs uppercase text-brand-cyan">← 6A Logic</a>
      <h1 class="font-display font-black text-white text-4xl my-10">The 6A Logic Blog</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${cards}</div>
    </div></main></div>`
  return setBody(setPageMeta(template, {
    title: 'Blog — 6A Logic',
    description: 'Practical writing on data infrastructure, AI operations, and workflow automation.',
    canonical: `${origin}/blog/`,
  }), body)
}

function parsePost(name, source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) throw new Error(`${name}: missing frontmatter`)
  const field = (key) => {
    const raw = match[1].match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]?.trim() ?? ''
    return raw.replace(/^["']|["']$/g, '')
  }
  const title = field('title')
  const date = field('date')
  if (!title || !validDate(date)) throw new Error(`${name}: valid title and date are required`)
  const updated = field('updated')
  if (updated && !validDate(updated)) throw new Error(`${name}: updated must be YYYY-MM-DD`)
  return {
    slug: name.slice(0, -3), title, date, updated,
    author: field('author') || '6A Logic', excerpt: field('excerpt'), content: match[2],
  }
}

async function main() {
  const root = fileURLToPath(new URL('../', import.meta.url))
  const postsDirectory = fileURLToPath(new URL('../posts/', import.meta.url))
  const names = (await readdir(postsDirectory)).filter((name) => name.endsWith('.md')).sort()
  const posts = await Promise.all(names.map(async (name) => {
    const source = await readFile(join(postsDirectory, name), 'utf8')
    return parsePost(name, source)
  }))
  const dist = join(root, 'dist')
  const template = await readFile(join(dist, 'index.html'), 'utf8')
  await writeFile(join(dist, 'sitemap.xml'), createSitemap(posts), 'utf8')
  await mkdir(join(dist, 'blog'), { recursive: true })
  await writeFile(join(dist, 'blog', 'index.html'), createBlogIndexHtml(template, posts), 'utf8')
  for (const post of posts) {
    const directory = join(dist, 'blog', post.slug)
    await mkdir(directory, { recursive: true })
    await writeFile(join(directory, 'index.html'), createPostHtml(template, post), 'utf8')
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main()
}
