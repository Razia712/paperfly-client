import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";

const Cart = () => {
  return (
    <div className="my-4">
      <Container>
        <Row>
          <Col
            className="position-fixed"
            style={{ top: "100px", right: "30px" }}
            md={4}
          >
            <div className="text-center my-2">
              {/* <h3>Total {selectedCourse.length} Service Selected</h3> */}
              {/* <h4>Cost: {totalCost}$</h4> */}
              <button
                onClick={() => {
                  toast.success("Thanks for purchasing!!");
                }}
                className="btn btn-outline-dark"
              >
                Proceed to purchase
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <h1 className="text-center my-5 py-5">No service Selected</h1>
    </div>
  );
};

export default Cart;
