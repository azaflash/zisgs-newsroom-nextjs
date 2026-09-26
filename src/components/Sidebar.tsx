'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: '📰 Home', href: '/' },
  { label: '⚡ Headlines', href: '/headlines' },
  { label: '🔥 Trending', href: '/trending' },
  { label: '📌 Saved', href: '/saved' },
]

const categories = [
  { label: '🌍 World', href: '/category/world' },
  { label: '🏛️ Politics', href: '/category/politics' },
  { label: '💼 Business', href: '/category/business' },
  { label: '🔧 Tech', href: '/category/tech' },
  { label: '⚕️ Health', href: '/category/health' },
]

const other = [
  { label: '🔍 Search', href: '/search' },
  { label: '⚙️ Settings', href: '/settings' },
]

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  return (
    <aside className="w-60 bg-panel border-r border-gray-700 p-6 sticky top-0 h-screen overflow-y-auto hidden md:block">
      <h1 className="text-2xl font-bold text-accent mb-8">Z.I.S.G.S</h1>

      <nav className="space-y-6">
        <div>
          <h2 className="text-xs uppercase font-bold text-muted mb-3 tracking-wider">Main</h2>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg transition ${
                    isActive(item.href)
                      ? 'bg-accent text-dark font-semibold'
                      : 'text-muted hover:bg-card hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs uppercase font-bold text-muted mb-3 tracking-wider">Categories</h2>
          <ul className="space-y-2">
            {categories.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded-lg text-muted hover:bg-card hover:text-white transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs uppercase font-bold text-muted mb-3 tracking-wider">Other</h2>
          <ul className="space-y-2">
            {other.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg transition ${
                    isActive(item.href)
                      ? 'bg-accent text-dark font-semibold'
                      : 'text-muted hover:bg-card hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  )
}
