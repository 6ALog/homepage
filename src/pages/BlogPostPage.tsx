import { useEffect, useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { getPost } from '../lib/posts'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  const html = useMemo(() => {
    if (!post) return ''
    const raw = marked.parse(post.content) as string
    return DOMPurify.sanitize(raw)
  }, [post])

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — 6A Logic`
      const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
      if (meta && post.excerpt) meta.content = post.excerpt
    }
    return () => {
      document.title = '6A Logic — Data Infrastructure & Automation'
      const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
      if (meta) meta.content = 'AI-ready data infrastructure, workflow automation, and system integrations for small and mid-sized businesses.'
    }
  }, [post])

  if (!post) return <Navigate to="/blog" replace />

  const date = post.date
    ? new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
      })
    : ''

  return (
    <main className="pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            to="/blog"
            className="font-mono text-xs tracking-wider uppercase text-brand-textDim hover:text-brand-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded"
          >
            ← All Posts
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(56,189,248,0.08)', color: 'rgba(56,189,248,0.7)', border: '1px solid rgba(56,189,248,0.15)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1
            className="font-display font-black text-white mb-6"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.1 }}
          >
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-brand-textDimmer font-mono text-xs">
            <span>{post.author}</span>
            {date && (
              <>
                <span>·</span>
                <time dateTime={post.date}>{date}</time>
              </>
            )}
          </div>
        </motion.header>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="prose-6a"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  )
}
