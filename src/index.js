import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";
import "./index.css";
import Home from "./page/home";
import Prototype from "./page/prototype";

const routes = {
    path: '/',
    component: Home,
    childRoutes: [
        { path: '/prototype', component: Prototype },
    ],
}

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById("root")
);
