/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f172a',
        darker: '#020817',
        panel: '#111827',
        card: '#1f2937',
        accent: '#22c55e',
        muted: '#94a3b8',
      },
    },
  },
  plugins: [],
}
