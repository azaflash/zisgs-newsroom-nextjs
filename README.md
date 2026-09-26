# Z.I.S.G.S Newsroom - Next.js Version

A modern, full-featured newsroom web application built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

## Features

✨ **Multi-page Architecture**
- Home page with featured stories
- Headlines page with pagination
- Trending section
- Saved articles (localStorage)
- Search functionality
- Category navigation
- Settings page

🎨 **Modern Design**
- Dark theme with green accent color
- Responsive layout
- Smooth transitions and hover effects
- Mobile-friendly sidebar navigation

⚡ **Performance**
- Server-side rendering (SSR)
- API routes for news fetching
- Optimized image loading
- Fast navigation with Next.js Link component

## Tech Stack

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Axios** - HTTP client

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/azaflash/zisgs-newsroom-nextjs.git
cd zisgs-newsroom-nextjs
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── news/
│   │       └── route.ts          # News API endpoint
│   ├── headlines/
│   │   └── page.tsx              # Headlines page
│   ├── trending/
│   │   └── page.tsx              # Trending page
│   ├── saved/
│   │   └── page.tsx              # Saved articles page
│   ├── search/
│   │   └── page.tsx              # Search page
│   ├── settings/
│   │   └── page.tsx              # Settings page
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── Sidebar.tsx               # Navigation sidebar
│   ├── Container.tsx             # Layout wrapper
│   ├── ArticleCard.tsx           # Article card component
│   ├── FeaturedArticle.tsx       # Featured article component
│   └── Pagination.tsx            # Pagination component
├── globals.css                   # Global styles
tailwind.config.js               # Tailwind configuration
tsconfig.json                    # TypeScript configuration
package.json                     # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## API Routes

### `GET /api/news`

Fetches the latest news from the CNN RSS feed.

**Response:**

```json
{
  "articles": [
    {
      "title": "Article Title",
      "description": "Article description",
      "link": "https://...",
      "pubDate": "2024-01-15T10:30:00Z",
      "thumbnail": "https://..."
    }
  ]
}
```

## Features in Detail

### Home Page
- Featured story with image and description
- Sidebar with trending articles
- Latest 6 articles grid

### Headlines Page
- Paginated list of all articles (12 per page)
- Dynamic pagination buttons
- Responsive grid layout

### Trending Page
- Display trending 12 articles
- Same card component as headlines

### Saved Articles
- Articles saved using browser localStorage
- Persists between sessions
- Easy to manage saved content

### Search
- Real-time search across all articles
- Filter by title or description
- Dynamic results display

### Categories
- Navigation to category pages (placeholder for filtering)
- Easy to extend with actual category filtering

### Settings
- Dark mode toggle
- Notification preferences
- Extensible for future settings

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy
5. Your app will be live in seconds!

### Deploy to Other Platforms

Next.js can be deployed to:
- Netlify
- Railway
- Render
- AWS Amplify
- Docker containers

## Environment Variables

No environment variables required for basic functionality. The app uses public RSS feeds.

For production, you may want to add:

```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

## Contributing

Feel free to fork this project and submit pull requests!

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

If you have questions or issues, please open an issue on GitHub.

## Future Enhancements

- [ ] Category filtering
- [ ] Dark mode toggle
- [ ] User authentication
- [ ] Comment system
- [ ] Email newsletter subscription
- [ ] Multiple news sources
- [ ] Advanced search filters
- [ ] Article recommendations
- [ ] Social sharing
- [ ] Progressive Web App (PWA) support
