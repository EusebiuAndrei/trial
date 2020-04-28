import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from '../Login';
import Home from '../Home';
import Register from '../Register';


class Navigation extends React.Component {
  render(){
    return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
    
            <hr />
    
            <Switch>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/login">
                <Login />
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

export default Navigation;
