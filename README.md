# 6A Logic homepage

`npm run build` builds the site into `dist/` for GitHub Pages. It generates
`dist/sitemap.xml` from the public page list in `scripts/generate-site.mjs`
and every Markdown file in `posts/`. The same script generates a static HTML page for
each post at `dist/blog/<filename>/index.html` and a blog index at
`dist/blog/index.html`. GitHub Pages can serve these directory URLs with HTTP
200 and article content before JavaScript runs. Vite copies `public/robots.txt`
to `dist/robots.txt`.

To publish a blog post, add its `.md` file to `posts/` with a `date: YYYY-MM-DD`
frontmatter field. The next build includes its `/blog/<filename>/` URL in the
sitemap and creates its HTML page. If you substantially revise a post, add
`updated: YYYY-MM-DD` to its frontmatter so the sitemap's `<lastmod>` reflects
the revision. For a new public
page, add its path to the static list in the sitemap generator as well as to
`src/App.tsx`. Keep only preferred URLs in the sitemap; `/services` currently
duplicates `/` and is omitted.

The sitemap origin and the `Sitemap:` URL in `public/robots.txt` both use
`https://6alogic.com`. Update both if the canonical domain changes. Run
`npm run test:sitemap` to check sitemap generation.
