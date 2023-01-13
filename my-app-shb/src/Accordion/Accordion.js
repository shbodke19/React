import React, { useState } from "react";
import API from "./API";
import "./Accordion.css";
import Questions from "./API";
import MyAccordion from "./MyAccordion";

const Accordion = () => {
  const [data, setdata] = useState(Questions);
  return (
    <>
      <section className="main-div">
        <h1>React InterView Questions </h1>
      </section>
      {data.map((curE, ind) => {
        const { Id } = curE;
        return <MyAccordion key={Id} {...curE} />;
      })}
    </>
  );
};

export default Accordion;
