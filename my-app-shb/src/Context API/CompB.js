import React from "react";
import CompC from "./CompC";
import { LastName } from "./ContextAPI";

const CompB = () => {
  return (
    <>
      {/* <h1>Component B</h1> */}
      <CompC />

      <LastName.Consumer>
        {(lname) => {
          return <h1>My LastName is {lname}</h1>;
        }}
      </LastName.Consumer>
    </>
  );
};

export default CompB;
