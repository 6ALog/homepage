import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Post } from '../lib/posts'

export function BlogCard({ post, index }: { post: Post; index: number }) {
  const date = post.date
    ? new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
      })
    : ''

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="blog-card-link block rounded-xl p-6 h-full transition-all duration-200 hover:border-brand-cyan/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan group"
        style={{
          background: 'rgba(15,23,42,0.6)',
          border: '1px solid rgba(56,189,248,0.12)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(56,189,248,0.07)'
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = 'none'
        }}
      >
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="blog-card-tag font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(56,189,248,0.08)', color: 'rgba(56,189,248,0.7)', border: '1px solid rgba(56,189,248,0.15)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h2 className="font-display font-bold text-white text-lg leading-snug mb-3 group-hover:text-brand-cyan transition-colors duration-200">
          {post.title}
        </h2>

        {post.excerpt && (
          <p className="text-brand-textDim text-sm leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-cyan/08">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-brand-textDimmer">{post.author}</span>
            {date && (
              <>
                <span className="text-brand-textDimmer text-xs">·</span>
                <time className="font-mono text-xs text-brand-textDimmer" dateTime={post.date}>{date}</time>
              </>
            )}
          </div>
          <span className="font-mono text-xs text-brand-cyan/60 group-hover:text-brand-cyan transition-colors">
            Read →
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
