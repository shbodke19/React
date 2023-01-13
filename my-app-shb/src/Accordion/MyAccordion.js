import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const MyAccordion = ({ Question, Answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="main-heading">
        <span onClick={() => setShow(!show)} className="point">
          {show ? <RemoveIcon /> : <AddIcon />}
        </span>
        <h3>{Question}</h3>
      </div>
      {show && <p className="answers">{Answer}</p>}
    </>
  );
};

export default MyAccordion;
