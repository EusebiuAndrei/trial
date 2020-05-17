import React, { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import Course from "./Course";
import * as api from "../api";
import { useMediaQuery } from "react-responsive";

const Menu = ({ data }) => {
  const [courses, setCourses] = useState(data.courses ? data.courses : []);
  const [loading, setLoading] = useState(false);

  const handleAddCourse = async () => {
    try {
      setLoading(true);
      let answer = await api.addCourse(data._id);
      setCourses(answer.courses);
      if (answer.success === true) {
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 767 });
    return isDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
    console.log(isMobile);
  };
  return (
    <div className="menu_form">
      <Accordion style={{ width: "100%" }}>
        {courses.map((course, index) => {
          let courseData = {};
          courseData.course = course;
          courseData.index = index;
          if (course !== null) return <Course data={courseData}></Course>;
        })}
      </Accordion>
      <div className="submit_button">
        <Button className="actual_button" onClick={handleAddCourse}>
          New Course
        </Button>
      </div>
    </div>
  );
};

export default Menu;
