import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonRouterOutlet,
  IonApp,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupConfig,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  newspaperOutline,
  optionsOutline,
  earthOutline,
  searchOutline,
} from 'ionicons/icons';

import Headlines from './pages/Headlines';
import Sources from './pages/Sources';
import Settings from './pages/Settings';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import './theme/variables.css';
import './theme/core.css';

setupConfig({
  // rippleEffect: false,
  mode: 'ios',
});

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/headlines" component={Headlines} exact={true} />
          <Route path="/sources" component={Sources} exact={true} />
          <Route path="/settings" component={Settings} exact={true} />
          <Route
            path="/"
            render={() => <Redirect to="/headlines" />}
            exact={true}
          />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="headlines" href="/headlines">
            <IonIcon icon={newspaperOutline} />
            <IonLabel>Headlines</IonLabel>
          </IonTabButton>
          <IonTabButton tab="sources" href="/sources">
            <IonIcon icon={earthOutline} />
            <IonLabel>Sources</IonLabel>
          </IonTabButton>
          <IonTabButton>
            <IonIcon icon={searchOutline} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={optionsOutline} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
