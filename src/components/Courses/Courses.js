import React from "react";
import { Container, Row } from "react-bootstrap";
import Course from "../course/Course.js";

import Bounce from "react-reveal/Bounce";
import useCourses from "../../hooks/useCourses.js";

const Courses = () => {
  const [courses] = useCourses();
  return (
    <div>
      <Container className="py-5">
        <Bounce left cascade>
          <h2 className="text-center text-white mb-0"> Our All Services</h2>
        </Bounce>
        <Bounce right cascade>
          <p className="my-4 mt-2 text-center text-muted fs-5">
            "TO BE A RENOWNED ORGANIZATION AT THE LEADING EDGE OF TRAVELLING
            AGENCIES OUR NATION'S ASPIRATIONS."
          </p>
        </Bounce>
        <Row>
          {courses?.map((course) => (
            <Course course={course} key={course.key}></Course>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
