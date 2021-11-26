import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import Course from "../components/course/Course.js";

const Home = () => {
  const { courses } = useAuth();
  return (
    <div>
      <div
        className="bg-banner"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://cdn.pixabay.com/photo/2020/02/12/12/27/schesaplana-4842588_960_720.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text-white">PaperFly Traveller</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text-white fs-5">
                  PaperFly is best travell guideline in the city.
                </p>
              </Bounce>

              <Bounce>
                <NavLink
                  to="/courses"
                  className="rounded-pillbtn btn btn-outline-dark "
                >
                  View Services
                </NavLink>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>

      <Container className="mt-5">
        <h1 className="text-center">We Provide Best</h1>
        <p className="text-muted text-center">
          we try our best to provide best services to our client.
        </p>
        <div>
          <Row className="justify-content-center">
            <Col className="xs=6 md=4">
              <Card className=" mx-auto text-center" style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src="https://image.freepik.com/free-vector/illustration-compass_53876-18111.jpg"
                />
                <Card.Body>
                  <Card.Title>Select Destination</Card.Title>
                  <Card.Text>
                    At first choose the place you wanted to go
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="xs=6 md=4">
              <Card className=" mx-auto text-center" style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src="https://image.freepik.com/free-vector/illustration-characters-with-traveling-online-booking-concept_53876-40815.jpg"
                />
                <Card.Body>
                  <Card.Title>Book a Trip</Card.Title>
                  <Card.Text>book your tip form our exclusive offers</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="xs=6 md=4">
              <Card className=" mx-auto text-center" style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src="https://image.freepik.com/free-vector/space-shuttle-taking-off-with-clouds-mountain-tree-space-cartoon-icon-illustration_138676-2900.jpg"
                />
                <Card.Body>
                  <Card.Title>Take your flight</Card.Title>
                  <Card.Text>
                    Take your flight on selected date and joy
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      <div
        id="feature"
        className="py-5"
        // style={{ background: `url(${bgImage})` }}
      >
        <div className="text-center text-dark">
          <Slide left>
            <h1>Our Feature Services</h1>
          </Slide>

          <Slide right>
            <p className="mb-0 text-dark">
              PaperFly has all the characteristics of a world-class best of best
              services and tour guide line.
            </p>
          </Slide>
        </div>

        <Container>
          <div className="my-3 d-flex flex-wrap justify-content-between">
            <Row>
              {courses.slice(0, 6)?.map((course) => (
                <Course key={course.key} course={course} />
              ))}
            </Row>
          </div>
        </Container>
      </div>
      <Container>
        <h1 className="text-center"> Top Destination</h1>
        <h5 className="text-center">Here is some of our top best places</h5>
        <p className="text-center">We’re a egood with the strategy.</p>
        <Row className="g-5 mb-5">
          <Col cla xs={6} md={4}>
            <Image
              className="w-100"
              src="https://mixmap.travelerwp.com/wp-content/uploads/2015/02/cheapest-car-insurance-in-new-jersey-nj-story-270x200.jpg"
              rounded
            />
            <h4 className="text-muted text-center">los angels</h4>
          </Col>
          <Col xs={6} md={4}>
            <Image
              className="w-100"
              src="https://mixmap.travelerwp.com/wp-content/uploads/2015/02/san_francisco-1024x1024-270x200.jpg"
              rounded
            />
            <h4 className="text-muted text-center">California</h4>
          </Col>
          <Col xs={6} md={4}>
            <Image
              className="w-100"
              src="https://mixmap.travelerwp.com/wp-content/uploads/2015/02/virgi_3-1024x1024-270x200.jpg"
              rounded
            />
            <h4 className="text-muted text-center">Bali</h4>
          </Col>
          <Col xs={6} md={4}>
            <Image
              className="w-100"
              src="https://mixmap.travelerwp.com/wp-content/uploads/2018/12/nevaga_2-1024x1024-270x200.jpg"
              rounded
            />
            <h4 className="text-muted text-center">Las vegas</h4>
          </Col>
          <Col xs={6} md={4}>
            <Image
              className="w-100"
              src="https://mixmap.travelerwp.com/wp-content/uploads/2018/12/los_angeles_3-1024x1024-270x200.jpg"
              rounded
            />
            <h4 className="text-muted text-center">japan</h4>
          </Col>
          <Col xs={6} md={4}>
            <Image
              className="w-100 "
              src="https://mixmap.travelerwp.com/wp-content/uploads/2014/11/cali_5-1024x1024-270x200.jpg"
              rounded
            />
            <h4 className="text-muted text-center">Maldip</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
