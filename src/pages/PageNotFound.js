import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="text-center my-5">
        <h1 style={{ fontSize: "100px", color: "red" }}>404</h1>
        <h4 className="text-danger">OPPS! PAGE NOT FOUND</h4>
        <p className="text-muted">
          Sorry, the page you're looking for doesn't exist. you can return to
          home and look for another.
        </p>
        <NavLink to="/home">
          <button className="btn btn-warning">Return to Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
