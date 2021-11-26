import React from "react";
import useAuth from "./../hooks/useAuth.js";
import { useParams, useHistory } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import toast from "react-hot-toast";

const Details = () => {
  const { key } = useParams();
  const { courses, AllContexts } = useAuth();
  const history = useHistory();
  const { user } = AllContexts;
  const matchingCourse = courses.find((course) => course.key === Number(key));

  const handleAddToCard = ({ _id, ...rest }) => {
    const bookingData = {
      ...rest,
      userEmail: user.email,
      bookingId: _id,
    };
    axios
      .post("https://dark-alien-16530.herokuapp.com/booking", bookingData)
      .then((result) => {
        if (result.data?.acknowledged) {
          toast.success("Successfully Added Booking");
          history.push("/manage-order");
        } else {
          toast.error("All Ready Booked");
          history.push("/manage-order");
        }
      });
  };
  return (
    <div className="my-4">
      {matchingCourse?.title ? (
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <img className="img-fluid" src={matchingCourse.img} alt="" />
            </Col>
            <Col md={6} className="d-flex justify-content-center flex-column">
              <h2>{matchingCourse.title}</h2>
              <h5>{matchingCourse.description}</h5>
              <Row>
                <Col>
                  <div className="my-2">
                    <Rating
                      initialRating={matchingCourse.rating}
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
                    <span> {matchingCourse.rating}</span>
                    <p className="mb-3">
                      Total Review: {matchingCourse.ratingCount}
                    </p>
                    <button
                      onClick={() => {
                        handleAddToCard(matchingCourse);
                      }}
                      className="btn btn-warning  w-100"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="my-5 py-1">
          <h1 className="my-5 p-5 text-center">NO Service Found</h1>
        </div>
      )}
    </div>
  );
};

export default Details;
