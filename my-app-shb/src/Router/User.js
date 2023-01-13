import React from "react";
import { useLocation, useParams } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  console.log(location);

  return (
    <>
      <h1>
        This is User {fname} {lname} Page
      </h1>
      <p>My current Location is {location.pathname}</p>
      {location.pathname === `/user/shree/bodke` ? (
        <button
          onClick={() => {
            alert("You are awesome");
          }}
        >
          Click Me
        </button>
      ) : (
        location.pathname
      )}
    </>
  );
};

export default User;
