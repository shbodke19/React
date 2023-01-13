import React, { useContext } from "react";
import { FirstName, LastName } from "./ContextAPI";

const UseContext = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <>
      <h1>
        My Name is {fname} {lname}
      </h1>
    </>
  );
};

export default UseContext;
