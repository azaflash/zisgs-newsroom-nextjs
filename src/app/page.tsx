'use client'

import { useEffect, useState } from 'react'
import Container from '@/src/components/Container'
import ArticleCard from '@/src/components/ArticleCard'
import FeaturedArticle from '@/src/components/FeaturedArticle'

interface Article {
  title: string
  description: string
  link: string
  pubDate: string
  thumbnail?: string
}

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const res = await fetch('/api/news')
      const data = await res.json()
      setArticles(data.articles || [])
      setLoading(false)
    } catch (error) {
      console.error('Error fetching news:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Container>
        <div className="text-center py-20 text-muted">Loading top story...</div>
      </Container>
    )
  }

  const featured = articles[0]
  const sidebar = articles.slice(1, 4)
  const latest = articles.slice(0, 6)

  return (
    <Container>
      <header className="flex justify-between items-center gap-4 py-6 border-b border-gray-700 mb-6">
        <h1 className="text-4xl font-bold">
          <span className="text-accent">Z.I.S.G.S</span> Newsroom
        </h1>
        <input
          type="text"
          placeholder="Search articles..."
          className="bg-card border border-gray-700 px-4 py-2 rounded-lg text-white max-w-sm"
        />
      </header>

      {featured && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2">
            <FeaturedArticle article={featured} />
          </div>
          <aside className="space-y-4">
            {sidebar.map((article, idx) => (
              <div key={idx} className="bg-card p-4 rounded-lg border border-gray-700 hover:bg-opacity-80 transition cursor-pointer">
                <h3 className="font-semibold text-lg line-clamp-2">{article.title}</h3>
                <p className="text-muted text-sm mt-2">{new Date(article.pubDate).toLocaleDateString()}</p>
              </div>
            ))}
          </aside>
        </div>
      )}

      <h2 className="text-3xl font-bold mb-6">Latest Headlines</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {latest.map((article, idx) => (
          <ArticleCard key={idx} article={article} />
        ))}
      </div>
    </Container>
  )
}
