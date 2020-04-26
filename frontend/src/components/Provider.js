import React, { useState } from "react";

import Menu from "./Menu";
import Schedule from "./Schedule";

import {
  FormControl,
  ListGroup,
  Container,
  Col,
  Row,
  Button,
  Card,
  Form,
  Carousel,
} from "react-bootstrap";
const Provider = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [toInputLocation, setToInputLocation] = useState(false);
  const [toInputCUI, setToInputCUI] = useState(false);
  const [toInputType, setToInputType] = useState(false);
  const [toInputDescription, setToInputDescription] = useState(false);
  const [toInputPrice, setToInputPrice] = useState(false);
  const [toInputSpecials, setToInputSpecials] = useState(false);
  const [toInputTables, setToInputTables] = useState(false);

  const handleEditSpecialsButton = () => {
    setToInputSpecials(!toInputSpecials);
  };

  const handleEditTablesButton = () => {
    setToInputTables(!toInputTables);
  };

  const handleEditDescriptionButton = () => {
    setToInputDescription(!toInputDescription);
  };

  const handleEditLocationButton = () => {
    setToInputLocation(!toInputLocation);
  };

  const handleEditCUIButton = () => {
    setToInputCUI(!toInputCUI);
  };

  const handleEditTypeButton = () => {
    setToInputType(!toInputType);
  };

  const handleEditPriceButton = () => {
    setToInputPrice(!toInputPrice);
  };

  const listSpecials = () => {
    let specialsList = [];
    for (const [index, value] of data.specials.entries())
      specialsList.push(<ListGroup.Item key={index}>{value}</ListGroup.Item>);
    return specialsList;
  };

  const handleInput = (e, type) => {
    if (type === "longitude" || type === "latitude" || type === "adress")
      data.location[type] = e.target.value;
    else if (type === "specials") {
      data[type].push(e.target.value);
    } else data[type] = e.target.value;
  };

  const listPhotos = () => {
    let photoList = [];
    for (const [index, value] of data.images.entries()) {
      var image = value;
      photoList.push(
        <Carousel.Item key={index}>
          <img
            alt={value}
            className="providerImage"
            src={require(`../assets/${image}`)}
          />
        </Carousel.Item>
      );
    }
    return photoList;
  };

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const [openSchedule, setOpenSchedule] = useState(false);

  const handleOpenSchedule = () => {
    setOpenSchedule(!openSchedule);
  };

  return (
    <div>
      <Form className="providerForm">
        <Card>
          <Card.Header className="providerCardHeader">
            <h5 className="cardTitle">Photo Gallery</h5>
          </Card.Header>
          <Card.Body>
            <Carousel onSelect={handleSelect}>{listPhotos()}</Carousel>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="providerCardHeader">
            <h5 className="cardTitle">Add Photos</h5>
          </Card.Header>
          <Card.Body>
            <Form.File
              id="provider-file-input"
              label="Your photos here"
              data-browse="Import location photos"
              multiple
            />
          </Card.Body>
        </Card>
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
              <Row className="cardRow" xs={17}>
                <Form.Group
                  className="formElementProvider"
                  controlId="locationAdress"
                >
                  <Form.Label as={Col} xs={6}>
                    <b>Adress</b>
                  </Form.Label>
                  {!toInputLocation && <p>{data.location.adress}</p>}
                  {toInputLocation && (
                    <FormControl onChange={(e) => handleInput(e, "adress")} />
                  )}
                </Form.Group>
              </Row>
            </Container>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header className="providerCardHeader">
            <h5 className="cardTitle">Detalii de identificare</h5>
            <Button
              className="cardEdit"
              variant="primary"
              onClick={handleEditCUIButton}
            >
              {!toInputCUI && "Edit"}
              {toInputCUI && "Done"}
            </Button>
          </Card.Header>
          <Card.Body>
            <Container>
              <Row className="cardRow" xs={17}>
                <Form.Group className="formElementProvider" controlId="CUI">
                  <Form.Label as={Col} xs={6}>
                    <b>CUI</b>
                  </Form.Label>

                  {!toInputCUI && <p>{data.CUI}</p>}
                  {toInputCUI && (
                    <Form.Control onChange={(e) => handleInput(e, "CUI")} />
                  )}
                </Form.Group>
              </Row>
            </Container>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header className="providerCardHeader">
            <h5 className="cardTitle">Provider Type</h5>
            <Button
              className="cardEdit"
              variant="primary"
              onClick={handleEditTypeButton}
            >
              {!toInputType && "Edit"}
              {toInputType && "Done"}
            </Button>
          </Card.Header>
          <Card.Body>
            <Container>
              <Row className="cardRow" xs={17}>
                <Form.Group className="formElementProvider" controlId="type">
                  <Form.Label as={Col} xs={6}>
                    <b>Type</b>
                  </Form.Label>
                  {!toInputType && <p>{data.type}</p>}
                  {toInputType && (
                    <Form.Control
                      as="select"
                      onChange={(e) => handleInput(e, "type")}
                    >
                      <option>Restaurant</option>
                      <option>Canteen</option>
                    </Form.Control>
                  )}
                </Form.Group>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="providerCardHeader">
            <h5 className="cardTitle">Description</h5>
            <Button
              className="cardEdit"
              variant="primary"
              onClick={handleEditDescriptionButton}
            >
              {!toInputDescription && "Edit"}
              {toInputDescription && "Done"}
            </Button>
          </Card.Header>
          <Card.Body>
            <Container>
              <Row className="cardRow" xs={17}>
                <Form.Group className="formElementProvider" controlId="type">
                  <Form.Label as={Col} xs={6}>
                    <b>Description</b>
                  </Form.Label>
                  {!toInputDescription && <p>{data.description}</p>}
                  {toInputDescription && (
                    <FormControl
                      as="textarea"
                      onChange={(e) => handleInput(e, "description")}
                    />
                  )}
                </Form.Group>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="providerCardHeader">
            <h5 className="cardTitle">Price Category</h5>
            <Button
              className="cardEdit"
              variant="primary"
              onClick={handleEditPriceButton}
            >
              {!toInputPrice && "Edit"}
              {toInputPrice && "Done"}
            </Button>
          </Card.Header>
          <Card.Body>
            <Container>
              <Row className="cardRow" xs={17}>
                <Form.Group className="formElementProvider" controlId="type">
                  <Form.Label as={Col} xs={6}>
                    <b>Category</b>
                  </Form.Label>
                  {!toInputPrice && <p>{data.priceCategory}</p>}
                  {toInputPrice && (
                    <Form.Control
                      as="select"
                      onChange={(e) => handleInput(e, "priceCategory")}
                    >
                      <option>Affordable</option>
                      <option>Medium</option>
                      <option>Expensive</option>
                    </Form.Control>
                  )}
                </Form.Group>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="providerCardHeader">
            <h5 className="cardTitle">Specials</h5>
            <Button
              className="cardEdit"
              variant="primary"
              onClick={handleEditSpecialsButton}
            >
              {!toInputSpecials && "Edit"}
              {toInputSpecials && "Done"}
            </Button>
          </Card.Header>
          <Card.Body>
            <Container>
              <Row className="cardRow" xs={17}>
                <Form.Group className="formElementProvider" controlId="type">
                  <Form.Label as={Col} xs={6}>
                    <b>Specials</b>
                  </Form.Label>
                  <ListGroup>
                    {!toInputSpecials && listSpecials()}
                    {toInputSpecials && (
                      <FormControl
                        type="text"
                        placeholder="Special Name"
                        onChange={(e) => handleInput(e, "specials")}
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
            <h5 className="cardTitle">Tables</h5>
            <Button
              className="cardEdit"
              variant="primary"
              onClick={handleEditTablesButton}
            >
              {!toInputTables && "Edit"}
              {toInputTables && "Done"}
            </Button>
          </Card.Header>
          <Card.Body>
            <Container>
              <Row className="cardRow" xs={17}>
                <Form.Group className="formElementProvider" controlId="type">
                  <Form.Label as={Col} xs={6}>
                    <b>Tables</b>
                  </Form.Label>
                  {!toInputTables && <p>{data.tables}</p>}
                  {toInputTables && (
                    <FormControl
                      type="number"
                      onChange={(e) => handleInput(e, "tables")}
                    ></FormControl>
                  )}
                </Form.Group>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="providerCardHeader">
            <h5 className="cardTitle">Menu</h5>
          </Card.Header>
          <Card.Body>
            <Container>
              <Row className="cardRow" xs={17}>
                <Form.Group className="formElementProvider" controlId="type">
                  <Form.Label as={Col} xs={6}>
                    <b>Menu</b>
                  </Form.Label>
                  <Button
                    className="cardEdit"
                    variant="primary"
                    onClick={handleOpenMenu}
                  >
                    Add Course
                  </Button>
                </Form.Group>
                <Button
                  className="cardEdit"
                  variant="primary"
                  onClick={handleOpenMenu}
                >
                  Open Menu
                </Button>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="providerCardHeader">
            <h5 className="cardTitle">Schedule</h5>
          </Card.Header>
          <Card.Body>
            <Container>
              <Row className="cardRow" xs={17}>
                <Form.Group className="formElementProvider" controlId="type">
                  <Form.Label as={Col} xs={6}>
                    <b>Schedule</b>
                  </Form.Label>
                  <Button
                    className="cardEdit"
                    variant="primary"
                    onClick={handleOpenSchedule}
                  >
                    Edit Schedule
                  </Button>
                </Form.Group>
                <Button className="cardEdit" variant="primary">
                  Open Schedule
                </Button>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Button variant="primary">Submit</Button>
      </Form>
      <Menu openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
      <Schedule
        openSchedule={openSchedule}
        handleOpenSchedule={handleOpenSchedule}
      />
    </div>
  );
};

export default Provider;
