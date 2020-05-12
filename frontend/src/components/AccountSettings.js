import React, { useState } from "react";
import { FormGroup, FormLabel, FormControl, Form } from "react-bootstrap";

const AccountSettings = ({ data }) => {
  const [email, setEmail] = useState(data.email ? data.email : "");
  const [username, setUsername] = useState(data.name ? data.name : "");
  const [succesEmail, setSuccesEmail] = useState(true);

  const advertisationMessage = (correct, message) => {
    if (correct) {
      return <p></p>;
    } else {
      return (
        <p className="avertisment">
          <small>{message}</small>
        </p>
      );
    }
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const validEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const handleChangeEmail = (event) => {
    if (validEmail(event.target.value)) {
      setSuccesEmail(true);
    } else {
      setSuccesEmail(false);
    }
    setEmail(event.target.value);
  };

  return (
    <div className="account_settings_form">
      <Form>
        <div className="profile_title">
          <h2>Account Settings</h2>
        </div>
        <div className="profile_element">
          <h5>Username</h5>
          <p className="profile_explanations">
            <small>Let us know how would you like to be adressed</small>
          </p>
          <div className="account_settings_elements">
            <FormGroup>
              <FormControl
                placeholder={username}
                value={username}
                type="text"
                onChange={handleChangeUsername}
              ></FormControl>
            </FormGroup>
          </div>
        </div>
        <div className="profile_element">
          <h5>Email</h5>
          <p className="profile_explanations">
            <small>
              Communication is the key to successful relationships. So please
              provide us a valid email so we can keep in touch
            </small>
          </p>
          <div className="account_settings_elements">
            <FormGroup>
              <FormControl
                placeholder={email}
                value={email}
                type="email"
                onChange={handleChangeEmail}
              ></FormControl>
              <div>
                {advertisationMessage(
                  succesEmail,
                  "Mmm... it doesn't look like a valid email."
                )}
              </div>
            </FormGroup>
          </div>
        </div>
        <div className="profile_element">
          <h5>Password</h5>
          <p className="profile_explanations">
            <small>
              "Your password should be treated like a toothbrush: you do not
              share it and you change it regularly !"
            </small>
          </p>
          <div className="account_settings_elements">
            <FormGroup>
              <FormControl
                placeholder="●●●●●●●●●"
                aria-label="Username"
                aria-describedby="basic-addon1"
                type="password"
              />
            </FormGroup>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AccountSettings;
