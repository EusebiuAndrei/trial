import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import * as api from "../api";

const formWidth = {
  width: "60%",
  margin: "auto",
};

const Login = () => {
  useEffect(() => {
    const apiCall = async () => {
      const { success, users, errorMessage } = await api.uploadMultiple();

      console.log(success, users, errorMessage);
    };
    apiCall();
  }, []);

  return (
    <div style={formWidth}>
      <Form>
        <h2>Login Form</h2>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    </div>
  );
};

export default Login;
