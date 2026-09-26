interface FeaturedArticleProps {
  article: {
    title: string
    description: string
    link: string
    pubDate: string
    thumbnail?: string
  }
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  const stripHtml = (html: string) => {
    const tmp = document.createElement('div')
    tmp.innerHTML = html
    return tmp.textContent?.replace(/\s+/g, ' ').trim().slice(0, 180) + '...' || ''
  }

  return (
    <article className="bg-card rounded-lg overflow-hidden border border-gray-700">
      <img
        src={article.thumbnail || 'https://placehold.co/1200x800/111827/ffffff?text=Z.I.S.G.S'}
        alt={article.title}
        className="w-full h-80 object-cover"
      />
      <div className="p-6">
        <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase border border-accent/40">
          Top Story
        </span>
        <h1 className="text-3xl font-bold mt-3 leading-tight">{article.title}</h1>
        <p className="text-muted mt-3 leading-relaxed">{stripHtml(article.description)}</p>
        <div className="flex justify-between items-center mt-6 text-sm text-muted">
          <span>{new Date(article.pubDate).toLocaleDateString()}</span>
          <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">
            Read more →
          </a>
        </div>
      </div>
    </article>
  )
}
