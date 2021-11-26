import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";

import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

import axios from "axios";
import swal from "sweetalert";

const ManageOrder = () => {
  const history = useHistory();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("https://dark-alien-16530.herokuapp.com/booking")
      .then((result) => setBookings(result.data));
  }, []);
  console.log(bookings);

  const handleRemoveButton = (id) => {
    const uri = `https://dark-alien-16530.herokuapp.com/booking/${id}`;
    axios.delete(uri).then((result) => {
      if (result.data.acknowledged) {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            const fitlerBookings = bookings.filter((item) => item._id !== id);
            setBookings(fitlerBookings);
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your imaginary file is safe!");
          }
        });
      } else {
      }
    });
  };

  return (
    <div className="my-4">
      <Container>
        {bookings.length ? (
          <Row>
            <Col md={8}>
              {bookings.map((course) => {
                const {
                  img,
                  key,
                  title,
                  price,
                  description,
                  rating,
                  ratingCount,
                  _id,
                } = course;

                return (
                  <Row className="my-2" key={key}>
                    <Col sm={5}>
                      <img className="img-fluid" src={img} alt="" />
                    </Col>
                    <Col sm={7}>
                      <h5>{title}</h5>
                      <p className="mb-0">{description}</p>
                      <Row>
                        <h6 className="my-1">Price:${price}</h6>
                      </Row>
                      <Row>
                        <Col sm={4}>
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
                        </Col>
                        <Col sm={8}>
                          <div className="d-flex">
                            <NavLink
                              to={`/courses/${key}`}
                              className="btn btn-warning w-100 me-1"
                            >
                              View Details
                            </NavLink>

                            <button
                              onClick={() => handleRemoveButton(_id)}
                              className="btn btn-warning  w-100"
                            >
                              Remove
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                );
              })}
            </Col>
            <Col className="text-center mt-5" md={4}>
              <h4>Total {bookings.length} service selected</h4>
              <button
                onClick={() => {
                  history.push("/check_out");
                }}
                className="btn btn-warning mt-3"
              >
                Check Out
              </button>
              <h5 className="text-muted">
                please click check out button for confirm order
              </h5>
            </Col>
          </Row>
        ) : (
          <div className="text-center my-5 py-5">
            <h1> Selecte your package first!</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ManageOrder;
