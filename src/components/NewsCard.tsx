import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonRippleEffect,
} from '@ionic/react';
import useTimeAgo from '@rooks/use-time-ago';
import { NewsItem } from '../news.interface';

interface NewsCardProp {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProp> = (data) => {
  const {
    source,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
  } = data.news;

  const timeAgo = useTimeAgo(publishedAt, {
    intervalMs: 0,
    locale: 'en-GB',
    relativeDate: new Date(),
  });

  return (
    <IonCard className="ion-activatable">
      <img src={urlToImage} alt=".." />
      <IonCardHeader>
        <IonCardSubtitle>{source.name}</IonCardSubtitle>
        <IonCardTitle>
          <h3>{title}</h3>
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{description}</p>
        <small>{timeAgo}</small>
      </IonCardContent>
      <IonRippleEffect />
    </IonCard>
  );
};

export default NewsCard;
