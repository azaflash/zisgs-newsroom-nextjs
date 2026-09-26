'use client'

import Link from 'next/link'
import { useState } from 'react'

interface ArticleCardProps {
  article: {
    title: string
    description: string
    link: string
    pubDate: string
    thumbnail?: string
  }
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const [saved, setSaved] = useState(false)

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault()
    setSaved(!saved)
  }

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div')
    tmp.innerHTML = html
    return tmp.textContent?.replace(/\s+/g, ' ').trim().slice(0, 150) + '...' || ''
  }

  return (
    <article className="bg-card rounded-lg overflow-hidden border border-gray-700 hover:shadow-lg hover:shadow-black/30 transition hover:-translate-y-1 cursor-pointer">
      <img
        src={article.thumbnail || 'https://placehold.co/800x500/1f2937/ffffff?text=Z.I.S.G.S'}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-bold line-clamp-2">{article.title}</h3>
        <p className="text-muted text-sm mt-2 line-clamp-2">{stripHtml(article.description)}</p>
        <div className="flex justify-between items-center mt-4 text-sm text-muted">
          <span>{new Date(article.pubDate).toLocaleDateString()}</span>
          <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">
            Read →
          </a>
        </div>
      </div>
    </article>
  )
}
