import React from 'react';
import { NewsSource } from '../news.interface';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonRippleEffect,
} from '@ionic/react';

import NewsDataService from '../utility/dataService';

interface SourcesContainerProp {
  allSources: NewsSource[];
}

const SourcesContainer: React.FC<SourcesContainerProp> = (data) => {
  const sources: NewsSource[] = data.allSources;
  const languages: any[] = NewsDataService.getLanguages();

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  const getLanguageName = (code: string) => {
    return languages.filter((lang: any) => lang.code === code)[0].title;
  };

  return (
    <div className="container sources">
      {sources.map((source: NewsSource) => (
        <IonCard
          key={source.id}
          className="ion-activatable"
          onClick={() => openLink(source.url)}
        >
          <IonCardHeader>
            <IonCardSubtitle>
              {getLanguageName(source.language)}
              {/* {source.category} */}
            </IonCardSubtitle>
            <IonCardTitle>
              <h3>{source.name}</h3>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>{source.description}</p>
            <small>{source.url}</small>
          </IonCardContent>
          <IonRippleEffect />
        </IonCard>
      ))}
    </div>
  );
};

export default SourcesContainer;
