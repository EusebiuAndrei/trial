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

            <Redirect to="/login"/> 
             {/* Seteaza ruta initiala a router-ului */}

            <div style={{width:this.props.width, height:this.props.height}}>
                <p>Am width : {this.props.width} si height : {this.props.height}</p>
                <ListGroup horizontal>
                    <ListGroup.Item><Link to="/">Home</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/login">Login</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/register">Register</Link></ListGroup.Item>
                </ListGroup>
        
        
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

export default NavigationNotLogged;
