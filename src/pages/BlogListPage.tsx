import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { posts } from '../lib/posts'
import { BlogCard } from '../components/BlogCard'

export function BlogListPage() {
  useEffect(() => {
    document.title = 'Blog — 6A Logic'
  }, [])

  return (
    <main className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="mono-label block mb-4">INSIGHTS & UPDATES</span>
          <h1
            className="font-display font-black uppercase tracking-tighter text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.05 }}
          >
            THE 6A LOGIC <span className="text-gradient">BLOG</span>
          </h1>
          <p className="text-brand-textSecondary text-lg max-w-2xl">
            Practical writing on data infrastructure, AI operations, and workflow automation for businesses that want to move faster.
          </p>
        </motion.div>

        {posts.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-brand-textDim font-mono text-sm">No posts yet — check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
