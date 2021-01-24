import React from "react";
import { Router, Scene } from "react-native-router-flux";

import { Home, Google, Medium } from './pages';

export default () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Home" component={Home} title="Home" />
        <Scene key="Google" component={Google} title="Google" />
        <Scene key="Medium" component={Medium} title="Medium" />
      </Scene>
    </Router>
  );
}
