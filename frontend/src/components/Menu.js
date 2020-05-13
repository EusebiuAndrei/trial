import React, { useState } from "react";
import {
  FormLabel,
  FormControl,
  FormGroup,
  Card,
  Button,
  Accordion,
  Form,
} from "react-bootstrap";
const Menu = ({ data }) => {
  const [courses, setCourses] = useState(data.courses ? data.courses : []);
  const [currentCourse, setCurrentCourse] = useState(0);
  const [name, setName] = useState(courses[currentCourse].name);

  const handleChangeName = (event) => {
    const newCourses = courses;
    newCourses[currentCourse] = event.target.value;
    setCourses(newCourses);
    console.log(courses);
    setName(courses[currentCourse]);
  };

  const formMenu = (value, index) => {
    return (
      <div className="profile_element">
        <h5>NAME</h5>
        <div className="align_left_profile_input">
          <FormGroup>
            <FormControl
              placeholder={value.name}
              value={value.name}
              type="text"
              onChange={handleChangeName}
            ></FormControl>
          </FormGroup>
        </div>
      </div>
    );
  };

  const handlerClickAccordion = (event) => {
    setCurrentCourse(event.target.id);
    setName(courses[event.target.id].name);
  };

  const listMenu = () => {
    const menu = [];
    for (const [index, value] of courses.entries()) {
      console.log(value);
      menu.push(
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              eventKey={index}
              id={index}
              onClick={handlerClickAccordion}
            >
              {value.name}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={index}>
            <Card.Body>{formMenu(value, index)}</Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    }
    return menu;
  };

  return (
    <div className="menu_provider">
      <Form>
        <Accordion>{listMenu()}</Accordion>
      </Form>
    </div>
  );
};

export default Menu;
