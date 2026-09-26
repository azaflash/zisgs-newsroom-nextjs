'use client'

import { useState } from 'react'
import Container from '@/src/components/Container'

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <Container>
      <header className="flex justify-between items-center gap-4 py-6 border-b border-gray-700 mb-6">
        <h1 className="text-4xl font-bold">
          <span className="text-accent">⚙️</span> Settings
        </h1>
      </header>

      <div className="bg-card rounded-lg p-8 max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">App Settings</h2>
        
        <div className="space-y-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              className="w-5 h-5"
            />
            <span>Dark Mode</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="w-5 h-5"
            />
            <span>Enable Notifications</span>
          </label>

          <button
            onClick={handleSave}
            className="bg-accent text-dark px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Save Settings
          </button>

          {saved && (
            <p className="text-accent text-sm">✓ Settings saved successfully!</p>
          )}
        </div>
      </div>
    </Container>
  )
}
