import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Retailers from "./Retailers";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/retailers" component={Retailers} />
      </div>
    </Router>
  );
}

export default AppRouter;