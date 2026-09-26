import type { Metadata } from 'next'
import '../globals.css'
import Sidebar from '@/src/components/Sidebar'

export const metadata: Metadata = {
  title: 'Z.I.S.G.S Newsroom',
  description: 'A modern newsroom web application built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-darker to-dark text-white">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
