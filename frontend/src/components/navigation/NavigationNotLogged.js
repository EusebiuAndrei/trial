import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import {ListGroup} from 'react-bootstrap';

import Login from '../Login';
import Home from '../Home';
import Register from '../Register';


class NavigationNotLogged extends React.Component {
  render(){
    return (
        <Router>

            <Redirect to="/"/> 
             {/* Seteaza ruta initiala a router-ului */}

            <ListGroup horizontal>
                <ListGroup.Item><Link to="/">Home</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/login">Login</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/register">Register</Link></ListGroup.Item>
            </ListGroup>
    
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
        </Router>
      );
  }
}

export default NavigationNotLogged;
