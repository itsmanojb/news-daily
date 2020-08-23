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
import { newspaperOutline, searchOutline, globeOutline } from 'ionicons/icons';

import Headlines from './pages/Headlines';
import Sources from './pages/Sources';
import Search from './pages/Search';

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
          <Route path="/search" component={Search} />
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
            <IonIcon icon={globeOutline} />
            <IonLabel>Sources</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={searchOutline} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
