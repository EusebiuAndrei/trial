import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import {ListGroup} from 'react-bootstrap';

import Profile from '../Profile';


class NavigationLogged extends React.Component {
  render(){
    return (
        <Router>

            <div style={{width:this.props.width, height:this.props.height}}>
                <p>Am width : {this.props.width} si height : {this.props.height}</p>
                <Redirect to="/profile"/> 
                {/* Seteaza ruta initiala a router-ului */}

                <ListGroup horizontal>
                    <ListGroup.Item><Link to="/profile">Profile</Link></ListGroup.Item>
                </ListGroup>
        
        
                <Switch>

                <Route exact path="/profile">
                    <Profile />
                </Route>

                </Switch>
            </div>

        </Router>
      );
  }
}

export default NavigationLogged;
