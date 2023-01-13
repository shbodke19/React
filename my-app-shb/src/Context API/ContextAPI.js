import React, { createContext } from "react";
import CompA from "./CompA";
import UseContext from "./UseContext";

const FirstName = createContext();
const LastName = createContext();

const ContextAPI = () => {
  return (
    <>
      <FirstName.Provider value={"Shrinivas"}>
        <LastName.Provider value={"Bodke"}>
          {/* <CompA /> */}
          <UseContext />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default ContextAPI;
export { FirstName, LastName };
