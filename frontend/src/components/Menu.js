import React, { useState } from "react";
import { Accordion, Form } from "react-bootstrap";
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
      </Form>
    </div>
  );
};

export default Menu;
