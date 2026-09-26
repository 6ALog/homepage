import assert from 'node:assert/strict'
import { test } from 'node:test'
import { createBlogIndexHtml, createLlmsTxt, createPostHtml, createSitemap } from './generate-site.mjs'

test('includes static pages and every blog post with meaningful dates', () => {
  const xml = createSitemap([
    { slug: 'first-post', date: '2026-06-09' },
    { slug: 'new-post', date: '2026-09-26', updated: '2026-09-27' },
  ])

  for (const path of ['/', '/how-it-works', '/technology', '/contact', '/blog/']) {
    assert.ok(xml.includes(`<loc>https://6alogic.com${path}</loc>`))
  }
  assert.ok(xml.includes('<loc>https://6alogic.com/blog/first-post/</loc>\n    <lastmod>2026-06-09</lastmod>'))
  assert.ok(xml.includes('<loc>https://6alogic.com/blog/new-post/</loc>\n    <lastmod>2026-09-27</lastmod>'))
  assert.ok(!xml.includes('<loc>https://6alogic.com/services</loc>'))
})

test('encodes slugs and rejects invalid dates', () => {
  const xml = createSitemap([{ slug: 'a&b', date: '2026-02-30' }])
  assert.ok(xml.includes('<loc>https://6alogic.com/blog/a%26b/</loc>'))
  assert.ok(!xml.includes('<lastmod>'))
})

const template = '<html><head><title>Home</title><meta name="description" content="Home" /><meta property="og:type" content="website" /><meta property="og:title" content="Home" /><meta property="og:description" content="Home" /><meta name="twitter:title" content="Home" /><meta name="twitter:description" content="Home" /></head><body><div id="root"></div></body></html>'

test('post HTML contains crawlable article content and canonical metadata', () => {
  const html = createPostHtml(template, {
    slug: 'test-post', title: 'Test & Learn', date: '2026-09-26',
    author: 'Author', excerpt: 'A useful excerpt', content: '## A finding\n\nThe answer is **42**. <script>alert(1)</script>',
  })
  assert.match(html, /<article[\s>]/)
  assert.match(html, /<h2>A finding<\/h2>/)
  assert.match(html, /The answer is <strong>42<\/strong>/)
  assert.match(html, /<link rel="canonical" href="https:\/\/6alogic.com\/blog\/test-post\/"/)
  assert.match(html, /<title>Test &amp; Learn — 6A Logic<\/title>/)
  assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/)
})

test('blog index HTML links to post directory pages', () => {
  const html = createBlogIndexHtml(template, [
    { slug: 'test-post', title: 'Test post', date: '2026-09-26', excerpt: 'Read this.' },
  ])
  assert.match(html, /href="\/blog\/test-post\/"/)
  assert.match(html, /<link rel="canonical" href="https:\/\/6alogic.com\/blog\/"/)
})

test('llms.txt includes the site and Markdown links for new posts', () => {
  const content = createLlmsTxt([
    { slug: 'new-post', title: 'New [Post]', excerpt: 'A useful\nsummary.' },
  ])
  assert.match(content, /^# 6A Logic\n/)
  assert.match(content, /\[Homepage\]\(https:\/\/6alogic.com\/\)/)
  assert.match(content, /\[Blog\]\(https:\/\/6alogic.com\/blog\/\)/)
  assert.ok(content.includes(String.raw`[New \[Post\]](https://6alogic.com/blog/new-post/index.md): A useful summary.`))
})
