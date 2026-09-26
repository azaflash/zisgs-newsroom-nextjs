'use client'

import { useEffect, useState } from 'react'
import Container from '@/src/components/Container'
import ArticleCard from '@/src/components/ArticleCard'

interface Article {
  title: string
  description: string
  link: string
  pubDate: string
  thumbnail?: string
}

export default function Saved() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [allArticles, setAllArticles] = useState<Article[]>([])

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const res = await fetch('/api/news')
      const data = await res.json()
      setAllArticles(data.articles || [])
      
      const saved = JSON.parse(localStorage.getItem('savedArticles') || '[]')
      const savedArticles = (data.articles || []).filter((_: Article, i: number) => saved.includes(i))
      setArticles(savedArticles)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching news:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Container>
        <div className="text-center py-20 text-muted">Loading saved articles...</div>
      </Container>
    )
  }

  return (
    <Container>
      <header className="flex justify-between items-center gap-4 py-6 border-b border-gray-700 mb-6">
        <h1 className="text-4xl font-bold">
          <span className="text-accent">📌</span> Saved Articles
        </h1>
      </header>

      {articles.length === 0 ? (
        <div className="text-center py-20 text-muted">No saved articles yet</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <ArticleCard key={idx} article={article} />
          ))}
        </div>
      )}
    </Container>
  )
}
