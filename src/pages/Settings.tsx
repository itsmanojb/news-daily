import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
  IonToggle,
  IonText,
} from '@ionic/react';
import NewsDataService from '../utility/dataService';
import './Settings.css';

const Settings: React.FC = () => {
  const countries: any[] = NewsDataService.getCountries();
  const languages: any[] = NewsDataService.getLanguages();
  const [country, setCountry] = useState<string>('in');
  const [language, setLanguage] = useState<string>('en');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <IonLabel>Country</IonLabel>
            <IonSelect
              value={country}
              placeholder="Select"
              onIonChange={(e) => setCountry(e.detail.value)}
            >
              {countries.map((country: any, i: number) => (
                <IonSelectOption key={i} value={country.code}>
                  {country.name}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Language</IonLabel>
            <IonSelect
              value={language}
              placeholder="Select"
              onIonChange={(e) => setLanguage(e.detail.value)}
            >
              {languages.map((lang: any, i: number) => (
                <IonSelectOption key={i} value={lang.code}>
                  {lang.name}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle
              checked={darkMode}
              onIonChange={(e) => setDarkMode(e.detail.checked)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>App Version</IonLabel>
            <IonText>0.1</IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
