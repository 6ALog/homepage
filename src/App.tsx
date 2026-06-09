import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { MorphingBlobs } from './components/MorphingBlobs'
import { HomePage } from './pages/HomePage'
import { HowItWorksPage } from './pages/HowItWorksPage'
import { TechnologyPage } from './pages/TechnologyPage'
import { ContactPage } from './pages/ContactPage'
import { BlogListPage } from './pages/BlogListPage'
import { BlogPostPage } from './pages/BlogPostPage'

export default function App() {
  return (
    <BrowserRouter>
      <div
        className="relative min-h-screen text-brand-textPrimary"
        style={{ background: 'linear-gradient(45deg, #030712 0%, #0B1020 45%, #061827 100%)' }}
      >
        <MorphingBlobs />

        <div className="relative z-10">
          <Navbar />

          <Routes>
            <Route path="/"             element={<HomePage />} />
            <Route path="/services"     element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/technology"   element={<TechnologyPage />} />
            <Route path="/contact"      element={<ContactPage />} />
            <Route path="/blog"         element={<BlogListPage />} />
            <Route path="/blog/:slug"   element={<BlogPostPage />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}
