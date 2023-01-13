// Uncontrolled Form

import React, { useRef, useState } from "react";

const UseReff = () => {
  const LuckyName = useRef(null);
  const [show, setShow] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const fname = LuckyName.current.value;
    fname === "" ? alert("Plz fill the data") : setShow(true);
  };

  return (
    <>
      <form action="" style={{ textAlign: "center" }} onSubmit={submitForm}>
        <div>
          <label htmlFor="LuckyName">Enter Your LuckyName </label> <br />
          <input type="text" id="LuckyName" ref={LuckyName} />
        </div>
        <br></br>
        <button>Submit</button>
      </form>
      <h2 style={{ textAlign: "center" }}>
        {show ? `Your lucky name is ${LuckyName.current.value}` : ""}
      </h2>
    </>
  );
};

export default UseReff;
