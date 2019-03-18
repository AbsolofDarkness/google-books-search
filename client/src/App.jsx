import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/search";
import Saved from "./pages/saved";
import {} from "mdbreact";

export default () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Search}/>
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
  </Router>
);