import axios from 'axios'

const RSS_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://rss.cnn.com/rss/cnn_topstories.rss'

export async function GET() {
  try {
    const response = await axios.get(RSS_URL)
    
    if (response.data.status !== 'ok' || !response.data.items) {
      return Response.json(
        { error: 'Unable to fetch news', articles: [] },
        { status: 500 }
      )
    }

    const articles = response.data.items
      .filter((item: any) => item.link && item.title)
      .map((item: any) => ({
        title: item.title,
        description: item.description || '',
        link: item.link,
        pubDate: item.pubDate,
        thumbnail: item.thumbnail || null,
      }))

    return Response.json({ articles })
  } catch (error) {
    console.error('Error fetching news:', error)
    return Response.json(
      { error: 'Failed to fetch news', articles: [] },
      { status: 500 }
    )
  }
}
