import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import routes from "./router/routes";

import Appbar from "./components/Appbar";
import MiniDrawer from "./components/MiniDrawer";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Appbar />
        <MiniDrawer />
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} exact path={route.path}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
