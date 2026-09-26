'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Container from '@/src/components/Container'
import ArticleCard from '@/src/components/ArticleCard'

interface Article {
  title: string
  description: string
  link: string
  pubDate: string
  thumbnail?: string
}

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (query) {
      fetchAndSearch()
    } else {
      setLoading(false)
    }
  }, [query])

  const fetchAndSearch = async () => {
    try {
      const res = await fetch('/api/news')
      const data = await res.json()
      const filtered = (data.articles || []).filter(
        (article: Article) =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.description?.toLowerCase().includes(query.toLowerCase())
      )
      setArticles(filtered)
      setLoading(false)
    } catch (error) {
      console.error('Error searching:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="text-center py-20 text-muted">Searching...</div>
  }

  return (
    <>
      <header className="flex justify-between items-center gap-4 py-6 border-b border-gray-700 mb-6">
        <h1 className="text-4xl font-bold">
          <span className="text-accent">🔍</span> Search Results
        </h1>
      </header>

      {articles.length === 0 ? (
        <div className="text-center py-20 text-muted">No results found for "{query}"</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <ArticleCard key={idx} article={article} />
          ))}
        </div>
      )}
    </>
  )
}

export default function Search() {
  return (
    <Container>
      <Suspense fallback={<div className="text-center py-20 text-muted">Loading...</div>}>
        <SearchContent />
      </Suspense>
    </Container>
  )
}
