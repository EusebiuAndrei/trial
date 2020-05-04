import React, { useState } from "react";
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
} from "react-bootstrap";
import ProfileImg from "./../assets/profile.jpg";

const Client = ({ data }) => {
  const [toInputLocation, setToInputLocation] = useState(false);
  const [toInputPreferences, setToInputPreferences] = useState(false);
  const [toInputAllergies, setToInputAllergies] = useState(false);

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

  return (
    <div>
      <div style={{ textAlign: "left", padding: "10px" }}>
        <h2
          style={{
            padding: "20px",
            fontFamily: "Impact, Charcoal, sans-serif",
            fontSize: "31px",
            letterSpacing: "1.6px",
            wordSpacing: "2px",
            fontWeight: "normal",
            fontVariant: "normal",
            color: "grey",
          }}
        >
          PROFILE
        </h2>
      </div>
      <Form className="providerForm">
        <Card>
          <Card.Header className="providerCardHeader">
            <h5 className="cardTitle">Address</h5>
            <Button
              className="cardEdit"
              variant="primary"
              onClick={handleEditLocationButton}
            >
              {!toInputLocation && "Edit"}
              {toInputLocation && "Done"}
            </Button>
          </Card.Header>
          <Card.Body>
            <Container>
              <Row className="cardRow" xs={17}>
                <Form.Group
                  className="formElementProvider"
                  controlId="locationLatitude"
                >
                  <Form.Label as={Col} xs={6}>
                    <b>Latitude</b>
                  </Form.Label>
                  {!toInputLocation && <p>{data.location.latitude}</p>}
                  {toInputLocation && (
                    <FormControl
                      onChange={(e) => handleInput(e, "latitude")}
                      type="number"
                    ></FormControl>
                  )}
                </Form.Group>
              </Row>
              <Row className="cardRow" xs={17}>
                <Form.Group
                  className="formElementProvider"
                  controlId="locationLongitude"
                >
                  <Form.Label as={Col} xs={6}>
                    <b>Longitude</b>
                  </Form.Label>
                  {!toInputLocation && <p>{data.location.longitude}</p>}
                  {toInputLocation && (
                    <FormControl
                      onChange={(e) => handleInput(e, "longitude")}
                      type="number"
                    ></FormControl>
                  )}
                </Form.Group>
              </Row>
            </Container>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header className="providerCardHeader">
            <h5 className="cardTitle">Preferinte</h5>
            <Button
              className="cardEdit"
              variant="primary"
              onClick={handleEditPreferencesButton}
            >
              {!toInputPreferences && "Edit"}
              {toInputPreferences && "Done"}
            </Button>
          </Card.Header>
          <Card.Body>
            <Container>
              <Row className="cardRow" xs={17}>
                <Form.Group className="formElementProvider" controlId="type">
                  <Form.Label as={Col} xs={6}>
                    <b>Preferences</b>
                  </Form.Label>
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
                </Form.Group>
              </Row>
            </Container>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header className="providerCardHeader">
            <h5 className="cardTitle">Alergii</h5>
            <Button
              className="cardEdit"
              variant="primary"
              onClick={handleEditAllergiesButton}
            >
              {!toInputAllergies && "Edit"}
              {toInputAllergies && "Done"}
            </Button>
          </Card.Header>
          <Card.Body>
            <Container>
              <Row className="cardRow" xs={17}>
                <Form.Group className="formElementProvider" controlId="type">
                  <Form.Label as={Col} xs={6}>
                    <b>Alergii</b>
                  </Form.Label>
                  <ListGroup>
                    {!toInputAllergies && listAllergies()}
                    {toInputAllergies && (
                      <FormControl
                        type="text"
                        placeholder="Allergy Name"
                        onChange={(e) => handleInput(e, "allergies")}
                      ></FormControl>
                    )}
                  </ListGroup>
                </Form.Group>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Form>
    </div>
  );
};

export default Client;
