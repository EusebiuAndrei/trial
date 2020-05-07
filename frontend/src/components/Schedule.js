import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
const Schedule = (props) => {
  return (
    <div>
      <Modal show={props.openSchedule} onHide={props.handleOpenSchedule}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Schedule</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Monday</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Tuesday</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Monday</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Monday</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Monday</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Monday</Form.Label>
            </Form.Group>
            <Button variant="primary" type="submit">
              {" "}
              Submit
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" type="submit">
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Schedule;
