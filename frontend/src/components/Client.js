import React, { useState } from "react";
import "../assets/btnStyle.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import {
  FormControl,
  Container,
  Col,
  Row,
  Button,
  Card,
  Form,
  Image,
  ListGroup,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import * as api from "../api";

const Client = ({ data }) => {
  console.log(Object.keys(data).length);
  const percentage = data
    ? parseInt(((Object.keys(data).length + 2) * 100) / 6)
    : 0;

  const [toInputLocation, setToInputLocation] = useState(false);
  const [toInputPreferences, setToInputPreferences] = useState(false);
  const [toInputAllergies, setToInputAllergies] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preferences, setPreferences] = useState(
    data.preferences ? data.preferences : ""
  );
  const [allergies, setAllergies] = useState(
    data.allergies ? data.allergies : ""
  );

  const [adress, setAdress] = useState(
    data.location ? (data.location.adress ? data.location.adress : "") : ""
  );

  const handleSaveDate = async () => {
    const userData = {
      location: {
        latitude,
        longitude,
      },
      allergies,
      preferences,
    };
    setLoading(true);
    try {
      let answer = await api.profile(userData);
      if (answer.success === true) {
        setLoading(false);
      } else {
        setLoading(false);
      }
      console.log(answer);
    } catch (err) {
      console.log(err);
      this.setState({
        error: err,
        loading: false,
        success: false,
      });
    }
  };

  const handleChangeAdress = (event) => {
    setAdress(event.target.value);
  };

  const handleEditLocationButton = () => {
    setToInputLocation(!toInputLocation);
  };
  const handleEditPreferencesButton = () => {
    setToInputPreferences(!toInputPreferences);
  };
  const handleEditAllergiesButton = () => {
    setToInputAllergies(!toInputAllergies);
  };
  const handleInput = (e, type) => {
    if (type === "longitude" || type === "latitude")
      data.location[type] = e.target.value;
    else if (type === "preferences") {
      data[type].push(e.target.value);
    } else if (type === "allergies") {
      data[type].push(e.target.value);
    } else data[type] = e.target.value;
  };

  const listPreferences = () => {
    let preferencesList = [];
    for (const [index, value] of data.preferences.entries())
      preferencesList.push(
        <ListGroup.Item key={index}>{value}</ListGroup.Item>
      );
    return preferencesList;
  };

  const listAllergies = () => {
    let allergiesList = [];
    for (const [index, value] of data.allergies.entries())
      allergiesList.push(<ListGroup.Item key={index}>{value}</ListGroup.Item>);
    return allergiesList;
  };

  const [latitude, setLatitude] = useState(
    data.location ? (data.location.latitude ? data.location.latitude : 0) : 0
  );
  const [longitude, setLongitude] = useState(
    data.location ? (data.location.longitude ? data.location.longitude : 0) : 0
  );
  const [succesLatitude, setSuccesLatitude] = useState(true);
  const [succesLongitude, setSuccesLongitude] = useState(true);

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

  const handleChangeLatitude = (event) => {
    if (event.target.value < -180 || event.target.value > 180) {
      setSuccesLatitude(false);
    } else {
      setSuccesLatitude(true);
    }
    setLatitude(event.target.value);
  };

  const handleChangeLongitude = (event) => {
    if (event.target.value < -90 || event.target.value > 90) {
      setSuccesLongitude(false);
    } else {
      setSuccesLongitude(true);
    }
    setLongitude(event.target.value);
  };

  return (
    <div className="profile_client">
      <Form className="client_form">
        <div className="profile_title">
          <h2>PROFILE</h2>
        </div>
        <div className="profile_element">
          <h5>Address</h5>
          <p className="profile_explanations">
            <small>
              Enter here the place you're more likely to command from, like your
              house, workplace or school.
            </small>
          </p>
          <div className="adress_profile_element">
            <FormGroup>
              <FormLabel>Longitude</FormLabel>
              <FormControl
                placeholder={longitude}
                value={longitude}
                type="number"
                onChange={handleChangeLongitude}
              ></FormControl>
              <div>
                {advertisationMessage(
                  succesLongitude,
                  "Value should be between -90 and 90"
                )}
              </div>
            </FormGroup>
            <FormGroup>
              <FormLabel>Latitude</FormLabel>
              <FormControl
                placeholder={latitude}
                value={latitude}
                type="number"
                onChange={handleChangeLatitude}
              ></FormControl>
              <div>
                {advertisationMessage(
                  succesLatitude,
                  "Value should be between -180 and 180"
                )}
              </div>
            </FormGroup>
          </div>
          <div className="align_left_profile_input">
            <FormGroup>
              <FormLabel>Preferences</FormLabel>
              <div style={listStyle}>
                <ListGroup>
                  {!toInputPreferences && listPreferences()}
                  {toInputPreferences && (
                    <FormControl
                      type="text"
                      placeholder="Preference"
                      onChange={(e) => handleInput(e, "preferences")}
                    ></FormControl>
                  )}
                </ListGroup>
                <Button
                  className="editBtn"
                  variant="primary"
                  onClick={handleEditPreferencesButton}
                >
                  {!toInputPreferences && "Add preference"}
                  {toInputPreferences && "Done"}
                </Button>
              </div>
            </FormGroup>
          </div>
          <div className="align_left_profile_input">
            <FormGroup>
              <FormLabel>Allergies</FormLabel>
              <div style={listStyle}>
                <ListGroup>
                  {!toInputAllergies && listAllergies()}
                  {toInputAllergies && (
                    <FormControl
                      type="text"
                      placeholder="add allergy..."
                      onChange={(e) => handleInput(e, "allergies")}
                    ></FormControl>
                  )}
                </ListGroup>
                <Button
                  className="editBtn"
                  variant="primary"
                  onClick={handleEditAllergiesButton}
                >
                  {!toInputAllergies && "Add allergy"}
                  {toInputAllergies && "Done"}
                </Button>
              </div>
            </FormGroup>
          </div>
          <hr></hr>
          <div class="saveBtnContainer">
            <Button
              class="saveBtn"
              as="input"
              type="submit"
              value="Save"
              onClick={handleSaveDate}
            />{" "}
          </div>
        </div>
      </Form>
      <div className="progress_circle">
        <CircularProgressbarWithChildren
          classes
          value={percentage}
          styles={{
            path: {
              stroke: `rgb(217, 5, 79, ${percentage / 100})`,
              strokeLinecap: "butt",
              transition: "stroke-dashoffset 0.5s ease 0s",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            trail: {
              stroke: "grey",
              strokeLinecap: "butt",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            text: {
              fill: "rgb(217, 5, 79)",
              fontSize: "16px",
            },
          }}
        >
          <div style={{ fontSize: 25, marginTop: -5 }}>
            <strong>{percentage}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

const listStyle = {
  display: "inline",
};
export default Client;
