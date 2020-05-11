import React, { Component } from "react";

import User from "./User";
import * as api from "../api";
import { Spinner } from "react-bootstrap";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  async componentWillMount() {
    this.setState({ loading: true });
    const answer = await api.getUser();
    if (answer.success === true) {
      this.setState({
        loading: false,
        userData: answer.user,
      });
    } else {
      this.setState({
        loading: false,
        error: answer.errorMessage,
      });
    }
  }

  render() {
    return this.state.loading === false ? (
      <User data={this.state.userData} />
    ) : (
      <Spinner animation="grow" variant="danger" style={{ marginTop: "5%" }} />
    );
  }
}

export default Profile;
