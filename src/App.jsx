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
        <div style={{ background: "#A4A1FB4A" }}>
          <Appbar />
          <MiniDrawer />
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} exact path={route.path}>
                {route.component}
              </Route>
            ))}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
