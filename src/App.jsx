import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./router/routes";

import Appbar from "./components/Appbar";

const App = () => {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
        <Appbar />

        <Switch>
          {routes.map((route, i) => (
            <Route key={i} exact path={route.path}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
