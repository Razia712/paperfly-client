import React from "react";
import "./footer.css";

import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-secondary text-white">
      <div className="py-4 gradient">
        <Container>
          <Row>
            <Col md={2}>
              <ul className="list-unstyled footer-link">
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
                <li>
                  <NavLink to="/courses">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/policy">Policy</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <h3>contact us</h3>
              <ul className="list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span className="ms-1 fs-5">Dhaka, Bangladesh</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="ms-1 fs-5">
                    Official: 246paperflyl@gmai;.com
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="ms-1 fs-5">
                    Helpline: +993579 +9359539(24 Hours Open)
                  </span>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <ul className="list-unstyled footer-link">
                <h5>some of our strategies</h5>
                <li> we always care our tourist</li>
                <li>we try to provide safe journey</li>
                <li>Client is our first priorities</li>
                <li>we believe quality over quentity</li>
                <li>we have good reputation in our field</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <hr className="m-0 p-0" />
      <p className="text-center m-0 py-3 copyright danger bg-secondary text-white">
        Copyright © All Reserved by PaperFly Traveller
      </p>
    </div>
  );
};

export default Footer;
