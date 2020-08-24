export interface NewsItem {
  source: Source; // The identifier id and a display name name for the source this article came from.
  author: string; // The author of the article
  title: string; // The headline or title of the article.
  description: string; // A description or snippet from the article.
  url: string; // The direct URL to the article.
  urlToImage: string; // The URL to a relevant image for the article.
  publishedAt: string; // The date and time that the article was published, in UTC (+000)
  content: string; // The unformatted content of the article, where available. This is truncated to 200 chars.
}


interface Source {
  id: string
  name: string
}

export interface NewsSource {
  id: string; // The identifier of the news source. You can use this with our other endpoints.
  name: string; // The name of the news source
  description: string; // A description of the news source
  url: string;// The URL of the homepage.
  category: string;// The type of news to expect from this news source.
  language: string; // The language that this news source writes in.
  country: string; // The country this news source is based in (and primarily writes about).
}