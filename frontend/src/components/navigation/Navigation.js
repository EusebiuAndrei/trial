import React from "react";

import NavigationNotLogged from './NavigationNotLogged';
import NavigationLogged from './NavigationLogged';


class Navigation extends React.Component {
  render(){
      return(
        this.props.logged === true ? <NavigationLogged/> : <NavigationNotLogged/>
      );
  }
}

export default Navigation;
