import React from "react";

import Home from "../views/Home";
import About from "../views/About";
import Users from "../views/Users";
import Patients from "../views/Patients";
import NotFound from "../views/NotFound";

export default [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/users",
    component: <Users />,
  },
  {
    path: "/patients",
    component: <Patients />,
  },
  {
    path: "*",
    component: <NotFound />,
  },
];
