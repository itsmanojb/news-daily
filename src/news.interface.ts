export interface NewsItem {
  source: NewsSource; // The identifier id and a display name name for the source this article came from.
  author: string; // The author of the article
  title: string; // The headline or title of the article.
  description: string; // A description or snippet from the article.
  url: string; // The direct URL to the article.
  urlToImage: string; // The URL to a relevant image for the article.
  publishedAt: string; // The date and time that the article was published, in UTC (+000)
  content: string; // The unformatted content of the article, where available. This is truncated to 200 chars.
}


interface NewsSource {
  id: string
  name: string
}