import React, { useState } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  FormControl,
  Form,
  Col,
} from "react-bootstrap";

const User = ({ data }) => {
  const handleInput = (e, type) => {
    if (type === "longitude" || type === "latitude" || type === "adress")
      data.location[type] = e.target.value;
    else if (type === "specials") {
      data[type].push(e.target.value);
    } else data[type] = e.target.value;
  };

  const [toInputDescription, setToInputDescription] = useState(false);
  const handleEditDescriptionButton = () => {
    setToInputDescription(!toInputDescription);
  };
  return (
    <div>
      <Form>
        <Container>
          <Card>
            <Card.Header className="providerCardHeader">
              <h5 className="cardTitle">Detaliile userului</h5>
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
              <Row className="cardRow" xs={17}>
                <Form.Group className="formElementProvider" controlId="type">
                  <Form.Label as={Col} xs={6}>
                    <b>Email</b>
                  </Form.Label>
                  {!toInputDescription && <p>{data.email}</p>}
                  {toInputDescription && (
                    <FormControl
                      as="textarea"
                      onChange={(e) => handleInput(e, "email")}
                    />
                  )}
                </Form.Group>
              </Row>

              <Row className="cardRow" xs={17}>
                <Form.Group className="formElementProvider" controlId="type">
                  <Form.Label as={Col} xs={6}>
                    <b>Username</b>
                  </Form.Label>
                  {!toInputDescription && <p>{data.name}</p>}
                  {toInputDescription && (
                    <FormControl
                      as="textarea"
                      onChange={(e) => handleInput(e, "name")}
                    />
                  )}
                </Form.Group>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </Form>
    </div>
  );
};

export default User;
