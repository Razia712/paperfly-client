import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import Zoom from "react-reveal/Zoom";
import { NavLink } from "react-router-dom";
import "./Course.css";

const Course = ({ course }) => {
  const { key, img, title, price, description, rating, ratingCount } = course;

  return (
    <Col sm={12} md={6} lg={4}>
      <Zoom>
        <div className="m-2 card-body">
          <Card className="mx-auto card-body" style={{ width: "21rem" }}>
            <Card.Img variant="top" className="img-fluid" src={img} />
            <Card.Body className="my-1 py-1">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>Price:${price}</Card.Text>
            </Card.Body>

            <Card.Body className="my-1 py-1">
              <Row>
                <Col>
                  <Rating
                    initialRating={rating}
                    readonly
                    emptySymbol={
                      <FontAwesomeIcon
                        className="text-warning"
                        icon={emptyStar}
                      />
                    }
                    fullSymbol={
                      <FontAwesomeIcon
                        className="text-warning"
                        icon={fullStar}
                      />
                    }
                  />
                  <span>{rating}</span>
                </Col>
                <Col>Total review {ratingCount}</Col>
              </Row>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center border-0">
              <NavLink to={`/courses/${key}`}>
                <Button className="btn btn-warning">Book Now</Button>
              </NavLink>
            </Card.Footer>
          </Card>
        </div>
      </Zoom>
    </Col>
  );
};

export default Course;
