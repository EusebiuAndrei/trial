import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "../Login";
import Home from "../Home";
import Register from "../Register";

class NavigationNotLogged extends React.Component {
  render() {
    return (
      <Router>
        <Redirect to="/login" />
        {/* Seteaza ruta initiala a router-ului */}
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/login">
              <Login width={this.props.width} height={this.props.height} />
            </Route>

            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavigationNotLogged;
