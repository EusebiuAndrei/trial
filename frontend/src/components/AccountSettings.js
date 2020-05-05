import React, { useState } from "react";
import { FormGroup, FormLabel, FormControl, Form } from "react-bootstrap";

const AccountSettings = (data) => {
  const [email, setEmail] = useState(data.email ? data.email : 0);
  const [username, setUsername] = useState(data.name ? data.name : 0);

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <Form className="client_form">
        <div className="profile_title">
          <h2>Account Settings</h2>
        </div>
        <div className="profile_element">
          <h5>Username</h5>
          <p className="profile_explanations">
            <small>
              It's very important for us to know what you're name is so let us
              know how would you like to be adress
            </small>
          </p>
          <div className="adress_profile_element">
            <FormGroup>
              <FormLabel>Username</FormLabel>
              <FormControl
                placeholder={username}
                value={username}
                type="text"
                onChange={handleChangeUsername}
              ></FormControl>
            </FormGroup>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AccountSettings;
