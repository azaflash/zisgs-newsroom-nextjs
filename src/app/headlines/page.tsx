'use client'

import { useEffect, useState } from 'react'
import Container from '@/src/components/Container'
import ArticleCard from '@/src/components/ArticleCard'
import Pagination from '@/src/components/Pagination'

interface Article {
  title: string
  description: string
  link: string
  pubDate: string
  thumbnail?: string
}

const itemsPerPage = 12

export default function Headlines() {
  const [articles, setArticles] = useState<Article[]>([])
  const [currentPage, setCurrentPage] = useState(1)
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

  const totalPages = Math.ceil(articles.length / itemsPerPage)
  const start = (currentPage - 1) * itemsPerPage
  const paginatedArticles = articles.slice(start, start + itemsPerPage)

  if (loading) {
    return (
      <Container>
        <div className="text-center py-20 text-muted">Loading headlines...</div>
      </Container>
    )
  }

  return (
    <Container>
      <header className="flex justify-between items-center gap-4 py-6 border-b border-gray-700 mb-6">
        <h1 className="text-4xl font-bold">
          <span className="text-accent">All</span> Headlines
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {paginatedArticles.map((article, idx) => (
          <ArticleCard key={idx} article={article} />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </Container>
  )
}
