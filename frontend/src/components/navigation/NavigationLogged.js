import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { ListGroup } from "react-bootstrap";

import Login from "../Login";
import Home from "../Home";
import Register from "../Register";
import Profile from "../Profile";

class NavigationLogged extends React.Component {
  render() {
    return (
      <Router>
        <Redirect to="/profile" />
        {/* Seteaza ruta initiala a router-ului */}

        <div
          style={{
            width: this.props.width,
            height: this.props.height,
            backgroundColor: "#FBF3E6",
          }}
        >
          <ListGroup
            horizontal
            style={{
              height: "7%",
              width: this.props.width,
              justifyContent: "flex-end",
              display: "flex",
            }}
          >
            <ListGroup.Item
              style={{ backgroundColor: "#FBF3E6", borderWidth: 0 }}
            >
              <Link to="/" style={{ color: "#D9054F", fontWeight: "bold" }}>
                Home
              </Link>
            </ListGroup.Item>

            <ListGroup.Item
              style={{ backgroundColor: "#FBF3E6", borderWidth: 0 }}
            >
              <Link
                to="/profile"
                style={{ color: "#D9054F", fontWeight: "bold" }}
              >
                Profile
              </Link>
            </ListGroup.Item>

            <ListGroup.Item
              style={{ backgroundColor: "#FBF3E6", borderWidth: 0 }}
            >
              <Link
                to="/login"
                style={{ color: "#D9054F", fontWeight: "bold" }}
              >
                Log out
              </Link>
            </ListGroup.Item>
          </ListGroup>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavigationLogged;
