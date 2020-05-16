import React, { useState } from "react";
import { Accordion, Form, Button } from "react-bootstrap";
import Course from "./Course";

const Menu = ({ data }) => {
  const [courses, setCourses] = useState(data.courses ? data.courses : []);
  let courseData = {};
  return (
    <div className="menu_provider">
      <Form>
        <Accordion>
          {courses.map((course, index) => {
            let courseData = {};
            courseData.course = course;
            courseData.index = index;
            return <Course data={courseData}></Course>;
          })}
        </Accordion>
        <div className="submit_button">
          <Button className="actual_button">Add</Button>
        </div>
      </Form>
    </div>
  );
};

export default Menu;
