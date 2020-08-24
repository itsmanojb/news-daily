import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLoading,
} from '@ionic/react';
import NewsDataService from '../utility/dataService';
import { NewsSource } from '../news.interface';
import './Sources.css';
import SourcesContainer from '../components/SourcesContainer';

const Sources: React.FC = () => {
  const [allSources, setAllSources] = useState<NewsSource[]>([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setShowLoading(true);

    NewsDataService.getNewsSources().then((res: any) => {
      if (res.status === 'ok') {
        const sources = res.sources;
        setAllSources(sources);
      } else {
        console.log('Error fetching soources');
        setAllSources([]);
      }
      setShowLoading(false);
    });
  }, []);

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Sources</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sources</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SourcesContainer allSources={allSources} />
        <IonLoading isOpen={showLoading} message={'Please wait...'} />
      </IonContent>
    </IonPage>
  );
};

export default Sources;
