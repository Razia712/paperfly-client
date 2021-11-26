import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/img/logo.jpg";
import useAuth from "../../hooks/useAuth.js";
import "./header.css";

const Header = () => {
  const { AllContexts } = useAuth();
  const { user, logOut } = AllContexts;
  const { displayName, email } = user;
  return (
    <div className="">
      <Navbar expand="lg" className="bg-info text-white" sticky="top">
        <Container>
          <Navbar.Brand>
            <NavLink to="/home" className="nav-links">
              <img width="25px" src={logo} alt="Logo" />
              <span className="text-light fw-bold"> PaperFly</span>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <NavLink to="/home" className="text-white nav-link">
                Home
              </NavLink>

              <NavLink to="/about" className="text-white nav-link">
                About
              </NavLink>

              <NavLink to="/contact" className="text-white nav-link">
                Contact
              </NavLink>
              <NavLink to="/courses" className="text-white nav-link">
                Services
              </NavLink>

              {!displayName ? (
                <>
                  <NavLink to="/signup" className="text-white nav-link">
                    Sign Up
                  </NavLink>

                  <NavLink className="text-white nav-link" to="/login">
                    Log in
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink className="text-white" to="/manage-order">
                    Manage Order
                  </NavLink>

                  <NavDropdown>
                    <div className="text-center">
                      <h6>{displayName}</h6>
                      <p className="m-0 mb-2">{email}</p>
                      <button onClick={logOut} className="btn btn-warning">
                        Sign Out
                      </button>
                    </div>
                  </NavDropdown>
                </>
              )}
              <NavLink to="/manage-order" className="text-white">
                <FontAwesomeIcon
                  style={{ fontSize: "20px" }}
                  icon={faShoppingCart}
                />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
