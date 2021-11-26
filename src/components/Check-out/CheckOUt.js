import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const CheckOUt = () => {
  const [inputData, setInputData] = useState({
    email: "",
    fullname: "",
    address: "",
    address2: "",
    city: "",
    checkMeOut: false,
  });

  const { AllContexts } = useAuth();
  const { user } = AllContexts;

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData({ ...inputData, [name]: value });
  };

  useEffect(() => {
    setInputData({
      email: user.email,
      fullname: user.displayName,
      address: "",
      address2: "",
      city: "",
      checkMeOut: false,
    });
  }, []);

  return (
    <div className="mt-5">
      <h2 className="text-center">Please fill this form for booking process</h2>
      <Container>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={inputData.email}
                name="email"
                onChange={handleInput}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                value={inputData.fullname}
                name="fullname"
                onChange={handleInput}
                type="text"
                placeholder="Enter Full Name"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              value={inputData.address}
              name="address"
              onChange={handleInput}
              placeholder="1234 Main St"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              value={inputData.address2}
              name="address2"
              onChange={handleInput}
              placeholder="Apartment, studio, or floor"
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                value={inputData.city}
                name="city"
                onChange={handleInput}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <button
            onClick={() => {
              toast.success("Thanks for purchasing!!");
            }}
            className="mb-2 btn btn-info text-white"
          >
            Submit
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default CheckOUt;
