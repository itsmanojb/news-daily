import React from 'react';
import { NewsItem } from '../news.interface';
import NewsCard from './NewsCard';

interface NewsContainerProp {
  allNews: NewsItem[];
}

const NewsContainer: React.FC<NewsContainerProp> = (data) => {
  const newsItems: NewsItem[] = data.allNews;

  return (
    <div className="container headlines">
      {newsItems.map((news: NewsItem, i: number) => (
        <NewsCard news={news} key={i} />
      ))}
    </div>
  );
};

export default NewsContainer;
