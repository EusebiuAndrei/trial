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
    console.log(answer);
  }

  // state = {
  //   email: "user1@gmail.com",
  //   name: "User1",
  //   role: "Client",
  //   details: {
  //     location: {
  //       latitude: "4000",
  //       longitute: "4000",
  //     },
  //     preferences: ["lapte", "oua"],
  //     avatar: "profile.jpg",
  //     allergies: ["gluten", "polen", "alte chestii"],
  //   },
  // };
  render() {
    return this.state.loading === false ? (
      <User data={this.state.userData} />
    ) : (
      <Spinner animation="grow" variant="danger" style={{ marginTop: "5%" }} />
    );
  }
}

export default Profile;
