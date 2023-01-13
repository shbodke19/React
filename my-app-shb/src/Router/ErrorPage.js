import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="setStyle">
        <h1>404 Error Page</h1>
        <p>Sorry this page is not valid</p>
        <NavLink to="/">Go Back</NavLink>
      </div>
    </>
  );
};

export default ErrorPage;
